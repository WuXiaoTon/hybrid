import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  list = [];
  data = ' ';
  ngOnInit() {
  }

  keyData(e){
    if(e.keyCode == 13){
        this.list.push(this.data);
        this.data='';
        console.log("input:"+this.list);
    }
  }
  updateList(i){
    this.list.splice(i,1);
    console.log(this.list);
  }
}
