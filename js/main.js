AFRAME.registerComponent("a1-1a-d1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#a1-1a-d1-v1");
    var Controls = document.querySelector("#a1-1a-d1-v1-controls");
    this.el.addEventListener("click", function () {
      if (Video.paused) {
        Video.play();
        Controls.setAttribute("src", "#play");
      } else {
        Video.pause();
        Controls.setAttribute("src", "#pause");
      }
    });
  },
});
AFRAME.registerComponent("a1-1a-d1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#a1-1a-d1-v2");
    var Controls = document.querySelector("#a1-1a-d1-v2-controls");
    this.el.addEventListener("click", function () {
      if (Video.paused) {
        Video.play();
        Controls.setAttribute("src", "#play");
      } else {
        Video.pause();
        Controls.setAttribute("src", "#pause");
      }
    });
  },
});
AFRAME.registerComponent("a1-1a-d1-v3-f-pp", {
  init: function () {
    var Video = document.querySelector("#a1-1a-d1-v3");
    var Controls = document.querySelector("#a1-1a-d1-v3-controls");
    this.el.addEventListener("click", function () {
      if (Video.paused) {
        Video.play();
        Controls.setAttribute("src", "#play");
      } else {
        Video.pause();
        Controls.setAttribute("src", "#pause");
      }
    });
  },
});
AFRAME.registerComponent("a1-1a-d1-v4-f-pp", {
  init: function () {
    var Video = document.querySelector("#a1-1a-d1-v4");
    var Controls = document.querySelector("#a1-1a-d1-v4-controls");
    this.el.addEventListener("click", function () {
      if (Video.paused) {
        Video.play();
        Controls.setAttribute("src", "#play");
      } else {
        Video.pause();
        Controls.setAttribute("src", "#pause");
      }
    });
  },
});
AFRAME.registerComponent("a1-1a-d1-v5-f-pp", {
  init: function () {
    var Video = document.querySelector("#a1-1a-d1-v5");
    var Controls = document.querySelector("#a1-1a-d1-v5-controls");
    this.el.addEventListener("click", function () {
      if (Video.paused) {
        Video.play();
        Controls.setAttribute("src", "#play");
      } else {
        Video.pause();
        Controls.setAttribute("src", "#pause");
      }
    });
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
