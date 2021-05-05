import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppLayoutFrameComponent} from '../blueprint/app-layout-frame/app-layout-frame.component';
import {EmptyLayoutFrameComponent} from '../blueprint/empty-layout-frame/empty-layout-frame.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from '../blueprint/header/header.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppLayoutFrameComponent,
        EmptyLayoutFrameComponent,
        HeaderComponent
    ],
    imports     : [
        RouterModule,
        FormsModule,
        CommonModule,
    ]
})
export class PagesModule {
}
