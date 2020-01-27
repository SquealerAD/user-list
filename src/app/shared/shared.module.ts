import {ModuleWithProviders, NgModule} from '@angular/core';
import {DataStorageService} from '../services/data-storage.service';

@NgModule({

})
export class SharedModule {
  constructor() {}
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ DataStorageService ]
    };
  }
}
