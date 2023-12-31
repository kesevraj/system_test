import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { ToastService } from "../../services/toast/toast.service";

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(public router: Router, private toast:ToastService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        console.error("error is intercept", error);
        this.toast.showError('Error in Fetching Data',error?.status)
        return throwError(error);
      })
    );
  }
}
 