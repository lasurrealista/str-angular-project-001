import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { CardsComponent } from './common/cards/cards.component';
import { Cat03Component } from './page/cat03/cat03.component';
import { ProductfilterPipe } from './pipe/productfilter.pipe';
import { ProductsortPipe } from './pipe/productsort.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from './common/action-button/action-button.component';
import { ActionButtonGroupComponent } from './common/action-button-group/action-button-group.component';
import { IconComponent } from './common/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    CardsComponent,
    Cat03Component,
    ProductfilterPipe,
    ProductsortPipe,
    AdminComponent,
    DataEditorComponent,
    ActionButtonComponent,
    ActionButtonGroupComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
