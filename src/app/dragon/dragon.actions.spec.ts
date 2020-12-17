import * as fromDragon from './dragon.actions';

describe('receive damage', () => {
  it('should return an action', () => {
    expect(fromDragon.receiveDamage({damage:30}).type).toBe('[Dragon] Receive Damage');
  });
});
