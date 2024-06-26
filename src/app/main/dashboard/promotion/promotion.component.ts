import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  NgForm,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { OutletServiceService } from "app/services/outlet-service.service";
import { ToastrserviceService } from "app/services/toastrservice.service";
import { log } from "console";
import { BlockUI, NgBlockUI } from "ng-block-ui";

@Component({
  selector: "app-promotion",
  templateUrl: "./promotion.component.html",
  styleUrls: ["./promotion.component.scss"],
})
export class PromotionComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  promotionList: any;
  discountId: any;
  editDiscountForm: FormGroup;
  addDiscountForm: FormGroup;
  submitted: Boolean = false;
  isFlat: Boolean = false;
  offerDetail: any;
  public contentHeader: object;
  constructor(
    private toastr: ToastrserviceService,
    private fb: FormBuilder,
    private outletService: OutletServiceService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllPromotion();
    // add discount form
    this.addDiscountForm = this.fb.group({
      discountTitle: new FormControl("", [Validators.required]),
      discountPercent: new FormControl("", [Validators.required]),
      maxDiscount: new FormControl("", [Validators.required]),
      minAmount: new FormControl("", [Validators.required]),
      isFlatDiscount: new FormControl("", [Validators.required]),
    });

    
    this.contentHeader = {
      headerTitle: "Promotion",
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
            name: "Promotion",
            isLink: false,
            link: "dashboard/promotion",
          }
        ],
      },
    };
  }


  flatDiscountProperty(data: any) {
    console.log(data.target.checked);
  }

  get addDiscount() {
    return this.addDiscountForm.controls;
  }



  addDiscountFormSubmit() {
    //console.log(this.isFlat);
    
    this.submitted = true;
    if (this.isFlat) {
    this.addDiscount.maxDiscount.setValue(0);
    }
    if (this.addDiscountForm.invalid) {
      //console.log("this.addDiscountForm.invalid", this.addDiscountForm);
      return;
    } else {
      const formData = {
        discountTitle: this.addDiscountForm.value.discountTitle,
        promoCode: this.addDiscountForm.value.promoCode,
        discountPercent: this.addDiscountForm.value.discountPercent,
        maxDiscount: this.addDiscountForm.value.maxDiscount,
        minAmount: this.addDiscountForm.value.minAmount,
        isFlatDiscount: this.isFlat,
      };
      this.outletService.addNewDiscount(formData).subscribe((res: any) => {
        if (res.status) {
          this.toastr.showSuccess(res.message, "Success!");
          this.getAllPromotion();
          this.submitted = false;
          this.addDiscountForm.reset();
          this.modalService.dismissAll();
        } else {
          this.toastr.showError(res.message, "error!");
          this.getAllPromotion();
          this.submitted = false;
        }
      });
    }
  }


  // get all promotion
  getAllPromotion() {
    this.blockUI.start();
    this.outletService.getAllOffer().subscribe((data: any) => {
      this.blockUI.stop();
      this.promotionList = data.items;
     // console.log(this.promotionList)
    });
  }

  flatValue(event: any) {
    this.isFlat = event.target.checked;
   // console.log("this.isFlat", this.isFlat ? [] : [Validators.required]);
  }

  // modal add offers
  openAddPromotionModal(data: any) {
    this.modalService.open(data, {
      centered: true,
    });
  }

  // modal edit offers
  openEditOfferModal(data: any, discount: any) {
    this.modalService.open(data, {
      centered: true,
      size: "md",
    });
    this.discountId = discount.discountId;

    this.isFlat = discount.isFlatDiscount;
    this.addDiscountForm.patchValue({
      discountTitle: discount.discountTitle,
      isFlatDiscount: discount.isFlatDiscount,

      discountPercent: discount.discountPercent,
      maxDiscount: discount.maxDiscount,
      minAmount: discount.minAmount,
    });
  }

   editDiscountFormSubmit() {
     this.submitted = true;
     if (this.isFlat) {
       //console.log("==============______");
       this.addDiscount.maxDiscount.setValue(0);
     }
     if (this.addDiscountForm.invalid) {
       return;
     } else {
       const formData = {
         discountTitle: this.editDiscountForm.value.discountTitle,
         promoCode: this.editDiscountForm.value.promoCode,
         discountPercent: this.editDiscountForm.value.discountPercent,
         maxDiscount: this.editDiscountForm.value.maxDiscount,
         minAmount: this.editDiscountForm.value.minAmount,
       };
     }
   }


  modalOfferDelete(modalData: any, Offer: any) {
    console.log(Offer);

    this.offerDetail = Offer;
    this.modalService.open(modalData, {
      centered: true,
      size: "md",

    });
  }

  deletePromotion() {
    console.log(this.offerDetail);

    this.outletService
      .deletData({ discountId: this.offerDetail.discountId })
      .subscribe((res: any) => {
        if (!res.status) {
          this.toastr.showError(res.message, "Error");
          this.modalService.dismissAll();
        }
        this.toastr.showSuccess(res.message, "Succes");
        this.getAllPromotion();
        this.modalService.dismissAll();
      });
  }

  addOffer(addOfferModal:any,add:any) {
    //this.submitted = false;
    
    this.modalService.open(addOfferModal, {
      windowClass: "modal",
      centered: true
    });
  }



}
