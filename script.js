let musics = [
    { 'artist': 'sidhu moosewala', 'img': '', 'path': '/Music/0 to 100(PagalWorldl).mp3', 'title': '0-100' },
    { 'artist': 'divine', 'img': '', 'path': '/Music/3 59 AM - Divine.mp3', 'title': '3:59' },
    { 'artist': 'divine', 'img': '', 'path': '/Music/satya - Divine.mp3', 'title': 'Satya' },
    { 'artist': 'sidhu moosewala', 'img': '', 'path': '/Music/Old Skool Ft. Sidhu Moose Wala - Prem Dhillon.mp3', 'title': 'Old skool' },
    { 'artist': 'subh', 'img': '', 'path': '/Music/Baller - Shubh_128-(DJMaza).mp3', 'title': 'Baller' },
    { 'artist': 'emiway buntai', 'img': '', 'path': '/Music/100 Kadam Pe - Emiway Bantai.mp3', 'title': '100 kadam pe' },
    { 'artist': 'emiway buntai', 'img': '', 'path': '/Music/Bantai Ki Public - Emiway Bantai - Copy - Copy.mp3', 'title': 'Bantai ki public' },
    { 'artist': 'emiway buntai', 'img': '', 'path': '/Music/Dhua Dhua - Emiway Bantai 64 Kbps(PagalWorldCom.Com).mp3', 'title': 'Dhua-Dhua' },
    { 'artist': 'channi natan', 'img': '', 'path': '/Music/Daku_192(PagalWorldl).mp3', 'title': 'Daku' },
    { 'artist': 'emiway buntai', 'img': '', 'path': '/Music/Dhyan De - Emiway Bantai.mp3', 'title': 'Dhyan De' },
    { 'artist': 'divine', 'img': '', 'path': '/Music/Kohinoor - DIVINE.mp3', 'title': 'Kohinoor' },
    { 'artist': 'divine', 'img': '', 'path': '/Music/One Side (Divine).mp3', 'title': 'one side' },
    { 'artist': 'subh', 'img': '', 'path': '/Music/We Rollin - Shubh.mp3', 'title': 'we rollin' },
    { 'artist': 'yo yo honey singh', 'img': '', 'path': '/Music/One Bottle Down - Yo Yo Honey Singh.mp3', 'title': 'One bottle down' },
    { 'artist': 'sidhu moosewala', 'img': '', 'path': '/Music/These Days - Sidhu Moose Wala.mp3', 'title': 'These days' },
    { 'artist': 'unknown', 'img': '', 'path': '/Music/Hislerim(PaglaSongs).mp3', 'title': 'Hislerim' },
];

let i = 0;
let playPause = document.getElementById('playPause');
let range = document.getElementById('range');
let j = 0;
let audio = new Audio(musics[0].path);

function show() {
    let x = 0;
    musics.forEach((m, x) => {

        document.getElementById("list").innerHTML += `
                                                        <tr>
                                                            <td>${m.title}</td>
                                                            <td>${m.artist}</td>
                                                            <td><i onclick='playMusic(${x})' id="playPause" class="fa-regular fa-circle-play table-icon"></i></td>
                                                        </tr>`;
        x++;
    })
}


function playMusic(a) {
    if (audio.paused) {
        audio = new Audio(musics[a].path);
        audio.play();
        playPause.classList.remove('fa-circle-play')
        playPause.classList.add('fa-circle-pause')
        audio.addEventListener('timeupdate', () => {
            range.value = (audio.currentTime / audio.duration * 100);
        })
    }
    else {
        audio.pause();
        playPause.classList.remove('fa-circle-pause')
        playPause.classList.add('fa-circle-play')
    }
}

function forward() {
    range.value = 0;
    audio.pause();
    if (i >= 0) {
        i = i + 1;
        // audio = new Audio(musics[i].path);
        playMusic(i);
        audio.addEventListener('timeupdate', () => {
            range.value = (audio.currentTime / audio.duration * 100);
        })
    }
    else {
        i = 0;
        // audio = new Audio(musics[i].path);
        playMusic(i);
        audio.addEventListener('timeupdate', () => {
            range.value = (audio.currentTime / audio.duration * 100);
        })
    }
}

function backward() {
    range.value = 0;
    audio.pause();
    if (i >= 0) {
        i = i - 1;
        audio = new Audio(musics[i].path);
        playMusic(i);
        audio.addEventListener('timeupdate', () => {
            range.value = (audio.currentTime / audio.duration * 100);
        })
    }
    else {
        i = musics.length;
        audio = new Audio(musics[i].path);
        playMusic(i);
        audio.addEventListener('timeupdate', () => {
            range.value = (audio.currentTime / audio.duration * 100);
        })
    }
}

range.addEventListener('change', () => {
    audio.currentTime = (range.value * audio.duration / 100);
})