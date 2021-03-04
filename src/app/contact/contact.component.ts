import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  ///declare var jQuery:any;
  registerForm: FormGroup;
  param = {value: 'world'};

  constructor(private fb: FormBuilder, private elementRef: ElementRef) { 
  }

  ngOnInit() {
    //jQuery(this.elementRef.nativeElement).find('[data-toggle="tooltip"]').tooltip();
    this.validation();
  }

  validation() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  send(){
    if (this.registerForm.valid) {
      let model = Object.assign({}, this.registerForm.value);
      alert(`Send ${model}`);
    }
  }

  clear(){
    this.registerForm.reset();
  }

}
