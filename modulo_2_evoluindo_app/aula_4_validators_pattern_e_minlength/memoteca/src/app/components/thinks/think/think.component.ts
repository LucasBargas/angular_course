import { Component, Input, OnInit } from '@angular/core';
import { IThink } from 'src/app/interface/IThink';
import { ThinkService } from 'src/app/service/thinks/think.service';

@Component({
  selector: 'app-think',
  templateUrl: './think.component.html',
  styleUrls: ['./think.component.css']
})
export class ThinkComponent implements OnInit {
  @Input() think!: IThink; // Herdei o atributo da classe pai ListThinksComponent

  constructor(private service: ThinkService) { }

  ngOnInit(): void {

  }

  thinkSize(): string {
    const {content} = this.think;
    return content.length >= 256 ? "think-g" : "think-p";
  }
}
