import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  listDanhSachPhim = new BehaviorSubject([] as any);
  shareListDanhSachPhim = this.listDanhSachPhim.asObservable();

  chiTietPhim = new BehaviorSubject({} as Object);
  shareChiTietPhim = this.chiTietPhim.asObservable();

  constructor() { }

  sharingDataListDanhSachPhim(listPhim) {
    this.listDanhSachPhim.next(listPhim);
  }

  sharingDataChiTietPhim(phim) {
    console.log(phim);
    this.chiTietPhim.next(phim);
  }
}
