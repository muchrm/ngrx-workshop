import { TestBed } from '@angular/core/testing';
import { provideMockActions  } from '@ngrx/effects/testing';
import { provideMockStore, MockStore  } from '@ngrx/store/testing';

import { Action } from '@ngrx/store';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import * as HeroActions from './hero.actions';

import * as DragonAction from '../dragon/dragon.actions';
import { HeroEffects } from './hero.effects';
import * as fromHero from './hero.reducer'

describe('HeroEffects', () => {
  let actions$: Observable<Action>;
  let effects: HeroEffects;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState:fromHero.initialState })
      ]
    });

    effects = TestBed.inject(HeroEffects);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should attactDragonSuccess when dispatch attactDragon and should ditpatch dragon receiveDamage ', () => {
    actions$ = hot('-a--', {
      a: HeroActions.attactDragon({addAttact:30}),
    });

    const expected = hot('-(ab)--', {
      a: HeroActions.attactDragonSuccess(),
      b:DragonAction.receiveDamage({damage:50}),
    });

    expect(effects.attactDragon$).toBeObservable(expected);
  });
});
