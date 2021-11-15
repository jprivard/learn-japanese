import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SubjectActions } from './actions';
import { Filter } from './enums/filter.enum';
import { LoadBy } from './enums/load-by.enum';
import * as queries from "./selectors";

@Injectable({ providedIn: 'root' })
export class WanikaniFacade {

  public all$ = this.store.pipe(select(queries.subject.selectSubjects));
  public filtered$ = this.store.pipe(select(queries.subject.selectFilteredSubjects));
  public isLoading$ = this.store.pipe(select(queries.subject.isLoading));
  public isCompleted$ = this.store.pipe(select(queries.subject.isCompleted));
  public filter$ = this.store.pipe(select(queries.subject.selectFilter));

  constructor(private store: Store) {}

  public loadByReview() {
    this.store.dispatch(SubjectActions.load({ load: { by: LoadBy.review }}));
  }

  public loadByLevel(value: string) {
    this.store.dispatch(SubjectActions.load({ load: { by: LoadBy.level, value }}));
  }

  public filterBy(filter: Filter) {
    this.store.dispatch(SubjectActions.filter({ filter }))
  }

  public getFilterOptions(): string[] {
    return Object.values(Filter);
  }
}