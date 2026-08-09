document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       🎵 7-PAGE MUSIC SYSTEM
       SONG LENGTH: 4 MINUTES 36 SECONDS
       ========================================== */

    const music = document.getElementById("bgMusic");

    if (music) {

        const pageMusic = {

            // PAGE 1 — OUR LOVE STORY
            "index.html": {
                start: 0,
                end: 39
            },

            // PAGE 2 — FIRST MEETING
            "first-meeting.html": {
                start: 39,
                end: 79
            },

            // PAGE 3 — OUR FIRST DATE
            "first-date.html": {
                start: 79,
                end: 118
            },

            // PAGE 4 — PHOTOS
            "photos.html": {
                start: 118,
                end: 157
            },

            // PAGE 5 — TRIPS
            "trips.html": {
                start: 157,
                end: 197
            },

            // PAGE 6 — OUR MEMORIES
            "memories.html": {
                start: 197,
                end: 236
            },

            // PAGE 7 — TODAY & FOREVER
            "today.html": {
                start: 236,
                end: 276
            }

        };


        /* ==========================================
           FIND CURRENT PAGE
           ========================================== */

        let page = window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

        if (page === "") {
            page = "index.html";
        }


        const section = pageMusic[page];


        if (section) {

            /* ==========================================
               SET MUSIC POSITION
               ========================================== */

            function setPosition() {

                music.currentTime = section.start;

            }


            /* ==========================================
               START MUSIC
               ========================================== */

            function startMusic() {

                setPosition();

                music.play().catch(() => {

                    console.log(
                        "Autoplay blocked. Click anywhere to start music."
                    );

                });

            }


            /* ==========================================
               WAIT FOR AUDIO
               ========================================== */

            if (music.readyState >= 1) {

                startMusic();

            } else {

                music.addEventListener(
                    "loadedmetadata",
                    startMusic,
                    { once: true }
                );

            }


            /* ==========================================
               START AFTER FIRST CLICK
               ========================================== */

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


            /* ==========================================
               STOP AT END OF PAGE'S MUSIC SECTION
               ========================================== */

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


        /* Random horizontal position */

        heart.style.left =
            Math.random() * 100 + "vw";


        /* Random size */

        heart.style.fontSize =
            Math.random() * 18 + 15 + "px";


        /* Random speed */

        const duration =
            Math.random() * 4 + 5;

        heart.style.animationDuration =
            duration + "s";


        /* Random sideways movement */

        heart.style.setProperty(
            "--move",
            Math.random() * 200 - 100 + "px"
        );


        heartContainer.appendChild(heart);


        /* Remove after animation */

        setTimeout(() => {

            heart.remove();

        }, duration * 1000);

    }


    /* ==========================================
       ❤️ CREATE HEARTS CONTINUOUSLY
       ========================================== */

    setInterval(
        createHeart,
        450
    );

});
  