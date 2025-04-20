document.addEventListener("DOMContentLoaded", () => {
    const fullscreenBtn = document.getElementById("fullscreenBtn");
    const gameFrame = document.getElementById("gameFrame");

    fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            gameFrame.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
            fullscreenBtn.textContent = "Exit Full Screen";
        } else {
            document.exitFullscreen();
            fullscreenBtn.textContent = "Full Screen";
        }
    });

    document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
            fullscreenBtn.textContent = "Full Screen";
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});
