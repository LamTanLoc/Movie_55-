import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_core/services/data.service';



@Component({
  selector: 'app-list-de-xuat',
  templateUrl: './list-de-xuat.component.html',
  styleUrls: ['./list-de-xuat.component.scss']
})
export class ListDeXuatComponent implements OnInit {
  listDeXuat = [

  ];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getListDeXuat();
  }

  getListDeXuat() {

    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP09`;
    this.dataService.get(uri).subscribe((data) => {
      this.listDeXuat = data;
      console.log(data);
      

    })


  }


}
