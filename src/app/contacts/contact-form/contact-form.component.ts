import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgForm, } from '@angular/forms';
import { ContactService } from '../contact-servic';
import { Contact } from '../contact';
import { MatDialog} from '@angular/material';
import { NgTemplateOutlet } from '@angular/common';




@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  @ViewChild('mytemplate') tr: NgTemplateOutlet;
  contact:Contact;
  status:boolean;
  error:string;
  constructor(public contactService:ContactService, public dialog:MatDialog) { 
  }

  ngOnInit() {
   
  }
  
  openModal(templateRef) {
    let dialogRef = this.dialog.open(templateRef, {
        width: '250px',
        // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
    });
}

onSubmit(form: NgForm) {
      // console.log("in submit");

      const values = form.value;
      this.contact = {"name":values.name, "email":values.email,"subject":values.subject, "body":values.body};

       if(this.contactService.post(this.contact)){
        this.openModal(this.tr);
      }     

  }

}
