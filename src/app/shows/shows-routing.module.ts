import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  {path: 'shows', component: ShowListComponent, canActivate:[AuthGuard]},
  {path:'showdetail/:id', component:ShowDetailComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
