import { Component, OnInit } from '@angular/core';
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
  listThinksByPage: IThink[] = [];
  currentPage: number = 1;
  hasMoreThinks: boolean = true;
  filter: string = "";
  favorite: boolean = false;
  favoriteList: IThink[] = []


  constructor(private service: ThinkService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.handleLoading();

    this.service.listByPage(this.currentPage, this.filter, this.favorite).subscribe((listThinksByPage) => {
      this.listThinksByPage = listThinksByPage;
    })
  }

  loadMoreThinks() {
    this.service.listByPage(++this.currentPage, this.filter, this.favorite).subscribe((listThinksByPage) => {
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

    this.service.listByPage(this.currentPage, this.filter, this.favorite).subscribe((listThinksByPage) => {
      this.listThinksByPage = listThinksByPage;
    });
  }

  onClickFavoritesListButton() {
    this.favorite = true;
    this.hasMoreThinks = true;
    this.currentPage = 1;

    this.service.listByPage(this.currentPage, this.filter, this.favorite).subscribe((listByPage) => {
      this.listThinksByPage = listByPage;
      this.favoriteList = listByPage
    });
  }

  onClickListButton() {
    this.favorite = false;
    this.currentPage = 1;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
