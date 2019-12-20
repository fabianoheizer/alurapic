// Imports do Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Imports da aplicação
import { PhotoModules } from './photos/photos.module';
import { AppRountingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // Módulo com vários recursos que o Angular importado por padrão

    // Quando o primeiro módulo da aplicação for carregado (AppModule), o programa entenderá que dependemos de 
    // PhotosModule, que será carregado, e por consequência o PhotoComponent terá que ser disponibilizado para uso.
    PhotoModules,
    AppRountingModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
