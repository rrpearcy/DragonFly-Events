import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent} from './event-detail/event-detail.component';

const routes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'details/:id', component: EventDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
