import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { LearningPlanComponent } from './components/learning-plan/learning-plan.component';
import { ChatComponent } from './components/chat/chat.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'classes', component: ClassesComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'learning-plan', component: LearningPlanComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
