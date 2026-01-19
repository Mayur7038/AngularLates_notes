import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";




@Injectable({
    providedIn : 'root'
})


export class mySerive {

    private http = inject(HttpClient);

    test(){
        return this.http.get('https://fakestoreapi.com/products' , {params : {a : 5 } , headers : {
            setme : "good bro "
        }}  )
    }

}