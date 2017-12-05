import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  currentUser: any = {name:""};
  allQuestions: any[];
  allAnswers: object = {question0:"", question1:"", question2:""}
  allScores: any = {name:"", score:""};
  constructor(private _userService: ApiService, private _router: Router) { }

  ngOnInit(){
    this._userService.getCurrentUser()
    .then((data)=>{
      this.currentUser = data;
    })
    .catch((error)=>{
      console.log(error);
        this._router.navigate(['']);
    })
    this.getUserName();
  }

  getUserName(){
    this._userService.getCurrentUser()
    .then((name)=>{
      this.getRanQuestions();
      this.currentUser = name;
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  onSubmit(){
    console.log('Hit onSubmit', this.allAnswers);
    this._userService.matchCorrect(this.allAnswers)
    .then((score)=>{

      // the getUserName function
      this._userService.getCurrentUser()
      .then((name)=>{
        console.log(name.name + " got this many correct: " + score + "/3");
        this.allScores.name = name.name;
        this.allScores.score = score;

        // save the score function
        this.saveScore(this.allScores);

        this._router.navigate(['/home']);
      })
      .catch((error)=>{
        console.log(error);
      })

    })
    .catch((error)=>{
      console.log(error);
    })
  }

  getRanQuestions(){
    this._userService.getQuestions()
    .then((data)=>{
      console.log('then');
      this.allQuestions = data;
      console.log(this.allQuestions);
    })
    .catch((error)=>{
      console.log('catch');
      console.log(error);
    })
  }


  saveScore(allScores){
    this._userService.saveScore(this.allScores)
    .then((returnScore)=>{
      console.log(returnScore);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

}
