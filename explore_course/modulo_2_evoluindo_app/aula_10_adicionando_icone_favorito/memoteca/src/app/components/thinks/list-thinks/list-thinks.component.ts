import { Component, Input, OnInit } from '@angular/core';

import { IThink } from 'src/app/interface/IThink';
import { ThinkService } from 'src/app/service/thinks/think.service';

@Component({
  selector: 'app-list-thinks',
  templateUrl: './list-thinks.component.html',
  styleUrls: ['./list-thinks.component.css']
})

export class ListThinksComponent implements OnInit {
  isLoading = true;
  listThinksByPage: IThink[] = [];
  currentPage: number = 1;
  hasMoreThinks: boolean = true;
  filter: string = "";

  constructor(private service: ThinkService) { }

  async ngOnInit(): Promise<void> {
    this.handleLoading();

    this.service.listByPage(this.currentPage, this.filter).subscribe((listThinksByPage) => {
      this.listThinksByPage = listThinksByPage;
    })
  }

  loadMoreThinks() {
    this.service.listByPage(++this.currentPage, this.filter).subscribe((listThinksByPage) => {
      this.listThinksByPage.push(...listThinksByPage);
      if (listThinksByPage.length === 0) this.hasMoreThinks = false;
    })
  }

  handleLoading() {
    setTimeout(() => this.isLoading = false, 2000);
  }

  onKeyup() {
    this.hasMoreThinks = true;
    this.currentPage = 1;

    this.service.listByPage(this.currentPage, this.filter).subscribe((listThinksByPage) => {
      this.listThinksByPage = listThinksByPage;
    });
  }
}
