import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { SubjectActions } from '../actions';
import { WanikaniService } from '../services/wanikani.service';

@Injectable()
export class SubjectEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubjectActions.load),
      mergeMap(() => this.service.loadByReview().pipe(
        map(subjects => SubjectActions.loaded({ subjects })),
        catchError((error) => of(SubjectActions.loadFailed({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private service: WanikaniService
  ) {}
}
