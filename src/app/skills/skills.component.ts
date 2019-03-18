import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: { responseJSON: { name: string, skills: { name: string, href: string }[] }[] };
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.skills = $.getJSON('https://cdn.sidsun.com/skills.json', (data) => {
      return data;
    });
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
