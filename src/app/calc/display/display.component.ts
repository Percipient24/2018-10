import { Component, OnInit } from '@angular/core';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(
    private display: DisplayService
  ) { }

  ngOnInit() { }

}
