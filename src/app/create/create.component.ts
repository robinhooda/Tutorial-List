import { Component, OnInit } from '@angular/core';
import * as TutorialActions from '../actions/ngrx-store.actions';
import { Tutorial } from '../models/ngrx-store.module';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {

  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }));
  }

  ngOnInit() {
  }

}
