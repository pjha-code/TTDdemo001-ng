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
        animate(10000)
    ]),
    transition('uploaded=>uploading', [
        style({
            opacity: 1
        }),
        animate(1000)
    ]),
]);
/*
export let test = trigger("test", [
    state("s1", style({
        backgroundColor: 'yellow'
    })),
    state("s2", style({
        backgroundColor: 'blue',
        transform: 'rotate(3600deg) translateX(500px)',

    })),
    transition('s1=>s2', [
        animate(3000)
    ]),
    transition('s2=>s1', [
        animate(3000)
    ])
]);
*/