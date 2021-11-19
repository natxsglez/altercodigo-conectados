import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentingComponent } from './pages/introduction/presenting/presenting.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { WebDocumentaryComponent } from './pages/introduction/web-documentary/web-documentary.component';
import { ConnectedComponent } from './pages/introduction/connected/connected.component';
import { ConnectedDescriptionComponent } from './pages/introduction/connected-description/connected-description.component';
import { ConnectedDescriptionAComponent } from './pages/introduction/connected-description-a/connected-description-a.component';
import { ConnectedDescriptionBComponent } from './pages/introduction/connected-description-b/connected-description-b.component';
import { DocumentaryComponent } from './pages/documentary/documentary.component';
import { LogoItesoComponent } from './pages/introduction/logo-iteso/logo-iteso.component';
import { LogoPapComponent } from './pages/introduction/logo-pap/logo-pap.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    PresentingComponent,
    IntroductionComponent,
    WebDocumentaryComponent,
    ConnectedComponent,
    ConnectedDescriptionComponent,
    ConnectedDescriptionAComponent,
    ConnectedDescriptionBComponent,
    LogoItesoComponent,
    LogoPapComponent,
    DocumentaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
