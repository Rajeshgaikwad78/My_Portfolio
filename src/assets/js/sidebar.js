

(function($) {
  'use strict'; // Start of use strict

  // Toggle the side navigation
  // tslint:disable-next-line:only-arrow-functions typedef
  $('#sidebarToggle, #sidebarToggleTop').on('click', function(e) {
    $('body').toggleClass('sidebar-toggled');
    $('.sidebar').toggleClass('toggled');
    if ($('.sidebar').hasClass('toggled')) {
    }
  });
5
})(jQuery); // End of use strict
