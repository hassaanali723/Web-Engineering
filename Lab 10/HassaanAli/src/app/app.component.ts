import { Component } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo=[];
  title = 'HassaanAli';
  editable = true;

  Add(){
    const mytodolist: Todo = {
      name: this.name,
      editable: this.editable
    }

    this.todos.splice(0,0,mytodolist)
    
  }

  Remove(index){
    this.todos.splice(0,1);

  }
} 
