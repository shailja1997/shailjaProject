import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  arey: string[] = [];

  addTask(item: HTMLInputElement) {
    if (item.value.length) {
      this.arey.push(item.value);
      item.value = '';
    }
  }
  removeTask(item: number) {
    this.arey.splice(item, 1)
  }
}



