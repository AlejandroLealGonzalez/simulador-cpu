import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { AluComponent } from './alu/alu.component';
import { BrComponent } from './br/br.component';
import { BusesComponent } from './buses/buses.component';
import { CpComponent } from './cp/cp.component';
import { FormComponent } from './form/form.component';
import { MarComponent } from './mar/mar.component';
import { MbrComponent } from './mbr/mbr.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { RiComponent } from './ri/ri.component';
import { UcComponent } from './uc/uc.component';

@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent,
    AluComponent,
    BrComponent,
    BusesComponent,
    CpComponent,
    FormComponent,
    MarComponent,
    MbrComponent,
    MemoriaComponent,
    RiComponent,
    UcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
