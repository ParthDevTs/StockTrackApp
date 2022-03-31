import { profile } from './../models/profile';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StocksService } from '../Services/stocks.service';
import { Message } from '../models/message';
import { ToastService } from '../Services/toast.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  constructor(
    public modal: NgbActiveModal,
    private stocksService: StocksService,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.toastService.clear();
  }

  message: Message | any;

  profile: profile = {
    id: 'parthk101',
    profileName: 'Parth Kathuria',
  };

  createProfile() {
    this.stocksService.createProfile(this.profile).subscribe(
      (res) => {
        this.message = res;
        //
        this.modal.close(this.message?.message);
        this.toastService.show('i am a message');
      },
      (err) => {
        this.message = err;
        console.log(this.message);
      }
    );
  }
}
