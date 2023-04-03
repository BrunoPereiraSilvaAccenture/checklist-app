import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChecklistItem } from './../_models/checklist_item';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist-edit',
  templateUrl: './checklist-edit.component.html',
  styleUrls: ['./checklist-edit.component.css']
})
export class ChecklistEditComponent implements OnInit{

  public actionName = 'Editar';
  public checklistItem!: ChecklistItem;

  constructor(public modalRef: MatDialogRef<ChecklistEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){

      if(data.updateChecklistItem != null){
        this.checklistItem = data.updateChecklistItem;
      }

      if(data.actionName != null){
        this.actionName = data.actionName;
      }

    };

  ngOnInit(): void {

  }

  public onFormClose($event: any){
    this.modalRef.close();
  }

}
