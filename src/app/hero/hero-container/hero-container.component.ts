import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromHero from '../hero.reducer';
import * as heroActions from '../hero.actions';
@Component({
  selector: 'app-hero-container',
  templateUrl: './hero-container.component.html',
  styleUrls: ['./hero-container.component.scss']
})
export class HeroContainerComponent implements OnInit {

  constructor(private store$:Store<fromHero.State>) { }

  ngOnInit(): void {
  }

  attact(damage:number){
    this.store$.dispatch(heroActions.attactDragon({addAttact:damage}))
  }

}
