import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkingWithStringComponent } from './components/working-with-string/working-with-string.component';
import { WorkingWithArrayComponent } from './components/working-with-array/working-with-array.component';
import { WorkingWithNgModelComponent } from './components/working-with-ng-model/working-with-ng-model.component';
import { WorkingWithUpAndDownComponent } from './components/working-with-up-and-down/working-with-up-and-down.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkingWithStringComponent,
    WorkingWithArrayComponent,
    WorkingWithNgModelComponent,
    WorkingWithUpAndDownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
