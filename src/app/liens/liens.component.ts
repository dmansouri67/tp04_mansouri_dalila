import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Contact } from '../../../src/app/shared/models/contact';
import { ContactState } from '../../../src/app/shared/states/contact-state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liens',
  templateUrl: './liens.component.html',
  styleUrls: ['./liens.component.css'],
})
export class LiensComponent implements OnInit {
  constructor(private router: Router) { }

  id: number = 2;
  ngOnInit() {}

  @Select(ContactState.getNbContacts) nb$: Observable<number>;

  @Select(ContactState.getFavorisContacts) listeFavoris$: Observable<Contact[]>;
  goToContact() {
    this.router.navigate(['contact']);
  }

}
