import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { user } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: ApiService, private fb: FormBuilder) { }
  public signupform: FormGroup = this.fb.group({
    username: [""],
    email:[""],
    password: [""]
  });
  ngOnInit(): void {
  }
 public success:boolean=false;

  onSignup() {

    console.log(this.signupform.value)
    this.service.getSignup(this.signupform.value.username,this.signupform.value.email,this.signupform.value.password).subscribe(
      data => {
        console.log(data)
        this.success=true;
      }
    )
  }
}

