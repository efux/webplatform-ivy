import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-higher-order',
    template: `
    <div>

        Name from Query Params: {{ name }}

    </div>
    `
})
export class HigherOrderComponent implements OnInit {

    name: string;

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.name = this.activatedRoute.snapshot.queryParamMap.get('name');
    }
}
