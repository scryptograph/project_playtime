import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Question } from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public questions: Question[] = [];
  public loaded: boolean = false;

  constructor(private storage: Storage) {

  }

  load(): Promise<boolean> {

    // Return a promise so that we know when this operation has completed
    return new Promise((resolve) => {

      // Get the notes that were saved into storage
      this.storage.get('questions').then((questions) => {

        // Only set this.notes to the returned value if there were values stored
        if(questions != null){
          this.questions = questions;
        }

        // This allows us to check if the data has been loaded in or not
        this.loaded = true;
        resolve(true);

      });

    });

  }

  save(): void {
    // Save the current array of notes to storage
    this.storage.set('questions', this.questions);
  }

  getQuestion(id): Question {
    // Return the note that has an id matching the id passed in
    return this.questions.find(question => question.id === id);
  }

  createQuestion(title): void {

    let id = Math.max(...this.questions.map(question => parseInt(question.id)), 0) + 1;

    this.questions.push({
      id: id.toString(),
      title: title,
      ans1: '',
      ans2: '',
      ans3: '',
      ans4: '',
      correct: '',
      background: ''
    });

    this.save();

  }

  deleteQuestion(question): void {

    let index = this.questions.indexOf(question);

    if(index > -1){
      this.questions.splice(index,1);
      this.save();
    }
  }
}
