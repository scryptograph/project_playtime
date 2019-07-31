import { Component, OnInit, Inject } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from '../../services/notes.service';
import { backgrounds } from '../../interfaces/backgrounds';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';
import anime from 'animejs'

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.page.html',
  styleUrls: ['./greeting.page.scss'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})
export class GreetingPage implements OnInit {

  public backgrounds: backgrounds[] = [];
  public activebackground: backgrounds;

  constructor( private domCtrl: DomController, @Inject(DOCUMENT) private document, private questionsService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
    this.questionsService.load();

    this.backgrounds = [
      {
        background: '#f1c40f'
      },
      {
        background: '#34495e'
      },     
      {
        background: '#8e44ad'
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

  click1() {
    anime({
      targets: '.yesnobutton',
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
     [ this.navCtrl.navigateForward('/greeting2')];
    },1200); 

  }

}


