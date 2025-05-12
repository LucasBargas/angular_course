import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  valorItem!: string;

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    console.log(this.valorItem)
    this.valorItem = '';
  }
}
