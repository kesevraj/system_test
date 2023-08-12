import { NgModule } from "@angular/core";
import { BackButtonDirective } from "./directive/back-button.directive";

@NgModule({
    exports: [BackButtonDirective],
    declarations: [BackButtonDirective]
  })
  export class SharedModule {}