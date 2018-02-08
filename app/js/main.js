
        const CTA = document.querySelector(".cta");
        const ALERT = document.querySelector(".white");

        CTA.classList.remove("hide");
        ALERT.classList.add("hide");

        function reveal(e, current) {
          e.preventDefault();

          current.innerHTML == "Close!" ? CTA.innerHTML = "Open!" : CTA.innerHTML = "Close!";

          ALERT.classList.toggle("hide");
        }

        CTA.addEventListener('click', function(e){ reveal(e,this); }, false);
