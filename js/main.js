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



//<!--s1--------1a--------Diamante 1-->
AFRAME.registerComponent("s1-1a-e-d1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-e-d1-v1");
    var Controls = document.querySelector("#s1-1a-e-d1-v1-controls");
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
AFRAME.registerComponent("s1-1a-e-d1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-e-d1-v2");
    var Controls = document.querySelector("#s1-1a-e-d1-v2-controls");
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
AFRAME.registerComponent("s1-1a-e-d1-v3-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-e-d1-v3");
    var Controls = document.querySelector("#s1-1a-e-d1-v3-controls");
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
AFRAME.registerComponent("s1-1a-e-d1-v4-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-e-d1-v4");
    var Controls = document.querySelector("#s1-1a-e-d1-v4-controls");
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
AFRAME.registerComponent("s1-1a-e-d1-v5-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-e-d1-v5");
    var Controls = document.querySelector("#s1-1a-e-d1-v5-controls");
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
//<!--s2--------2a--------Oro 2-->
AFRAME.registerComponent("s2-2a-e-o2-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-e-o2-v1");
    var Controls = document.querySelector("#s2-2a-e-o2-v1-controls");
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
AFRAME.registerComponent("s2-2a-e-o2-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-e-o2-v2");
    var Controls = document.querySelector("#s2-2a-e-o2-v2-controls");
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
//<!--s3--------1b--------Platino 2-->
AFRAME.registerComponent("s3-1b-e-p2-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s3-1b-e-p2-v1");
    var Controls = document.querySelector("#s3-1b-e-p2-v1-controls");
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
//<!--s4--------2b--------Platino 1-->
AFRAME.registerComponent("s4-2b-e-p1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s4-2b-e-p1-v1");
    var Controls = document.querySelector("#s4-2b-e-p1-v1-controls");
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
AFRAME.registerComponent("s4-2b-e-p1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s4-2b-e-p1-v2");
    var Controls = document.querySelector("#s4-2b-e-p1-v2-controls");
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
AFRAME.registerComponent("s4-2b-e-p1-v3-f-pp", {
  init: function () {
    var Video = document.querySelector("#s4-2b-e-p1-v3");
    var Controls = document.querySelector("#s4-2b-e-p1-v3-controls");
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
//<!--s5--------3b--------Platino 2-->
AFRAME.registerComponent("s5-3b-e-p2-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s5-3b-e-p2-v1");
    var Controls = document.querySelector("#s5-3b-e-p2-v1-controls");
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
//<!--s6--------4b--------Oro 1-->
AFRAME.registerComponent("s6-4b-e-o1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s6-4b-e-o1-v1");
    var Controls = document.querySelector("#s6-4b-e-o1-v1-controls");
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
AFRAME.registerComponent("s6-4b-e-o1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s6-4b-e-o1-v2");
    var Controls = document.querySelector("#s6-4b-e-o1-v2-controls");
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
//<!--s7--------5b--------Diamante 2-->
AFRAME.registerComponent("s7-5b-e-d2-v5-f-pp", {
  init: function () {
    var Video = document.querySelector("#s7-5b-e-d2-v5");
    var Controls = document.querySelector("#s7-5b-e-d2-v5-controls");
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
AFRAME.registerComponent("s7-5b-e-d2-v6-f-pp", {
  init: function () {
    var Video = document.querySelector("#s7-5b-e-d2-v6");
    var Controls = document.querySelector("#s7-5b-e-d2-v6-controls");
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
//<!--s8--------6b--------Platino 1-->
AFRAME.registerComponent("s8-6b-e-p1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s8-6b-e-p1-v1");
    var Controls = document.querySelector("#s8-6b-e-p1-v1-controls");
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
AFRAME.registerComponent("s8-6b-e-p1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s8-6b-e-p1-v2");
    var Controls = document.querySelector("#s8-6b-e-p1-v2-controls");
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
AFRAME.registerComponent("s8-6b-e-p1-v3-f-pp", {
  init: function () {
    var Video = document.querySelector("#s8-6b-e-p1-v3");
    var Controls = document.querySelector("#s8-6b-e-p1-v3-controls");
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
//<!--s9--------7b--------Oro 1-->
AFRAME.registerComponent("s9-7b-e-o1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s9-7b-e-o1-v1");
    var Controls = document.querySelector("#s9-7b-e-o1-v1-controls");
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
AFRAME.registerComponent("s9-7b-e-o1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s9-7b-e-o1-v2");
    var Controls = document.querySelector("#s9-7b-e-o1-v2-controls");
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
//<!--s10--------1c--------Platino 2-->
AFRAME.registerComponent("s10-1c-e-p2-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-1c-e-p2-v1");
    var Controls = document.querySelector("#s10-1c-e-p2-v1-controls");
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
//<!--s11--------2c--------Diamante 1-->
AFRAME.registerComponent("s11-2c-e-d1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s11-2c-e-d1-v1");
    var Controls = document.querySelector("#s11-2c-e-d1-v1-controls");
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
AFRAME.registerComponent("s11-2c-e-d1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s11-2c-e-d1-v2");
    var Controls = document.querySelector("#s11-2c-e-d1-v2-controls");
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
AFRAME.registerComponent("s11-2c-e-d1-v3-f-pp", {
  init: function () {
    var Video = document.querySelector("#s11-2c-e-d1-v3");
    var Controls = document.querySelector("#s11-2c-e-d1-v3-controls");
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
AFRAME.registerComponent("s11-2c-e-d1-v4-f-pp", {
  init: function () {
    var Video = document.querySelector("#s11-2c-e-d1-v4");
    var Controls = document.querySelector("#s11-2c-e-d1-v4-controls");
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
AFRAME.registerComponent("s11-2c-e-d1-v5-f-pp", {
  init: function () {
    var Video = document.querySelector("#s11-2c-e-d1-v5");
    var Controls = document.querySelector("#s11-2c-e-d1-v5-controls");
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
//<!--s12--------3c--------Oro 2-->
AFRAME.registerComponent("s12-3c-e-o2-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s12-3c-e-o2-v1");
    var Controls = document.querySelector("#s12-3c-e-o2-v1-controls");
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
AFRAME.registerComponent("s12-3c-e-o2-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s12-3c-e-o2-v2");
    var Controls = document.querySelector("#s12-3c-e-o2-v2-controls");
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


//<!--s13--------4c--------Diamante 2-->


//<!--s14--------5c--------Diamante 2-->


//<!--s15--------1d--------Oro 1-->


//<!--s16--------2d--------Diamante 1-->


//<!--s17--------3d--------Oro 2-->


//<!--s32--------1e--------Platino 2-->


//<!--s33--------2e--------Oro 1-->




//----------------Oeste----------------


//S1--------1A--------Diamante 1
AFRAME.registerComponent("s1-1a-o-d1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-o-d1-v1");
    var Controls = document.querySelector("#s1-1a-o-d1-v1-controls");
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

AFRAME.registerComponent("s1-1a-o-d1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-o-d1-v2");
    var Controls = document.querySelector("#s1-1a-o-d1-v2-controls");
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

AFRAME.registerComponent("s1-1a-o-d1-v3-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-o-d1-v3");
    var Controls = document.querySelector("#s1-1a-o-d1-v3-controls");
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
})

AFRAME.registerComponent("s1-1a-o-d1-v4-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-o-d1-v4");
    var Controls = document.querySelector("#s1-1a-o-d1-v4-controls");
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
})

AFRAME.registerComponent("s1-1a-o-d1-v5-f-pp", {
  init: function () {
    var Video = document.querySelector("#s1-1a-o-d1-v5");
    var Controls = document.querySelector("#s1-1a-o-d1-v5-controls");
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
})


//S2--------2A--------Platino 2 //
AFRAME.registerComponent("s2-2a-o-p2-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-o-p2-v1");
    var Controls = document.querySelector("#s2-2a-o-p2-v1-controls");
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
})

AFRAME.registerComponent("s2-2a-o-p2-v8-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-o-p2-v8");
    var Controls = document.querySelector("#s2-2a-o-p2-v8-controls");
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
})

AFRAME.registerComponent("s2-2a-o-p2-v9-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-o-p2-v9");
    var Controls = document.querySelector("#s2-2a-o-p2-v9-controls");
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
})

AFRAME.registerComponent("s2-2a-o-p2-v10-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-o-p2-v10");
    var Controls = document.querySelector("#s2-2a-o-p2-v10-controls");
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
})

AFRAME.registerComponent("s2-2a-o-p2-v11-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-o-p2-v11");
    var Controls = document.querySelector("#s2-2a-o-p2-v11-controls");
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
})


//S3--------3A--------Platino 1 //
AFRAME.registerComponent("s3-3a-o-p1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s3-3a-o-p1-v1");
  var Controls = document.querySelector("#s3-3a-o-p1-v1-controls");
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
})

AFRAME.registerComponent("s3-3a-o-p1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s3-3a-o-p1-v2");
  var Controls = document.querySelector("#s3-3a-o-p1-v2-controls");
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
})

AFRAME.registerComponent("s3-3a-o-p1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s3-3a-o-p1-v3");
  var Controls = document.querySelector("#s3-3a-o-p1-v3-controls");
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
})
//S4--------4A--------Platino 2 //
AFRAME.registerComponent("s4-4a-o-p2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s4-4a-o-p2-v1");
  var Controls = document.querySelector("#s4-4a-o-p2-v1-controls");
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
})

