// script.js
window.onload = function() {
    setTimeout(function() {
      document.querySelector('.loader').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
      document.body.style.overflow = 'auto'; // Enable scrolling after loader is hidden
    }, 5000); // 5000 milliseconds = 5 seconds
  };
  
  // script.js
  window.onload = function() {
    setTimeout(function() {
      document.querySelector('.loader').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
      document.body.style.overflow = 'auto'; // Enable scrolling after loader is hidden
    }, 5000); // 5000 milliseconds = 5 seconds
  };
  
  
  document.addEventListener('DOMContentLoaded', () => {
      const movieGrid = document.getElementById('movie-grid');
      const movies = [
        {
          title: "Alone 2015",
          poster: "https://blogger.googleusercontent.com/img/a/AVvXsEjU8eaqoQ0VCn64539vqgoBwEvxKxyaHr0iY-OlF4YKW1shQCicQurZGm5WBCiNrJI9Cp2DmpOcGZCymvk9RNFWsLAG83pYeiGEBUhNJnDAem716KmXAPUSg9a64sfAWDX2PadcgT3mLoCzMKSFnUhrB9-RwqgmZvl_1-dJnf3ZymoT7ZtrRliCjtnk=w391-h587",
          overview: "Horror/Romance",
          rating: "7.5",
          release_date: "2015-01-01",
          link: "https://drive.google.com/file/d/1E691MMbp4Bc5YtwCGij5ZXj3LjzSjclT/view?usp=sharing"
        },
        {
          title: "Kadira Divyaraja Full Movie",
          poster: "https://upload.wikimedia.org/wikipedia/en/4/40/Kadira_Divyaraja_poster.jpg",
          overview: "HD Full Movie",
          rating: "7.9",
          release_date: "2023-04-20",
          link: "https://youtu.be/xt6rwIINibA?si=ObInEKarwMjSJ3cq"
        },
        {
          title: "The Game HD Full Sinhala Movie",
          poster: "https://theatersollution.s3.amazonaws.com/9b99bd42-d7db-4a24-b4d4-cf1c2618d022.jpg",
          rating: "7.8",
          release_date: "2023-05-10",
          link: "https://youtu.be/y_4mO0P3ZZ8?si=CjajHqyw8u7B_9ed"
        },
        {
          title: "Sinhala Dubbed Tigger 3 Tamil Full Movie 🎥 සින්හලෙන් බලන්න Full Movie",
          poster: "https://preview.redd.it/tiger-3-tamil-poster-v0-cc61tojerylb1.jpg?width=640&crop=smart&auto=webp&s=1d4532f00828c30985e4bb6ba70a9d1369e9cc6d",
          overview: "Sinhala Dubbed Full Movie",
          rating: "7.7",
          release_date: "2023-06-15",
          link: "https://drive.google.com/file/d/12tbFaCzReZAenqE-tmLN3pJ1aYnFQTOZ/view?usp=sharing"
        },
        {
          title: "RRR (2022) Sinhala Dubbed Movie",
          poster: "https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          rating: "8.0",
          release_date: "2022-01-01",
          link: "https://youtu.be/gSWAPGIHDC8?si=InmnXNdRGgx4_ei_"
        },
        {
          title: "Titanic 1997 Sinhala Full movie FROMO EXTRA WEB4",
          poster: "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
          overview: "සිංහලෙන් බලන්න අපෙන් විතරමයි 720P",
          rating: "8.2",
          release_date: "1997-12-19",
          link: "https://youtu.be/8lJ5jPPu-oU?si=cLYCkjf_xI8JivQc"
        },
        {
          title: "Rim of the World 2019 Sinhala Full Movie 'ලෝකයේ නිම්නය 2019 - සම්පුර්ණ චිත්‍රපටය සිංහල හඬකැවූ'",
          poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj42KgHd3PJbFn17AFG2dSH2pFHA10shZixRkv1VWBw2HfOG-kUS5Ehkp7ydDuz37b0WmaUen-nrbCszhtos1_h6QLB0-FoY6ZYCFufGZcnIQXsr6La56L4J22Q__kxOUVwlKBgZ9jf8dlAwxkh0-Pzez6vouUD3VmX8y5VF8VwrfcKNbH7927fdxfL/s1280/photo_6240174593453178995_y.jpg",
          overview: "සිංහලෙන් බලන්න අපෙන් විතරමයි 720P",
          rating: "7.6",
          release_date: "2019-06-21",
          link: "https://drive.google.com/file/d/1gqwm6jFQpwTkjtiGOrXc5swrIoxn0aea/view?usp=sharing"
        },
        {
          title: "Jumanji Welcome To The Jungle 2017 Sinhala Dubbed සිංහලෙන් බලන්න FROMO EXTRA",
          poster: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxTb-_F9dvEVUTWT5GbisMpP9qzh-y6ZM0_KmTutbG2UJXOyBUWjE9B-3_QStvuNwneonmQIMXjGudCV7BOR2FUA7Zn0gPEsgWbJ5mCCl48_gsQYA6ZFrKu-e3vBqyRgWmQp3vWE7-jRvZDjmNiiqx_DCLm6WVdu2h6dNBzXpo6xEK8bxEUexEFoj5/s1280/photo_6339224785636146712_y.jpg",
          overview: "සිංහලෙන් බලන්න අපෙන් විතරමයි 720P",
          rating: "7.5",
          release_date: "2017-12-20",
          link: "https://drive.google.com/file/d/13-XzojZ80Q_IGLjC0WbsQeSiy1oNRKA6/view?usp=sharing"
        },
        {
          title: "ආදරණීය කන්නා සිංහලෙන් හඬකැවූ චිත්‍රපටය | Sinhala Dubbed Minsara Kanna Full Movie",
          poster: "https://m.media-amazon.com/images/M/MV5BNjkxZDIyNTgtZmYyZi00NDkzLTkxMTctOTVmOTZkNTZjYmQyXkEyXkFqcGc@._V1_.jpg",
          overview: "සිංහලෙන් බලන්න අපෙන් විතරමයි 720P",
          rating: "7.5",
          release_date: "2017-12-20",
          link: "https://youtu.be/2LhhMeipwVs?si=cbqrlvGAi1LVXxvI"
        },
        {
          title: "Bruce Lee The Fighter - සටන්කරුවා - සිංහල හඩකැවූ චිත්‍රපටය",
          poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRcRt6GLCk1ID1wWnGijdB9ZU3v-HVdJCJ47RNSGrTEpd-YiHo0RJzF5pmTNfYTyF-dcsZ",
          overview: "සිංහලෙන් බලන්න අපෙන් විතරමයි 720P",
          rating: "5.6",
          release_date: "2017-12-20",
          link: "https://youtu.be/Qxmsb2gW6Gc?si=b-hebx1gecivUtfF"
        },
        {
          title: "Taare Zameen Par-Sinhala Dubbed full movie 720p සිංහලෙන් හඬකැවූ චිත්‍රපටය | Sinhala Dubbed",
          poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIFyKAL4ldG54LGrepUXMraXASXkEmk4b79Uv_tPy35dtC1fmCTz3VBAfC9wR-ZugQjiB",
          overview: "සිංහලෙන් බලන්න අපෙන් විතරමයි 720P",
          rating: "6.2",
          release_date: "2017-12-25",
          link: "https://drive.google.com/file/d/1GZuT9XgC9XgGZrTg8QDsFgJ6vrEVHbeY/view?usp=sharing"
        },
        {
          title: "Open Season 2006 ලස්සන මේ වගේ ෆිල්ම්ස් සිංහලෙන් බලන්න අපෙන් විතරයි",
          poster: "https://image.tmdb.org/t/p/original/evWaCkniQ6EGPBWYv2lknXytsx8.jpg",
          overview: "Open Season is a 2006",
          rating: "6.2",
          release_date: "2017-12-25",
          link: "https://drive.google.com/file/d/1L4rxLY95Mpka57bsNZCrDwSlQpvhCA8H/view?usp=sharing"
        },
        {
          title: "Pinocchio 2019 ලස්සන මේ වගේ ෆිල්ම්ස් සිංහලෙන් බලන්න අපෙන් විතරයි..",
          poster: "https://m.media-amazon.com/images/M/MV5BODIzZGNlMzYtYjE4ZS00NDRmLTk3NWEtYjNjNDcyNjk5YWQzXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
          overview: "Open Season is a 2006",
          rating: "6.3",
          release_date: "2017-12-25",
          link: "https://drive.google.com/file/d/1SlPpHH9QhGxAsiMUGX1-OlboswlZX9jn/view?usp=sharing"
        },
        {
          title: "Khel Khel Mein (2024) 1080P.mp4 ලස්සන මේ වගේ ෆිල්ම්ස් සිංහලෙන් බලන්න අපෙන් විතරයි..",
          poster: "https://m.media-amazon.com/images/M/MV5BMGFkYjVjYTktODA2Yi00NDMxLWEwMGYtZjExMzA4MjVlM2E5XkEyXkFqcGc@._V1_.jpg",
          overview: "Open Season is a 2006",
          rating: "6.5",
          release_date: "2017-12-25",
          link: "https://drive.google.com/file/d/1-fbrx-9zRMRp82couovVAfnsz7O3v1Rz/view?usp=sharing"
        },
        {
          title: "රත්හදුන් ජාවාරම අතට ගත් කුලී කරුවා | Pushpa 1 | Sinhala Dubbed Movie සිංහලෙන් බලන්න අපෙන් විතරයි..",
          poster: "https://resizing.flixster.com/AE8lfGOaDoyaRMtXGKUvm1imjuk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21200456_v_v8_aa.jpg",
          overview: "Pushpa 1",
          rating: "6.2",
          release_date: "2017-12-25",
          link: "https://drive.google.com/file/d/15TChbJCEeyCfDNMg1XfQPGj3KMGTH3ad/view?usp=sharing"
        },
        {
          title: "පුෂ්ප රාජ්ගේ පාලනය | පුෂ්පා 2 | Pushpa 2 | Sinhala Dubbed Movie",
          poster: "https://preview.redd.it/pushpa-2-the-rule-v0-9bbr88fqj1yd1.jpeg?auto=webp&s=4ee451f4e9a253472db5864bd6f36df91347c267",
          overview: "Pushpa 2",
          rating: "6.2",
          release_date: "2017-12-25",
          link: "https://drive.google.com/file/d/15fPrHoi_sgvNrHIU_hbNyxCd8fFx-Hvo/view?usp=sharing"
        },
        {
          title: " Arundhati 2009 horror movie with Sinhala සිංහලෙන් බලන්න අපෙන් විතරයි",
          poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSa_-c6VOB5VUMHpDdWWnVmNBHzvg508DxOGhJCsqV5291xTjaW-3V519oFUTMA-RWZZ7gUMg",
          overview: "Arundhati 2009 horror",
          rating: "6.2",
          release_date: "2017-12-25",
          link: "https://youtu.be/xFavnarc9Wc?si=NRM3VL6SI0YiyZtk"
        },
        {
          title: "මහරජ ගැමුණු – Maharaja Gamunu full movie",
          poster: "https://m.media-amazon.com/images/M/MV5BZmFlZTBlOGEtMTU5NC00YTgxLWFmMjUtODNhYmFjOGEwNmE5XkEyXkFqcGc@._V1_.jpg",
          overview: "මහරජ ගැමුණු",
          rating: "8.10",
          release_date: "2024-9-10",
          link: "https://youtu.be/xFavnarc9Wc?si=NRM3VL6SI0YiyZtk"
        },
        {
          title: "Bahubuthayo | බහුබූතයෝ | Sinhala Full Movie",
          poster: "https://m.media-amazon.com/images/M/MV5BZmFlZTBlOGEtMTU5NC00YTgxLWFmMjUtODNhYmFjOGEwNmE5XkEyXkFqcGc@._V1_.jpg",
          overview: "බහුබූතයෝ ",
          rating: "2.3",
          release_date: "2024-9-10",
          link: "https://youtu.be/oQ8kuIkLl5o?si=RCr1nF0SoCYdPT07"
        },
        {
          title: "දේදුණු ආකාසේ Dedunu Akase Sinhala Full Movie 2017 ",
          poster: "https://upload.wikimedia.org/wikipedia/en/d/db/Theatrical_Poster_of_Dedunu_Akase_Film.jpg",
          overview: "දේදුණු ආකාසේ ",
          rating: "9.3",
          release_date: "2024-9-10",
          link: "https://youtu.be/mbIObJX6Up0?si=5j2t8Ahx21y_MMcY"
        },
        {
          title: "Journey To The Center Of The Earth Sinhala Dubbed Movie ",
          poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVTF5qBsVYheHTUqoFG4pBThPt9CQkOUjHi7KZzmF6-8He9MAIfZz5S0Zte5h8A6ycF2G1Jg",
          overview: "Journey To The Center",
          rating: "5.3",
          release_date: "2024-9-10",
          link: "https://drive.google.com/file/d/1p2q9x9MyD5mvq13Fb_Ug-aoO2h_fHUUH/view?usp=sharing"
        },
        {
          title: "Penguins of Madagascar Sinhala Dubbed Movie ලෝකයේ පෙන්ගුයින් ජනගහනය විනාශ",
          poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7DNEcR3VPSnkZcInWLKguPfKGTiutAAI9TsGteYlLLPDE3q5rkwcoatdTCK6CYtVYT0je",
          overview: "පෙන්ගුයින් ජනගහනය ",
          rating: "6.6",
          release_date: "2024-9-10",
          link: "https://drive.google.com/file/d/1UBLlq-5vwcrdPadpCeTJmyLTXxxzaj5W/view?usp=sharing"
        },
        {
          title: "Harry Potter and the Philosopher's Stone (2001)Sinhala Full Movie",
          poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQttbZNVGzKnwLBGXrKBkt0VY2J2DubjnH_lSQrJCzdSf5fe4OK8yUM27EYhteFc68Ii7Xr9g",
          overview: "Harry Potter and the Philosopher's",
          rating: "7.6",
          release_date: "2024-9-10",
          link: "https://drive.google.com/file/d/1PVmzOdkE0gecFYhdzwCLtH2Y9MO95zap/view?usp=sharing"
        },
        {
          title: "Harry Potter and the Chamber of Secrets (2002) ලස්සන මේ වගේ ෆිල්ම්ස් සිංහලෙන් බලන්න අපෙන් විතරයි..",
          poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1rI0fB3GdfQCFT3HYWrIIreGt74rV1R0n8JgYUmXtzMeOCdIKv4MdmSafc0hi7DksbRtO",
          overview: "Harry Potter and the chamber",
          rating: "8.6",
          release_date: "2024-9-10",
          link: "https://drive.google.com/file/d/1PVmzOdkE0gecFYhdzwCLtH2Y9MO95zap/view?usp=sharing"
        },
        {
          title: "Harry Potter and the Goblet of Fire Sinhala Dubbed Movie අපෙන් විතරයි",
          poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRIb7EKKYfM0tX2pE8nrzP-LBo3AiBgLyJN_HuKX7GId7Ca84Ygzf8tTQ-rmcr4SG5Uww08yw",
          overview: "Harry Potter and goblet",
          rating: "8.9",
          release_date: "2024-9-10",
          link: "https://drive.google.com/file/d/1PWXphykt5mlvi0h5IfCYU63_oHu-yjGB/view?usp=sharing"
        },
        {
          title: "  Harry Potter 3 Sinhala Movie ලස්සන මේ වගේ ෆිල්ම්ස් සිංහලෙන් බලන්න අපෙන් විතරයි",
          poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTgkdZmW7dz8EAUAZ_QfYb_fUa0_Nd4jmHCD6wKjjVIuS4ci-J5ChWg630iacWfrAU9Ko_lng",
          overview: "Harry Potter 3",
          rating: "9.9",
          release_date: "2024-9-10",
          link: "https://mega.nz/file/FE8WTabS#Y-aNVi4yOm7VvKfpvmRwWnK2Uwe1W14i6_TzudPqv4o"
        },
        {
          title: " Harry Potter and the Order of the Phoenix (5) Sinhala Dubbedඅපෙන් විතරයි",
          poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMf2sXnLj2uQ9eqOTGYN5Djelr3u2ElmI2pJM6t5cGjcXs1IvRHeFUmOpNTVyaQj1OMYl-",
          overview: "Harry Potter 5",
          rating: "9.9",
          release_date: "2024-9-10",
          link: "https://mega.nz/file/hAEylKQC#WEaNoYkm1vJGhSwajZvUIVjShmqqNkitmreW_7SSlbE"
        },
        {
          title: "ENEMY | 2021 | Sinhala Dubbed Movie | සිංහල හඩකැවු",
          poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdAJUicLXnJWa8HHC0XjoMKTkFyazejWMzRa7f7VQAGWhn5AYstmS9oo7bsya7IZTEqGY_Q",
          overview: "Enemy 2021",
          rating: "6.1",
          release_date: "2024-9-10",
          link: "https://youtu.be/oJMjoagvJj8?si=Mdc_T1JThbno8IgA"
        },
        {
          title: "The Nativity of Jesus Christ (Sinhala dubbed movie)",
          poster: "https://images.moviesanywhere.com/b8ff27f0cf2c83ec862cbbb6e3150082/a2de85e9-cbe3-4677-8267-e1bea214f83e.jpg",
          overview: "The Nativity of jesus christ",
          rating: "6.1",
          release_date: "2024-9-10",
          link: "https://youtu.be/4lLCljrJof0?si=yCvMdRlPQu1rkrok"
        },
        {
          title: "The Little Mermaid - පුංචි දියකිඳුරිය",
          poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3JNAf7VdWdhMjlkpQJ_owAL8N6ja09gDHHLZU2HCNQkbrXJ6ySLD5BRc5gO2EO8m1xehjQg",
          overview: "the little mermaid",
          rating: "7.1",
          release_date: "2024-9-10",
          link: "https://mega.nz/file/KRlR0J5R#bwKvc7LZ-ONlKcYfuQf1kvEyLAuCrGAozAbn_iNA-Nc"
        },
        {
          title: "Rise of the Guardians 2012 Sinhala Dubbed",
          poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQM5qTwC_eVxjxTxe3BSsx25CR2BhEMgGkXXVhdLxz1W7mqL2ENZ8lpE1PjDyLAuKW5ZkcV",
          overview: "Rise of the guardiand ",
          rating: "9.1",
          release_date: "2024-9-10",
          link: "https://drive.google.com/file/d/1gDznlJiohHlJctW8PV0GYbfPBJHxusNi/view?usp=sharing"
        },
        {
          title: "The.Spiderwick.Chronicles.2008.720p",
          poster: "https://api.subsource.net/posters/94463.jpg",
          overview: "The.Spiderwick.Chronicles ",
          rating: "6.5",
          release_date: "2024-9-10",
          link: "https://drive.google.com/file/d/11Z7TOHv9Dh0ybihdPS2_kenUYDQ9swDy/view?usp=sharing"
        },
        {
          title: "Your Name - Kimi No Na Wa (2016)ජීවිත මාරුව Sinhala Dubbed ",
          poster: "https://blogger.googleusercontent.com/img/a/AVvXsEhoWQtWyAaKPRSUUZH2PiZK9RlcyemdPNfI1iMgWcOG5SqdGNoKWEAQgJ6T5G9IvJ9slv8mwjuVjLMMWyHQCfpZ-cs3ZPtliGqfpDa0l37UXWyKpWore1jJxnI66m3Opgxct802_Q-0K6XMJrksKCOG58GWlaKSHgfXzVREJYZoaC8S6e8ROreH9Fgq=w396-h586",
          overview: "Your Name - Kimi No Na Wa ",
          rating: "9.5",
          release_date: "2024-9-10",
          link: "https://youtu.be/zDJb6nCMv0k?si=JF8GXR5ekFrkb1yE"
        },
        {
          title: "Squid Game 2 (2024) S02 E01 Sinhala Subtitles | “පාන් සහ ලොතරැයිය” ",
          poster: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Squid_Game_season_2_poster.png/220px-Squid_Game_season_2_poster.png",
          overview: "Squid Game 2 ",
          rating: "9.5",
          release_date: "2024-9-10",
          link: "https://mega.nz/file/rdgnCYKB#3vOHl1IiPYGALi0rBhnsDnWcZ2E9gQt1cyh98eSVdPI"
        }
      ];
  
      // Create rows for the movies
      const rows = [];
      for (let i = 0; i < Math.ceil(movies.length / 6); i++) {
          const row = document.createElement('div');
          row.classList.add('movie-row');
          rows.push(row);
      }
  
      // Add movies to the rows
      movies.forEach((movie, index) => {
          const movieCard = document.createElement('div');
          movieCard.classList.add('movie-card');
          movieCard.innerHTML = `
              <img src="${movie.poster}" alt="${movie.title}">
              <h2>${movie.title}</h2>
              <p>${movie.overview}</p>
              <a href="${movie.link}" target="_blank">Watch Now</a>
          `;
          rows[Math.floor(index / 6)].appendChild(movieCard);
      });
  
      // Append all rows to the movie grid
      rows.forEach(row => movieGrid.appendChild(row));
      document.addEventListener('DOMContentLoaded', () => {
          const movieGrid = document.getElementById('movie-grid');
          const searchInput = document.getElementById('search-input');
          const searchButton = document.getElementById('search-button');
          const movies = [
            // Your movie data here...
          ];
      
          // Function to display movies
          function displayMovies(filteredMovies) {
              movieGrid.innerHTML = ''; // Clear the movie grid
              const rows = [];
              for (let i = 0; i < Math.ceil(filteredMovies.length / 6); i++) {
                  const row = document.createElement('div');
                  row.classList.add('movie-row');
                  rows.push(row);
              }
      
              filteredMovies.forEach((movie, index) => {
                  const movieCard = document.createElement('div');
                  movieCard.classList.add('movie-card');
                  movieCard.innerHTML = `
                      <img src="${movie.poster}" alt="${movie.title}">
                      <h2>${movie.title}</h2>
                      <p>${movie.overview}</p>
                      <a href="${movie.link}" target="_blank">Watch Now</a>
                  `;
                  rows[Math.floor(index / 6)].appendChild(movieCard);
              });
      
              rows.forEach(row => movieGrid.appendChild(row));
          }
      
          document.addEventListener('DOMContentLoaded', () => {
              const movieGrid = document.getElementById('movie-grid');
              const searchInput = document.getElementById('search-input');
              const searchButton = document.getElementById('search-button');
              const movies = [
                // Your movie data here...
              ];
          
              // Function to display movies
              function displayMovies(filteredMovies) {
                  movieGrid.innerHTML = ''; // Clear the movie grid
                  const rows = [];
                  for (let i = 0; i < Math.ceil(filteredMovies.length / 6); i++) {
                      const row = document.createElement('div');
                      row.classList.add('movie-row');
                      rows.push(row);
                  }
          
                  filteredMovies.forEach((movie, index) => {
                      const movieCard = document.createElement('div');
                      movieCard.classList.add('movie-card');
                      movieCard.innerHTML = `
                          <img src="${movie.poster}" alt="${movie.title}">
                          <h2>${movie.title}</h2>
                          <p>${movie.overview}</p>
                          <a href="${movie.link}" target="_blank">Watch Now</a>
                      `;
                      rows[Math.floor(index / 6)].appendChild(movieCard);
                  });
          
                  rows.forEach(row => movieGrid.appendChild(row));
              }
          
              // Initial display of all movies
              displayMovies(movies);
          
              document.addEventListener('DOMContentLoaded', () => {
                  const movieGrid = document.getElementById('movie-grid');
                  const searchInput = document.getElementById('search-input');
                  const searchButton = document.getElementById('search-button');
                  const movies = [
                    // Your movie data here...
                  ];
              
                  // Function to display movies
                  function displayMovies(filteredMovies) {
                      movieGrid.innerHTML = ''; // Clear the movie grid
                      const rows = [];
                      for (let i = 0; i < Math.ceil(filteredMovies.length / 6); i++) {
                          const row = document.createElement('div');
                          row.classList.add('movie-row');
                          rows.push(row);
                      }
              
                      filteredMovies.forEach((movie, index) => {
                          const movieCard = document.createElement('div');
                          movieCard.classList.add('movie-card');
                          movieCard.innerHTML = `
                              <img src="${movie.poster}" alt="${movie.title}">
                              <h2>${movie.title}</h2>
                              <p>${movie.overview}</p>
                              <a href="${movie.link}" target="_blank">Watch Now</a>
                          `;
                          rows[Math.floor(index / 6)].appendChild(movieCard);
                      });
              
                      rows.forEach(row => movieGrid.appendChild(row));
                  }
              
                  // Initial display of all movies
                  displayMovies(movies);
              
                  // Search functionality
                  searchButton.addEventListener('click', () => {
                      const searchTerm = searchInput.value.toLowerCase();
                      const filteredMovies = movies.filter(movie => 
                          movie.title.toLowerCase().includes(searchTerm) || 
                          movie.overview.toLowerCase().includes(searchTerm)
                      );
                      displayMovies(filteredMovies);
                  });
              
                  // Optional: Add search on input change
                  searchInput.addEventListener('input', () => {
                      const searchTerm = searchInput.value.toLowerCase();
                      const filteredMovies = movies.filter(movie => 
                          movie.title.toLowerCase().includes(searchTerm) || 
                          movie.overview.toLowerCase().includes(searchTerm)
                      );
                      displayMovies(filteredMovies);
                      document.addEventListener("DOMContentLoaded", function () {
                        const menuToggle = document.createElement("div");
                        menuToggle.innerHTML = "&#9776;";
                        menuToggle.classList.add("menu-toggle");
                        document.querySelector("header").prepend(menuToggle);
                      
                        const navList = document.querySelector("nav ul");
                        menuToggle.addEventListener("click", function () {
                          navList.classList.toggle("show");
                        });
                      });
                      
                  });
              });
          });
      });
  });
