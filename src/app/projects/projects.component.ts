import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: {
    responseJSON: {
      name: string,
      description: string,
      body: {
        headTitle: string,
        tools: {
          name: string,
          href: string
        }[]
      }[]
    }[]
  };
  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.projects = $.getJSON('https://cdn.sidsun.com/projects.json', (data) => {
      return data;
    });
    console.log(this.projects);
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
