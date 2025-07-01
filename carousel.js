// Carousel Funktionalität
class Carousel {
    constructor() {
        this.currentIndex = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.indicatorsContainer = document.querySelector('.carousel-indicators');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.totalSlides = this.slides.length;
        this.countryNames = ['Tunesien', 'Deutschland', 'Frankreich', 'Italien', 'Latino'];
        
        this.init();
    }
    
    init() {
        // Event-Listener für Navigation
        this.prevBtn.addEventListener('click', () => this.goToSlide(this.currentIndex - 1));
        this.nextBtn.addEventListener('click', () => this.goToSlide(this.currentIndex + 1));
        
        // Event-Listener für Indikatoren
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                const slideIndex = parseInt(indicator.getAttribute('data-index'));
                this.goToSlide(slideIndex);
            });
            
            // Hover-Effekt für Länderanzeige
            indicator.addEventListener('mouseenter', () => {
                this.indicatorsContainer.setAttribute('data-country', this.countryNames[index]);
            });
            
            indicator.addEventListener('mouseleave', () => {
                if (index !== this.currentIndex) {
                    this.indicatorsContainer.setAttribute('data-country', this.countryNames[this.currentIndex]);
                }
            });
        });
        
        // Initialer Zustand
        this.updateCarousel();
    }
    
    goToSlide(index) {
        // Sicherstellen, dass der Index gültig ist
        if (index < 0) {
            this.currentIndex = this.totalSlides - 1;
        } else if (index >= this.totalSlides) {
            this.currentIndex = 0;
        } else {
            this.currentIndex = index;
        }
        
        this.updateCarousel();
    }
    
    updateCarousel() {
        // Alle Slides und Indikatoren zurücksetzen
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Aktiven Slide und Indikator setzen
        this.slides[this.currentIndex].classList.add('active');
        this.indicators[this.currentIndex].classList.add('active');
        
        // Aktuellen Ländernamen anzeigen
        this.indicatorsContainer.setAttribute('data-country', this.countryNames[this.currentIndex]);
    }
}

// Carousel initialisieren, wenn das DOM geladen ist
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});
