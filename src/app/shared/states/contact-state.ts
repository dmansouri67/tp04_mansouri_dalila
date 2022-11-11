import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { AddContact, DelContact } from '../actions/contact-action';
import { ContactStateModel } from './contact-state-model';
import { Contact } from '../models/contact';

@State<ContactStateModel>({
  name: 'contacts',
  defaults: {
    contacts: [],
  },
})
@Injectable()
export class ContactState {
  @Selector()
  static getNbContacts(state: ContactStateModel) {
    return state.contacts.length;
  }

  static getNbContactsFavoris(fav: boolean) {
    return createSelector([ContactState], (state: ContactStateModel) => {
      return state.contacts.filter((c) => c.favoris == fav).length;
    });
  }
  @Selector()
  static getListeContacts(state: ContactStateModel) {
    return state.contacts;
  }

  @Selector()
  static getFavorisContacts(state: ContactStateModel) {
    return state.contacts.filter((x) => x.favoris);
  }

  @Action(AddContact)
  add(
    { getState, patchState }: StateContext<ContactStateModel>,
    { payload }: AddContact
  ) {
    const state = getState();
    patchState({
      contacts: [...state.contacts, payload],
    });
  }

  @Action(DelContact)
  del(
    { getState, patchState }: StateContext<ContactStateModel>,
    { payload }: DelContact
  ) {
    const state = getState();
    patchState({
      contacts: state.contacts.filter(
        (x) => !(payload.nom == x.nom && payload.prenom == x.prenom)
      ),
    });
  }
}
