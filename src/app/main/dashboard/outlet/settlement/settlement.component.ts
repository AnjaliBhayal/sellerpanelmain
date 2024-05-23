import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.scss']
})
export class SettlementComponent implements OnInit {
filterUpdate($event: any) {
throw new Error('Method not implemented.');
}
cols: any;
ColumnMode: any;
onSelect($event: any) {
throw new Error('Method not implemented.');
}
basicSelectedOption: any;
SelectionType: any;
kitchenSinkRows: any;

  constructor() { }

  ngOnInit(): void {
  }

}
