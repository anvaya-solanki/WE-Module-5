document.addEventListener('DOMContentLoaded', function () {
    let collapsibleHeaders = document.querySelectorAll('.collapsible');
    
    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', function () {
            this.classList.toggle('active');
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    let scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});
