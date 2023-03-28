import { CategoryEditComponent } from './../category-edit/category-edit.component';
import { Category } from '../_models/category';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export const CATEGORY_DATA = [
  {name: 'Educação', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Saúde', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Trabalho', guid: 'aaa-bbb-ccc-ddd'},
  {name: 'Outros', guid: 'aaa-bbb-ccc-ddd'}
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit{

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;

 constructor(private dialog: MatDialog){}

  ngOnInit(): void {

  }

  public editCategory(inputCategory:Category){
    this.dialog.open(CategoryEditComponent,{disableClose: true,
      data: {editableCategory: inputCategory}}).
        afterClosed().subscribe(
      resp => {
        console.log('Modal editar categoria!');
    });
  }

  public deleteCategory(category:Category){
    this.dialog.open(DialogComponent,{disableClose: true,
      data: {
        dialogMsg:'Tem certeza que deseja apagar a categoria?',
        leftButtonLabel:'Cancelar',
        rightButtonLabel:'Sim'}}).
        afterClosed().subscribe(
      resp => {
        if(resp) {console.log('Categoria apagada com sucesso!');}
        else {console.log('Categoria não apagada!');}
    });
  }

  public createNewCategory(){
    this.dialog.open(CategoryEditComponent,{disableClose: true,
      data: {actionName: 'Criar'}}).
        afterClosed().subscribe(
      resp => {
        console.log('Modal criar categoria!');
    });
  }
}
