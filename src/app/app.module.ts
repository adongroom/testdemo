import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from "ng-zorro-antd";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DatePipe } from "@angular/common";




@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // QuestionnaireModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    AppComponent,


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
