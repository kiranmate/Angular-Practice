import { AlService } from './services/al.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FistCompComponent } from './fist-comp/fist-comp.component';
import { CardComponent } from './fist-comp/card.component';
import { BtnsComponent } from './fist-comp/btns/btns.component';
import { JomboComponent } from './fist-comp/jombo.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ExtensionComponent } from './databinding/extension.component';
import { LocalRefContVwChildComponent } from './local-ref-cont-vw-child/local-ref-cont-vw-child.component';
import { CustAlertComponent } from './cust-alert/cust-alert.component';
import { IntCompComV1Component } from './int-comp-com-v1/int-comp-com-v1.component';
import { AlPkComponent } from './int-comp-com-v1/al-pk.component';
import { AlMnComponent } from './int-comp-com-v1/al-mn.component';
import { DirectiveComponent } from './directive/directive.component';
import { SizerDirective } from './directive/sizer.directive';
import {CommonModule} from '@angular/common';
import { UnlessDirective } from './directive/unless.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ServicesComponent } from './services/services.component';
import { IotService } from './services/iot.service';
import { PickerComponent } from './services/picker.component';
import { MakerComponent } from './services/maker.component';

@NgModule({
  declarations: [
    AppComponent,
    FistCompComponent,
    CardComponent,
    BtnsComponent,
    JomboComponent,
    DatabindingComponent,
    ExtensionComponent,
    LocalRefContVwChildComponent,
    CustAlertComponent,
    IntCompComV1Component,
    AlPkComponent,
    AlMnComponent,
    DirectiveComponent,
    SizerDirective,
    UnlessDirective,
    LifecycleComponent,
    ServicesComponent,
    PickerComponent,
    MakerComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [IotService,AlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
