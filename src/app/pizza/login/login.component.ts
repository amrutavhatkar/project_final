import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { user } from '../user';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ApiService, private fb:FormBuilder, private route:Router, private rounter:ActivatedRoute) { }

   public loginform: FormGroup =this.fb.group({
     username:[""],
     password:[""]
   });

  public success: boolean=false;

  ngOnInit(): void {
  }
  onLogin(){

    console.log(this.loginform.value)
    this.service.getLogin(this.loginform.value.username, this.loginform.value.password,user).subscribe(
      data=> {
        console.log(data);
        this.route.navigate(['/pizza-details'],{relativeTo:this.rounter})
        
      },
      error=>{
        this.success=true;
      }
    )
  }

}
