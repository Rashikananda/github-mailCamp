import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';

// import { CommonHighChartsComponent } from './highCharts/common-high-charts/common-high-charts';

const routes: Routes = [
  { path: "", redirectTo: "/Dashboard", pathMatch: "full" },
  { path: "Dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
