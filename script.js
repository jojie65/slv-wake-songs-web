/* ---------------------------------------------------------------
   SLV Wake Songs — song data

   This mirrors the SongsData.kt list from the Android app:
   each song has an id, a title (number included, per current
   convention), an optional language tag, and lyrics.

   To add a song: copy one of the objects below, give it the next
   id, and fill in title / lyrics. No other file needs to change.
------------------------------------------------------------------ */
const SONGS = [
  {
    id: 1,
    title: "01 Kon Magkatigum Ta",
    lang: "Cebuano",
    lyrics:
`Kon magkatigum ta sa Iyang ngalan,

Siya natong tanan makig-uban.

Kon maghi-usa ta sa Iyang gugma,

kalinaw maangkon ta.

Ug sa atong panginahanglan,

ang Ginoo ang atong dangpan,

kay Siya ra man ang tuburan

sa tanang mga kaayohan.`
  },
  {
    id: 2,
    title: "02 Ang Buhat Tang Maayo",
    lang: "Cebuano",
    lyrics: "Lyrics not yet added."
  },
  {
    id: 3,
    title: "03 Kay Kita Usa Ra",
    lang: "Cebuano",
    lyrics: "Lyrics not yet added."
  }
];

/* ---------------------------------------------------------------
   Elements
------------------------------------------------------------------ */
const homeView = document.getElementById("view-home");
const listView = document.getElementById("view-list");
const songView = document.getElementById("view-song");
const barEl = document.getElementById("bar-list-song");
const songListEl = document.getElementById("song-list");
const emptyStateEl = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const backButton = document.getElementById("back-button");
const openSongbookButton = document.getElementById("open-songbook");
const qrCodeEl = document.getElementById("qr-code");

const songNumberEl = document.getElementById("song-number");
const songTitleEl = document.getElementById("song-title");
const songLangEl = document.getElementById("song-lang");
const songLyricsEl = document.getElementById("song-lyrics");
const songRibbonEl = document.getElementById("song-ribbon");

/* ---------------------------------------------------------------
   Render: song list (optionally filtered)
------------------------------------------------------------------ */
function renderList(filterText) {
  const query = (filterText || "").trim().toLowerCase();

  const filtered = query
    ? SONGS.filter(song => song.title.toLowerCase().includes(query))
    : SONGS;

  songListEl.innerHTML = "";

  filtered.forEach(song => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "song-row";
    button.addEventListener("click", () => {
      window.location.hash = `song-${song.id}`;
    });

    const num = document.createElement("span");
    num.className = "num";
    num.textContent = String(song.id).padStart(2, "0");

    const title = document.createElement("span");
    title.className = "title";
    // strip a leading "NN " from the title so it isn't shown twice
    title.textContent = song.title.replace(/^\d+\s+/, "");

    button.appendChild(num);
    button.appendChild(title);

    if (song.lang) {
      const lang = document.createElement("span");
      lang.className = "lang";
      lang.textContent = song.lang;
      button.appendChild(lang);
    }

    li.appendChild(button);
    songListEl.appendChild(li);
  });

  emptyStateEl.hidden = filtered.length !== 0;
}

/* ---------------------------------------------------------------
   Render: single song page
------------------------------------------------------------------ */
function renderSong(song) {
  songNumberEl.textContent = `No. ${String(song.id).padStart(2, "0")}`;
  songTitleEl.textContent = song.title.replace(/^\d+\s+/, "");
  songLangEl.textContent = song.lang || "";
  songLyricsEl.textContent = song.lyrics;
  songRibbonEl.textContent = String(song.id).padStart(2, "0");
}

/* ---------------------------------------------------------------
   QR code — generated from the page's own root URL, so it always
   points wherever this site is actually hosted (no hardcoded link
   to keep in sync). Scanning it lands on the home view.
------------------------------------------------------------------ */
function renderQrCode() {
  if (typeof QRCode === "undefined" || !qrCodeEl) return;

  const rootUrl = window.location.origin + window.location.pathname;

  new QRCode(qrCodeEl, {
    text: rootUrl,
    width: 160,
    height: 160,
    colorDark: "#16242B",
    colorLight: "#F6EFDC"
  });
}

/* ---------------------------------------------------------------
   View switching, driven by the URL hash:
     (empty) or #home  -> home view
     #songs             -> song list
     #song-<id>         -> single song
   so the browser back button and shareable links both work.
------------------------------------------------------------------ */
function showHome() {
  homeView.hidden = false;
  listView.hidden = true;
  songView.hidden = true;
  barEl.hidden = true;
}

function showList() {
  homeView.hidden = true;
  listView.hidden = false;
  songView.hidden = true;
  barEl.hidden = false;
}

function showSong(id) {
  const song = SONGS.find(s => s.id === id);
  if (!song) {
    showList();
    return;
  }
  renderSong(song);
  homeView.hidden = true;
  listView.hidden = true;
  songView.hidden = false;
  barEl.hidden = false;
  window.scrollTo(0, 0);
}

function handleRoute() {
  const hash = window.location.hash; // e.g. "#song-2", "#songs", "#home", or ""
  const songMatch = hash.match(/^#song-(\d+)$/);

  if (songMatch) {
    showSong(Number(songMatch[1]));
  } else if (hash === "#songs") {
    showList();
  } else {
    showHome();
  }
}

/* ---------------------------------------------------------------
   Wire up events
------------------------------------------------------------------ */
window.addEventListener("hashchange", handleRoute);

openSongbookButton.addEventListener("click", () => {
  window.location.hash = "songs";
});

backButton.addEventListener("click", () => {
  window.location.hash = "songs";
});

searchInput.addEventListener("input", event => {
  renderList(event.target.value);
});

/* ---------------------------------------------------------------
   Initial render
------------------------------------------------------------------ */
renderList("");
renderQrCode();
handleRoute();