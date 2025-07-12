import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Cars | Home",
  },
  {
    path: "admin",
    component: AdminComponent,
    title: "Cars | Admin",
    data: {
      name: "admin",
    },
  },
  { path: "**", component: NotFoundComponent },
];
