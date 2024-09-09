import {Component, OnDestroy, OnInit} from '@angular/core';
import {
    combineLatest, debounceTime,
    filter,
    forkJoin,
    map,
    Observable,
    Subject,
    Subscription,
    switchMap, tap,
} from 'rxjs';
import {MockDataService} from './mock-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    searchTermByCharacters = new Subject<string>();
    charactersResults$!: Observable<any>;
    planetAndCharactersResults$!: Observable<any>;
    isLoading: boolean = false;
    subscriptions: Subscription[] = [];

    constructor(private mockDataService: MockDataService) {
    }

    ngOnInit(): void {
        this.initLoadingState();
        this.initCharacterEvents();
    }

    changeCharactersInput(element: any): void {
        const inputValue: string = element.target.value;
        this.searchTermByCharacters.next(inputValue);
    }

    initCharacterEvents(): void {
        this.charactersResults$ = this.searchTermByCharacters.pipe(
            // Filter input to trigger API calls only for inputs with at least 3 characters
            filter((input) => input.length >= 3),
            // Add debounce to delay API calls until the user stops typing for 300ms
            debounceTime(300),
            // Use switchMap to call the API after filtering and debouncing
            switchMap((searchTerm) =>
                this.mockDataService.getCharacters(searchTerm)
            ),
        );
    }

    loadCharactersAndPlanet(): void {
        // Pass a string parameter to getCharacters, e.g., an empty string or a default search term
        this.planetAndCharactersResults$ = forkJoin({
            characters: this.mockDataService.getCharacters('defaultSearchTerm'), // update this as needed
            planets: this.mockDataService.getPlanets()
        }).pipe(
            map((results) => [
                ...results.characters.map((char: any) => char.name),
                ...results.planets.map((planet: any) => planet.name),
            ])
        );
    }

    initLoadingState(): void {
        const charactersLoader$ = this.mockDataService.getCharactersLoader();
        const planetsLoader$ = this.mockDataService.getPlanetLoader();

        const combinedLoaders$ = combineLatest([charactersLoader$, planetsLoader$]);

        const loadingSub = combinedLoaders$.pipe(
            map((loaders) => this.areAllValuesTrue(loaders)),
            tap((loading) => (this.isLoading = loading))
        ).subscribe();

        this.subscriptions.push(loadingSub);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((sub) => sub.unsubscribe());
    }

    areAllValuesTrue(elements: boolean[]): boolean {
        return elements.every((el) => el);
    }
}
