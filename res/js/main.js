const play = document.getElementById("play");
const settings = document.getElementById("settings");
const nadpis = document.getElementById("nadpis");

const kulicka = document.getElementById("kulicka");
const pole = document.getElementById("pole");

const casomira = document.getElementById("casomira");
const info = document.getElementById("info");
const score = document.getElementById("score");
const barva = document.getElementById("barva");
const chabr = document.getElementById("chabr");
const point = document.getElementById("point");
const dedText = document.getElementById("dedText");
const dedTextDva = document.getElementById("dedTextDva");

const jedna = document.getElementById("jedna");
const dva = document.getElementById("dva");
const tri = document.getElementById("tri");
const ctyri = document.getElementById("ctyri");
const pet = document.getElementById("pet");
const sest = document.getElementById("sest");
const sedm = document.getElementById("sedm");
const osm = document.getElementById("osm");
const devet = document.getElementById("devet");
const deset = document.getElementById("deset");
const jedenact = document.getElementById("jedenact");
const dvanact = document.getElementById("dvanact");
const trinact = document.getElementById("trinact");
const ctrnact = document.getElementById("ctrnact");
const patnact = document.getElementById("patnact");
const sestnact = document.getElementById("sestnact");
const sedmnact = document.getElementById("sedmnact");
const osmnact = document.getElementById("osmnact");
const devatenact = document.getElementById("devatenact");
const dvacet = document.getElementById("dvacet");

const boom = document.getElementById("boom");
const click = document.getElementById("click");
const hudba = document.getElementById("hudba");

const pauza = document.getElementById("pauza");
const hrat = document.getElementById("hrat");

const volum = document.getElementById("hlasitost");
const volumDown = document.getElementById("hlasitostDva");
const cislo = document.getElementById("cislo");
const cisloSpeed = document.getElementById("cisloSpeed");
const speed = document.getElementById("speed");
const speedDown = document.getElementById("speedDown");

const done = document.getElementById("done");

const duration = 3;

let number = 50;

let move = 500;
let procent = 100;

let scoreNumber = 0;
let x = 0;
let y = 0;

let smrt = 0;
let smrtPlus = 1;

let zvuk = 0.5;


let gamble = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
]

let remainingTime = duration;

let cas = setInterval(zmena, move);

setInterval(() => {
    xx = pole.offsetWidth - 75;
    yy = pole.offsetHeight - 75;
},0);

function outplay() {
    remainingTime--;
    casomira.innerHTML = `${remainingTime}`;

    if(remainingTime === 0){
        clearInterval(time);
        casomira.innerHTML = 'You died!';
        kulicka.style.display = "none";
        chabr.style.display = "block";
        pole.style.cursor = "default";
        barva.style.display = "block";
        score.style.display = "block";
        dedText.style.display = "block";
        dedTextDva.style.display = "block";
        point.style.display = "none";
        pole.style.opacity = "0";
        casomira.style.top = "-650px";
        chabr.style.top = "-620px";
        document.body.style.backgroundImage = "url(./res/css/ded.jpg)";
        boom.play();
        boom.currentTime = 4;
        boom.volume = zvuk;
        smrt += smrtPlus;
        dvacet.innerHTML = `${smrt} deaths`;

        let randomgamble = gamble[Math.floor(Math.random() * gamble.length)];
        if(randomgamble == 1){
            jedna.style.display = "block";
        }
        if(randomgamble == 2){
            dva.style.display = "block";
        }
        if(randomgamble == 3){
            tri.style.display = "block";
        }
        if(randomgamble == 4){
            ctyri.style.display = "block";
        }
        if(randomgamble == 5){
            pet.style.display = "block";
        }
        if(randomgamble == 6){
            sest.style.display = "block";
        }
        if(randomgamble == 7){
            sedm.style.display = "block";
        }
        if(randomgamble == 8){
            osm.style.display = "block";
        }
        if(randomgamble == 9){
            devet.style.display = "block";
        }
        if(randomgamble == 10){
            deset.style.display = "block";
        }
        if(randomgamble == 11){
            jedenact.style.display = "block";
        }
        if(randomgamble == 12){
            dvanact.style.display = "block";
        }
        if(randomgamble == 13){
            trinact.style.display = "block";
        }
        if(randomgamble == 14){
            ctrnact.style.display = "block";
        }
        if(randomgamble == 15){
            patnact.style.display = "block";
        }
        if(randomgamble == 16){
            sestnact.style.display = "block";
        }
        if(randomgamble == 17){
            sedmnact.style.display = "block";
        }
        if(randomgamble == 18){
            osmnact.style.display = "block";
        }
        if(randomgamble == 19){
            devatenact.style.display = "block";
        }
        if(randomgamble == 20){
            dvacet.style.display = "block";
        }
    }
}

