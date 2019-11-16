:root {
  --effect: hover 1s linear infinite;
}
*{
   margin:0;
}

body {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: black;
  align-items: center;
  justify-content: center;
}

.divl {
  text-align: center;
}

.pl {
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  font-size: 4em;
  font-family: arial;
  font-weight: 600;
  transform: scale(.5);
  color: #121212;
  -webkit-text-stroke: 2px gray;
}

.pl:nth-child(1) {
  animation: var(--effect);
}

.pl:nth-child(2) {
  animation: var(--effect) .125s;
}

.pl:nth-child(3) {
  animation: var(--effect) .25s;
}

.pl:nth-child(4) {
  animation: var(--effect) .375s;
}

.pl:nth-child(5) {
  animation: var(--effect) .5s;
}

pl:nth-child(6) {
  animation: var(--effect) .675s;
}

.pl:nth-child(7) {
  animation: var(--effect) .75s;
}

@keyframes hover {
  0% {
    transform: scale(.5);
    color: #121212;
    -webkit-text-stroke: 2px gray;
  }

  20% {
    transform: scale(1);
    color: pink;
    -webkit-text-stroke: 3px red;
    filter: drop-shadow(0 0 1px black)drop-shadow(0 0 1px black)drop-shadow(0 0 3px red)drop-shadow(0 0 5px red)hue-rotate(10turn);
  }

  50% {
    transform: scale(.5);
    color: #121212;
    -webkit-text-stroke: 2px gray;
  }


}
