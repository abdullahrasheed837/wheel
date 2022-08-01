(function () {
  const wheel = document.querySelector(".wheel");
  const startButton = document.querySelector(".button");

  let deg = 0;
  startButton.addEventListener("click", () => {
    // var audio=new Audio('sound.mp3');
    // audio.play();
    startButton.getElementsByClassName.pointerEvents = "none";
    deg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transition = `all 10s ease`;
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add("blur");
  });
  wheel.addEventListener("transitionend", () => {
    wheel.classList.remove("blur");
    startButton.getElementsByClassName.pointerEvents = "auto";
    wheel.style.transition = "none";
    const actualdeg = deg % 360;
    wheel.style.transform = `rotate(${actualdeg}deg)`;
    var element = document.getElementById("result");
    console.log(actualdeg);
    if (actualdeg >= 0 && actualdeg < 9.7) {
      document.getElementById("result").textContent = "26 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 10 && actualdeg < 19.4) {
      document.getElementById("result").textContent = "3 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 20 && actualdeg < 29.1) {
      document.getElementById("result").textContent = "35 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 30 && actualdeg < 38.8) {
      document.getElementById("result").textContent = "12 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 39 && actualdeg < 48.5) {
      document.getElementById("result").textContent = "28 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 49 && actualdeg < 58.2) {
      document.getElementById("result").textContent = "7 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 59 && actualdeg < 67.9) {
      document.getElementById("result").textContent = "29 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 69 && actualdeg < 77.6) {
      document.getElementById("result").textContent = "18 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 78 && actualdeg < 87.3) {
      document.getElementById("result").textContent = "22 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 88 && actualdeg < 97) {
      document.getElementById("result").textContent = "9 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 97 && actualdeg < 106.7) {
      document.getElementById("result").textContent = "31 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 107 && actualdeg < 116.4) {
      document.getElementById("result").textContent = "14 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 117 && actualdeg < 126.1) {
      document.getElementById("result").textContent = "20 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 126 && actualdeg < 135.8) {
      document.getElementById("result").textContent = "1 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 136 && actualdeg < 145.5) {
      document.getElementById("result").textContent = "33 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 146 && actualdeg < 155.2) {
      document.getElementById("result").textContent = "16 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 155 && actualdeg < 164.9) {
      document.getElementById("result").textContent = "24 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 165 && actualdeg < 174.6) {
      document.getElementById("result").textContent = "5 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 175 && actualdeg < 184.3) {
      document.getElementById("result").textContent = "10 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 184 && actualdeg < 194) {
      document.getElementById("result").textContent = "32 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 195 && actualdeg < 203.7) {
      document.getElementById("result").textContent = "8 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 204 && actualdeg < 213.4) {
      document.getElementById("result").textContent = "30 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 213 && actualdeg < 223.1) {
      document.getElementById("result").textContent = "11 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 223 && actualdeg < 232.8) {
      document.getElementById("result").textContent = "36 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 233 && actualdeg < 242.5) {
      document.getElementById("result").textContent = "13 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 242 && actualdeg < 252.2) {
      document.getElementById("result").textContent = "27 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 252 && actualdeg < 261.9) {
      document.getElementById("result").textContent = "6 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 262 && actualdeg < 271.6) {
      document.getElementById("result").textContent = "34 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 272 && actualdeg < 281.3) {
      document.getElementById("result").textContent = "17 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 282 && actualdeg < 291) {
      document.getElementById("result").textContent = "25 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 292 && actualdeg < 300.7) {
      document.getElementById("result").textContent = "2 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 300 && actualdeg < 310.4) {
      document.getElementById("result").textContent = "21 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 310 && actualdeg < 320.1) {
      document.getElementById("result").textContent = "4 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 320 && actualdeg < 329.8) {
      document.getElementById("result").textContent = "19 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 329 && actualdeg < 339.5) {
      document.getElementById("result").textContent = "15 Black";
      element.classList.remove("green");
      element.classList.remove("red");
      element.classList.add("black");
    }
    if (actualdeg >= 339 && actualdeg < 349) {
      document.getElementById("result").textContent = "32 Red";
      element.classList.remove("green");
      element.classList.remove("black");
      element.classList.add("red");
    }
    if (actualdeg >= 349 && actualdeg < 359) {
      document.getElementById("result").textContent = "0 Green";
      element.classList.remove("red");
      element.classList.remove("black");
      element.classList.add("green");
    }
  });
})();
