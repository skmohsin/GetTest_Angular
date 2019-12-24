import { Injectable } from "@angular/core";
import { Api } from "./../api";

@Injectable({
  providedIn: "root"
})
export class TestService {
  constructor(private api: Api) {}

  getTests = () => {
    return this.api.get(`tests`);
  };
}
