import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Location,HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { ImagelistComponent } from './imagelist/imagelist.component';

import { ImageService }  from './services/image.service';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImagelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgMasonryGridModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ImageService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
