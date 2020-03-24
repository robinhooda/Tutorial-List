import { Action, ActionReducerMap } from '@ngrx/store';
import { Tutorial } from '../models/ngrx-store.module';
import * as TutorialActions from '../actions/ngrx-store.actions';
import { AppState } from '../app.state';

// Section 1
const initialState: Tutorial = {
    name: 'Angular Ngrx Store Tutorial',
    url: 'https://coursetro.com/posts/code/151/Angular-Ngrx-Store-Tutorial---Learn-Angular-State-Management'
};

// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    // Section 3
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            const index = action.payload;
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}

