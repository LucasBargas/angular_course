import { Component, OnInit } from '@angular/core';
import { IThink } from 'src/app/interface/IThink';
import { ThinkService } from 'src/app/service/thinks/think.service';

@Component({
  selector: 'app-list-thinks',
  templateUrl: './list-thinks.component.html',
  styleUrls: ['./list-thinks.component.css']
})

export class ListThinksComponent implements OnInit {
  isLoading = true;
  test = Array.from({ length: 10 }, (_, i) => i + 1);

  listThinks: IThink[] = [];

  constructor(private service: ThinkService) { }

  async ngOnInit(): Promise<void> {
    this.handleLoading();

    this.service.list().subscribe((listThinks) => {
      this.listThinks = listThinks.reverse();
    })

    console.log(this.test);
  }

  handleLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
   }

}
