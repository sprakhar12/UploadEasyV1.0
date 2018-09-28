import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LogRegScreenComponent } from './loginReg/log-reg-screen/log-reg-screen.component';
import { UploadScreenComponent } from './upload-screen/upload-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';

const appRoutes: Routes = [

    { path: '', component: LogRegScreenComponent},
    { path: 'signup', component: SignupScreenComponent},
    {path: 'user', component: UploadScreenComponent}
    
];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}