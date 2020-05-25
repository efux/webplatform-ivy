import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class InformationService {

    getName(): string {
        return 'Peter Muster';
    }

}