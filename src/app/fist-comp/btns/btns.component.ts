import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btns',
  template: `
  <p class="text-muted"> view encapsulation --in btns</p>
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  `,
  styles: [`
 
  `]
})
export class BtnsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
