import { Component, OnInit } from '@angular/core';
import { OutletServiceService } from 'app/services/outlet-service.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.scss']
})
export class SettlementComponent implements OnInit {

  rows: any;
  tempData: any;


  cols: any;
  ColumnMode: any;
  SettlementAmountData: any;
  data: any;
  public contentHeader: object;
  onSelect($event: any) {
    throw new Error('Method not implemented.');
  }
  public kitchenSinkRows: any;
  orderColumns = [
    { prop: 'orderId', name: 'Order ID' },
    { prop: 'orderValue', name: 'Order Value' },
    { prop: 'discount', name: 'Discount' },
    { prop: 'deducation', name: 'Deducation' },
    { prop: 'deducationReason', name: 'Deducation Reason' },
    { prop: 'settlementAmount', name: 'Settlement Amount' },
    { prop: 'customerName', name: 'Customer Name' }
  ];

  constructor(private outletService: OutletServiceService) { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: "Settlement Amount",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [
          {
            name: "outlets",
            isLink: true,
            link: "/dashboard/allOutlet",
          },
          {
            name: "outletDeatils",
            isLink: false,
            link: "/dashboard/outletDetails",
          },
          {
            name: "settlement amount",
            isLink: false,
            link: "/dashboard/settlement",
          }
        ],
      },
    };
    this.getSettlementData();
  }

  getSettlementData() {
    this.outletService.getsettlementAmount().subscribe((data: any) => {
      this.SettlementAmountData = data.items;
      console.log(this.SettlementAmountData)
      this.rows = data.items;
      this.tempData = this.rows;
      this.kitchenSinkRows = this.rows;
      this.data = this.SettlementAmountData;

    });
  }


}
