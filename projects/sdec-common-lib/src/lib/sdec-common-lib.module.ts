import { NgModule } from '@angular/core';
import { SdecCommonLibComponent } from './sdec-common-lib.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SdecCommonLibComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
  ],
  exports: [
    SdecCommonLibComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SdecCommonLibModule { }
