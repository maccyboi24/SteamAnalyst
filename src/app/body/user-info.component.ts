import { Component,Injectable, OnInit } from "@angular/core";
import { DatabaseService } from "./database.service";
import { UserInfo } from "./user-info.model";
import { UserInfoService } from "./user-info.service";

@Component({
    selector: "user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;

    constructor(private userInfoService:UserInfoService, private dbService:DatabaseService){
        dbService.showData();
    }
    ngOnInit(): void{
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo();
    }

    showUserInfo(){
        this.userInfoService.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}