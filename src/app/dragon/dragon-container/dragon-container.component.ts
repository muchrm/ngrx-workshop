import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromDragon from '../dragon.reducer';
import * as dragonActions from '../dragon.actions';
import * as dragonSelectors from '../dragon.selectors'
import * as fromApp from '../../reducers'
@Component({
  selector: 'app-dragon-container',
  templateUrl: './dragon-container.component.html',
  styleUrls: ['./dragon-container.component.scss']
})
export class DragonContainerComponent implements OnInit {

  hp$ = this.store$.select(dragonSelectors.selectHitPoint)
  constructor(private store$:Store<fromApp.State>) { }

  ngOnInit(): void {
  }

}
