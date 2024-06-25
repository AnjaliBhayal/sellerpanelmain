import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OutletServiceService } from 'app/services/outlet-service.service';
import { BlockUI, NgBlockUI } from "ng-block-ui";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  sellerData:any
  public contentHeader: object;
  constructor(private outletService: OutletServiceService) { }

  ngOnInit(): void {
    this.sellInfo();
    this.contentHeader = {
      headerTitle: "Accounts",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [
          {
            name: "Orders",
            isLink: true,
            link: "/dashboard/orders",
          },
          {
            name: "Accounts",
            isLink: false,
            link: "dashboard/account",
          }
        ],
      },
    };
  }

  sellInfo() {
    this.blockUI.start();
    this.outletService.getSellerInfo().subscribe((data: any) => {
      this.blockUI.stop();
      this.sellerData = data.items;
    });
  }
 

}
