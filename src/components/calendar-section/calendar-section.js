$(function () {
  // Устанавливаем чешскую локализацию
  $.datepicker.regional["cs"] = {
    closeText: "Zavřít",
    prevText: "&#x3c;Dříve",
    nextText: "Později&#x3e;",
    currentText: "Nyní",
    monthNames: [
      "leden",
      "únor",
      "březen",
      "duben",
      "květen",
      "červen",
      "červenec",
      "srpen",
      "září",
      "říjen",
      "listopad",
      "prosinec",
    ],
    monthNamesShort: [
      "led",
      "úno",
      "bře",
      "dub",
      "kvě",
      "čer",
      "čvc",
      "srp",
      "zář",
      "říj",
      "lis",
      "pro",
    ],
    dayNames: [
      "neděle",
      "pondělí",
      "úterý",
      "středa",
      "čtvrtek",
      "pátek",
      "sobota",
    ],
    dayNamesShort: ["ne", "po", "út", "st", "čt", "pá", "so"],
    dayNamesMin: ["ne", "po", "út", "st", "čt", "pá", "so"],
    weekHeader: "Týd",
    dateFormat: "dd/mm/yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
  };

  $.datepicker.setDefaults($.datepicker.regional["cs"]); // Применяем локализацию

  // Инициализация календаря
  $(".date-picker__calendar").datepicker({
    dateFormat: "dd/mm/yy",
    firstDay: 1,
  });

  // Закрытие календаря при клике вне
  $(document).on("click", function (e) {
    // Игнорируем клики по календарю и стрелкам переключения
    if (
      !$(e.target).closest(".date-picker").length ||
      $(e.target).closest(".ui-datepicker-prev, .ui-datepicker-next").length
    ) {
      return;
    }

    // Закрываем календарь, если клик вне date-picker
    if (!$(e.target).closest(".date-picker").length) {
      $(".date-picker").removeClass("open");
    }
  });

  // Открытие календаря по клику
  $(document).on("click", ".date-picker .input", function (e) {
    var $me = $(this),
      $parent = $me.parents(".date-picker");
    $parent.toggleClass("open");
  });

  // Обработка выбора даты
  $(".date-picker__calendar").on("change", function () {
    var $me = $(this),
      $selected = $me.val(),
      $parent = $me.parents(".date-picker");
    $parent.find(".result").children("span").html($selected);
    $parent.removeClass("open");
  });

  // Предотвращаем закрытие при переключении месяцев
  $(document).on(
    "click",
    ".ui-datepicker-prev, .ui-datepicker-next",
    function (e) {
      e.stopPropagation();
    }
  );
});

/// pagination

(function () {
  const blogGrid = document.querySelector("#calendar-list");
  const loadMoreBtn = document.querySelector(".calendar-load-more");

  if (!blogGrid || !loadMoreBtn || typeof newsSource === "undefined") return;

  const checkNewsCount = () => {
    const items = blogGrid.querySelectorAll(".calendarItem");
  };

  checkNewsCount();

  loadMoreBtn.addEventListener("click", async () => {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    loadMoreBtn.prepend(loader);

    const currentPage = parseInt(loadMoreBtn.dataset.page ?? "2", 10);

    const url = newsSource.includes("?")
      ? `${newsSource}&pageNumber=${currentPage}`
      : `${newsSource}?pageNumber=${currentPage}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
        credentials: "same-origin",
      });

      loader.remove();

      if (!response.ok) return;

      const data = await response.json();

      if (data.html) {
        blogGrid.innerHTML += data.html;
      }

      checkNewsCount();

      if (data.loadMore === false) {
        loadMoreBtn.style.display = "none";
      } else {
        loadMoreBtn.dataset.page = currentPage + 1;
      }
    } catch (error) {
      console.error("Chyba při načítání dat:", error);
      loader.remove();
    }
  });
})();
