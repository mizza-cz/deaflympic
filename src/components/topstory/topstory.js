$(".topstory__inner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<button class="topstory__btn topstory__btnprev"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg></button> ',
  nextArrow:
    ' <button class="topstory__btn  topstory__btnnext"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.1665 6.99996H12.8332M12.8332 6.99996L6.99984 1.16663M12.8332 6.99996L6.99984 12.8333" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  responsive: [
    {
      breakpoint: 1238,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
