import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

aim='YOUR PERFECT BANKING PARTNER'
acnt="Enter your account number"

acno=''
psw='' //empty string

  userDetails:any={
    1000:{acno:1000,username:"Ammu",password:123,balance:10000},
    1001:{acno:1001,username:"Anu",password:123,balance:50000},
    1002:{acno:1002,username:"Sandra",password:123,balance:600000},
    1003:{acno:1003,username:"Diya",password:123,balance:12000},

  }

  constructor() { } // constructor: initialization  of instance variable while creating class

  ngOnInit(): void {
  }

login(){
  var acno=this.acno
  var psw=this.psw
  let userDetails=this.userDetails
  if(acno in userDetails){
    if(psw== userDetails[acno]['password']){
      alert("login success")
    }
    else{
      alert("incorrect password")
    }
  }
else{
  alert("user not exist or incorrect password")
}}


register(){
  alert("register here")
}

acnoChange(event:any){
  this.acno=event.target.value
  console.log(this.acno);
}

pswChange(event:any){
  this.psw=event.target.value
  // console.log(this.psw);
}
}
