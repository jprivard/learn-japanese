import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SubjectActions } from './actions';
import { LoadBy } from './enums/load-by.enum';

@Injectable({ providedIn: 'root' })
export class WanikaniFacade {
  constructor(private store: Store) {}

  public loadByReview() {
    this.store.dispatch(SubjectActions.load({ load: { by: LoadBy.review }}));
  }

  public loadByLevel(value: string) {
    this.store.dispatch(SubjectActions.load({ load: { by: LoadBy.level, value }}));
  }
}