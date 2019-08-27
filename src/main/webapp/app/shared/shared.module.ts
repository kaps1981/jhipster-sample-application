import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [StoreappSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [StoreappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreappSharedModule {
  static forRoot() {
    return {
      ngModule: StoreappSharedModule
    };
  }
}
