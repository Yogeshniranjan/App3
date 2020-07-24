import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactusComponent } from './contactus/contactus.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {InstalationComponent} from './instalation/instalation.component';
import { ArchitectureComponent } from './architecture/architecture.component';


const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'instalation', component: InstalationComponent },
  { path: 'architecture', component: ArchitectureComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
