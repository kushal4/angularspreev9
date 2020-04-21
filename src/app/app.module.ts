import { BrowserModule,BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { reducers, metaReducers } from './app.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutHeaderComponent } from './layout/checkout-header/checkout-header.component';
import { CheckoutFooterComponent } from './layout/checkout-footer/checkout-footer.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from './layout';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { myAuthConfig } from './oauth_config';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { ToastrModule } from 'ngx-toastr';
import { AppPreloadingStrategy } from './app_preloading_strategy';
import { AddressService } from './checkout/address/services/address.service';
@NgModule({
  declarations: [
    AppComponent,
    CheckoutHeaderComponent,
    CheckoutFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, 
      { metaReducers, runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-spree' }),
    BrowserTransferStateModule,
    TransferHttpCacheModule,
    FormsModule,
    LayoutModule,
    Ng2UiAuthModule.forRoot(myAuthConfig),
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      progressAnimation: 'increasing'
    }),
    CoreModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    EffectsModule.forRoot()
  ],
  
  providers: [AppPreloadingStrategy, AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
