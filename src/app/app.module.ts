import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StructDirectiveComponent } from './components/struct-directive/struct-directive.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StructDirectiveComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
