import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
sellerData: any;
public contentHeader: object;
  constructor() { }

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: "support",
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
            name: "support",
            isLink: false,
            link: "dashboard/support",
          }
        ],
      },
    };
  }

}
