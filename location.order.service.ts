import { Injectable } from '@angular/core';



@Injectable({
  providedIn:'root'
})
export class OrderService {

  public allOrder:any;
  public currentOrder:any;
  public baseUrl ="https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village"

 public photos_url: "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop"


  constructor() {

    console.log("OrderService was called")
  }



}
