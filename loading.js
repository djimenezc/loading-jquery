/**
 * Show a Loading Layer in a specific node identify by the element
 * with id {id}
 *
 * @param displayFlag if true display the loading mask, hide it if it is false
 * @param id identify the dom element which the mask will be overlapped
 */
const loading = function (displayFlag, id) {
  let _where = 'body';
  if (id) {
    _where = id;
  }

  if (displayFlag) {
    let html = `<div id="loading_${_where}" class="lt_loading">
        <div class="lt-loader-small">
        </div>`;
    $(_where).append(html);

    let $loading = $(`#loading_${_where}`);
    $loading.fadeIn(200, function () {
      $(this).addClass('active');
    });
  }
  else {
    let $loading = $(`#loading_${_where}`);
    $loading.removeClass('active').hide().remove();
  }
};

module.exports = loading;
