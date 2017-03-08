const $ = require('jquery');
const loading = require('loading.js');

$.fn.redraw = function(){
  $(this).each(function(){
    console.log('redraw');
    var redraw = this.offsetHeight;
    var siteHeader = document.getElementById('widgetContainer');

    siteHeader.style.display='none';
    siteHeader.offsetHeight; // no need to store this anywhere, the reference is enough
    siteHeader.style.display='block';
  });
};

loading(true);

for(let i = 0; i<1000; i++) {
  console.log('value', i);
  $('#widgetContainer').html('value'+i);
  $('#widgetContainer').redraw();
  // $('body').hide().show();
}

loading(false);
