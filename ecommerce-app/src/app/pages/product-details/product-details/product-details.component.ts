import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  constructor(
    public actiRoute: ActivatedRoute,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    this.actiRoute.params.subscribe((res) =>{
      this.getSingleProduct(res.id);
    })
  }

  getSingleProduct(id:number){
    this.api.get(`products/${id}`).subscribe((res) => {
      this.product = res;
    });
  }

}
