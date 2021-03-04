import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { MessengerService } from 'src/app/shared/services/messenger.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  productItem:any;
  constructor(
    public actiRoute: ActivatedRoute,
    public api: ApiService,
    private msg : MessengerService,
    public router: Router
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

  handleAddToCart(){
    this.msg.sendMsg(this.product);
    this.router.navigate(['/product/cart']);
  }

}
