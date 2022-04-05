import { ToastService } from './../../../Services/toast.service';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-toasts',
  template: `<ngb-toast
    *ngFor="let toast of toastService.toasts"
    [class]="toast.classname"
    [autohide]="true"
    [delay]="toast.delay || 50000"
    (hidden)="toastService.remove(toast)"
  >
    <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
      <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
    </ng-template>

    <ng-template #text>{{ toast.textOrTpl }}</ng-template>
  </ngb-toast>`,
  host: {
    class: 'toast-container-component position-fixed top-0 end-0 p-3',
    style: 'z-index: 1200',
  },
  styleUrls: ['./toast-container.component.scss'],
})
export class ToastContainerComponent implements OnInit {
  constructor(public toastService: ToastService) {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  ngOnInit(): void {}
}
