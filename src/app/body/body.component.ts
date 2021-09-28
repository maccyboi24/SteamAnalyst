import { Component } from "@angular/core";
import { ItemCard } from "./item-card.model";
import { mock_items } from "./mock-items";

@Component({
    selector: 'steam-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
    itemCards:ItemCard[] = [];

    constructor() {
        for(var itemcard of mock_items){
            this.itemCards.push(new ItemCard(itemcard));
        }
    }
}