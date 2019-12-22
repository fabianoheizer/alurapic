import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotosComponent,
        FilterByDescription,
        LoadButtonComponent
    ],
    exports: [ PhotoComponent ],

    //// Recurso para utilizar o injection na classe AppComponent
    imports: [
        HttpClientModule,
        CommonModule // todo componente deve importar o ComonModule para entender as diretivas do Angular
    ]
})
export class PhotoModules {
    
    
}