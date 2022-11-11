import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponentComponent } from './produit-component/produit-component.component';
import { FormAccountComponentComponent } from './form-account-component/form-account-component.component';
import { SaisirContactComponent } from './contacts/saisir-contact/saisir-contact.component'; 
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produit', component: ProduitComponentComponent },
  { path: 'form', component: FormAccountComponentComponent },
  {path: 'contact', component: SaisirContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
