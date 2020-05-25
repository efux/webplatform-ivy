import { Component, OnInit, Input } from '@angular/core';
import { WithRouteInput } from './withRouteInput';

@WithRouteInput()
@Component({
    selector: 'app-higher-order',
    template: `
    <div>

        Name from Query Params: {{ name }}

    </div>
    `
})
export class HigherOrderComponent implements OnInit {

    @Input()
    name: string;

    constructor() { }

    ngOnInit(): void {
    }
}
