import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonContainerComponent } from './dragon-container.component';

import * as fromDragon from '../dragon.reducer';
import { provideMockStore } from '@ngrx/store/testing';

describe('DragonContainerComponent', () => {
  let component: DragonContainerComponent;
  let fixture: ComponentFixture<DragonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragonContainerComponent ],
      providers:[
        provideMockStore({ initialState:fromDragon.initialState })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
