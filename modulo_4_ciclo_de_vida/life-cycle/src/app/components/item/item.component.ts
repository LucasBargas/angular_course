import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../interfaces/iItem';

@Component({
  selector: 'app-item',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter<Item>();
  @Output() emitindoIdParaDeletar = new EventEmitter();
  faPen = faPen;
  faTrash = faTrash

  ngOnInit(): void {
    console.log('onInit');
  }

  ngOnChanges(): void {
    console.log('onChanges');
  }

  onEditButton() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  onDeleteButton() {
    console.log('Estão tentando me calar.')
    this.emitindoIdParaDeletar.emit(this.item.id)
  }

  ngOnDestroy(): void {
    console.log('Consguriram me calar');
  }
}
