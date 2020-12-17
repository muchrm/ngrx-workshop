import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDragon from './dragon.reducer';
import { DragonContainerComponent } from './dragon-container/dragon-container.component';



@NgModule({
  declarations: [DragonContainerComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDragon.dragonFeatureKey, fromDragon.reducer)
  ],
  exports:[DragonContainerComponent]
})
export class DragonModule { }
