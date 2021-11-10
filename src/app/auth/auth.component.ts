import { Component } from "@angular/core"

@Component({
    selector: "steam.auth",
    templateUrl: "auth.component.html"
})

export class AuthComponent{
    public onSubmit(data: any) {
        console.log("Button Clicked");
        console.log(data);
    }
}