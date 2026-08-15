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
`[KORO:] 
Kon magkatigum ta sa Iyang 
ngalan, Siya natong tanan 
makig-uban. Kon maghi-usa
ta sa Iyang gugma,kalinaw 
maangkon ta.

Ug sa atong panginahanglan,
ang Ginoo ang atong dangpan,
kay Siya ra man ang tuburan
sa tanang mga kaayohan.
[(Koro)]


`
  },
  {
    id: 2,
    title: "02 Ang Buhat Tang Maayo",
    lang: "Cebuano",
    lyrics: 
    "[1.]  Ang buhat tang maayo ngadtos mga katawhan, mao kini gisugo, sa atong kasulatan. Pinaagi kanato, kini ilang makita,nga ang kamanduan gugma diay'ng langitnon alang sa tanan.\n\n[KORO]\nPagka-anindot sa maayong buhat ngadto sa atong mga igsoon. Kon mag-ambahan sa katam-is grasya nga giandam na sa Ginoong Dios Amahan.\n\n[2.]  Itudlo, O Ginoo, unsa'y among buhaton nga ilang kahimut-an ang akong binuhatan. Hatagi ko'g kahait, sa ako nga pangisip, aron matuman ko ang gipabuhat nga alang gyud sa tanan. [(Koro)]"
  },
  {
    id: 3,
    title: "03 Kay Kita Usa Ra",
    lang: "Cebuano",
    lyrics: `[KORO:] 
Kay kita usa ra sa gugma ni Kristo. Kon mamatay kita uban Kaniya, mabanhaw kita sa kinabuhing dayon.

[1.]  	Kon sa imong kinabuhi gugma ang gadasig, ayaw na pangita ug lain pang butang, kay ang Ginoo anaa kanimo. [(KORO)]

[2.]    Kon aduna kay igsoon nag-antos sa kasakit, lig-ona ang pagtuo sa langitnong gahum kay ang Ginoo mao ang paglaum. [(Koro)]
`
  },
  {
    id: 4,
    title: "04 Sino Ako",
    lang: "Tagalog",
    lyrics: `
    Hiram sa Diyos ang aking
    buhay. Ikaw at ako tanging
    handog lamang. Di ko ninais
    na ako’y isilang. Ngunit 
    salamat dahil may buhay.

    Ligaya ko na ako’y isilang
    Pagkat tao ay mayroong
    dangal. Sino’ng may 
    pag-ibig, sino’ng 
    nagmamahal kundi ang tao 
    Diyos ang pinagmulan.
    Kundi ako umibig, kundi
    ko man bigyang halaga 
    ang buhay ko’y handog, 
    ang buhay ko’y hiram sa 
    Dios, kung di ako
    nagmamahal, sino ako? [(repeat Ligaya ko . .)]

    `
  },
  {
    id: 5,
    title: "05 Diosnong Magtutudlo",
    lang: "Cebuano",
    lyrics: `
    Diosnong Magtutudlo, ania
    kami karon, binuksan ang 
    kasing-kasing sa Imong 
    Pulong. Dinhi niining tigom,
    Imo kaming gitawag aron 
    lamang mabuhi sa Imong mga
    hatag, aron lamang mabuhi sa
    Imong mga hatag. 
    [(Repeat once)]
    `
  },
  {
    id: 6,
    title: "06 Ang Kinabuhi Sa Tawo",
    lang: "Cebuano",
    lyrics:`
    Ang kinabuhi sa tawo sama sa
    usa ka binhi. Kon alimahan 
    pag-ayo moturok kini'g 
    molambo. Ug unya abto'g 
    kahamtog sama sa atong 
    tanom kay inumol man sa 
    gugma, gugma sa isigkaingon.

    Kay ki'ng atong kinabuhi,
    kinabuhi'ng usa ra. Ug sama 
    sa usa ka binhi, sa gugma 
    kita gipili. Kay kinabuhing
    bililhon, bulawan ang 
    panahon. Ato g'yung pani-
    nguhaon ang pagpuyo nga 
    sulondon, ato g'yung pani-
    nguhaon ang pagpuyo nga 
    sulondon. 

    `
  },
  {
    id: 7,
    title: "07 Laum, Kalag Ko",
    lang: "Cebuano",
    lyrics:`
    ^1.^  Kon adunay kahayag human sa kangitngit; kon adunay kalipay human sa kasakit; kon adunay katam-is human sa kapa-it, laum kalag ko, adunay langit.

    [KORO:]
    Ginoo, milaum ako Kanimo, mitoo ako sa kagahuman Mo. Misalig ako sa Imong gugma; sa Imong pagpangga ug pag-amoma.

    ^2.^  Kon adunay kalinaw human sa kasamok; kon adunay pasaylo human sa kaligotgot; kon adunay pagbati human sa kayugot; laum kalag ko, ayaw kahadlok. [(Koro)]
    `
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
const langFilterEl = document.getElementById("lang-filter");
const backButton = document.getElementById("back-button");
const openSongbookButton = document.getElementById("open-songbook");
const qrCodeEl = document.getElementById("qr-code");

const songNumberEl = document.getElementById("song-number");
const songTitleEl = document.getElementById("song-title");
const songLangEl = document.getElementById("song-lang");
const songLyricsEl = document.getElementById("song-lyrics");
const songRibbonEl = document.getElementById("song-ribbon");

/* ---------------------------------------------------------------
   Render: language filter chips — built automatically from
   whatever `lang` values actually appear in SONGS. Add a song with
   a new language and its chip shows up on its own; no HTML edit
   needed.
------------------------------------------------------------------ */
function renderLangChips() {
  const languages = [...new Set(SONGS.map(song => song.lang).filter(Boolean))].sort();
  const allLabels = ["All", ...languages];

  langFilterEl.innerHTML = "";

  allLabels.forEach(label => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (label === currentLangFilter ? " is-active" : "");
    chip.dataset.lang = label;
    chip.textContent = label;
    langFilterEl.appendChild(chip);
  });
}

