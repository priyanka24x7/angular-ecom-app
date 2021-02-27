import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoriesComponent } from './pages/product-categories/product-categories.component';

const routes: Routes = [
  {
    path: '',
    component: ProductCategoriesComponent
  },
  {
    path: 'product-list',
    loadChildren: () =>
      import('./pages/product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
