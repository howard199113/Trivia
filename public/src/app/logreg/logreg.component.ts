import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {
  newUser: object = {name:""};

  constructor(private _userService:ApiService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.newUser);
    this._userService.register(this.newUser)
    .then((data)=>{
      console.log(data);
      this._router.navigate(['/home']);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

}