AFRAME.registerComponent("s4-4a-o-p2-v8-f-pp", {
init: function () {
  var Video = document.querySelector("#s4-4a-o-p2-v8");
  var Controls = document.querySelector("#s4-4a-o-p2-v8-controls");
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
})

AFRAME.registerComponent("s4-4a-o-p2-v9-f-pp", {
init: function () {
  var Video = document.querySelector("#s4-4a-o-p2-v9");
  var Controls = document.querySelector("#s4-4a-o-p2-v9-controls");
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
})

AFRAME.registerComponent("s4-4a-o-p2-v10-f-pp", {
init: function () {
  var Video = document.querySelector("#s4-4a-o-p2-v10");
  var Controls = document.querySelector("#s4-4a-o-p2-v10-controls");
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
})

AFRAME.registerComponent("s4-4a-o-p2-v11-f-pp", {
init: function () {
  var Video = document.querySelector("#s4-4a-o-p2-v11");
  var Controls = document.querySelector("#s4-4a-o-p2-v11-controls");
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
})


//S5--------5A--------Oro 1//
AFRAME.registerComponent("s5-5a-o-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s5-5a-o-o1-v1");
  var Controls = document.querySelector("#s5-5a-o-o1-v1-controls");
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
})

AFRAME.registerComponent("s5-5a-o-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s5-5a-o-o1-v2");
  var Controls = document.querySelector("#s5-5a-o-o1-v2-controls");
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
})

