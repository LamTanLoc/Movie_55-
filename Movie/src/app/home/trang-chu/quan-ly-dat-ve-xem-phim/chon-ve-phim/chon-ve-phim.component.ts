import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/_core/shared/share-data.service';

@Component({
  selector: 'app-chon-ve-phim',
  templateUrl: './chon-ve-phim.component.html',
  styleUrls: ['./chon-ve-phim.component.scss']
})
export class ChonVePhimComponent implements OnInit {
  phim: any;
  chiTietLichChieu : any;
  giaCombo: number = 55000;

  constructor(private  shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.shareChiTietPhim.subscribe(data => {
    
      this.phim =  data[1];
      this.chiTietLichChieu = data[0];
      console.log( this.phim );
      console.log( this.chiTietLichChieu);
    })
  }

}