/* ---------------------------------------------------------------
   Render: song list (search text + language filter combined)
------------------------------------------------------------------ */
let currentSearch = "";
let currentLangFilter = "All";

function renderList() {
  const query = currentSearch.trim().toLowerCase();

  const filtered = SONGS.filter(song => {
    const matchesSearch = !query || song.title.toLowerCase().includes(query);
    const matchesLang = currentLangFilter === "All" || song.lang === currentLangFilter;
    return matchesSearch && matchesLang;
  });

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

    // Only show the language tag on each row when viewing "All" —
    // once a specific language is picked via the chips above, the
    // tag would just repeat what the user already filtered by.
    if (song.lang && currentLangFilter === "All") {
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
  // Render lyrics text into a container, styling bracketed advisory
// lines (e.g. "[Chorus]", "[Koro]", "[Repeat to Verse 1]") as
// labels distinct from the sung lyrics themselves, and ^caret^
// segments (e.g. "^1^") as superscript verse numbers.
------------------------------------------------------------------ */
function renderLyrics(container, lyricsText) {
  container.innerHTML = "";

  const lines = lyricsText.split("\n");

  lines.forEach((line, index) => {
    // Split the line on any [bracketed] advisory label or any
    // ^caret-wrapped^ superscript segment, keeping the markers in
    // the result so we know which pieces to style.
    const parts = line.split(/(\[[^\]]+\]|\^[^^]+\^)/);

    parts.forEach(part => {
      if (/^\[[^\]]+\]$/.test(part)) {
        const label = document.createElement("span");
        label.className = "lyric-label";
        label.textContent = part.slice(1, -1);
        container.appendChild(label);
      } else if (/^\^[^^]+\^$/.test(part)) {
        const sup = document.createElement("sup");
        sup.textContent = part.slice(1, -1);
        container.appendChild(sup);
      } else if (part.length > 0) {
        container.appendChild(document.createTextNode(part));
      }
    });

    if (index < lines.length - 1) {
      container.appendChild(document.createElement("br"));
    }
  });
}

/* ---------------------------------------------------------------
   Render: single song page
------------------------------------------------------------------ */
function renderSong(song) {
  songNumberEl.textContent = `No. ${String(song.id).padStart(2, "0")}`;
  songTitleEl.textContent = song.title.replace(/^\d+\s+/, "");
  songLangEl.textContent = song.lang || "";
  renderLyrics(songLyricsEl, song.lyrics);
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
  currentSearch = event.target.value;
  renderList();
});

langFilterEl.addEventListener("click", event => {
  const chip = event.target.closest(".chip");
  if (!chip) return;

  currentLangFilter = chip.dataset.lang;

  langFilterEl.querySelectorAll(".chip").forEach(c => {
    c.classList.toggle("is-active", c.dataset.lang === currentLangFilter);
  });

  renderList();
});

/* ---------------------------------------------------------------
   Initial render
------------------------------------------------------------------ */
renderLangChips();
renderList();
renderQrCode();
handleRoute();