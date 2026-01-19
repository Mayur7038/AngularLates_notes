import { HttpEventType } from "@angular/common/http";
import { tap } from "rxjs";



export function loginInterceptors(request: any, next: any) {
        console.log(request , "value of req");

          const reqWithHeader = request.clone({
        headers: request.headers.set('X-New-Header', 'new header value'),
      });
     return next(reqWithHeader).pipe(tap((event : any) =>{

        if (event.type === HttpEventType.Response) {
            console.log(request.url, 'returned a response with status', event.body);
        }

    }))
}