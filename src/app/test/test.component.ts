import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  public stringInterpoletion = "Teste String";

  public isDisabled = false;

  public myBindingProperty: string = ' ';

  public showTitle = true;

  public itens = [
    {description: 'item1', id:1},
    {description: 'item2', id:2},
    {description: 'item3', id:3},
    {description: 'item4', id:4}
  ];

  constructor(){}

  ngOnInit(): void {

  }
public processClick(value: string){
  console.log("This button was a clicked!"+value)
}

public disableButton(){
  if(this.isDisabled) this.isDisabled=false;
  else this.isDisabled = true;
}

public changeTitleDisplayStatus(){
  if(this.showTitle) this.showTitle=false;
  else this.showTitle = true;
}

}
