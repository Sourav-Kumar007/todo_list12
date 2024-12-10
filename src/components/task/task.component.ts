import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TodoItem{
  id : number;
  task : string;
  completed:boolean;
}

@Component({
  selector: 'app-task',
  imports: [CommonModule,FormsModule,NgFor,NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  todoList : TodoItem [] = [];
  newTask: string = '';  // Initialize with an empty string or a default value 
  addTask():void{
    if(this.newTask.trim() !== '')
    {
      const newTodoItem : TodoItem= {
        id : Date.now(),
        task : this.newTask,
        completed:false
      }
      this.todoList.push(newTodoItem);
      console.log(this.todoList);
    }
    
  } 
  toggleCompleted(index : number):void {
    this.todoList[index].completed = true;
  }
  deleteTask(id : number): void{
    this.todoList = this.todoList.filter(item => item.id !== id);
  }
}
