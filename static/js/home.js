$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stats rachelxiao<br/>" +
      "><span class='caret'>$</span> job: software engineer intern at nextdoor<br/> ^100" +
      "><span class='caret'>$</span> education: uc berkeley eecs '26<br/> ^100" +
      "><span class='caret'>$</span> skills: python, java, c, sql, go, django, html, css, js<br/> ^100" +
      "><span class='caret'>$</span> hobbies: traveling, journaling, bowling,<br/> ^100"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});