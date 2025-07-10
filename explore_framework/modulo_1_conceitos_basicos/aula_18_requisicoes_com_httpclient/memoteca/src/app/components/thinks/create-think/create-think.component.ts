import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IThink } from 'src/app/interface/IThink';
import { ThinkService } from 'src/app/service/thinks/think.service';

@Component({
  selector: 'app-create-think',
  templateUrl: './create-think.component.html',
  styleUrls: ['./create-think.component.css']
})
export class CreateThinkComponent implements OnInit {
  isLoading = true;

  think: IThink = {
    content: "",
    autoria: "",
    model: "modelo1"
  }

  constructor(
    private service: ThinkService,
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  onClickCreateThinkButton() {
    this.service.create(this.think).subscribe();
    this.router.navigate(['/lista-de-pensamentos']);
  }
}