AFRAME.registerComponent("s5-5a-o-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s5-5a-o-o1-v3");
  var Controls = document.querySelector("#s5-5a-o-o1-v3-controls");
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
})


//S6--------6A--------Diamante 2//
AFRAME.registerComponent("s6-6a-o-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s6-6a-o-d2-v5");
  var Controls = document.querySelector("#s6-6a-o-d2-v5-controls");
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
})

AFRAME.registerComponent("s6-6a-o-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s6-6a-o-d2-v6");
  var Controls = document.querySelector("#s6-6a-o-d2-v6-controls");
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
})


//S7--------7A--------Diamante 2//
AFRAME.registerComponent("s7-7a-o-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s7-7a-o-d2-v5");
  var Controls = document.querySelector("#s7-7a-o-d2-v5-controls");
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
})

AFRAME.registerComponent("s7-7a-o-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s7-7a-o-d2-v6");
  var Controls = document.querySelector("#s7-7a-o-d2-v6-controls");
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
})


//S8--------8A--------Platino 2 //
AFRAME.registerComponent("s8-8a-o-p2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s8-8a-o-p2-v1");
  var Controls = document.querySelector("#s8-8a-o-p2-v1-controls");
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
})

AFRAME.registerComponent("s8-8a-o-p2-v8-f-pp", {
init: function () {
  var Video = document.querySelector("#s8-8a-o-p2-v8");
  var Controls = document.querySelector("#s8-8a-o-p2-v8-controls");
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
})

AFRAME.registerComponent("s8-8a-o-p2-v9-f-pp", {
init: function () {
  var Video = document.querySelector("#s8-8a-o-p2-v9");
  var Controls = document.querySelector("#s8-8a-o-p2-v9-controls");
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
})

AFRAME.registerComponent("s8-8a-o-p2-v10-f-pp", {
init: function () {
  var Video = document.querySelector("#s8-8a-o-p2-v10");
  var Controls = document.querySelector("#s8-8a-o-p2-v10-controls");
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
})

AFRAME.registerComponent("s8-8a-o-p2-v11-f-pp", {
init: function () {
  var Video = document.querySelector("#s8-8a-o-p2-v11");
  var Controls = document.querySelector("#s8-8a-o-p2-v11-controls");
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
})


//S9--------9A--------Platino 1 //
AFRAME.registerComponent("s9-9a-o-p1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s9-9a-o-p1-v1");
  var Controls = document.querySelector("#s9-9a-o-p1-v1-controls");
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
})

AFRAME.registerComponent("s9-9a-o-p1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s9-9a-o-p1-v2");
  var Controls = document.querySelector("#s9-9a-o-p1-v2-controls");
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
})

