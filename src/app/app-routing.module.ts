import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentaryComponent } from './pages/documentary/documentary.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'watch', component: DocumentaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
