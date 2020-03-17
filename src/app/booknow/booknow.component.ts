import { Component, OnInit, Inject } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {
  form: FormGroup;
  description:string; 
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<BooknowComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.description = data.description;
    }

  ngOnInit() {
    this.form =this.fb.group({
      description: [this.description, []],
    
  });
  }
  
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
