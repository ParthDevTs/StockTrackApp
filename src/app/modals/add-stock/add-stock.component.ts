import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Stock } from 'src/app/models/stock';
import { StocksService } from 'src/app/Services/stocks.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}


@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})




export class AddStockComponent implements OnInit {

  constructor( public modal: NgbActiveModal, private stockService:StocksService) { }

  ngOnInit(): void {
  }

  stockNameFormControl = new FormControl('', [
    Validators.required,
  ]);

  matcher = new MyErrorStateMatcher();
  marketFormControl = new FormControl('', [Validators.required]);
  highPriceFormControl = new FormControl('', [Validators.required]);
  lowPriceFormControl = new FormControl('', [Validators.required]);
  buyPriceFormControl = new FormControl('', [Validators.required]);


  addStockToPofile(){

    let stockAdded:Stock={
      market:this.marketFormControl.value,
      name:this.stockNameFormControl.value,
      highPrice:this.highPriceFormControl.value,
      lowPrice:this.lowPriceFormControl.value,
      buyPrice: this.buyPriceFormControl.value,
      profileId:"parthk101"
    }
 
    this.stockService.addStockToProfile(stockAdded).subscribe(
      res=>{
        console.log("added")
        this.modal.close('Ok click')
      },
      err=> console.log("not added")
      
    )
       
       
  }
}
