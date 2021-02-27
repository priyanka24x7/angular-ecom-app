import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Services */
import { ApiService } from './services/api/api.service';

/** Pipes */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [],
  providers: [
    ApiService
  ]
})
export class SharedModule {}
