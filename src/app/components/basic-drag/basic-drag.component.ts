import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-drag',
  templateUrl: './basic-drag.component.html',
  styleUrls: ['./basic-drag.component.css']
})
export class BasicDragComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  allowDrop(ev){
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
}
