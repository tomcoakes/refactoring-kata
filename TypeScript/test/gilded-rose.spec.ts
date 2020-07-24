import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
  describe('unknown items', function () {
    [
      { quality: 0, sellIn: 0, expectedQuality: 0, expectedSellIn: -1},
      { quality: 50, sellIn: 0, expectedQuality: 48, expectedSellIn: -1},
      { quality: 51, sellIn: 0, expectedQuality: 49, expectedSellIn: -1},
      { quality: 0, sellIn: 1, expectedQuality: 0, expectedSellIn: 0},
      { quality: 50, sellIn: 1, expectedQuality: 49, expectedSellIn: 0},
      { quality: 51, sellIn: 1, expectedQuality: 50, expectedSellIn: 0},
      { quality: 0, sellIn: 11, expectedQuality: 0, expectedSellIn: 10},
      { quality: 50, sellIn: 11, expectedQuality: 49, expectedSellIn: 10},
      { quality: 0, sellIn: 12, expectedQuality: 0, expectedSellIn: 11},
      { quality: 50, sellIn: 12, expectedQuality: 49, expectedSellIn: 11},
      { quality: 0, sellIn: 7, expectedQuality: 0, expectedSellIn: 6},
      { quality: 50, sellIn: 7, expectedQuality: 49, expectedSellIn: 6},
    ].forEach(({ quality, sellIn, expectedQuality, expectedSellIn} ) => {
      it('sets the correct quality', function() {
        const gildedRose = new GildedRose([ new Item('foo', sellIn, quality) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].quality).to.equal(expectedQuality);
        expect(items[0].sellIn).to.equal(expectedSellIn);
      });
    })
  });
});
