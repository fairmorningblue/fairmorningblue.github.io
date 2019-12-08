
        const CTA = document.querySelector(".cta");
        const ALERT = document.querySelector(".white");

        CTA.classList.remove("hide");
        ALERT.classList.add("hide");

        function reveal(e, current) {
          e.preventDefault();

          current.innerHTML == "Click to close details" ? CTA.innerHTML = "Click to see day-by-day details" : CTA.innerHTML = "Click to close details";

          ALERT.classList.toggle("hide");
        }

        CTA.addEventListener('click', function(e){ reveal(e,this); }, false);

        const cards = document.querySelectorAll('.card');
        Array.prototype.forEach.call(cards, card => {
            let down, up, link = card.querySelector('h2 a');
            card.style.cursor = 'pointer';
            card.onmousedown = () => down = +new Date();
            card.onmouseup = () => {
                up = +new Date();
                if ((up - down) < 200) {
                    link.click();
                }
            }
        });