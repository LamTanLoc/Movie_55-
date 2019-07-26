import { Component, OnInit } from '@angular/core';
import { ShareDataService } from './../../../../../_core/shared/share-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/_core/services/data.service';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.scss']
})
export class ChiTietPhimComponent implements OnInit {
  phim: any;
  tenPhim: any;
  maPhim: any;
  lichChieu = [];
  star = '';
  loaiTinTuc: string = "LichChieu";
  date = '';
  doitac: string = "Galaxy";
  item: object = {


  };





  constructor(private shareDataService: ShareDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {

  }

  ngOnInit() {
    this.shareDataService.shareChiTietPhim.subscribe(data => {

      this.phim = data;
      // console.log(this.phim);

    });
    this.getParams();
    this.getChiTietPhim();


  }

  getChiTietPhim() {

    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.maPhim}`;
    this.dataService.get(uri).subscribe((data: any) => {

      this.phim = data;
      console.log(this.phim);
      let tagStar = document.getElementById("star");
      this.star = this.printStar();
      tagStar.innerHTML = this.star;

      this.phim.LichChieu.map((lchieu) => {
        this.lichChieu.push(lchieu);

      })






    });
  }

  getParams() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.maPhim = this.activatedRoute.snapshot.paramMap.get("id");
    });
  }

  xemTrailer() {

    this.shareDataService.sharingDataChiTietPhim(this.phim);

  }

  printStar() {
    let content = '';
    for (let i = 0; i < this.phim.DanhGia; i++) {
      content += ` <i class="fa fa-star" aria-hidden="true"></i> `;
    }
    return content;
  }

  chonLoaiTin(val) {
    this.loaiTinTuc = val;
  }
  ChonDoiTac(value) {

    this.doitac = value;

  }


  NgayGioChieuPhim(item) {
    this.item = item;

  }

  ChonVe(item) {
    
    let obj: any =[
      item,
      this.phim
    ]
    this.shareDataService.sharingDataChiTietPhim(obj);



    this.router.navigate(["/chon-ve/", item.MaLichChieu], {
      queryParams: { tenPhim: item.TenPhim }

    });
  }







}
