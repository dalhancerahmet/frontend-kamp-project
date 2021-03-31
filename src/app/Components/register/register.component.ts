import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators, FormBuilder  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private authService:AuthService, private toastrService:ToastrService) { }
  registerForm:FormGroup;

  ngOnInit(): void {
    this.createRegisterForm();
  }

createRegisterForm(){
this.registerForm=this.formBuilder.group({
  firstname:["",Validators.required],
  lastname:["",Validators.required],
  email:["",Validators.required],
  password:["",Validators.required]
})
}

add(){
if(this.registerForm.valid){
  let registerModel = Object.assign({},this.registerForm.value)
  this.authService.register(registerModel).subscribe(response=>{
    this.toastrService.success(response.message)
  },errorResponse=>{
    this.toastrService.error("Kullanıcı Mevcut")
  })
}
}
}
