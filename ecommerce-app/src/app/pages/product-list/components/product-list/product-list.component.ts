import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: any;
  params: any;
  constructor(
    public api: ApiService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((param) => {
      this.params = param;
      if(this.params) {
        this.getProductList('/category/' + this.params.category);
      } else {
        this.getProductList();
      }
    });
  }

  getProductList(url?:any){
    this.api.get('products'+ url).subscribe((res) => {
      this.productList = res;
    })
  }

}
