import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LogRegScreenComponent } from './loginReg/log-reg-screen/log-reg-screen.component';

const appRoutes: Routes = [

    { path: '', component: LogRegScreenComponent}

];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}