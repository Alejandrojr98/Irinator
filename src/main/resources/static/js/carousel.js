(function(){
    function initCarousel(root){
        const viewport   = root.querySelector('[data-viewport]');
        const slides     = Array.from(root.querySelectorAll('[data-slide]'));
        let   dotsWrap   = root.querySelector('[data-dots]');
        const btnPrev    = root.querySelector('[data-prev]');
        const btnNext    = root.querySelector('[data-next]');
        const autoPlayChk= root.querySelector('[data-autoplay]');

        if (!viewport || slides.length === 0) return;

        // Si no hay contenedor de puntos, lo creamos
        if (!dotsWrap){
            dotsWrap = document.createElement('div');
            dotsWrap.className = 'carousel__dots';
            dotsWrap.setAttribute('data-dots','');
            root.appendChild(dotsWrap);
        }

        let index = 0;
        let timer = null;
        const INTERVAL = 4000;

        // Crear puntos
        dotsWrap.innerHTML = '';
        slides.forEach((_, i)=>{
            const b = document.createElement('button');
            b.type = 'button';
            b.setAttribute('aria-label', `Ir a la diapositiva ${i+1}`);
            b.addEventListener('click', ()=>goTo(i));
            dotsWrap.appendChild(b);
        });

        function update(){
            viewport.style.transform = `translateX(-${index*100}%)`;
            Array.from(dotsWrap.children).forEach((b,i)=>{
                if(i===index) b.setAttribute('aria-current','true');
                else b.removeAttribute('aria-current');
            });
        }
        function goTo(i){ index = (i + slides.length) % slides.length; update(); restartAutoplay(); }
        function next(){ goTo(index+1); }
        function prev(){ goTo(index-1); }

        // Autoplay (no obligatorio)
        function startAutoplay(){
            stopAutoplay();
            if (!autoPlayChk || autoPlayChk.checked){
                timer = setInterval(next, INTERVAL);
            }
        }
        function stopAutoplay(){ if (timer){ clearInterval(timer); timer = null; } }
        function restartAutoplay(){ stopAutoplay(); startAutoplay(); }

        // Eventos
        btnNext && btnNext.addEventListener('click', next);
        btnPrev && btnPrev.addEventListener('click', prev);
        autoPlayChk && autoPlayChk.addEventListener('change', ()=> (autoPlayChk.checked ? startAutoplay() : stopAutoplay()));

        viewport.addEventListener('mouseenter', stopAutoplay);
        viewport.addEventListener('mouseleave', startAutoplay);

        root.addEventListener('keydown', (e)=>{ if (e.key==='ArrowRight') next(); if (e.key==='ArrowLeft') prev(); });
        root.tabIndex = 0;

        // Gestos
        let startX=0, dx=0, sw=false;
        viewport.addEventListener('touchstart', e=>{ sw=true; startX=e.touches[0].clientX; stopAutoplay(); }, {passive:true});
        viewport.addEventListener('touchmove',  e=>{ if(sw) dx=e.touches[0].clientX-startX; }, {passive:true});
        viewport.addEventListener('touchend',   ()=>{ if(!sw) return; if (dx<-40) next(); else if (dx>40) prev(); sw=false; dx=0; startAutoplay(); });

        // Init
        update(); startAutoplay();
    }

    window.addEventListener('DOMContentLoaded', ()=>{
        document.querySelectorAll('[data-carousel]').forEach(initCarousel);
    });
})();
