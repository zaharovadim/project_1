/// SMOOTH SCROLL ///
$(function() {
  $('a[href*="#"]:not([href="#"], [href="#carousel"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1100);
        return true;
      }
    }
  });
});

/// FEEDBACK FORM ///
$(document).ready(function() {

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо за отправку сообшения!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});

/// PRELOADER ///
$(window).load(function(){
    $('.preloader').fadeOut(2000); // set duration in brackets    
});

