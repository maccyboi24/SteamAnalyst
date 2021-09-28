import { Component, Input } from "@angular/core";

@Component({
    selector: 'item-card',
    templateUrl: './item-card.component.html'
})

export class ItemCardComponent{
    @Input()
    itemName! :string;
    @Input()
    fnPrice! :string;
    @Input()
    mwPrice! :string;
    @Input()
    img! :string;

}