import { Category } from '../_models/category';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Component, OnInit,Input,Output, EventEmitter, ViewChild } from '@angular/core';
import { ChecklistItem } from '../_models/checklist_item';

export const CATEGORY_DATA = [
  {name: 'Educação', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Saúde', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-ddd'}
];

@Component({
  selector: 'app-checklist-form',
  templateUrl: './checklist-form.component.html',
  styleUrls: ['./checklist-form.component.css']
})
export class ChecklistFormComponent implements OnInit{

  public categories: Category[] = CATEGORY_DATA;

  @Input() public actionName = 'Editar';
  @Input() public checklistItem!: ChecklistItem;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(FormGroupDirective) checklistFormGroupDirective!: FormGroupDirective;

  public checklistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }


  ngOnInit(): void {
    this.checklistForm = this.formBuilder.group({
      completed: [this.checklistItem != null ? this.checklistItem.completed : false, Validators.required],
      description: [this.checklistItem != null ? this.checklistItem.description : '', Validators.required],
      deadline: [this.checklistItem != null ? new Date(this.checklistItem.deadline) : new Date(), Validators.required],
      category: [this.checklistItem != null ? this.checklistItem.category : null, Validators.required]
    });
  }

  private clearForm(){
    this.checklistForm.reset()
    this.checklistFormGroupDirective.resetForm();
  }

  public cancel(){
    this.formCloseEvent.emit(false);
  }

  public save(){
    this.formCloseEvent.emit(true);
  }

  compareCategoryObjects(object1: any, object2: any) {
    return object1 && object2 && object1.name == object2.name;
  }

}
