import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadrestComponentComponent } from './headrest-component/headrest-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormAccountComponentComponent } from './form-account-component/form-account-component.component';
import { RecapComponentComponent } from './recap-component/recap-component.component';
import { ControlDirectiveDirective } from './directive/control-directive.directive';
import { PipeFormatPipe } from './pipe/pipe-format.pipe';
import { ProduitComponentComponent } from './produit-component/produit-component.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { SaisirContactComponent } from './contacts/saisir-contact/saisir-contact.component';
import { ListeContactsComponent } from './contacts/liste-contacts/liste-contacts.component';
import { LiensComponent } from './liens/liens.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadrestComponentComponent,
    FooterComponentComponent,
    FormAccountComponentComponent,
    RecapComponentComponent,
    ControlDirectiveDirective,
    PipeFormatPipe,
    ProduitComponentComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    SaisirContactComponent,
    ListeContactsComponent,
    LiensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
