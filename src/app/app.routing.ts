import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DirComponent } from './dir/dir.component';
import { PipeComponent } from './pipe/pipe.component';
import { ChildComponent } from './inheritance/child.component';
import { ParentComponent } from './inheritance/parent.component';
import { MasterComponent } from './masterdetails/master.component';
import { DetailComponent } from './masterdetails/detail.component';
import { MasterhooksComponent } from './hooks/masterhooks.component';
import { DetailshooksComponent } from './hooks/detailshooks.component';
import { Service1Component } from './services/service1.component';
import { Service2Component } from './services/service2.component';

const routes: Routes = [
    { path: '', component: DatabindingComponent },
    {
        path: 'about/:id', component: AboutComponent, children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'changepassword', component: ChangepasswordComponent },
        ]
    },
    { path: 'dir', component: DirComponent },
    { path: 'pipe', component: PipeComponent },
    { path: 'masterdetails', component: MasterComponent },
    { path: 'hooks', component: MasterhooksComponent },
    { path: 'inheritance', component: ChildComponent },
    { path: 'service1', component: Service1Component },
    { path: 'service2', component: Service2Component },
    { path: '404', component: NotfoundComponent },
    { path: '**', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [DatabindingComponent, AboutComponent, NotfoundComponent, ProfileComponent, ChangepasswordComponent, DirComponent, PipeComponent, ChildComponent, ParentComponent, MasterComponent, DetailComponent, MasterhooksComponent, DetailshooksComponent, Service1Component, Service2Component];