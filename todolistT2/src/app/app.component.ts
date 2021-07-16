import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../app/item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolistT2';

  filter: 'all' | 'active' | 'done' = 'all';
  allItems = [
{description: 'eat', done: true},
{description: 'sleep', done: false},
{description: 'play', done: false},
  ];

  get items(){
    if(this.filter === 'all'){
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: any) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

remove(item: any){
  this.allItems.splice(this.allItems.indexOf(item),1);
}

}

