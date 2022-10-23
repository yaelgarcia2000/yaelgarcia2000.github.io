AFRAME.registerComponent("play-pause1", {
  init: function () {
    var myVideo1 = document.querySelector("#video1");
    var videoControls1 = document.querySelector("#videoControls1");
    this.el.addEventListener("click", function () {
      if (myVideo1.paused) {
        myVideo1.play();
        videoControls1.setAttribute("src", "#pause1");
      } else {
        myVideo1.pause();
        videoControls1.setAttribute("src", "#play1");
      }
    });
  },
});
AFRAME.registerComponent("play-pause2", {
  init: function () {
    var myVideo2 = document.querySelector("#video2");
    var videoControls2 = document.querySelector("#videoControls2");
    this.el.addEventListener("click", function () {
      if (myVideo2.paused) {
        myVideo2.play();
        videoControls2.setAttribute("src", "#pause2");
      } else {
        myVideo2.pause();
        videoControls2.setAttribute("src", "#play2");
      }
    });
  },
});
AFRAME.registerComponent("play-pause3", {
  init: function () {
    var myVideo3 = document.querySelector("#video3");
    var videoControls3 = document.querySelector("#videoControls3");
    this.el.addEventListener("click", function () {
      if (myVideo3.paused) {
        myVideo3.play();
        videoControls3.setAttribute("src", "#pause3");
      } else {
        myVideo3.pause();
        videoControls3.setAttribute("src", "#play3");
      }
    });
  },
});
AFRAME.registerComponent("play-pause4", {
  init: function () {
    var myVideo4 = document.querySelector("#video4");
    var videoControls4 = document.querySelector("#videoControls4");
    this.el.addEventListener("click", function () {
      if (myVideo4.paused) {
        myVideo4.play();
        videoControls4.setAttribute("src", "#pause4");
      } else {
        myVideo4.pause();
        videoControls4.setAttribute("src", "#play4");
      }
    });
  },
});
AFRAME.registerComponent("play-pause5", {
  init: function () {
    var myVideo5 = document.querySelector("#video5");
    var videoControls5 = document.querySelector("#videoControls5");
    this.el.addEventListener("click", function () {
      if (myVideo5.paused) {
        myVideo5.play();
        videoControls5.setAttribute("src", "#pause5");
      } else {
        myVideo5.pause();
        videoControls5.setAttribute("src", "#play5");
      }
    });
  },
});

AFRAME.registerComponent("play-curve", {
  init: function () {
    var myVideo1 = document.querySelector("#myvideo1");
    var myVideo2 = document.querySelector("#myvideo2");
    var myVideo3 = document.querySelector("#myvideo3");
    var myVideo4 = document.querySelector("#myvideo4");
    var myVideo5 = document.querySelector("#myvideo5");
    var myVideo6 = document.querySelector("#myvideo6");
    var myVideo7 = document.querySelector("#myvideo7");
    var myVideo8 = document.querySelector("#myvideo8");
    var myVideo9 = document.querySelector("#myvideo9");
    var myVideo10 = document.querySelector("#myvideo10");
    var myVideo11 = document.querySelector("#myvideo11");
    var myVideo12 = document.querySelector("#myvideo12");
    var myVideo13 = document.querySelector("#myvideo13");
    var myVideo14 = document.querySelector("#myvideo14");
    if (
      myVideo1.paused &&
      myVideo2.paused &&
      myVideo3.paused &&
      myVideo4.paused &&
      myVideo5.paused &&
      myVideo6.paused &&
      myVideo7.paused &&
      myVideo8.paused &&
      myVideo9.paused &&
      myVideo10.paused &&
      myVideo11.paused &&
      myVideo12.paused &&
      myVideo13.paused &&
      myVideo14.paused
    ) {
      myVideo1.play();
      myVideo2.play();
      myVideo3.play();
      myVideo4.play();
      myVideo5.play();
      myVideo6.play();
      myVideo7.play();
      myVideo8.play();
      myVideo9.play();
      myVideo10.play();
      myVideo11.play();
      myVideo12.play();
      myVideo13.play();
      myVideo14.play();

    }
  },
});

document.querySelector("a-scene").object3D;

AFRAME.registerComponent("foo", {
  init: function () {
    var scene = this.el.sceneEl.object3D; // THREE.Scene
    renderer = new THREE.WebGLRenderer({ antialias: false });
    scene.renderer.setPixelRatio(window.devicePixelRatio * 0.2);
  },
});

AFRAME.registerComponent("pixel-ratio", {
  schema: {
    type: "number",
  },
  update: function () {
    this.el.sceneEl.renderer.setPixelRatio(this.data);
  },
});
