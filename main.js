const header = document.querySelector("header");
const s_one = document.querySelector(".section-1");

const s_one_opt ={
    rootMargin :"-120px 0px 0px 0px"
};

const s_one_ob = new IntersectionObserver(function(entries,s_one_ob){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            header.classList.add("welcome_scrolled");
        }else {
            header.classList.remove("welcome_scrolled")
        }
    });
},
s_one_opt);
s_one_ob.observe(s_one);

//stop scrolling when full screen or half screen menue is on
const chk_btn = document.getElementById("ch-1");
const body = document.body;
chk_btn.addEventListener( 'change', function() {
    if(this.checked) {
        body.style.overflow='hidden';
    } else {
        body.style.overflow='auto';
    }
});


// Footer stuff
const p = document.getElementById("copyright")
let date = new Date()
p.innerText += ` ${date.getFullYear()}  |  The Jamia Review Team`