import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { catchError, Observable, tap } from "rxjs";

@Injectable({
    providedIn:'root'
}
)
export class UserService{

    constructor(private http : HttpClient){}

    private url = "https://reqres.in/api/users"

    getUsers():Observable<any>{
        return this.http.get(this.url).pipe(tap((data: any)=>console.log(JSON.stringify(data))),catchError(async (err) => console.log(err)))
    }
}