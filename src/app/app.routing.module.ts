import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    { path: 'user/:userName', component: PhotoListComponent },
    { path: 'p/add', component: PhotoFormComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) // Sendo nossa aplicação localhost:4200, tudo o que for 4200/ terá relação com a rota raiz
    ], 
    exports: [ RouterModule ]
})
export class AppRountingModule {}