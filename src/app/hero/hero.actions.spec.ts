import * as fromHero from './hero.actions';

describe('attact Dragon', () => {
  it('should return an action', () => {
    expect(fromHero.attactDragon({addAttact:10}).type).toBe('[Hero] Attact Dragon');
  });
});
