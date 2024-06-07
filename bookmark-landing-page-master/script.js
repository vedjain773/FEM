const tabs = document.getElementsByClassName("tab");
const image = document.getElementById("image");
const question = document.getElementsByClassName("ques");
const contact = document.getElementById("con-but");
const error = document.getElementsByClassName("error").item(0);
const hamburger = document.getElementById("ham");
const clode = document.getElementById("close");
const actualNav = document.getElementsByClassName("act-nav").item(0);
const collapse = document.getElementsByClassName("collapse");

/**
 * 
 * @param {Event} e 
 */

const switchCont = (e) => {
    const titleSwitch = document.getElementsByClassName("c-title").item(0)
    const descSwitch = document.getElementsByClassName("c-desc").item(0);
    
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    e.target.classList.add("active");

    const bookmark = "Simplicity is here";
    const bookmarkCont = "Our extension provides you a simple and concise way of bookmarking your favourite websites. No more complicated bookmarks.";
    const bookmarkSrc = "./assets/images/illustration-features-tab-1.svg";

    const search = "Intelligent Search";
    const searchCont = "Our powerful search feature will help you find saved sites ino time at all. No need to thrawl through all of your bookmarks.";
    const searchSrc = "./assets/images/illustration-features-tab-2.svg";

    const share = "Share your bookmarks";
    const shareCont = "Easily share your bookmarks and collections with others. Create a shareable link at the click of a button."
    const shareSrc = "./assets/images/illustration-features-tab-3.svg";

    if (e.target.id == "bookmark") {
        titleSwitch.textContent = bookmark;
        descSwitch.textContent = bookmarkCont;
        image.src = bookmarkSrc;
    } else if (e.target.id == "search") {
        titleSwitch.textContent = search;
        descSwitch.textContent = searchCont;
        image.src = searchSrc;
    } else if (e.target.id == "share") {
        titleSwitch.textContent = share;
        descSwitch.textContent = shareCont;
        image.src = shareSrc;
    }
}

/**
 * 
 * @param {Event} e 
 */

const accordion = (e) => {
    if (e.currentTarget.classList.contains("open")) {
        e.currentTarget.classList.remove("open");
    } else {
        for (i = 0; i < question.length; i++) {
            question[i].classList.remove("open");
        }
        e.currentTarget.classList.add("open");
    }
}

contact.addEventListener("click", () => {
    const mail = document.getElementById("mail");

    if (!mail.value.includes(".com") || !mail.value.includes("@")) {
        error.style.display = "block";
        mail.style.borderColor = "var(--soft-red)";
        mail.style.borderRadius = "5px 5px 0 0";
    } else {
        error.style.display = "none";
        mail.style.borderColor = "white";
        mail.style.borderRadius = "5px";
    }
});

for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (event) => {
        switchCont(event);
    });
}

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", (event) => {
        accordion(event);
    })
}

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", () => {
        setTimeout(200);
        actualNav.classList.remove("active");
        actualNav.style.display = "none";
    });
}

hamburger.addEventListener("click", () => {
    actualNav.classList.add("active");
    actualNav.style.display = "block";
});

clode.addEventListener("click", () => {
    actualNav.classList.remove("active");
    actualNav.style.display = "none";
})