// Toggle theme
$(function () {
    const getTheme = window.localStorage && window.localStorage.getItem("theme");
    const themeTogglers = Array.apply(null, document.querySelectorAll(".theme-toggle"));
    const isDark = getTheme === "dark";
    var metaThemeColor = document.querySelector("meta[name=theme-color]");

    if (getTheme !== null) {
        document.body.classList.toggle("dark-theme", isDark);
    }

    themeTogglers.forEach(themeToggle => {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            window.localStorage &&
                window.localStorage.setItem(
                    "theme",
                    document.body.classList.contains("dark-theme") ? "dark" : "light",
                );
            document.body.classList.contains("dark-theme") ?
                metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");;
        });
    });

});