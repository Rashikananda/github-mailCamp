import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DemoMaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { DataService } from "./service/data.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddMailComponent } from './add-mail/add-mail.component';
import { TemplatesComponent } from './templates/templates.component';
// import { CommonHighChartsComponent } from './highCharts/common-high-charts/common-high-charts';

@NgModule({
  declarations: [
    AppComponent,
    // CommonHighChartsComponent,
    HeaderComponent,
    DashboardComponent,
    AddMailComponent,
    TemplatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
