export interface SlickBeforeChangeEvent {
    event: Event;
    slick: unknown;
    currentSlide: number;
    nextSlide: number;
}


export interface SlickAfterChangeEvent {
    event: Event;
    slick: unknown;
    currentSlide: number;
}
