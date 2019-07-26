import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDatVeXemPhimComponent } from './quan-ly-dat-ve-xem-phim.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { QuanLyDatVeXemPhimRoutingModule } from './quan-ly-dat-ve-xem-phim-routing.module';
import { ChonVePhimComponent } from './chon-ve-phim/chon-ve-phim.component';

@NgModule({
  declarations: [QuanLyDatVeXemPhimComponent, ChiTietPhimComponent, ChonVePhimComponent],
  imports: [
    CommonModule,
    QuanLyDatVeXemPhimRoutingModule
  ]
})
export class QuanLyDatVeXemPhimModule { }
