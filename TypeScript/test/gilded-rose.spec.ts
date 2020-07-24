import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
  describe('unknown items', function () {
    it('should not update the quality for unknown items', function() {
      const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal('foo');
      expect(items[0].quality).to.equal(0);
    });

    it('should reduce the sellIn by 1 for unknown items', function() {
      const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(-1);
    });
  });
});
