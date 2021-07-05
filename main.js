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