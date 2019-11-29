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

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('liItem', ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    const elementId = ev.dataTransfer.getData('liItem');
    if (ev.target.tagName === 'UL') {
      ev.target.appendChild(document.getElementById(elementId));
    } else {
      ev.target.parentElement.appendChild(document.getElementById(elementId));
    }
  }
}
