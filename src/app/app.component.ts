import { Component,OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BooknowComponent } from './booknow/booknow.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cupix Electronics';
   
  constructor(private dialog: MatDialog ) {
     
  }
  ngOnInit() {
  }
 
openDialog() {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };

  this.dialog.open(BooknowComponent, dialogConfig);
  
  const dialogRef = this.dialog.open(BooknowComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
  );    
}
}
