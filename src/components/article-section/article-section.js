document.getElementById("copyLink").addEventListener("click", function () {
  var linkToCopy = this.getAttribute("data-link");
  var textarea = document.createElement("textarea");
  textarea.value = linkToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(textarea);
});
