import { Routes } from '@angular/router';
import { AppLayoutFrameComponent } from '../blueprint/app-layout-frame/app-layout-frame.component';
import { EmptyLayoutFrameComponent } from '../blueprint/empty-layout-frame/empty-layout-frame.component';
import { AppGuard } from '../library/secure-data/app-guard.guard';

export const PAGE_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: '',
    component: EmptyLayoutFrameComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((mod) => mod.AuthModule),
      },
    ],
  },
  {
    path: '',
    component: AppLayoutFrameComponent,
    children: [
      { path: 'weather', redirectTo: 'weather/', pathMatch: 'full' },
      {
        path: 'weather/:city-name/:day',
        loadChildren: () =>
          import('./weather-page/weather-page.module').then(
            (mod) => mod.WeatherPageModule
          ),
        canActivate: [AppGuard],
      },
      {
        path: 'weather/:city-name',
        loadChildren: () =>
          import('./weather-page/weather-page.module').then(
            (mod) => mod.WeatherPageModule
          ),
        canActivate: [AppGuard],
      },
      { path: 'favorites', redirectTo: 'favorites/', pathMatch: 'full' },
      {
        path: 'favorites/:city-name/:day,',
        loadChildren: () =>
          import('./favorites-page/favorites-page.module').then(
            (mod) => mod.FavoritesPageModule
          ),
        canActivate: [AppGuard],
      },
      {
        path: 'favorites/:city-name',
        loadChildren: () =>
          import('./favorites-page/favorites-page.module').then(
            (mod) => mod.FavoritesPageModule
          ),
        canActivate: [AppGuard],
      },
    ],
  },
];
