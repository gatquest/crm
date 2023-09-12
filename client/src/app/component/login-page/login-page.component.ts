import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MaterialService} from "../../classes/material.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy{

  form: FormGroup;
  aSub: Subscription | undefined;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup<any>({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(2)])
    })
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params['accessDenied']) MaterialService.toost('Авторизуйтесь в системе')
        else if (params['sessionFailed']) MaterialService.toost('Войдите в систему заново')
      }
    )
  }

  ngOnDestroy(){
    if(this.aSub) this.aSub.unsubscribe();
  }

  onSubmit(){
    this.form.disable()
    this.aSub = this.auth.login(this.form.value).subscribe(
      ()=>{
        this.router.navigate([''])
      },
      (error)=>{
        MaterialService.toost(error.error.detail)
        this.form.enable()
      }
    )
  }
}
