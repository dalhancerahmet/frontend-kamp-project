import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sepetim',
  templateUrl: './sepetim.component.html',
  styleUrls: ['./sepetim.component.css']
})
export class SepetimComponent implements OnInit {
   cartItems: CartItem[]

  constructor(private cartService:CartService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart()
  }
  getCart() {
    
    this.cartItems = this.cartService.list();
    if(this.cartItems.length==0){
      this.toastrService.error("Sepetiniz Boş");
    }
  }

}
