import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThinkService } from 'src/app/service/thinks/think.service';

@Component({
  selector: 'app-create-think',
  templateUrl: './create-think.component.html',
  styleUrls: ['./create-think.component.css']
})
export class CreateThinkComponent implements OnInit {
  isLoading = true;
  form!: FormGroup;

  constructor(
    private service: ThinkService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.handleLoading();

    this.form = this.formBuilder.group({
      content: ['', [Validators.required]],
      autoria: ['', [Validators.required]],
      model: ['modelo1']
    })
  }

  onClickCreateThinkButton() {
    if(this.form.valid) {
      this.service.create(this.form.value).subscribe();
      this.router.navigate(['/lista-de-pensamentos']);
      return;
    }
  }

  handleLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
