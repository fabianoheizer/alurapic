import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

    photos: Photo[] = [];
    filter: string = '';
    debounce: Subject<string> = new Subject<string>();
    hasMore: boolean = true;
    currentPage: number = 1;
    userName: string = '';


    // manter o construtor apenas para injeção de dependencia
    constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

    // qualquer lógica que queiramos executar será colocada em uma fase do ciclo de vida que todo componente Angular possui.
    ngOnInit(): void {
        this.userName = this.activatedRoute.snapshot.params.userName;

        this.photos = this.activatedRoute.snapshot.data.photos
        //Também é possível usar this.activatedRoute.snapshot.data['photos'].

        // Lettable operators no RxJS: quando emitimos um valor no evento keyup, todas as emissões serão ignoradas, sendo consideradas após 300ms
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.filter = filter);
    }

    ngOnDestroy(): void {
        // BOA PRATICA: ao sair do componente, não alocaremos mais memorias com o uso do debounce
        this.debounce.unsubscribe();
    }

    load() {
        this.photoService
                .listFromUserPaginated(this.userName, ++this.currentPage)
                .subscribe( photo => {
                    this.photos = this.photos.concat(photo);

                    if(!this.photos.length){
                        this.hasMore = false;
                    }
                });
    }

}
