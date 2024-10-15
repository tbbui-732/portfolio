class Cursor {
    constructor() {
        this.delay = 8;
        this._x = 0;
        this._y = 0;
        this.endX = window.innerWidth / 2;
        this.endY = window.innerHeight / 2;
        this.cursorVisible = true;
        this.cursorEnlarged = false;
        this.$dot = document.querySelector('.cursor-dot');
        this.$outline = document.querySelector('.cursor-dot-outline');
        
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    }

    setupEventListeners() {
        // Anchor hovering
        document.querySelectorAll('a').forEach(el => {
            el.addEventListener('mouseover', () => {
                this.cursorEnlarged = true;
                this.toggleCursorSize();
            });
            el.addEventListener('mouseout', () => {
                this.cursorEnlarged = false;
                this.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', () => {
            this.cursorEnlarged = true;
            this.toggleCursorSize();
        });
        document.addEventListener('mouseup', () => {
            this.cursorEnlarged = false;
            this.toggleCursorSize();
        });

        document.addEventListener('mousemove', (e) => {
            // Show the cursor
            this.cursorVisible = true;
            this.toggleCursorVisibility();

            // Position the dot
            this.endX = e.pageX;
            this.endY = e.pageY;
            this.$dot.style.top = `${this.endY}px`;
            this.$dot.style.left = `${this.endX}px`;
        });

        // Hide/show cursor
        document.addEventListener('mouseenter', () => {
            this.cursorVisible = true;
            this.toggleCursorVisibility();
            this.$dot.style.opacity = 1;
            this.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', () => {
            this.cursorVisible = false;
            this.toggleCursorVisibility();
            this.$dot.style.opacity = 0;
            this.$outline.style.opacity = 0;
        });
    }

    animateDotOutline() {
        this._x += (this.endX - this._x) / this.delay;
        this._y += (this.endY - this._y) / this.delay;
        this.$outline.style.top = `${this._y}px`;
        this.$outline.style.left = `${this._x}px`;

        requestAnimationFrame(this.animateDotOutline.bind(this));
    }

    toggleCursorSize() {
        if (this.cursorEnlarged) {
            this.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            this.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            this.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            this.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }

    toggleCursorVisibility() {
        if (this.cursorVisible) {
            this.$dot.style.opacity = 1;
            this.$outline.style.opacity = 1;
        } else {
            this.$dot.style.opacity = 0;
            this.$outline.style.opacity = 0;
        }
    }
}

// Initialize the cursor
const cursor = new Cursor();