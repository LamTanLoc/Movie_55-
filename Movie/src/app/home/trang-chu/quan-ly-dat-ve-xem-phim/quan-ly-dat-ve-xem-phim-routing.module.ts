import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyDatVeXemPhimComponent } from './quan-ly-dat-ve-xem-phim.component';
import { ChiTietPhimComponent } from './chi-tiet-phim/chi-tiet-phim.component';
import { ChonVePhimComponent } from './chon-ve-phim/chon-ve-phim.component';




const routes: Routes = [
    {
        path: '', component: QuanLyDatVeXemPhimComponent, children: [
            { path: 'chi-tiet-phim/:id', component: ChiTietPhimComponent },
            { path: 'chon-ve/:id', component: ChonVePhimComponent }
        ]
    }



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuanLyDatVeXemPhimRoutingModule { }
