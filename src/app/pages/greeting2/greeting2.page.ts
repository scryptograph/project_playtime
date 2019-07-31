import { Component, OnInit, Inject } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { backgrounds } from '../../interfaces/backgrounds';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';
import  anime from 'animejs';


@Component({
  selector: 'app-greeting2',
  templateUrl: './greeting2.page.html',
  styleUrls: ['./greeting2.page.scss'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})
export class Greeting2Page implements OnInit {

  public backgrounds: backgrounds[] = [];
  public activebackground: backgrounds;

  constructor(private menuCtrl: MenuController, private navCtrl: NavController, private alertCtrl: AlertController, private domCtrl: DomController, @Inject(DOCUMENT) private document) { 

  }

  ngOnInit() {
    
    this.backgrounds = [
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
        background: '#e67e22'
      },
      {
        background: '#f1c40f'
      },
      {
        background: '#ecf0f1'
      },
      {
        background: '#7f8c8d'
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

  clickedYes() {
    
    let audio = new Audio();
    audio.src = "../../../assets/sounds/no-male.aiff";
    audio.load();
    audio.play();
    
    anime({
      targets: '.button1',
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
      
    },1200);
  }

  clickedNo() {
    anime({
      targets: '.button2',
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
      
    },1200);
  }

}
