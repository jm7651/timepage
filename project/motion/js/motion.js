'use strict';
$(function(){
  $('.animate').scrolla({
  // default
  mobile: true, // disable animation on mobiles
  once: true, // only once animation play on scroll
  animateCssVersion: 4 // used animate.css version (3 or 4)
  });
});




// var parentDocumentContent = $(".modal", parent.document);
// var parentButton = $(".modal_close", parent.document);
// var parbody = $("body", parent.document);
// var parnav = $("nav", parent.document);
// $(parentButton).on("click", function(){ 
//   parentDocumentContent.removeClass('open');
//   parbody.css("overflow", "auto");
//   parnav.css({"opacity":"1"}); 
//   $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
// });