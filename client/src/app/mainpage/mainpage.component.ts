import { Component, OnInit } from '@angular/core';
import {CrmServiceService} from "../service/crm-service.service";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  public records: any;
  form!: FormGroup;
  authorizationForm: FormGroup;

  constructor(
    private crmService: CrmServiceService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      image: ['']
    });

    this.authorizationForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }



  onChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // @ts-ignore
      this.form.get('image').setValue(file);
    }
  }
  getList(){
    this.crmService.list().subscribe((data)=>{
      console.log('123',data)
      this.records = data
    })
  }

  postImage(){
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', this.form.get('image').value);
    this.crmService.upload(formData).subscribe((data)=>{
      console.log('sended')
    })
  }

}

