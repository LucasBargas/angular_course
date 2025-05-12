import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../interfaces/iItem';

@Component({
  selector: 'app-item',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }
}
