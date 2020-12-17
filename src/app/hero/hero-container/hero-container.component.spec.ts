import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { HeroContainerComponent } from './hero-container.component';

import * as fromHero from '../hero.reducer'

describe('HeroContainerComponent', () => {
  let component: HeroContainerComponent;
  let fixture: ComponentFixture<HeroContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroContainerComponent ],
      providers:[
        provideMockStore({ initialState:fromHero.initialState })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
