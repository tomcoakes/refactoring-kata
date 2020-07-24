enum Quality {
    LOW,
    MEDIUM,
    HIGH
}

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    get qualityRanking() {
        if (this.quality > 0) {
            if (this.quality > 50) {
                return Quality.HIGH
            }
            return Quality.MEDIUM
        }
        return Quality.LOW
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
            const isAgedBrie = item.name == GildedRose.agedBrie
            const isBackstagePass = item.name == GildedRose.backstagePassName
            const isSulfuras = item.name == GildedRose.sulfuras

            if (!isAgedBrie && !isBackstagePass) {
                if (item.qualityRanking > Quality.LOW) {
                    if (!isSulfuras) {
                        item.quality = item.quality - 1
                    }
                }
            } else {
                if (item.qualityRanking < Quality.HIGH) {
                    item.quality = item.quality + 1
                    if (isBackstagePass) {
                        if (item.sellIn < 11) {
                            if (item.qualityRanking < Quality.HIGH) {
                                item.quality = item.quality + 1
                            }
                        }
                        if (item.sellIn < 6) {
                            if (item.qualityRanking < Quality.HIGH) {
                                item.quality = item.quality + 1
                            }
                        }
                    }
                }
            }
            if (!isSulfuras) {
                item.sellIn = item.sellIn - 1;
            }
            if (item.sellIn < 0) {
                if (!isAgedBrie) {
                    if (!isBackstagePass) {
                        if (item.qualityRanking > Quality.LOW) {
                            if (!isSulfuras) {
                                item.quality = item.quality - 1
                            }
                        }
                    } else {
                        item.quality = item.quality - item.quality
                    }
                } else {
                    if (item.qualityRanking < Quality.HIGH) {
                        item.quality = item.quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}
