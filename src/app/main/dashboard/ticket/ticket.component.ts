import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { AuthService } from 'app/services/auth.service';
import { ToastrserviceService } from 'app/services/toastrservice.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  ticket: any;
  getOrder(arg0: string) {
    throw new Error('Method not implemented.');
  }

  private tempData = [];
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public expanded = {};
  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  private exportCSVData: [] | any;

  @ViewChild(DatatableComponent) table: DatatableComponent | any;
  @ViewChild('tableRowDetails') tableRowDetails: any;
  cols = [{ name: 'issue' }, { name: 'role' }, { name: 'priority' }, { name: 'status' }];
  rows: any;
  data = [];
  filteredData = [];
  formula: string = 'All Tickets';
  isShow: Boolean = false;
  status = 'All'
  allTicket: any[] = [];

  viewById: any;
  ticketDetails: any;
  ticketList: any;
  constructor(private AuthService: AuthService, private modalService: NgbModal,private toastr: ToastrserviceService) { }

  public contentHeader: object

  ngOnInit(): void {
    this.allTicketList();
    this.contentHeader = {
      headerTitle: 'Ticket',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Ticket',
            isLink: true,
            link: '/dashboard/ticket'
          }
        ]
      }
    }
  }

  selcectStatus(event: any) {
    this.status = event;
    console.log(event);

    this.allTicketList();
  }



  closeDetails() {
    this.isShow = false;
  }

  // get all ticket
  allTicketList() {
    this.AuthService.getAllTicket(this.status).subscribe((data: any) => {
      if (data.status) {
        console.log(data.status)
        this.allTicket = data.items;
        this.ticketList = this.allTicket
        this.toastr.showSuccess(data.message, "Success!");
      }
      else {
        console.log(data.status)
        this.toastr.showError(data.message, "error!");
        this.allTicket = []; 
      }
     
    });
  }


  // open view product details Modal
  modalProductView(data: any, ticketId: any) {
    this.AuthService.ViewTicketDetails(ticketId).subscribe((data: any) => {
      this.ticketDetails = data.items;
      console.log(this.ticketDetails);

      this.ticketDetails.productNameList = data.items?.orderDetails?.productList.reduce(
        (accumulator, currentValue) => accumulator == "" ? currentValue.productName : accumulator + "," + currentValue.productName,
        ""
      );
    });
    this.modalService.open(data, {
      windowClass: 'model',
      centered:true,
      size:'lg'
    });

    // this.product = viewDetails;
  }


}
