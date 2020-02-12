import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {SwUpdate} from '@angular/service-worker';
import {environment} from '../environments/environment';

declare var jQuery: any;

@Component({
  selector: 'rzm-iana-tld-manager',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private titleService: Title,
              private router: Router,
              private swUpdate: SwUpdate,
              @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('RZM - Tld Manager');

    if (environment.production) {
      this.swUpdate.available.subscribe(event => {
        window.location.reload();
      });
      this.swUpdate.checkForUpdate();
    }
    if (isPlatformBrowser(this.platformId)) {
      // Initialize the Foundation JavaScript
      this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {

          jQuery(document).ready(function () {
            jQuery(document).foundation();
            if (jQuery(window).width() < 640) {
              jQuery('#responsive-menu').addClass('mobile-menu');
            } else {
              jQuery('#responsive-menu').removeClass('mobile-menu');
            }
            jQuery('#mobile-menu-trigger').off().on('click', function () {
              jQuery('#responsive-menu').show();
            });

            jQuery(window).resize(function () {
              if (jQuery(this).width() < 640) {
                jQuery('#responsive-menu').addClass('mobile-menu');

              } else {
                jQuery('#responsive-menu').removeClass('mobile-menu');
              }
            });

            jQuery('.close-mobile-menu').off().on('click', function () {
              jQuery('#responsive-menu').hide();
            });
          });
        }
      });
    }
  }

}
