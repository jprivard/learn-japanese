import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromWanikani from './reducers';
import { effects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromWanikani.FEATURE_KEY, fromWanikani.reducers),
    EffectsModule.forFeature(effects)
  ],
})
export class WanikaniModule {}
