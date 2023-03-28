import { Category } from './../_models/category';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit{

  @Input() public actionName = 'Editar';

  public name: FormControl = new FormControl('');

  @Output() closeModalEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  public categoryForm!: FormGroup;

  public isFormReady = false;

  @Input() public editableCategory!: Category;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name: [this.editableCategory != null ? this.editableCategory.name : '' , Validators.required]
    });

    this.isFormReady = true;
  }

  public cancel(){
    console.log('Cancelar clicado');
    this.closeModalEventEmitter.emit(true);
  }

  public save(){
    console.log('Salvar clicado');
    this.closeModalEventEmitter.emit(true);
  }

}
