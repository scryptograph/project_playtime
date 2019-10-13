import { Component, OnInit, Inject } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { backgrounds } from '../../interfaces/backgrounds';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';
import  anime from 'animejs';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})
export class HomePage implements OnInit {

  public backgrounds: backgrounds[] = [];
  public activebackground: backgrounds;

  constructor(private menuCtrl: MenuController, private navCtrl: NavController, private alertCtrl: AlertController, private domCtrl: DomController, @Inject(DOCUMENT) private document) { 
    
  }

  ngOnInit() {

    this.backgrounds = [
      {
        background: '#1abc9c'
      },
      {
        background: '#3498db'
      },     
      {
        background: '#9b59b6'
      },
      {
        background: '#34495e'
      },
      {
        background: '#d35400'
      },
      {
        background: '#e74c3c'
      },
      {
        background: '#95a5a6'
      }
    ]
    this.setbackground()
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    switch (event.key) {
      case 'a':
      this.setbackground();
      break;
    case 'b':
      this.setbackground();
      break;
    case 'c':
      this.setbackground();
      break;
    case 'd': 
      this.setbackground();
      break;
    case 'f':
      this.batterywarning();
      break;
    }
  }

  setbackground() {

    let selectedbackground = Math.floor(Math.random() * this.backgrounds.length);
    this.activebackground = this.backgrounds[selectedbackground];

    this.domCtrl.write(() => {
      document.documentElement.style.setProperty('--ion-background-color',this.activebackground.background);
    });
  }

  batterywarning() {
    this.alertCtrl.create({
      header: 'Low Battery Warning',
      message: 'Warning: The Switch Module has sent a low-power warning. Please charge the Module to prevent disconnection...',
      buttons: [
        {
          text: 'Ok'
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

  clickedDatabase() {
    anime({
      targets: '.databaseButton',
      scaleX: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
      scaleY: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
    });
    setTimeout(() => {
     [ this.navCtrl.navigateForward('/database')];
    },1200); 
  }

  clickedAbout(){
    anime({
      targets: '.aboutButton',
      scaleX: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
      scaleY: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
    });
    setTimeout(() => {
     [ this.navCtrl.navigateForward('/about')];
    },1200); 
  }

  clickedAG(){
    anime({
      targets: '.AGButton',
      scaleX: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
      scaleY: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
    });
    setTimeout(() => {
      window.open('http://www.aftergateway.org/', '_system', 'location=yes'); return false;
    },1200); 
  }

  clickedGreeting() {
    anime({
      targets: '.greetingButton',
      scaleX: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
      scaleY: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
    });
    setTimeout(() => {
      this.navCtrl.navigateForward('/greeting');
    },1200);
  }

  clickedInstructions() {
    anime({
      targets: '.instructionButton',
      scaleX: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
      scaleY: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
    });
    setTimeout(() => {
      this.navCtrl.navigateForward('/instructions');
    },1200);
  }

}
