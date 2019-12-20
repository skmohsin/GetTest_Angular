import { Injectable } from "@angular/core";

@Injectable()
export class BaseUrlProvider{
    public apiBaseUrl= "https://localhost:5001/api/v1/";
    public foodImagesUrl= "https://localhost:44364/Images/"
    public profilePictureBaseUrl= "https://localhost:44364/Images/Users/";
}
