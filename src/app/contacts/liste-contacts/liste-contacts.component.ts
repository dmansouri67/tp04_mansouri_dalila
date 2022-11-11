import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Contact } from 'src/app/shared/models/contact';
import { DelContact } from 'src/app/shared/actions/contact-action';
import { ContactState } from 'src/app/shared/states/contact-state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.component.html',
  styleUrls: ['./liste-contacts.component.css'],
})
export class ListeContactsComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(ContactState.getListeContacts) liste$: Observable<Contact[]>;
  ngOnInit() {}

  delContact(c: Contact): void {
    this.store.dispatch(new DelContact(c));
  }
}
