import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'player/:id',
    component: PlayerComponent
  },
  {
    path: 'addPlayer',
    component: AddPlayerComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'editPlayer/:id',
    component: EditPlayerComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
