import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostComplainsComponent } from "../_user/user-profile/post-complains/post-complains.component";
import { HomeComponent } from "./home/home.component";



const routes: Routes = [
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
