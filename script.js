class Cards {

  constructor() {

    this.setVars();
    
    if(window.innerWidth >= this.breakpoint) {
      this.setEvents();
    }

  }

  setVars() {
    this.body = document.querySelector('body');
    this.sections = document.querySelectorAll(`*[data-card]`);
    
    this.index = this.sections.length;
    this.scrolled = false;
    
    this.arrows = {
      up: 38,
      down: 40,
    }
    this.breakpoint = 550;
    
  }

  setEvents() {
    window.addEventListener('wheel', (e) => this.scrollHandler(e));
    this.body.addEventListener('transitionend', (e) => this.enableScrolling(e));
    document.addEventListener('keydown', (e) => this.pressHandler(e));
  }


  scrollHandler(e) {
    if (e.deltaY < 0) {
      this.slideUp();
    }
  
    else if (e.deltaY > 0) {
      this.slideDown();
    }
  }
  
   pressHandler(e) {
    if (e.keyCode === this.arrows.up) {
      this.slideUp();
    } 
    else if (e.keyCode === this.arrows.down) {
      this.slideDown();
    }
  }
  
   preventScrolling() {
    this.scrolled = true;
  }

   enableScrolling() {
    this.scrolled = false;
  }

  slideUp() {

    if (this.index < this.sections.length && !this.scrolled) {
      this.sections[this.index].style.top = 0;
      this.index++;
      this.preventScrolling();
    }

  }
  
   slideDown() {

    if (this.index > 1 && !this.scrolled) {


      this.sections[this.index - 1].style.top = -this.sections[this.index - 1].offsetHeight;

      this.index--;
      this.preventScrolling();
    }

  }
}


new Cards();