function zmena() {
    x = kulicka.style.top = Math.round(Math.random() * yy) + "px";
    y = kulicka.style.left = Math.round(Math.random() * xx) + "px";
    
        kulicka.style.left = `${x}px`;
        kulicka.style.top = `${y}px`;
    }

    pauza.onclick = () => {
        pauza.style.display = "none";
        hrat.style.display = "block";
        hudba.pause();
    }
    hrat.onclick = () => {
        pauza.style.display = "block";
        hrat.style.display = "none";
        hudba.play();
    hudba.volume = zvuk;
    hudba.currentTime = 0;
    }
    

play.onclick = () => {
    clearInterval(cas);
    cas = setInterval(zmena, move);
    nadpis.style.display = "none";
    play.style.display = "none";
    settings.style.display = "none";
    kulicka.style.display = "none";
    pole.style.display = "block";
    info.style.display = "block";
    pole.style.display = "block";
    pauza.style.display = "block";
    pole.style.cursor = "crosshair";
    pole.style.opacity = "1";
    casomira.style.top = "-822px";
    document.body.style.backgroundImage = "url(./res/css/cave.jpg)";
    zmena();
    outplay();
    click.play();
    click.volume = zvuk;
    click.currentTime = 0.2;
    hudba.play();
    hudba.volume = zvuk;
    hudba.currentTime = 0;
    setInterval(() => {
      kulicka.style.display = "block";
      if(remainingTime == 0){ 
        kulicka.style.display = "none";
       }
    },move)
    if(move == 100){
        document.body.style.backgroundImage = "url(./res/css/stormy.png)"; 
        kulicka.style.opacity = "0.2"
        info.innerHTML = `摸他`;
        info.style.color = "red"
    }
    else{
        kulicka.style.opacity = "1";
        info.style.color = "greenyellow"
        info.innerHTML = `Touch that creeper`;
    }
    
}
let time = setInterval(outplay, 1000);

kulicka.onmouseover = () => {
    zmena();
    clearInterval(cas);
    cas = setInterval(zmena, move);
    clearInterval(time);
    time = setInterval(outplay, 750);
    remainingTime = 3;
    casomira.innerHTML = `${remainingTime}`;
    casomira.style.display = "block";
    point.style.display = "block";
    info.style.display = "none";
    
    scoreNumber += 1;
    barva.innerHTML = `${scoreNumber}`;
    point.innerHTML = `Score: ${scoreNumber}`;
    devatenact.innerHTML = `Only score ${scoreNumber} lmao`;
}
window.onload = () => {
    clearInterval(time);
    
}


dedTextDva.onclick = () => {
    nadpis.style.display = "none";
    play.style.display = "none";
    settings.style.display = "none";
    kulicka.style.display = "block";
    pole.style.display = "block";
    info.style.display = "block";
    document.body.style.backgroundImage = "url(./res/css/cave.jpg)";
    zmena();
    outplay();
    pole.style.opacity = "1";
    clearInterval(time);
    scoreNumber = 0;
    dedTextDva.style.display = "none";
    dedText.style.display = "none";
    chabr.style.display = "none";
    barva.style.display = "none";
    score.style.display = "none";
    jedna.style.display = "none";
    dva.style.display = "none";
    tri.style.display = "none";
    ctyri.style.display = "none";
    pet.style.display = "none";
    sest.style.display = "none";
    sedm.style.display = "none";
    osm.style.display = "none";
    devet.style.display = "none";
    deset.style.display = "none";
    jedenact.style.display = "none";
    dvanact.style.display = "none";
    trinact.style.display = "none";
    ctrnact.style.display = "none";
    patnact.style.display = "none";
    sestnact.style.display = "none";
    sedmnact.style.display = "none";
    osmnact.style.display = "none";
    devatenact.style.display = "none";
    dvacet.style.display = "none";
    info.style.display = "block";
    info.style.display = "-822px;"
    casomira.style.display = "none";
    casomira.style.top = "-822px";
    click.play();
    click.volume = zvuk;
    click.currentTime = 0.2;
    pole.style.cursor = "crosshair";
    if(move == 100){
        document.body.style.backgroundImage = "url(./res/css/stormy.png)"; 
        kulicka.style.opacity = "0.2";
        info.innerHTML = `摸他`;
        info.style.color = "red";
    }
    else{
        kulicka.style.opacity = "1";
        info.style.color = "greenyellow"
        info.innerHTML = `Touch that creeper`;
    }

}
dedText.onclick = () => {
    click.play();
    click.volume = zvuk;
    click.currentTime = 0.2;
    document.body.style.backgroundImage = "url(./res/css/craftmine.jpeg)";
    dedTextDva.style.display = "none";
    dedText.style.display = "none";
    chabr.style.display = "none";
    barva.style.display = "none";
    score.style.display = "none";
    jedna.style.display = "none";
    dva.style.display = "none";
    tri.style.display = "none";
    ctyri.style.display = "none";
    pet.style.display = "none";
    sest.style.display = "none";
    sedm.style.display = "none";
    osm.style.display = "none";
    devet.style.display = "none";
    deset.style.display = "none";
    jedenact.style.display = "none";
    dvanact.style.display = "none";
    trinact.style.display = "none";
    ctrnact.style.display = "none";
    patnact.style.display = "none";
    sestnact.style.display = "none";
    sedmnact.style.display = "none";
    osmnact.style.display = "none";
    devatenact.style.display = "none";
    dvacet.style.display = "none";
    info.style.display = "none";
    info.style.display = "-822px;"
    casomira.style.display = "none";
    play.style.display = "block";
    settings.style.display = "block";
    nadpis.style.display = "block";
    kulicka.style.display = "none";
    pole.style.display = "none";
    pauza.style.display = "none";
    hrat.style.display = "none";
    scoreNumber = 0;
    hudba.pause();    
}