AFRAME.registerComponent("s9-9a-o-p1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s9-9a-o-p1-v3");
  var Controls = document.querySelector("#s9-9a-o-p1-v3-controls");
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
})

//S10--------10A--------Diamante 1
AFRAME.registerComponent("s10-10a-o-d1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-10a-o-d1-v1");
    var Controls = document.querySelector("#s10-10a-o-d1-v1-controls");
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

AFRAME.registerComponent("s10-10a-o-d1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-10a-o-d1-v2");
    var Controls = document.querySelector("#s10-10a-o-d1-v2-controls");
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

AFRAME.registerComponent("s10-10a-o-d1-v3-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-10a-o-d1-v3");
    var Controls = document.querySelector("#s10-10a-o-d1-v3-controls");
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
})

AFRAME.registerComponent("s10-10a-o-d1-v4-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-10a-o-d1-v4");
    var Controls = document.querySelector("#s10-10a-o-d1-v4-controls");
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
})

AFRAME.registerComponent("s10-10a-o-d1-v5-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-10a-o-d1-v5");
    var Controls = document.querySelector("#s10-10a-o-d1-v5-controls");
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
})


//S11--------11A--------Diamante 2//
AFRAME.registerComponent("s11-11a-o-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s11-11a-o-d2-v5");
  var Controls = document.querySelector("#s11-11a-o-d2-v5-controls");
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
})

AFRAME.registerComponent("s11-11a-o-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s11-11a-o-d2-v6");
  var Controls = document.querySelector("#s11-11a-o-d2-v6-controls");
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
})


//S12--------12A--------Diamante 2//
AFRAME.registerComponent("s12-12a-o-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s12-12a-o-d2-v5");
  var Controls = document.querySelector("#s12-12a-o-d2-v5-controls");
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
})

AFRAME.registerComponent("s12-12a-o-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s12-12a-o-d2-v6");
  var Controls = document.querySelector("#s12-12a-o-d2-v6-controls");
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
})


