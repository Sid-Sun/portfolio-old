import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  socials: { responseJSON: { name: string, href: string, icon: string}[] };
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.socials = $.getJSON('https://cdn.sidsun.com/social.json', (data) => {
      return data;
    });
    console.log(this.socials);
    $(document).ready(() => {
      $('.skillDiv').hover(function () {
          $(this).addClass('shadow');
        },
        function() {
          $(this).removeClass('shadow');
        });
    });
  }
}
