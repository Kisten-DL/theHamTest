$(function(){
  //узнать у активной вкладки значение атрибута data-select
  var current = $('#mytabs li.active a').data('select');
  //перебрать все div (новости)
  $('.tab-content div[data-select]').each(function(){
    //если div содержит в атрибуте data-select номер этой вкладки 
    if (jQuery.inArray(current,$(this).data('select'))!=-1) {
      //то её показать
      $(this).show();
    }
    else {
      //иначе её скрыть
      $(this).hide();
    }
  });
  //аналогичные действия при отображение вкладки
  $('#mytabs a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    var currentTab = $(e.target).data('select');
    $('.tab-content div[data-select]').each(function(){
      if (jQuery.inArray(currentTab,$(this).data('select'))!=-1) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    });
  });
});

$(".navbar-nav a").on("click", function(){
   $(".navbar-nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});