//S13--------13A--------Oro 1//
AFRAME.registerComponent("s13-13a-o-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s13-13a-o-o1-v1");
  var Controls = document.querySelector("#s13-13a-o-o1-v1-controls");
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
})

AFRAME.registerComponent("s13-13a-o-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s13-13a-o-o1-v2");
  var Controls = document.querySelector("#s13-13a-o-o1-v2-controls");
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
})

AFRAME.registerComponent("s13-13a-o-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s13-13a-o-o1-v3");
  var Controls = document.querySelector("#s13-13a-o-o1-v3-controls");
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
})


//S14--------14A--------Oro 2//
AFRAME.registerComponent("s14-14a-o-o2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s14-14a-o-o2-v1");
  var Controls = document.querySelector("#s14-14a-o-o2-v1-controls");
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
})

AFRAME.registerComponent("s14-14a-o-o2-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s14-14a-o-o2-v2");
  var Controls = document.querySelector("#s14-14a-o-o2-v2-controls");
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
})


//S15--------15A--------Platino 1 //
AFRAME.registerComponent("s15-1b-o-p1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s15-1b-o-p1-v1");
  var Controls = document.querySelector("#s15-1b-o-p1-v1-controls");
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
})

AFRAME.registerComponent("s15-1b-o-p1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s15-1b-o-p1-v2");
  var Controls = document.querySelector("#s15-1b-o-p1-v2-controls");
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
})

AFRAME.registerComponent("s15-1b-o-p1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s15-1b-o-p1-v3");
  var Controls = document.querySelector("#s15-1b-o-p1-v3-controls");
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
})


//S16--------2B--------Platino 2 //
AFRAME.registerComponent("s16-2b-o-p2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s16-2b-o-p2-v1");
  var Controls = document.querySelector("#s16-2b-o-p2-v1-controls");
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
})

AFRAME.registerComponent("s16-2b-o-p2-v8-f-pp", {
init: function () {
  var Video = document.querySelector("#s16-2b-o-p2-v8");
  var Controls = document.querySelector("#s16-2b-o-p2-v8-controls");
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
})

AFRAME.registerComponent("s16-2b-o-p2-v9-f-pp", {
init: function () {
  var Video = document.querySelector("#s16-2b-o-p2-v9");
  var Controls = document.querySelector("#s16-2b-o-p2-v9-controls");
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
})

AFRAME.registerComponent("s16-2b-o-p2-v10-f-pp", {
init: function () {
  var Video = document.querySelector("#s16-2b-o-p2-v10");
  var Controls = document.querySelector("#s16-2b-o-p2-v10-controls");
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
})

AFRAME.registerComponent("s16-2b-o-p2-v11-f-pp", {
init: function () {
  var Video = document.querySelector("#s16-2b-o-p2-v11");
  var Controls = document.querySelector("#s16-2b-o-p2-v11-controls");
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
})


//S17--------3B--------Platino 1 //
AFRAME.registerComponent("s17-3b-o-p1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s17-3b-o-p1-v1");
  var Controls = document.querySelector("#s17-3b-o-p1-v1-controls");
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
})

AFRAME.registerComponent("s17-3b-o-p1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s17-3b-o-p1-v2");
  var Controls = document.querySelector("#s17-3b-o-p1-v2-controls");
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
})

AFRAME.registerComponent("s17-3b-o-p1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s17-3b-o-p1-v3");
  var Controls = document.querySelector("#s17-3b-o-p1-v3-controls");
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
})


//S18--------4B--------Diamante 2//
AFRAME.registerComponent("s18-4b-o-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s18-4b-o-d2-v5");
  var Controls = document.querySelector("#s18-4b-o-d2-v5-controls");
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
})

AFRAME.registerComponent("s18-4b-o-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s18-4b-o-d2-v6");
  var Controls = document.querySelector("#s18-4b-o-d2-v6-controls");
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
})


