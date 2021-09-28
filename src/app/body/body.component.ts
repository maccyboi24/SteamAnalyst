import { Component } from "@angular/core";
import { ItemCard } from "./item-card.model";

@Component({
    selector: 'steam-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
    itemCards:ItemCard[] = [];
}