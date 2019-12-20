import { IUser } from "./../../models/user.model";
import { UserService } from "./../../shared/services/user.service";
import { Component, OnInit } from "@angular/core";
import { ResponseWrapper } from "src/app/shared/ResponseWrapper";
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  users: IUser[];
  displayedColumns = ['Role', 'Registration Number', 'Mobile Number', 'Degree'];
  dataSource : any;

  constructor(private usreService: UserService) {}

  ngOnInit() {
    return this.usreService.getUsers().subscribe((response: ResponseWrapper) => {
      this.users = response.data as IUser[];
      this.dataSource = new MatTableDataSource(this.users);
      console.log(this.users);
    }, error => {
      console.log(error);
    })
  }
}
