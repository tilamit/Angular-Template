import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  ngOnInit() {
  }

  angForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
      empId: ['', Validators.required ],
      empName: ['', Validators.required ]
    });
  }
}
