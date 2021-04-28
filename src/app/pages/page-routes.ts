import {Routes} from '@angular/router';
import {EmptyLayoutFrameComponent} from '../blueprint/empty-layout-frame/empty-layout-frame.component';
import {AppLayoutFrameComponent} from '../blueprint/app-layout-frame/app-layout-frame.component';
import {AppGuard} from '../library/secure-data/app-guard.guard';

export const PAGE_ROUTES: Routes = [
    {
        path      : '',
        redirectTo: 'auth',
        pathMatch : 'full'
    },
    {
        path     : '',
        component: EmptyLayoutFrameComponent,
        children : [
            {path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)}
        ]
    },
    {
        path     : '',
        component: AppLayoutFrameComponent,
        children : [
            {
                path        : 'weather',
                loadChildren: () => import('./weather-page/weather.module').then(mod => mod.WeatherModule),
                canActivate : [AppGuard],
                data        : {PageID: 1}
            }
        ]
    }
];
