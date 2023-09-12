import {Component} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MaterialService} from "../../classes/material.service";

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css']
})
export class NewSaleComponent {

  public orderForm: FormGroup
  public previewImage: any;

  constructor(
    private api: ApiService
  ) {
    this.orderForm = new FormGroup({
      brand: new FormControl(),
      type: new FormControl(),
      size: new FormControl(),
      description: new FormControl(),
      comment: new FormControl(),
      image: new FormControl(),
      price_cl: new FormControl(),
      country: new FormControl(),
    })
  }

  onChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.orderForm.patchValue({image: file});

      // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result as string;
      }
      reader.readAsDataURL(file)
    }
  }

  clearForm(){
    this.orderForm.reset()
  }

  saveForm(){

    const formData = new FormData();
    formData.append('brand', this.orderForm.value.brand);
    formData.append('type', this.orderForm.value.type);
    formData.append('price_cl', this.orderForm.value.price_cl);
    formData.append('country', this.orderForm.value.country);
    formData.append('image', this.orderForm.value.image);

    this.api.post(formData).subscribe(
      (data)=>{
        MaterialService.toost('Заказ сохранен !')
      },
      (error)=>{
        MaterialService.toost(error.error.detail)
      })
  }

}
