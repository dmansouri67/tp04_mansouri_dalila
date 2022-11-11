import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecapComponentComponent } from './recap-component/recap-component.component';
import { ProduitComponentComponent } from './produit-component/produit-component.component';
import { FormAccountComponentComponent } from './form-account-component/form-account-component.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produit', component: ProduitComponentComponent },
  { path: 'form', component: FormAccountComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
