import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PmSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PmSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [PmSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PmSharedModule {
  static forRoot() {
    return {
      ngModule: PmSharedModule
    };
  }
}
