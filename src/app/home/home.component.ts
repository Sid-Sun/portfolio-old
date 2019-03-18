import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: {
    responseJSON: {
      header: {
        intro: string,
        name: string,
        title: string,
        quotes: string[]
      },
      body: {
        title: string,
        text: string
      }[]
    }
  };
  random: number;

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.data = $.getJSON('https://cdn.sidsun.com/home.json', (data) => {
      this.random = getRandomNumber(0, parseInt(data.header.quotes.length, 10));
      return data;
    });
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }
}
