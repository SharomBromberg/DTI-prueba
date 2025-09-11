import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appAnimateOnScroll]',
    standalone: false
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
    @Input('appAnimateOnScroll') animation: string = 'fade-up';
    @Input() animDelay: string | number | undefined;
    @Input() animOnce: boolean = true;

    private observer?: IntersectionObserver;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        const native = this.el.nativeElement as HTMLElement;
        this.renderer.addClass(native, 'anim');
        this.renderer.addClass(native, `anim--${this.animation}`);
        if (this.animDelay !== undefined) {
            const v = typeof this.animDelay === 'number' ? `${this.animDelay}s` : this.animDelay;
            this.renderer.setStyle(native, '--anim-delay', v);
        }
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.renderer.addClass(native, 'is-visible');
                    if (this.animOnce && this.observer) {
                        this.observer.unobserve(native);
                    }
                } else if (!this.animOnce) {
                    this.renderer.removeClass(native, 'is-visible');
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
        this.observer.observe(native);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}
