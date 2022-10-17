import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavnextComponent } from './navnext/navnext.component';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyinfoComponent } from './myinfo/myinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavnextComponent,
    FertilizerComponent,
    FooterComponent,
    CarouselComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    MyinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
