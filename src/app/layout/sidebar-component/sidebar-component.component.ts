import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';


@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions typedef
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

    })(jQuery); // End of use strict
  }

}
