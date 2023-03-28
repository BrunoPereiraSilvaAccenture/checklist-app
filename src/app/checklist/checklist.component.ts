import { CATEGORY_DATA } from './../category/category.component';
import { Component, OnInit } from '@angular/core';

export const CHECKLIST_DATA = [
  {guid:'aaaa-bbbb-cccc-dddd',completed:false, description: 'Ir ao oftamologista', deadline: Date.now(), postDate: Date.now(),
   category: CATEGORY_DATA.find(x => x.name == 'Saúde')
  },
  {guid:'aaaa-bbbb-cccc-dddd',completed:true, description: 'Reunião com o gerente regional', deadline: Date.now(), postDate: Date.now(),
   category: CATEGORY_DATA.find(x => x.name == 'Trabalho')
  }
];

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit{

  public displayedColumns: string[] = ['id','completed','description','deadline', 'postDate', 'category', 'actions'];

  public dataSource = CHECKLIST_DATA;

  constructor(){}

  ngOnInit(): void {

  }

  public createNewItem(){
    console.log('Criar novo item do checklist clicado!');
  }

}
