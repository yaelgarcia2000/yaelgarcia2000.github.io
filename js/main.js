function haltEvent(event) {
  event.preventDefault && event.preventDefault();
  event.stopPropagation && event.stopPropagation();
  event.cancelBubble = true;
  event.returnValue = false;
  return false;
}
// prevent right-click menus from appearing
document.addEventListener("contextmenu", haltEvent);
// more attempts to prevent right-click menus from appearing -- avoid; they block touchscreen/iPad controls
// document.addEventListener("touchmove", haltEvent );
// document.addEventListener("touchcancel", haltEvent );

// add events for both touch and mouse controls
function addButtonEventListeners(
  buttonElementID,
  startFunction,
  endFunction
) {
  let element = document.getElementById(buttonElementID);
  element.addEventListener("touchstart", startFunction);
  element.addEventListener("mousedown", startFunction);
  element.addEventListener("touchend", endFunction);
  element.addEventListener("mouseup", endFunction);
}
function associateMovementControls(buttonElementID, component, keyName) {
  addButtonEventListeners(
    buttonElementID,
    function (event) {
      component.registerKeyDown(keyName);
      return haltEvent(event);
    },
    function (event) {
      component.registerKeyUp(keyName);
      return haltEvent(event);
    }
  );
}
// need to run javascript code after a-scene entities and components are loaded
AFRAME.registerComponent("screen-controls", {
  init: function () {
    let component =
      document.getElementById("camera").components[
        "extended-wasd-controls"
      ];

    associateMovementControls(
      "buttonMoveForward",
      component,
      component.data.moveForwardKey
    );
    associateMovementControls(
      "buttonMoveBackward",
      component,
      component.data.moveBackwardKey
    );
    associateMovementControls(
      "buttonMoveLeft",
      component,
      component.data.moveLeftKey
    );
    associateMovementControls(
      "buttonMoveRight",
      component,
      component.data.moveRightKey
    );
   
  },
  tick: function (time, deltaTime) {},
});
// disable press "F" to enter fullscreen mode
//disable WASD controls attached to default camera -->

AFRAME.registerComponent("reproducir", {
  init: function () {
    var v1 = document.querySelector("#p-c-e-b1-v");
    var v2= document.querySelector("#p-c-e-c1-v");
    var v3 = document.querySelector("#p-c-e-d1-v");
    var v4 = document.querySelector("#p-c-o-a2-v");
    var v5 = document.querySelector("#p-c-o-b1-v");
    var v6 = document.querySelector("#p-c-o-c1-v");
    var v7 = document.querySelector("#p-c-o-e1-v");
    var v8 = document.querySelector("#p-e-b1-v");
    var v9 = document.querySelector("#p-o-a1-v");
    var v10 = document.querySelector("#p-o-b1-v");
    var v11 = document.querySelector("#p-cb-e-a2-v");
    var v12 = document.querySelector("#p-cb-e-b1-v");
    var v13 = document.querySelector("#p-cb-e-b3-v");
    var v14 = document.querySelector("#p-cb-e-c1-v");
    var v15 = document.querySelector("#p-cb-e-d1-v");
   

      if (v1.paused && v2.paused && v3.paused && v4.paused && v5.paused && v6.paused && v7.paused && v8.paused && v9.paused && v10.paused && v11.paused && v12.paused && v13.paused && v14.paused && v15.paused) {
        v1.play();
        v2.play();
        v3.play();
        v4.play();
        v5.play();
        v6.play();
        v7.play();
        v8.play();
        v9.play();
        v10.play();
        v11.play();
        v12.play();
        v13.play();
        v14.play();
        v15.play();
      } 
    }
});

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
