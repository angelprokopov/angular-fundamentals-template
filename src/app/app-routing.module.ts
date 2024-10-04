import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { CoursesComponent } from './features/courses/courses.component';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';


export const  routes: Routes = [
    
    { path: '', redirectTo: '/courses',pathMatch: 'full' },

    { path:
         'courses/:id', 
         loadChildren: () => import('./features/course-info/course-info.module').then(m => m.CourseInfoModule),canLoad : [AuthorizedGuard]  },


    { path: 
        '', 
        loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule), 
        canActivate : [NotAuthorizedGuard]  },
        
    { path: 
        'courses', 
        loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule),canLoad : [AuthorizedGuard] },

    { path: '**', redirectTo: '/courses'},
   ];
 

@NgModule({  
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})


export class AppRoutingModule { }



