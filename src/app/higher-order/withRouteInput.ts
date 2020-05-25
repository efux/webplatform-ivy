import { ɵɵdirectiveInject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export function WithRouteInput() {

    return cmpType => {
        const originalFactory = cmpType.ɵfac;

        cmpType.ɵcmp.factory = (...args) => {
            const cmp = originalFactory(...args);

            const activatedRoute = ɵɵdirectiveInject(ActivatedRoute);

            for (const queryParamName of Object.keys(activatedRoute.snapshot.queryParams)) {
                const inputParamName = cmpType.ɵcmp.inputs[queryParamName];
                if (inputParamName) {
                    cmp[inputParamName] = activatedRoute.snapshot.queryParamMap.get(queryParamName);
                }
            }

            return cmp;
        };

        return cmpType;
    };

}