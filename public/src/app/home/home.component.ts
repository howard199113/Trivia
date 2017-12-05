import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: object = {name:""};
  allUsers: object[] = [];
  scores: any[] = [];
  shownScores: any[] = [];
  currentScore: any = {name:"", score:""};
  searchString: any;

  constructor(private _userService: ApiService, private _router: Router) { }

  ngOnInit() {
    this._userService.getCurrentUser()
    .then((data)=>{
      this.currentUser = data;
    })
    .catch((error)=>{
      console.log(error);
        this._router.navigate(['']);
    })
    this.getAllScores();


    this._userService.getCurrentScore()
    .then((data)=>{
      this.currentScore = data;
      console.log(this.currentScore);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  getAllScores(){
    this._userService.getScores()
    .then((data)=>{
      this.scores = data;
      this.shownScores = data;
      console.log(this.scores);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  searchScore(){
    console.log("hit searchScore", this.searchString);
    this.shownScores = this.scores.filter((score)=>{
      console.log(score.name.includes(this.searchString));
      return score.name.toLowerCase().includes(this.searchString)
    })
  }

  logout(){
    console.log("hit logout");
    this._userService.clearSessions()
    .then((session)=>{
      console.log(session.currentUserSession)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

}
