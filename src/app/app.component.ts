import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { selectSelectedUserName } from './selectors/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fast2';
  selectedUserName$ = this.store.select(selectSelectedUserName);
  constructor(
    private store: Store<State>

  ) { }

  getMainStyle(username: string){
    return {
      'main': username ? true : false,
    }
  }
}
