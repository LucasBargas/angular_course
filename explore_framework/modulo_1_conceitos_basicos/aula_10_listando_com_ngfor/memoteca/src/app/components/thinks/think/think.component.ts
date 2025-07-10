import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-think',
  templateUrl: './think.component.html',
  styleUrls: ['./think.component.css']
})
export class ThinkComponent implements OnInit {
  think = {
    content: "I love Angular!",
    autoria: "Lucas Bargas",
    model: "modelo3"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
