document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ❤️ DAYS WE HAVE BEEN TOGETHER
       START DATE: DECEMBER 12, 2019
       ========================================== */

    const startDate = new Date(2019, 11, 12);
    const today = new Date();

    // Ignore the time and compare only the dates
    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const difference = today - startDate;

    const daysTogether =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    const daysElement =
        document.getElementById("days-together");

    if (daysElement) {
        daysElement.textContent =
            daysTogether.toLocaleString();
    }


    /* ==========================================
       🎵 7-PAGE MUSIC SYSTEM
       SONG LENGTH: 4 MINUTES 36 SECONDS
       ========================================== */

    const music = document.getElementById("bgMusic");

    if (music) {

        const pageMusic = {

            "index.html": {
                start: 0,
                end: 39
            },

            "first-meeting.html": {
                start: 39,
                end: 79
            },

            "first-date.html": {
                start: 79,
                end: 118
            },

            "photos.html": {
                start: 118,
                end: 157
            },

            "trips.html": {
                start: 157,
                end: 197
            },

            "memories.html": {
                start: 197,
                end: 236
            },

            "today.html": {
                start: 236,
                end: 276
            }

        };

        let page = window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

        if (page === "") {
            page = "index.html";
        }

        const section = pageMusic[page];

        if (section) {

            function setPosition() {
                music.currentTime = section.start;
            }

            function startMusic() {

                setPosition();

                music.play().catch(() => {

                    console.log(
                        "Autoplay blocked. Click anywhere to start music."
                    );

                });

            }

            if (music.readyState >= 1) {

                startMusic();

            } else {

                music.addEventListener(
                    "loadedmetadata",
                    startMusic,
                    { once: true }
                );

            }

            function userInteraction() {

                if (music.paused) {

                    if (
                        music.currentTime < section.start ||
                        music.currentTime >= section.end
                    ) {

                        music.currentTime = section.start;

                    }

                    music.play().catch(() => {});

                }

            }

            document.addEventListener(
                "click",
                userInteraction,
                { once: true }
            );

            music.addEventListener(
                "timeupdate",
                () => {

                    if (music.currentTime >= section.end) {

                        music.pause();

                        music.currentTime = section.end;

                    }

                }
            );

        }

    }


    /* ==========================================
       ❤️ FLOATING HEART RAIN
       ========================================== */

    const heartContainer =
        document.createElement("div");

    heartContainer.id = "heart-rain";

    document.body.appendChild(heartContainer);


    function createHeart() {

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";


        const hearts = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💓",
            "💞",
            "💘"
        ];


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            Math.random() * 18 + 15 + "px";


        const duration =
            Math.random() * 4 + 5;

        heart.style.animationDuration =
            duration + "s";


        heart.style.setProperty(
            "--move",
            Math.random() * 200 - 100 + "px"
        );


        heartContainer.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, duration * 1000);

    }


    setInterval(
        createHeart,
        450
    );

});
             
    
