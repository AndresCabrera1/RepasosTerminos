import { Directive, HostListener } from '@angular/core';

@Directive({
    // Cuando se poen la a significa optar solo los enlaces.
    // tslint:disable-next-line:directive-selector
    selector: 'a[Contar-click]'
})

export class AppContarClikcsDirective {
    clickN = 0;
    @HostListener('click', ['$event.target']) onclick(btn) {
        console.log('a', btn, `numero de clicks: ${this.clickN++}`);
    }
}
