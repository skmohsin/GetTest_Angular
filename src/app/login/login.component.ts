import { AuthenticationService } from "./../shared/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ResponseWrapper } from "../shared/ResponseWrapper";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  user: any = { mobileNumber: null, password: null };
  constructor(private router: Router, private authService: AuthenticationService) {}
  ngOnInit() {}

  onLogin(user: any) {
    return this.authService.authenticate(user).subscribe((response: ResponseWrapper) => {
        if (response) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("token", JSON.stringify(response.Token));
        }
        this.router.navigate(["/dashboard"]);
      },
      error => {
        if (error.status === 401) {
          console.log(error);
        }
      }
    );
  }
}
