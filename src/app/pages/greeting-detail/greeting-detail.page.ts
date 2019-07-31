import { Component, OnInit, Inject } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Question } from '../../interfaces/question';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';
import { backgrounds } from '../../interfaces/backgrounds';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

import anime from 'animejs';

@Component({
  selector: 'app-greeting-detail',
  templateUrl: './greeting-detail.page.html',
  styleUrls: ['./greeting-detail.page.scss'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})
export class GreetingDetailPage implements OnInit {

  private question: Question;
  public backgrounds: backgrounds[] = [];
  public activebackground: backgrounds;
  

  constructor( private domCtrl: DomController, @Inject(DOCUMENT) private document,private alertCtrl: AlertController, private route: ActivatedRoute, private questionsService: NotesService, private navCtrl: NavController) {

    this.question = {
      id: '',
      title: '',
      ans1: '',
      ans2: '',
      ans3: '',
      ans4: '',
      correct: '',
      background: ''
    }
  }

  ngOnInit() {let questionID = this.route.snapshot.paramMap.get('id');
    if(this.questionsService.loaded){
      this.question = this.questionsService.getQuestion(questionID)
    } else {
      this.questionsService.load().then(() => {
        this.question = this.questionsService.getQuestion(questionID)
      });
    }
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

  setbackground() {

    let selectedbackground = Math.floor(Math.random() * this.backgrounds.length);
    this.activebackground = this.backgrounds[selectedbackground];

    this.domCtrl.write(() => {
      document.documentElement.style.setProperty('--ion-background-color',this.activebackground.background);
    });
  }

  animateButton1(){
    this.setbackground();
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
  }

  animateButton2(){
    this.setbackground();
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
  }

  animateButton3(){
    this.setbackground();
    anime({
      targets: '.button3',
      scaleX: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
      scaleY: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },

      ],
    });
  }

  animateButton4(){
    this.setbackground();
    anime({
      targets: '.button4',
      scaleX: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
      ],
      scaleY: [
        { value: 2, duration: 150,  easing: 'easeOutExpo' },
        { value: 1, duration: 450 },

      ],
    });
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    switch (event.key) {
      case 'a':
      this.animateButton1();
      break;
    case 'b':
      this.animateButton2();
      break;
    case 'c':
      this.animateButton3();
      break;
    case 'd': 
      this.animateButton4();
      break;
    case 'f':
      this.batterywarning();
      break;
    }
  }

  clicked() {
    setTimeout(() => {
      var thanos = +this.route.snapshot.paramMap.get('id')
      this.navCtrl.navigateForward('/greeting/2');
    },1200);
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


}
