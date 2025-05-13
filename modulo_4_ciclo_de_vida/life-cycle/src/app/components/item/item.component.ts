import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../interfaces/iItem';

@Component({
  selector: 'app-item',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() itemChanges = new EventEmitter<Item>();
  faPen = faPen;
  faTrash = faTrash

  ngOnInit(): void {
    console.log('onInit');
  }

  ngOnChanges(): void {
    console.log('onChanges');
  }

  onEditButton() {
    this.itemChanges.emit(this.item);
  }
}
