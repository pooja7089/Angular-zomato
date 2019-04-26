import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/location/location.order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers :[Location]
})
export class OrderComponent implements OnInit {
  [x: string]: any;

  allOrder: any;
  errorMessage: any;
 

  constructor(_orderService:OrderService) {
   }

  ngOnInit() {
   // this.order = this._orderService.getOrder();
     this.orderService.getAllOrder().subscribe(
      
       (        data: { [x: string]: any; }) => {
                console.log(data);
                this.allOrder = data["data"];
                return this.allOrder;
              },
       (        error: { errorMessage: any; }) =>{
                console.log("some error occured");
                console.log(error.errorMessage)
              }
      
      
            )

    
  }

}
