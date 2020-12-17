import { reducer, initialState } from './dragon.reducer';
import * as actions from './dragon.actions';

describe('Dragon Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
  describe('an receive damage action', () => {
    it('should return hp loss', () => {
      const action = actions.receiveDamage({damage:30})

      const result = reducer(initialState, action);
      console.log(result)
      expect(result).toEqual({...initialState, hitPoint:75});
    });
  });
});
