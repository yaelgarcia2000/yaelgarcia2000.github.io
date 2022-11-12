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

AFRAME.registerComponent("s1-1a-d1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-d1-v1");
    var Controls = document.querySelector("#s1-1a-d1-v1-controls");
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
AFRAME.registerComponent("s1-1a-d1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-d1-v2");
    var Controls = document.querySelector("#s1-1a-d1-v2-controls");
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
AFRAME.registerComponent("s1-1a-d1-v3-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-d1-v3");
    var Controls = document.querySelector("#s1-1a-d1-v3-controls");
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
AFRAME.registerComponent("s1-1a-d1-v4-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-d1-v4");
    var Controls = document.querySelector("#s1-1a-d1-v4-controls");
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
AFRAME.registerComponent("s1-1a-d1-v5-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-d1-v5");
    var Controls = document.querySelector("#s1-1a-d1-v5-controls");
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
