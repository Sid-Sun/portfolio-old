import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {HomeComponent} from './home/home.component';
import {SocialComponent} from './social/social.component';
import {SkillsComponent} from './skills/skills.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PolicyComponent} from './policy/policy.component';
import {FaqComponent} from './faq/faq.component';

const routes: Routes = [
  {
    path: 'privacy', component: PolicyComponent
  },
  {
    path: 'policy', redirectTo: 'privacy', pathMatch: 'full'
  },
  {
    path: 'privacy-policy', redirectTo: 'privacy', pathMatch: 'full'
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'socials', component: SocialComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