//S19--------5B--------Oro 1//
AFRAME.registerComponent("s19-5b-o-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s19-5b-o-o1-v1");
  var Controls = document.querySelector("#s19-5b-o-o1-v1-controls");
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
})

AFRAME.registerComponent("s19-5b-o-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s19-5b-o-o1-v2");
  var Controls = document.querySelector("#s19-5b-o-o1-v2-controls");
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
})

AFRAME.registerComponent("s19-5b-o-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s19-5b-o-o1-v3");
  var Controls = document.querySelector("#s19-5b-o-o1-v3-controls");
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
})


//S20--------6B--------Diamante 2//
AFRAME.registerComponent("s20-6b-o-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s20-6b-o-d2-v5");
  var Controls = document.querySelector("#s20-6b-o-d2-v5-controls");
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
})

AFRAME.registerComponent("s20-6b-o-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s20-6b-o-d2-v6");
  var Controls = document.querySelector("#s20-6b-o-d2-v6-controls");
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
})


//S21--------7B--------Diamante 1
AFRAME.registerComponent("s21-7b-o-d1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s21-7b-o-d1-v1");
  var Controls = document.querySelector("#s21-7b-o-d1-v1-controls");
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

AFRAME.registerComponent("s21-7b-o-d1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s21-7b-o-d1-v2");
  var Controls = document.querySelector("#s21-7b-o-d1-v2-controls");
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

AFRAME.registerComponent("s21-7b-o-d1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s21-7b-o-d1-v3");
  var Controls = document.querySelector("#s21-7b-o-d1-v3-controls");
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
})

AFRAME.registerComponent("s21-7b-o-d1-v4-f-pp", {
init: function () {
  var Video = document.querySelector("#s21-7b-o-d1-v4");
  var Controls = document.querySelector("#s21-7b-o-d1-v4-controls");
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
})

AFRAME.registerComponent("s21-7b-o-d1-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s21-7b-o-d1-v5");
  var Controls = document.querySelector("#s21-7b-o-d1-v5-controls");
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
})


//S22--------8B--------Oro 1//
AFRAME.registerComponent("s22-8b-o-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s22-8b-o-o1-v1");
  var Controls = document.querySelector("#s22-8b-o-o1-v1-controls");
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
})

AFRAME.registerComponent("s22-8b-o-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s22-8b-o-o1-v2");
  var Controls = document.querySelector("#s22-8b-o-o1-v2-controls");
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
})

AFRAME.registerComponent("s22-8b-o-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s22-8b-o-o1-v3");
  var Controls = document.querySelector("#s22-8b-o-o1-v3-controls");
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
})


//S23--------1C--------Diamante 1
AFRAME.registerComponent("s23-1c-o-d1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s23-1c-o-d1-v1");
  var Controls = document.querySelector("#s23-1c-o-d1-v1-controls");
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

AFRAME.registerComponent("s23-1c-o-d1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s23-1c-o-d1-v2");
  var Controls = document.querySelector("#s23-1c-o-d1-v2-controls");
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

AFRAME.registerComponent("s23-1c-o-d1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s23-1c-o-d1-v3");
  var Controls = document.querySelector("#s23-1c-o-d1-v3-controls");
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
})

AFRAME.registerComponent("s23-1c-o-d1-v4-f-pp", {
init: function () {
  var Video = document.querySelector("#s23-1c-o-d1-v4");
  var Controls = document.querySelector("#s23-1c-o-d1-v4-controls");
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
})

AFRAME.registerComponent("s23-1c-o-d1-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s23-1c-o-d1-v5");
  var Controls = document.querySelector("#s23-1c-o-d1-v5-controls");
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
})


//S24--------2C--------Diamante 2//
AFRAME.registerComponent("s24-2c-o-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s24-2c-o-d2-v5");
  var Controls = document.querySelector("#s24-2c-o-d2-v5-controls");
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
})

AFRAME.registerComponent("s24-2c-o-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s24-2c-o-d2-v6");
  var Controls = document.querySelector("#s24-2c-o-d2-v6-controls");
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
})


