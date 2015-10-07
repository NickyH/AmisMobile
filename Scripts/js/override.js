//dom ready functions
$(function(){
  insert_header();
  insert_home();
  insert_bottom();
  $('.datepicker').pickadate();
});

function icon_downer_click() {
  window.location = '/';
}

function insert_bottom() {
  $('#insert-bottom').empty();
  $.get('bottom_bar.html', function(data) {
      $('#insert-bottom').html(data);
  });
}

function remove_bottom() {
  $('#insert-bottom').empty();
}

function insert_header() {
  $.get('header_bar.html', function(data) {
      $('#insert-header').html(data);
  });
}

function insert_home() {
  $('#body-content').empty();
  $.get('menu.html', function(data) {
      $('#body-content').html(data);
  });
}

function insert_tasklist() {
  $('#body-content').empty();
  $.get('task_list.html', function(data) {
      $('#body-content').html(data);
  });
}

function insert_taskmap() {
  $('#body-content').empty();
  $.get('map_list.html', function(data) {
      $('#body-content').html(data);
  });
}

function insert_form_completion() {
  $('#body-content').empty();
  $.get('form_completion.html', function(data) {
      $('#body-content').html(data);
  });
}

function insert_taskdetails() {
  $('#body-content').empty();
  $.get('form_taskdetails.html', function(data) {
      $('#body-content').html(data);
  });
}

function insert_form_loe() {
  $('#body-content').empty();
  $.get('form_loe.html', function(data) {
      $('#body-content').html(data);
  });
}

function insert_top_bar() {
  $.get('top_bar.html', function(data) {
      $('#insert-top').html(data);
  });
}

function toggle_list_select() {
  $(this).toggleClass('active');
}

function update_page_name() {
  var current_page = page_name;
  $('#page_name').text(current_page);
}

function update_header_text() {
  var left = text_header_left;
  var mid = text_header_mid;
  var right = text_header_right;
  $('#form-header-left .text-only').text(left);
  $('#form-header-mid').text(mid);
  $('#form-header-right .text-only').text(right);
}

function hide_map() {
  $('.top-half').addClass('hidden');
  $('.bottom-half').addClass('full-width');
  $('#btn-hide-map').addClass('hidden');
  $('#btn-show-map').removeClass('hidden');
}

function show_map() {
  $('.top-half').removeClass('hidden');
  $('.bottom-half').removeClass('full-width');
  $('#btn-hide-map').removeClass('hidden');
  $('#btn-show-map').addClass('hidden');
}

function insert_form_header () {
  $('.insert-form-header').empty();
  $.get('form_header.html', function(data) {
      $('.insert-form-header').html(data);
  });
}