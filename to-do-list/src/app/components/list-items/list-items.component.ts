import { Component, OnInit } from '@angular/core';
import { data } from '../data.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  item: data[]=[];
  text: string;
  generateId: number = 1;

  addItem() {
    if(this.text){
      let todo = new data();
      todo.name=this.text
      todo.key=this.generateId
      this.generateId++;
      this.item.push(todo);
      this.text = '';    
    }
  }

  deleteItem(item:data) {
  }

  completeItem(item:data){
    item.isCompleted=!item.isCompleted
  }

}
