import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;

  errorMessage: string;

  constructor(private router: Router, private titleService: Title, private formBuilder: FormBuilder,  private location:Location, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.redirectIfLoggedIn();
  }

  getInputData(data: any) {
    if (data) {
      this.errorMessage = data.error;
    }
  }

  onSubmit() {

  }


  private createForm() {
    this.loginForm = this.formBuilder.group({
      loginName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  private redirectIfLoggedIn() {
      this.createForm();
      this.getInputData(this.location.getState());
      this.titleService.setTitle('RZM - Login');
  }

  setCookie() {
    this.httpClient.get("/api/setCookie").subscribe(data =>{
      console.log(data);
    })
  }

  readCookie() {
    this.httpClient.get("/api/readCookie").subscribe(data =>{
      console.log(data);
    })
  }
}
