import { Category } from '../_models/category';
import { Component, OnInit } from '@angular/core';

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

 constructor(){}

  ngOnInit(): void {

  }

  public editCategory(category:Category){}

  public deleteCategory(category:Category){}

  public createNewCategory(){}
}
