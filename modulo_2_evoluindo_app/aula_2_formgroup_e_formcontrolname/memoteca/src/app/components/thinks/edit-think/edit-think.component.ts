import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IThink } from 'src/app/interface/IThink';
import { ThinkService } from 'src/app/service/thinks/think.service';

@Component({
  selector: 'app-edit-think',
  templateUrl: './edit-think.component.html',
  styleUrls: ['./edit-think.component.css']
})
export class EditThinkComponent implements OnInit {
  isLoading = true;
  think!: IThink;

  constructor(
    private service:ThinkService,
    private router: Router,
    private route: ActivatedRoute // fornece informações sobre os parametros da rota
  ) { }

  handleLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
   }

  ngOnInit(): void {
    this.handleLoading();

    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(Number(id)).subscribe((think) => {
      this.think = think;
    })
  }

  onClickEditThinkButton() {
    this.service.edit(this.think).subscribe(() => {
      this.router.navigate(['/lista-de-pensamentos']);
    })
  }
}
