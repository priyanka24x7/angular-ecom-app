import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: any;

  constructor(
    public api: ApiService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.api.get('products').subscribe((res) => {
      this.productList = res;
    })
  }

}
