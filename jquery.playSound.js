/**
 * @author Alexander Manzyuk <admsev@gmail.com>
 * Copyright (c) 2012 Alexander Manzyuk - released under MIT License
 * https://github.com/admsev/jquery-play-sound
 * Usage: $.playSound('http://example.org/sound'), 
 * $.playSound('/sound/20170125.wav'), // suppoer wav or other types
 * $.playSound('/sound/10086'), // here is the API address to get audio file
 * support more IE browsers.
 * For some API:
**/

(function($){

  $.extend({
    playSound: function(){
      return $(
        '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
          + '<source src="' + arguments[0] + '" />'
          + '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false" />'
        + '</audio>'
      ).appendTo('body');
    },
    stopSound:function(){
      $('.sound-player').remove();
    }
  });

})(jQuery);
