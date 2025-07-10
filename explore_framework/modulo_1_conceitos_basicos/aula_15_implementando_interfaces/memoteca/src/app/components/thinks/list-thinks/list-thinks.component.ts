import { Component, OnInit } from '@angular/core';
import { IThink } from 'src/app/interface/IThink';

@Component({
  selector: 'app-list-thinks',
  templateUrl: './list-thinks.component.html',
  styleUrls: ['./list-thinks.component.css']
})
export class ListThinksComponent implements OnInit {
  isLoading = true;

  listThinks: IThink[] = [];

  constructor() { }

  handleLoading() {
   setTimeout(() => {
     this.isLoading = false;
   }, 2000);
  }

  async ngOnInit(): Promise<void> {
    this.handleLoading();
  }
}
