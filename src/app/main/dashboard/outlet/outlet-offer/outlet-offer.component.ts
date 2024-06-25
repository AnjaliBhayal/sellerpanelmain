import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outlet-offer',
  templateUrl: './outlet-offer.component.html',
  styleUrls: ['./outlet-offer.component.scss']
})
export class OutletOfferComponent implements OnInit {
content1: any;
row: any;
public contentHeader: object;

openLinkOfferModal(arg0: any,arg1: any) {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {

    this.contentHeader = {
      headerTitle: "Offers",
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
            name: "Offers",
            isLink: false,
            link: "/dashboard/offers",
          }
        ],
      },
    };
  }

}
