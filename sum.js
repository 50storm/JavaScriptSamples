/*
http://www.buildinsider.net/web/jqueryref/031
http://hivecolor.com/id/154
*/
(function($) {
  $.fn.confirm = function() {
    this.click(function(e) {
      if(!confirm('処理を継続してよろしいですか？')) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    });
    return this;
  };
})(jQuery);


