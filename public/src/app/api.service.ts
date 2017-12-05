import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }
  register(userObj){
    return this._http.post('/users', userObj)
    .map(Response=>Response.json()).toPromise();
  }

  getCurrentUser(){
    return this._http.get('/users/current')
    .map(Response=>Response.json()).toPromise();
  }

  addQuestion(questionObj){
    return this._http.post('/users/add', questionObj)
    .map(Response=>Response.json()).toPromise();
  }

  getQuestions(){
    return this._http.get('users/get')
    .map(Response=>Response.json()).toPromise();
  }

  matchCorrect(answerObj){
    return this._http.post('/users/checkAns', answerObj)
    .map(Response=>Response.json()).toPromise();
  }

  saveScore(scoreObj){
    return this._http.post('users/saveScore', scoreObj)
    .map(Response=>Response.json()).toPromise();
  }

  getScores(){
    return this._http.get('users/getScores')
    .map(Response=>Response.json()).toPromise();
  }

  getCurrentScore(){
    return this._http.get('users/currentScore')
    .map(Response=>Response.json()).toPromise();
  }

  clearSessions(){
    return this._http.get('users/clearSessions')
    .map(Response=>Response.json()).toPromise();
  }
}
