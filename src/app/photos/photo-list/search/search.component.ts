import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';


@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    @Output() onTyping = new EventEmitter<string>();
    @Input() value: string = '';
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void{
        // Lettable operators no RxJS: quando emitimos um valor no evento keyup, todas as emissões serão ignoradas, sendo consideradas após 300ms
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.onTyping.emit(filter)); // envia o conteúdo digitado para o outro componente photo list
    }

    ngOnDestroy(): void {
        // BOA PRATICA: ao sair do componente, não alocaremos mais memoria com o uso do debounce
        this.debounce.unsubscribe();
    }
}