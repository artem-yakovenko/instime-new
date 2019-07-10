$( document ).ready(function() {
  // mob menu
  $('.header_menu_btn, .header-menu-open .header-logo, .nav-open li a, .header-menu-open-container button').on('click', function() {
    $('.header-menu-open').toggleClass('active');
  })

  // lang
  var nav = $('.lang');
  var selection = $('.select');
  var select = selection.find('li');

  function changeLang() {
    if (nav.hasClass('active')) {
      nav.removeClass('active');
      selection.stop().slideUp(200);
    } else {
      nav.addClass('active');
      selection.stop().slideDown(200);
    }
    event.preventDefault();
  }

  nav.on('click', function() {
    changeLang();
  });

  select.on('click', function() {
    select.removeClass('active');
    $(this).addClass('active');
    var $lang =  $(this).html();
    nav.html($lang);
    changeLang();
    //alert($lang);
    // alert ("location.href = 'index.php?lang=" + $(this).attr('data-value'));
  });

  //svg hover
  // $("img.svg").each(function() {
  //   var $img = jQuery(this);
  //   var imgID = $img.attr("id");
  //   var imgClass = $img.attr("class");
  //   var imgURL = $img.attr("src");
  //   $.get(
  //     imgURL,
  //     function(data) {
  //       var $svg = jQuery(data).find("svg");
  //       if (typeof imgID !== "undefined") {
  //         $svg = $svg.attr("id", imgID);
  //       }
  //       if (typeof imgClass !== "undefined") {
  //         $svg = $svg.attr("class", imgClass + " replaced-svg");
  //       }
  //       $svg = $svg.removeAttr("xmlns:a");
  //       if (
  //         !$svg.attr("viewBox") &&
  //         $svg.attr("height") &&
  //         $svg.attr("width")
  //       ) {
  //         $svg.attr(
  //           "viewBox",
  //           "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
  //         );
  //       }
  //       $img.replaceWith($svg);
  //     },
  //     "xml"
  //   );
  // });



});