settings.onclick = () => {
    click.play();
    click.volume = zvuk;
    click.currentTime = 0.2;
    document.body.style.backgroundImage = "url(./res/css/dirt.webp)";
    nadpis.style.display = "none";
    settings.style.display = "none";
    play.style.display = "none";
    volum.style.display = "block";
    volumDown.style.display = "block";
    cislo.style.display = "block";
    cislo.innerHTML = `${number}%`;
    done.style.display = "block";
    speedDown.style.display = "block";
    speed.style.display = "block";
    cisloSpeed.style.display = "block";
    cisloSpeed.innerHTML = `${procent}%`;
    if(move<=100){
        speed.style.display = "none";
        cisloSpeed.innerHTML = `Beware`;  
    } 
    if(move>=1400){
        speedDown.style.display = "none";
    }   
    if(zvuk>0.9){
        volum.style.display = "none";
    }
    if(zvuk<0.15){
        volumDown.style.display = "none";
        cislo.innerHTML = `${number}%`;  
    }  
}
volum.onclick = () => {
    zvuk+=0.1;
    number+=10;
    click.play();
    click.volume = zvuk;
    click.currentTime = 0.2;
    volumDown.style.display = "block";
    cislo.innerHTML = `${number}%`;
    if(zvuk>0.9){
        volum.style.display = "none";
    }
}

    
volumDown.onclick = () => {
    zvuk-=0.1;
    number-=10;
    click.play();
    click.volume = zvuk;
    click.currentTime = 0.2;
    volum.style.display = "block";
    cislo.innerHTML = `${number}%`;
    if(zvuk<0.15){
        volumDown.style.display = "none";
        cislo.innerHTML = `${number}%`;  
    }  
}

done.onclick= () => {
    document.body.style.backgroundImage = "url(./res/css/craftmine.jpeg)";
    nadpis.style.display = "block";
    settings.style.display = "block";
    play.style.display = "block";
    volum.style.display = "none";
    volumDown.style.display = "none";
    cislo.style.display = "none";
    speed.style.display = "none";
    speedDown.style.display = "none";
    cisloSpeed.style.display = "none";
    done.style.display = "none";
    click.play();
    click.volume = zvuk;
    click.currentTime = 0.2;
}
speed.onclick = () => {
    procent+= 5;
    move-=50;
    console.log(move);
    click.play();
    click.volume = zvuk;
    click.currentTime = 0.2;
    speedDown.style.display = "block";
    cisloSpeed.innerHTML = `${procent}%`;  
    if(move<=100){
        speed.style.display = "none";
        cisloSpeed.innerHTML = `BEWARE`;  
    }  
}
speedDown.onclick = () => {
    procent-= 5;
    move+=50;
    console.log(move);
    click.play();
    click.volume = zvuk;
    click.currentTime = 0.2;
    cisloSpeed.innerHTML = `${procent}%`;  
    speed.style.display = "block";
    if(move>=1400){
        speedDown.style.display = "none";
    }  
}