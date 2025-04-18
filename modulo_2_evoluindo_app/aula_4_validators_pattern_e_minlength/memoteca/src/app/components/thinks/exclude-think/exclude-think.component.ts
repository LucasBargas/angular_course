import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IThink } from 'src/app/interface/IThink';
import { ThinkService } from 'src/app/service/thinks/think.service';

@Component({
  selector: 'app-exclude-think',
  templateUrl: './exclude-think.component.html',
  styleUrls: ['./exclude-think.component.css']
})
export class ExcludeThinkComponent implements OnInit {
  think!: IThink;

  constructor(
    private service:ThinkService,
    private router: Router,
    private route: ActivatedRoute // fornece informações sobre os parametros da rota
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(Number(id)).subscribe((think) => {
      this.think = think;
    })
  }

  onClinkExcludeButton(): void {
    this.service.exclude(this.think.id!).subscribe(() => {
      this.router.navigate(['/lista-de-pensamentos']);
    })
  }

  onClinkCancelButton(): void {
    this.router.navigate(['/lista-de-pensamentos']);
  }
}
