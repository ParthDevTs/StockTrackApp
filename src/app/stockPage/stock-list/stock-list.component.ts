import { Component, ElementRef, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { from } from 'rxjs';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

@Component({
  selector: 'stocklist',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.stockAnim();
  }

  stockAnim() {
    let mainTimeLine = gsap.timeline();

    mainTimeLine.from('.card__list__container', {
      opacity: 0.1,
      x: 500,
      stagger: 1,
      duration: 1.5,
    });
  }

  stockArray: Stock[] = [
    {
      
      name: 'Infosys',
      market: 'BSE',
      highPrice: 123,
      lowPrice: 123,
    },
    {
  
      name: 'Paytm',
      market: 'NSE',
      highPrice: 123,
      lowPrice: 123,
    },
    {
  
      name: 'Bandhan Bank',
      market: 'BSE',
      highPrice: 123,
      lowPrice: 123,
    },
    {
      name: 'Wipro',
      market: 'NSE',
      highPrice: 123,
      lowPrice: 123,
    },
    {
      name: 'ICICI Bank',
      market: 'BSE',
      highPrice: 123,
      lowPrice: 123,
    },
  ];
}
