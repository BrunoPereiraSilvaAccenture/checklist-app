import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../_models/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit{


  public editableCategory!: Category;

  public actionName: string = 'Editar';


  constructor(
    public dialogRef: MatDialogRef<CategoryEditComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any){

      if(dialogData.editableCategory != null){
        this.editableCategory = dialogData.editableCategory;
      }

      if(dialogData.actionName != null){
        this.actionName = dialogData.actionName;
      }

  }

ngOnInit(): void {

}

public closeModalWindow($event: any){
  //TODO: handle action - save/cancel
  if($event) this.dialogRef.close();
}

}
