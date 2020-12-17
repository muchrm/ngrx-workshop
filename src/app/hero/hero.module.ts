import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromHero from './hero.reducer';
import { HeroContainerComponent } from './hero-container/hero-container.component';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './hero.effects';



@NgModule({
  declarations: [HeroContainerComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromHero.heroFeatureKey, fromHero.reducer),
    EffectsModule.forFeature([HeroEffects])
  ],
  exports:[HeroContainerComponent]
})
export class HeroModule { }
