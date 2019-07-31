import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {

  constructor(private questionsService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
    this.questionsService.load();
  }

  addQuestion(){
    this.alertCtrl.create({
      header: 'New Question Module',
      message: 'Enter the Question Tag ?',
      inputs: [
        {
          type: 'text',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.questionsService.createQuestion(data.title);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }

}
