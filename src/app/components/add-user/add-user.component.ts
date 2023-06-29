import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionAddUser, actionSelectUserByName } from 'src/app/actions/user.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
  }

  addUser() {
    console.log('add user');
    this.store.dispatch(actionAddUser({user: {name: `user${Math.floor(Math.random() * 100)}`}}));
  }

  logout() {
    this.store.dispatch(actionSelectUserByName({name: ''}))
  }
}
