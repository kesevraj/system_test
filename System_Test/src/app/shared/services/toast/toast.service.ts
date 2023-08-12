import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastrService: ToastrService) { }

  public showSuccess(msg?:string,title?:string): void {
    this.toastrService.success(msg, title);
  }

  public showInfo(msg?:string,title?:string): void {
    this.toastrService.info(msg, title);
  }

  public showWarning(msg?:string,title?:string): void {
    this.toastrService.warning(msg, title);
  }

  public showError(msg?:string,title?:string): void {
    this.toastrService.error(msg, title);
  }

}
