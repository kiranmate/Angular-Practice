import { AlService } from './al.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  template: `
  <div class="row">
  <div class="col-md-12">
          <div class="card" style="width: 18rem;">
                 
                  <div class="card-body">
                    <h5 class="card-title">pick the alert</h5>
                    <div class="alert alert-primary" role="alert" (click)="onpick('alert alert-primary')">
                          A simple primary alert—check it out!
                        </div>
                        <div class="alert alert-secondary" role="alert" (click)="onpick('alert alert-secondary')">
                          A simple secondary alert—check it out!
                        </div>
                        <div class="alert alert-success" role="alert" (click)="onpick('alert alert-success')">
                          A simple success alert—check it out!
                        </div>
                        <div class="alert alert-danger" role="alert" (click)="onpick('alert alert-danger')">
                          A simple danger alert—check it out!
                        </div>
                        <div class="alert alert-warning" role="alert" (click)="onpick('alert alert-warning')">
                          A simple warning alert—check it out!
                        </div>
                        <div class="alert alert-info" role="alert" (click)="onpick('alert alert-info')">
                          A simple info alert—check it out!
                        </div>
                        <div class="alert alert-light" role="alert" (click)="onpick('alert alert-light')">
                          A simple light alert—check it out!
                        </div>
                        <div class="alert alert-dark" role="alert" (click)="onpick('alert alert-dark')">
                          A simple dark alert—check it out!
                        </div>

                  </div>
                </div>
  </div>
</div>

  `,
  styles: []
})
export class PickerComponent implements OnInit {

  constructor(private alsv:AlService) { }

  ngOnInit() {
  }
  onpick(al:string){
   this.alsv.publishAl()
  }

}
