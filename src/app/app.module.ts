import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxTreeModule } from 'jqwidgets-ng/jqxtree';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    jqxGridModule,
    jqxTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
