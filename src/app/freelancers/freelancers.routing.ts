import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShowFreelancersComponent } from "./show-freelancers/show-freelancers.component";


const routes:Routes = [
    {path:"", component:ShowFreelancersComponent},
    {path:":id", component:ShowFreelancersComponent}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class FreelancersRoutingModule {
}
