import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionSelectUserByName } from 'src/app/actions/user.actions';
import { State } from 'src/app/reducers';
import { selectSelectedUser, selectSelectedUserName, selectUsers } from 'src/app/selectors/user.selectors';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users$ = this.store.select(selectUsers);
  selectedUserName$ = this.store.select(selectSelectedUserName);
  selectedUser$ = this.store.select(selectSelectedUser)
  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
  }
  selectUserByName(name: string){
    this.store.dispatch(actionSelectUserByName({name}))
  }

}
