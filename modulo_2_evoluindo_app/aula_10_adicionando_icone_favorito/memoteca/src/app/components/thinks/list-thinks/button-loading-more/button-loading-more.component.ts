import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-loading-more',
  templateUrl: './button-loading-more.component.html',
  styleUrls: ['./button-loading-more.component.css']
})
export class ButtonLoadingMoreComponent implements OnInit {
  @Input() hasMoreThinks!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
