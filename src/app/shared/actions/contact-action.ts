import { Contact } from '../models/contact';

export class AddContact {
  static readonly type = '[Contact] Add';

  constructor(public payload: Contact) {}
}

export class DelContact {
  static readonly type = '[Contact] Del';

  constructor(public payload: Contact) {}
}
