import { Router } from '@angular/router';
import { SignUpComponent } from './../sign-up/sign-up.component';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private router: Router,
  ) {}

  visible: boolean = false;

  openToggleBar() {
    this.visible = !this.visible;
  }

  ngOnInit(): void {
    this.gsapAnim();
  }

  mainTimeline = gsap.timeline();

  openLogin() {
    this.visible = !this.visible;
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.name = 'Login ';
    modalRef.closed.subscribe((res) => {
      this.router.navigate(['/home']);
    });
  }
  openSignUp() {
    let message: string;
    this.visible = !this.visible;
    const modalRef = this.modalService.open(SignUpComponent);
    modalRef.result.then(
      (onfulfilled) => {
        message = onfulfilled;
      },
      (onrejected) => {
        message = onrejected;

      }
    );

    modalRef.componentInstance.name = 'Sign Up';
  }

  gsapAnim() {
    this.mainTimeline
      .from('.logo__name', {
        opacity: 0,
        scale: 0.1,
        ease: 'elastic',
        duration: 1,
      })
      .from(
        '.buttons',
        {
          duration: 0.8,
          opacity: 0.1,
          ease: 'bounce',
          y: -50,
          stagger: 0.3,
        },
        '<0.2'
      )
      .to('.main__heading', {
        duration: 0.9,
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
        ease: 'sine.out()',
      })
      .to(
        '.main__picture',
        {
          duration: 0.9,
          opacity: 1,
          clipPath: 'circle(70.7% at 50% 50%)',
          ease: 'slow(0.7, 0.7, false)',
        },
        '<0.1'
      );
  }
}
