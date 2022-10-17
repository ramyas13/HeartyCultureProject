import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FertilizerComponent } from './fertilizer/fertilizer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyinfoComponent } from './myinfo/myinfo.component';

const routes: Routes = [

  {path:'',component:CarouselComponent},
  {path:'contact',component:ContactComponent},
  {path:'ferti',component:FertilizerComponent},
  {path:'myinfo',component:MyinfoComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
