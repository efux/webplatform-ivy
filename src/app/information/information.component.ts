import { Component } from '@angular/core';

@Component({
    selector: 'app-information',

    template: `
    <div>
        This is an information for {{name}}.
    </div>
    `
})
export class InformationComponent {

    name = 'Etienne';

}