import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDragon from './dragon.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDragon.dragonFeatureKey, fromDragon.reducer)
  ]
})
export class DragonModule { }
