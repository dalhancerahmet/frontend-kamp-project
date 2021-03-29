import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private toastrService:ToastrService, private authService:AuthService, private router:Router) { }

  name:string="Ahmet";
  lastName:string="Dalhançer";

  ngOnInit(): void {
  }
  exit(){
    if(localStorage.length===0){
      this.toastrService.info("Önce Giriş Yapmalısınız.")
    }
    else {
      this.toastrService.info("Çıkış Yapıldı!")
    }
    localStorage.clear();
  }
}