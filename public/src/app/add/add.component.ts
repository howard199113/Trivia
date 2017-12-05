import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  currentUser: any = {name:""};

  newQuestion: object = {question:"", correct:"", fake1:"", fake2:""};
  constructor(private _userService: ApiService,
  private _router: Router) { }

  ngOnInit() {
    this._userService.getCurrentUser()
    .then((data)=>{
      this.currentUser = data;
    })
    .catch((error)=>{
      console.log(error);
        this._router.navigate(['']);
    })
  }

  onSubmit(){
    console.log('Hit onSubmit');
    this._userService.addQuestion(this.newQuestion)
    .then((data)=>{
      if(data.errors == undefined){
        console.log(data);
        this._router.navigate(['home']).then((data)=>{
          console.log('You have successfully added a question!!')
        })
      }
    })
  }

}
