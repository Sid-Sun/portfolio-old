import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faqs: {
    responseJSON: {
      header: {
        title: string,
        description: string
      },
      body: {
        question: string,
        answer: string
      }[]
    }
  };
  constructor() { }

  ngOnInit() {
    this.faqs = $.getJSON('https://cdn.sidsun.com/faq.json', (data) => {
      return data;
    });
  }

}
