import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-database-detail',
  templateUrl: './database-detail.page.html',
  styleUrls: ['./database-detail.page.scss'],
})
export class DatabaseDetailPage implements OnInit {

  private question: Question

  constructor(private route: ActivatedRoute, private questionsService: NotesService, private navCtrl: NavController) {

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

  ngOnInit() { 
    
  let questionID = this.route.snapshot.paramMap.get('id');

  if(this.questionsService.loaded){
    this.question = this.questionsService.getQuestion(questionID)
  } else {
    this.questionsService.load().then(() => {
      this.question = this.questionsService.getQuestion(questionID)
    });
  }

}

questionChanged(){
  this.questionsService.save();
}

deleteQuestion(){
  this.questionsService.deleteQuestion(this.question);
  this.navCtrl.navigateBack('/database');
}

}