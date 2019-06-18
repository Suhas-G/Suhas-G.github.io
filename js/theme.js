// Toggle theme
$(function () {
    const getTheme = window.localStorage && window.localStorage.getItem("theme");
    const themeTogglers = Array.apply(null, document.querySelectorAll(".theme-toggle"));
    const isDark = getTheme === "dark";
    var metaThemeColor = document.querySelector("meta[name=theme-color]");

    if (getTheme !== null) {
        document.body.classList.toggle("dark-theme", isDark);
    }

    doCustomThemeSwitches(isDark);

    themeTogglers.forEach(themeToggle => {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const isDark = document.body.classList.contains("dark-theme");
            
            isDark ? metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");;

            doCustomThemeSwitches(isDark);
            window.localStorage &&
                window.localStorage.setItem(
                    "theme",
                    isDark ? "dark" : "light",
                );
        });
    });

});

function switchTableTheme(dark){
    if(dark){
        $(".table").addClass("inverted");
    } else{
        $(".table").removeClass("inverted");
    }
    
}

function switchAccordionTheme(dark){
    if(dark){
        $(".accordion").addClass("inverted");
    } else{
        $(".accordion").removeClass("inverted");
    }
}

function switchButtonTheme(dark){
    if(dark){
        $(".button").addClass("inverted");
    } else{
        $(".button").removeClass("inverted");
    }
}

function doCustomThemeSwitches(isDark){
    for (let index = 0; index < customThemeSwitches.length; index++) {
        const func = customThemeSwitches[index];
        func.apply(this, [isDark])
    }
}

const customThemeSwitches = [switchTableTheme, switchAccordionTheme, switchButtonTheme];

