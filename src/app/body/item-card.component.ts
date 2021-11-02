import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'item-card',
    templateUrl: './item-card.component.html'
})

export class ItemCardComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
    @Input()
    itemName! :string;
    @Input()
    fnPrice! :string;
    @Input()
    mwPrice! :string;
    @Input()
    img! :string;

}