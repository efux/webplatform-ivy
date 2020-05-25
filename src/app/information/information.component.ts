import { Component, OnInit, NgModule } from '@angular/core';
import { InformationService } from './information.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-information',

    template: `
    <div>
        This is an information for {{name}}.

        <button mat-raised-button color="accent">Material Button</button>
    </div>
    `
})
export class InformationComponent implements OnInit {

    name = 'Etienne';

    constructor(private informationService: InformationService) { }

    ngOnInit(): void {
        this.name = this.informationService.getName();
    }

}

@NgModule({
    declarations: [InformationComponent],
    imports: [MatButtonModule]
})
class InformationModule {}
