import { Component, OnInit } from '@angular/core';
import { IThink } from 'src/app/interface/IThink';

@Component({
  selector: 'app-create-think',
  templateUrl: './create-think.component.html',
  styleUrls: ['./create-think.component.css']
})
export class CreateThinkComponent implements OnInit {
  isLoading = true;

  think: IThink = {
    id: 1,
    content: "Aprendendo Angular",
    autoria: "Dev",
    model: "modelo1"
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  onClickCreateThinkButton() {
    alert("Pensamento criado!");
  }

  onClickCancelButton() {
    alert("Pensamento cancelado!");
  }
}
