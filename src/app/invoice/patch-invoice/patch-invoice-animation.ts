import { animate, animation, state, style, transition, trigger } from '@angular/animations';

export let progressBar = trigger('progressBar', [

    state('uploaded', style({
        opacity: 0.0
    })),
    state('uploading', style({
        opacity: 0.0
    })),

    transition('uploading=>uploaded', [
        style({
            opacity: 1
        }),
        animate(60000)
    ]),
    transition('uploaded=>uploading', [
        style({
            opacity: 1
        }),
        animate(1000)
    ]),
]);
