import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

import { SidenavOverviewExample } from './sidenav-overview-example/sidenav-overview-example'; 
import { SidenavPositionExample } from './sidenav-position-example/sidenav-position-example'; 
import { SidenavOpenCloseExample } from './sidenav-open-close-example/sidenav-open-close-example'; 
import { ToolbarOverviewExample } from './toolbar-overview-example/toolbar-overview-example'; 

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ]),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavOpenCloseExample,
    ToolbarOverviewExample
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/