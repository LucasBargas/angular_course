import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  // think!: IThink;
  form!: FormGroup;

  constructor(
    private service:ThinkService,
    private router: Router,
    private route: ActivatedRoute, // fornece informações sobre os parametros da rota
    private formBuilder: FormBuilder
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
      this.form = this.formBuilder.group({
        id: [think.id],
        content: [think.content, [Validators.required]],
        autoria: [think.autoria, [Validators.required]],
        model: [think.model]
      })
    })
  }

  onClickEditThinkButton() {
    if(this.form.valid) {
      this.service.edit(this.form.value).subscribe();
      this.router.navigate(['/lista-de-pensamentos']);
      return;
    }
  }
}
