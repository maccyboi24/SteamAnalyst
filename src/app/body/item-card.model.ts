export class ItemCard {

    itemName: string;
    fnPrice: string;
    mwPrice: string;
    img: string;

    constructor({ itemName, fnPrice, mwPrice, img }:
        { itemName: string, fnPrice: string, mwPrice: string, img: string }) {
        this.itemName = itemName;
        this.fnPrice = fnPrice;
        this.mwPrice = mwPrice;
        this.img = img;
    }
}
