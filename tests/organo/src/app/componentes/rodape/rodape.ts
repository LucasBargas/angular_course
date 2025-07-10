import { Component, input } from '@angular/core';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [],
  templateUrl: './rodape.html',
  styleUrl: './rodape.css',
})
export class RodapeComponent {
  src = input.required();
  alt = input.required();
}
