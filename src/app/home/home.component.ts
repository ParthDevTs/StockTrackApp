import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddStockComponent } from '../modals/add-stock/add-stock.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private modalService: NgbModal) {}
  
  ngOnInit(): void {}

  landingPage() {
    this.router.navigate(['']);
  }

  addMoreStocks(){
    const modalRef = this.modalService.open(AddStockComponent);
    modalRef.componentInstance.name = 'Add More Stocks';
  }
}
