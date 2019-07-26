import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tin-tuc',
  templateUrl: './tin-tuc.component.html',
  styleUrls: ['./tin-tuc.component.scss']
})
export class TinTucComponent implements OnInit {
  loaiTinTuc: string = "DienAnh";

  chonLoaiTin(val){
    this.loaiTinTuc = val;
  }
  constructor() { }

  ngOnInit() {
  }

}
