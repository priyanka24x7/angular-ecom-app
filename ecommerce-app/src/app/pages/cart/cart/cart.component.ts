import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { MessengerService } from 'src/app/shared/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productItem:any;
  constructor(
    private msg : MessengerService
  ) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((res) => {
      this.productItem = res;
    })
  }

}