//S25--------3C--------Oro 2//
AFRAME.registerComponent("s25-3c-o-o2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s25-3c-o-o2-v1");
  var Controls = document.querySelector("#s25-3c-o-o2-v1-controls");
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
})

AFRAME.registerComponent("s25-3c-o-o2-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s25-3c-o-o2-v2");
  var Controls = document.querySelector("#s25-3c-o-o2-v2-controls");
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
})


//S26--------4C--------Oro 1//
AFRAME.registerComponent("s26-4c-o-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s26-4c-o-o1-v1");
  var Controls = document.querySelector("#s26-4c-o-o1-v1-controls");
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
})

AFRAME.registerComponent("s26-4c-o-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s26-4c-o-o1-v2");
  var Controls = document.querySelector("#s26-4c-o-o1-v2-controls");
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
})

AFRAME.registerComponent("s26-4c-o-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s26-4c-o-o1-v3");
  var Controls = document.querySelector("#s26-4c-o-o1-v3-controls");
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
})



//S27--------5C--------Diamante 2//
AFRAME.registerComponent("s27-5c-o-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s27-5c-o-d2-v5");
  var Controls = document.querySelector("#s27-5c-o-d2-v5-controls");
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
})

AFRAME.registerComponent("s27-5c-o-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s27-5c-o-d2-v6");
  var Controls = document.querySelector("#s27-5c-o-d2-v6-controls");
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
})


//S28--------1D--------Diamante 1
AFRAME.registerComponent("s28-1d-o-d1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s28-1d-o-d1-v1");
  var Controls = document.querySelector("#s28-1d-o-d1-v1-controls");
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

AFRAME.registerComponent("s28-1d-o-d1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s28-1d-o-d1-v2");
  var Controls = document.querySelector("#s28-1d-o-d1-v2-controls");
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

AFRAME.registerComponent("s28-1d-o-d1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s28-1d-o-d1-v3");
  var Controls = document.querySelector("#s28-1d-o-d1-v3-controls");
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
})

AFRAME.registerComponent("s28-1d-o-d1-v4-f-pp", {
init: function () {
  var Video = document.querySelector("#s28-1d-o-d1-v4");
  var Controls = document.querySelector("#s28-1d-o-d1-v4-controls");
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
})

AFRAME.registerComponent("s28-1d-o-d1-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s28-1d-o-d1-v5");
  var Controls = document.querySelector("#s28-1d-o-d1-v5-controls");
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
})


//S29--------2D--------Diamante 2//
AFRAME.registerComponent("s29-2d-o-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s29-2d-o-d2-v5");
  var Controls = document.querySelector("#s29-2d-o-d2-v5-controls");
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
})

AFRAME.registerComponent("s29-2d-o-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s29-2d-o-d2-v6");
  var Controls = document.querySelector("#s29-2d-o-d2-v6-controls");
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
})


//S30--------3D--------Oro 1//
AFRAME.registerComponent("s30-3d-o-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s30-3d-o-o1-v1");
  var Controls = document.querySelector("#s30-3d-o-o1-v1-controls");
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
})

AFRAME.registerComponent("s30-3d-o-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s30-3d-o-o1-v2");
  var Controls = document.querySelector("#s30-3d-o-o1-v2-controls");
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
})

AFRAME.registerComponent("s30-3d-o-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s30-3d-o-o1-v3");
  var Controls = document.querySelector("#s30-3d-o-o1-v3-controls");
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
})


//S31--------4D--------Oro 2//
AFRAME.registerComponent("s31-4d-o-o2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s31-4d-o-o2-v1");
  var Controls = document.querySelector("#s31-4d-o-o2-v1-controls");
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
})

AFRAME.registerComponent("s31-4d-o-o2-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s31-4d-o-o2-v2");
  var Controls = document.querySelector("#s31-4d-o-o2-v2-controls");
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
})






















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
