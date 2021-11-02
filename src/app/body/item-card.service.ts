import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ItemCard } from "./item-card.model";

@Injectable({
    providedIn: 'root'
})
export class ItemCardService{
    private baseUrl:string = 'https://steamanalyst-app-default-rtdb.firebaseio.com/';
    private cardInfoEndpoint:string = 'card-info.json';
    constructor(private http: HttpClient){
        
    }

    getItemCard(){
        console
        return this.http.get<ItemCard >(this.baseUrl + this.cardInfoEndpoint);
    }
    
}