import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IThink } from 'src/app/interface/IThink';
import { ThinkService } from 'src/app/service/thinks/think.service';

@Component({
  selector: 'app-list-thinks',
  templateUrl: './list-thinks.component.html',
  styleUrls: ['./list-thinks.component.css']
})

export class ListThinksComponent implements OnInit {
  isLoading = true;
  listThinks: IThink[] = [];
  currentPage: number = 1;
  hasMoreThinks: boolean = true;

  constructor(private service: ThinkService) { }

  async ngOnInit(): Promise<void> {
    this.handleLoading();

    this.service.list(this.currentPage).subscribe((listThinks) => {
      this.listThinks = listThinks.reverse();
    })
  }

  loadMoreThinks() {
    this.service.list(++this.currentPage).subscribe((listThinks) => {
      this.listThinks.push(...listThinks);
      if (listThinks.length === 0) {
        this.hasMoreThinks = false;
      }
    })
  }

  handleLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
   }

}
