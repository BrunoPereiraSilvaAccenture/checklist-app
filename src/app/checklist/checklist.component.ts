import { DialogComponent } from './../dialog/dialog.component';
import { CATEGORY_DATA } from './../category/category.component';
import { Component, OnInit } from '@angular/core';
import { ChecklistItem } from '../_models/checklist_item';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {

  }

  public createNewItem(){
    console.log('Criar novo item do checklist clicado!');
  }

  public updateCompleteStatus(status: boolean){
    console.log(`Status alterado ${status}`);
  }

  public updateCheclistItem(checklistItem: ChecklistItem)
  {
    console.log(`Atualizando Item ${checklistItem.description} do Checklist`);
  }

  public deleteCheclistItem(checklistItem: ChecklistItem)
  {
    this.dialog.open(DialogComponent, {disableClose: true,
    data:
    {
      dialogMsg:`Tem certeza que deseja excluir o item ${checklistItem.description}?`,
      leftButtonLabel: 'Cancelar',
      rightButtonLabel: 'Ok'
    }
  }).afterClosed().subscribe(resp => {
    console.log(`Deletando Item ${checklistItem.description} do Checklist`);
  })
  }

}
