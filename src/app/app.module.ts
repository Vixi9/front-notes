import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GradesComponent } from './components/grades/grades.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import { GradesResolver } from './services/grades.resolver';
import { GradesService } from './services/grades.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GradesComponent,
    HeaderComponent,
    HomeComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    GradesResolver,
    GradesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
