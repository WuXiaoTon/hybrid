import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList:Array<any>;
  @Output() delete=new EventEmitter();
  endList=[];
  content='';
  constructor() { }
  changeData(i){
    this.endList.push(this.todoList[i]);
    this.todoList.splice(i,1);
  }
  deleteData(i){
    this.todoList.splice(i,1);
    this.delete.emit(i);
  }
  deleteEndData(i){
    this.endList.splice(i,1);
    this.delete.emit(i);
  }
  ngOnInit() {
  }

}
