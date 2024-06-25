import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OutletServiceService } from 'app/services/outlet-service.service';
import { ToastrserviceService } from 'app/services/toastrservice.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.scss']
})
export class SettlementComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  rows: any;
  tempData: any;


  cols: any;
  ColumnMode: any;
  SettlementAmountData: any;
  data: any;
  outletData:any
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

  constructor(private outletService: OutletServiceService,private toastr:ToastrserviceService,private modalService: NgbModal , private router: Router) {
    let nav: Navigation = this.router.getCurrentNavigation();
    if (nav.extras && nav.extras.state && nav.extras.state.outletData) {
      this.outletData = nav.extras.state.outletData;
    console.log(this.outletData.outletId);
    
    } else {
      this.router.navigate(["/dashboard/allOutlet"]);
    }
   }

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
    this.blockUI.start();
    this.outletService.getsettlementAmount(this.outletData.outletId).subscribe((data: any) => {
      this.blockUI.stop();
      if(data.status){
        this.toastr.showSuccess(data.message,"Success!");
        this.SettlementAmountData = data.items;
        console.log(this.SettlementAmountData)
        this.rows = data.items;
        this.tempData = this.rows;
        this.kitchenSinkRows = this.rows;
        this.data = this.SettlementAmountData;
      }
      else{
        this.toastr.showError(data.message,"error!");

      }
      

    });
  }


}
