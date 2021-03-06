import { Directive, HostListener, Input, OnInit, OnDestroy } from '@angular/core';

/* tslint:disable-next-line */
const MouseEvent = (global as any).MouseEvent as MouseEvent;

@Directive({
  selector: '[offClick]'
})

export class OffClickDirective implements OnInit, OnDestroy {
  /* tslint:disable */
  @Input('offClick') public offClickHandler: any;
  /* tslint:enable */
  @HostListener('click', ['$event']) public onClick($event: MouseEvent): void {
    $event.stopPropagation();
  }

  public ngOnInit(): any {
    setTimeout(() => { if(typeof document !== 'undefined') { document.addEventListener('click', this.offClickHandler); } }, 0);
  }

  public ngOnDestroy(): any {
    if(typeof document !== 'undefined') { document.removeEventListener('click', this.offClickHandler); }
  }
}
