import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "../components/task/task.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { FormsModule } from '@angular/forms'; 

export interface TodoItem 
{
  id : number;
  task : string;
  completed:boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo_list';
  todoList : TodoItem [] = [];
  newTask:string = ''
}
