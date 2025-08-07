import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UpdatePageComponent } from './update-page/update-page.component';
import { AddNewPageComponent } from './add-new-page/add-new-page.component';

export const routes: Routes = [
    {path : "home" , component : HomeComponent},
    {path : "" , redirectTo : "/home" , pathMatch : "full"},
    {path : "update/:id" , component : UpdatePageComponent},
    {path : "add" , component : AddNewPageComponent}
];
