import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './trang-chu/header/header.component';
import { FooterComponent } from './trang-chu/footer/footer.component';








@NgModule({
  declarations: [HomeComponent,HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    

    

  ]
})
export class HomeModule { }
