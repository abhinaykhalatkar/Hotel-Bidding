import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Feedbackview = false;
  isShowDivIf = true;  
  toggleDisplayDivIf() {  
    this.isShowDivIf = !this.isShowDivIf;  
  } 
  
  constructor(private router: Router) { }
  userLogin(){
    this.router.navigate(['userLogin/']);
    this.isShowDivIf = !this.isShowDivIf;  
  }
  hotelLogin(){
    this.router.navigate(['hotelLogin/']);
    this.isShowDivIf = !this.isShowDivIf;
  }
  
  ngOnInit(): void {
  }
  // feedbackForm = new FormGroup({
  //   name: new FormControl(),
  //   mail: new FormControl(),
  //   number: new FormControl(),
  //   comment: new FormControl(),
  // })

  // toggle() {
  //   var nav = document.querySelector(".nav");
  //   nav.classList.toggle("active");
  // }

  // openFeedbackForm() {
  //   this.Feedbackview = true;
  // }
  // closeFeedbackForm() {
  //   this.Feedbackview = false;
  // }
//   scrollTo():void {
//           setTimeout(()=>{
//         document.querySelector('#services').scrollIntoView({ behavior: 'smooth'});
//       },1000)
//  }

}
