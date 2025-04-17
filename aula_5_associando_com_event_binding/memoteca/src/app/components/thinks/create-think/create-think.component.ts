import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-think',
  templateUrl: './create-think.component.html',
  styleUrls: ['./create-think.component.css']
})
export class CreateThinkComponent implements OnInit {
  think = {
    id: '1',
    content: "Aprendendo Angular",
    autoria: "Dev",
    model: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClickCreateThinkButton() {
    alert("Pensamento criado!");
  }

  onClickCancelButton() {
    alert("Pensamento cancelado!");
  }
}
