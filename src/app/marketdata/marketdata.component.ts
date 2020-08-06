import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { RestwebService } from '../services/restweb.service';
import { DatePipe } from '@angular/common';

export interface MarketData {
  dataName: string;
  dataValue: number;
  dataDate: string;
}

@Component({
  selector: 'app-marketdata',
  templateUrl: './marketdata.component.html',
  styleUrls: ['./marketdata.component.css']
})
export class MarketdataComponent implements OnInit {
  accessToken: string = '';
  marketData: MarketData[] = [];
  displayedColumns: string[] = ['name', 'value', 'date'];
  dataSource: MatTableDataSource<MarketData>;

  constructor(private restWebService: RestwebService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    
    this.getAccessToken();
    
  }

  getAccessToken() {
    this.restWebService.getAccessToken().subscribe(resp =>  {
      this.accessToken = resp.access_token;
      console.log(this.accessToken);
      this.getData();
    });
    
  }

  getData() {
    this.restWebService.getMarketData(this.accessToken).subscribe(resp => {
      console.log(resp);
      this.marketData = [
        {dataName: 'Last', dataValue: resp.quotes[0].fields.LVAL_NORM.v, dataDate: this.formatDate(resp.quotes[0].fields.LVAL_NORM.d,'HH:mm')},
        {dataName: 'Close', dataValue: resp.quotes[0].fields.CLOSE_ADJ_NORM.v, dataDate: this.formatDate(resp.quotes[0].fields.CLOSE_ADJ_NORM.d,'MM/dd/yyyy')},
        {dataName: 'Day Change %', dataValue: resp.quotes[0].fields.NC2_PR_NORM.v, dataDate: ''},
        {dataName: 'Day Change', dataValue: resp.quotes[0].fields.NC2_NORM.v, dataDate: ''},
        {dataName: 'Volume', dataValue: resp.quotes[0].fields.VOL.v, dataDate: ''},
        {dataName: 'Turnover', dataValue: resp.quotes[0].fields.TUR.v, dataDate: ''},
        {dataName: 'Previous year close', dataValue: resp.quotes[0].fields.PY_CLOSE.v, dataDate: this.formatDate(resp.quotes[0].fields.PY_CLOSE.d,'MM/dd/yyyy')},
        {dataName: 'YTD %', dataValue: resp.quotes[0].fields.YTD_PR_NORM.v, dataDate: ''}
      ];

      this.dataSource = new MatTableDataSource(this.marketData);
    });
  }

  formatDate(date: Date, format: string): string {
      return this.datePipe.transform(date, format);
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
