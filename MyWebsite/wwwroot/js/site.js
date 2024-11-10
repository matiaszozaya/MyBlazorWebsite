function setMainContentHeight() {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const mainContent = document.getElementById("main");

    function adjustHeight() {
        const headerHeight = header.offsetHeight;
        const footerHeight = footer.offsetHeight;
        mainContent.style.height = `calc(100vh - ${headerHeight + footerHeight}px)`;
    }

    adjustHeight();
}

function addResizeListener() {
    window.addEventListener("resize", setMainContentHeight);
}

function removeResizeListener() {
    window.removeEventListener("resize", setMainContentHeight);
}