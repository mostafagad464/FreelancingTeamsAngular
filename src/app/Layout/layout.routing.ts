import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PostComplainsComponent } from "../_user/user-profile/post-complains/post-complains.component";
import { HomeComponent } from "./home/home.component";



const routes: Routes = [

    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent}
    {path:"",component:HomeComponent,children:[

    ]},
   
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})



export class LayoutRoutingModule {
}
