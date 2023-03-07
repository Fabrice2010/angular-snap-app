import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EbitLibraryComponent } from './ebit-library/ebit-library.component';
import { SnapPicComponent } from './snap-pic/snap-pic.component';


@NgModule({
  declarations: [
    AppComponent,
    EbitLibraryComponent,
    SnapPicComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
