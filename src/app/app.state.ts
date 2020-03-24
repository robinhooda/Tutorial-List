import { Tutorial } from './models/ngrx-store.module';

export interface AppState {
    readonly tutorial: Tutorial[];
}
