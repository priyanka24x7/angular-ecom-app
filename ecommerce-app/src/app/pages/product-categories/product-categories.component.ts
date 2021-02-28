import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss']
})
export class ProductCategoriesComponent implements OnInit {

  categories:any;
  constructor(
    public api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getProductCategory();
  }

  getProductCategory(){
    this.api.get('products/categories').subscribe((res: any[]) => {
      this.categories = res.map((item) => {
        return {
          label: item, image: `assets/images/${item.split(' ')[0]}.jpg`
        }
      });
    })
  }

}
