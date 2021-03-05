import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { EmailService } from '../_services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  registerForm: FormGroup;
  param = {value: 'world'};

  constructor(private fb: FormBuilder, private emailService: EmailService, private toastr: ToastrService, private translate: TranslateService) { }

  ngOnInit() {
    this.validation();
  }

  validation() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  send(){
    if (this.registerForm.valid) {
      let model = Object.assign({}, this.registerForm.value);
      model.message = `${model.message}\n\n${model.phoneNumber}`
      console.log("Send", model);
      this.emailService.sendEmail(model).subscribe((response:any) => {
        console.log('response.ok', response.ok);
        if(response.ok){
          this.clear();
          this.toastr.success(this.translate.instant('Contact.Fields.SuccessMessage.SendEmail.Value'), this.translate.instant('Contact.Fields.SuccessMessage.SendEmail.Title'));
        }
        else{
          this.toastr.error(this.translate.instant('Contact.Fields.ErrorMessage.SendEMail.Value'), this.translate.instant('Contact.Fields.ErrorMessage.SendEmail.Title')); 
        }
      }, error => {
        this.toastr.error(this.translate.instant('Contact.Fields.ErrorMessage.SendEmail.Value'), this.translate.instant('Contact.Fields.ErrorMessage.SendEmail.Title')); 
      });
    }
  }

  clear(){
    this.registerForm.reset();
    
  }

  

}
