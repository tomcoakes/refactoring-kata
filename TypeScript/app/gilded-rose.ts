export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;
    public static backstagePassName = 'Backstage passes to a TAFKAL80ETC concert'
    public static agedBrie = 'Aged Brie'
    public static sulfuras = 'Sulfuras, Hand of Ragnaros'

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
          const item = this.items[i]
            if (item.name != GildedRose.agedBrie && item.name != GildedRose.backstagePassName) {
                if (item.quality > 0) {
                    if (item.name != GildedRose.sulfuras) {
                        item.quality = item.quality - 1
                    }
                }
            } else {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                    if (item.name == GildedRose.backstagePassName) {
                        if (item.sellIn < 11) {
                            if (item.quality < 50) {
                                item.quality = item.quality + 1
                            }
                        }
                        if (item.sellIn < 6) {
                            if (item.quality < 50) {
                                item.quality = item.quality + 1
                            }
                        }
                    }
                }
            }
            if (item.name != GildedRose.sulfuras) {
                item.sellIn = item.sellIn - 1;
            }
            if (item.sellIn < 0) {
                if (item.name != GildedRose.agedBrie) {
                    if (item.name != GildedRose.backstagePassName) {
                        if (item.quality > 0) {
                            if (item.name != GildedRose.sulfuras) {
                                item.quality = item.quality - 1
                            }
                        }
                    } else {
                        item.quality = item.quality - item.quality
                    }
                } else {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}
