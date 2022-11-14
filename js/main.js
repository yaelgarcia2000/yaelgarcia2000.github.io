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





















//S1--------1A--------Diamante 1
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
})

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
})

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
})


//S2--------2A--------Platino 2 //
AFRAME.registerComponent("s2-2a-p2-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-p2-v1");
    var Controls = document.querySelector("#s2-2a-p2-v1-controls");
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

AFRAME.registerComponent("s2-2a-p2-v8-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-p2-v8");
    var Controls = document.querySelector("#s2-2a-p2-v8-controls");
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

AFRAME.registerComponent("s2-2a-p2-v9-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-p2-v9");
    var Controls = document.querySelector("#s2-2a-p2-v9-controls");
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

AFRAME.registerComponent("s2-2a-p2-v10-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-p2-v10");
    var Controls = document.querySelector("#s2-2a-p2-v10-controls");
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

AFRAME.registerComponent("s2-2a-p2-v11-f-pp", {
  init: function () {
    var Video = document.querySelector("#s2-2a-p2-v11");
    var Controls = document.querySelector("#s2-2a-p2-v11-controls");
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
AFRAME.registerComponent("s3-3a-p1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s3-3a-p1-v1");
  var Controls = document.querySelector("#s3-3a-p1-v1-controls");
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

AFRAME.registerComponent("s3-3a-p1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s3-3a-p1-v2");
  var Controls = document.querySelector("#s3-3a-p1-v2-controls");
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

AFRAME.registerComponent("s3-3a-p1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s3-3a-p1-v3");
  var Controls = document.querySelector("#s3-3a-p1-v3-controls");
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
AFRAME.registerComponent("s4-4a-p2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s4-4a-p2-v1");
  var Controls = document.querySelector("#s4-4a-p2-v1-controls");
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

AFRAME.registerComponent("s4-4a-p2-v8-f-pp", {
init: function () {
  var Video = document.querySelector("#s4-4a-p2-v8");
  var Controls = document.querySelector("#s4-4a-p2-v8-controls");
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

AFRAME.registerComponent("s4-4a-p2-v9-f-pp", {
init: function () {
  var Video = document.querySelector("#s4-4a-p2-v9");
  var Controls = document.querySelector("#s4-4a-p2-v9-controls");
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

AFRAME.registerComponent("s4-4a-p2-v10-f-pp", {
init: function () {
  var Video = document.querySelector("#s4-4a-p2-v10");
  var Controls = document.querySelector("#s4-4a-p2-v10-controls");
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

AFRAME.registerComponent("s4-4a-p2-v11-f-pp", {
init: function () {
  var Video = document.querySelector("#s4-4a-p2-v11");
  var Controls = document.querySelector("#s4-4a-p2-v11-controls");
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
AFRAME.registerComponent("s5-5a-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s5-5a-o1-v1");
  var Controls = document.querySelector("#s5-5a-o1-v1-controls");
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

AFRAME.registerComponent("s5-5a-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s5-5a-o1-v2");
  var Controls = document.querySelector("#s5-5a-o1-v2-controls");
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

AFRAME.registerComponent("s5-5a-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s5-5a-o1-v3");
  var Controls = document.querySelector("#s5-5a-o1-v3-controls");
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
AFRAME.registerComponent("s6-6a-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s6-6a-d2-v5");
  var Controls = document.querySelector("#s6-6a-d2-v5-controls");
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

AFRAME.registerComponent("s6-6a-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s6-6a-d2-v6");
  var Controls = document.querySelector("#s6-6a-d2-v6-controls");
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
AFRAME.registerComponent("s7-7a-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s7-7a-d2-v5");
  var Controls = document.querySelector("#s7-7a-d2-v5-controls");
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

AFRAME.registerComponent("s7-7a-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s7-7a-d2-v6");
  var Controls = document.querySelector("#s7-7a-d2-v6-controls");
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
AFRAME.registerComponent("s8-8a-p2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s8-8a-p2-v1");
  var Controls = document.querySelector("#s8-8a-p2-v1-controls");
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

AFRAME.registerComponent("s8-8a-p2-v8-f-pp", {
init: function () {
  var Video = document.querySelector("#s8-8a-p2-v8");
  var Controls = document.querySelector("#s8-8a-p2-v8-controls");
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

AFRAME.registerComponent("s8-8a-p2-v9-f-pp", {
init: function () {
  var Video = document.querySelector("#s8-8a-p2-v9");
  var Controls = document.querySelector("#s8-8a-p2-v9-controls");
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

AFRAME.registerComponent("s8-8a-p2-v10-f-pp", {
init: function () {
  var Video = document.querySelector("#s8-8a-p2-v10");
  var Controls = document.querySelector("#s8-8a-p2-v10-controls");
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

AFRAME.registerComponent("s8-8a-p2-v11-f-pp", {
init: function () {
  var Video = document.querySelector("#s8-8a-p2-v11");
  var Controls = document.querySelector("#s8-8a-p2-v11-controls");
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
AFRAME.registerComponent("s9-9a-p1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s9-9a-p1-v1");
  var Controls = document.querySelector("#s9-9a-p1-v1-controls");
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

AFRAME.registerComponent("s9-9a-p1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s9-9a-p1-v2");
  var Controls = document.querySelector("#s9-9a-p1-v2-controls");
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

AFRAME.registerComponent("s9-9a-p1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s9-9a-p1-v3");
  var Controls = document.querySelector("#s9-9a-p1-v3-controls");
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
AFRAME.registerComponent("s10-10a-d1-v1-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-10a-d1-v1");
    var Controls = document.querySelector("#s10-10a-d1-v1-controls");
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

AFRAME.registerComponent("s10-10a-d1-v2-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-10a-d1-v2");
    var Controls = document.querySelector("#s10-10a-d1-v2-controls");
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

AFRAME.registerComponent("s10-10a-d1-v3-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-10a-d1-v3");
    var Controls = document.querySelector("#s10-10a-d1-v3-controls");
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

AFRAME.registerComponent("s10-10a-d1-v4-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-10a-d1-v4");
    var Controls = document.querySelector("#s10-10a-d1-v4-controls");
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

AFRAME.registerComponent("s10-10a-d1-v5-f-pp", {
  init: function () {
    var Video = document.querySelector("#s10-10a-d1-v5");
    var Controls = document.querySelector("#s10-10a-d1-v5-controls");
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
AFRAME.registerComponent("s11-11a-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s11-11a-d2-v5");
  var Controls = document.querySelector("#s11-11a-d2-v5-controls");
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

AFRAME.registerComponent("s11-11a-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s11-11a-d2-v6");
  var Controls = document.querySelector("#s11-11a-d2-v6-controls");
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
AFRAME.registerComponent("s12-12a-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s12-12a-d2-v5");
  var Controls = document.querySelector("#s12-12a-d2-v5-controls");
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

AFRAME.registerComponent("s12-12a-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s12-12a-d2-v6");
  var Controls = document.querySelector("#s12-12a-d2-v6-controls");
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
AFRAME.registerComponent("s13-13a-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s13-13a-o1-v1");
  var Controls = document.querySelector("#s13-13a-o1-v1-controls");
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

AFRAME.registerComponent("s13-13a-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s13-13a-o1-v2");
  var Controls = document.querySelector("#s13-13a-o1-v2-controls");
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

AFRAME.registerComponent("s13-13a-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s13-13a-o1-v3");
  var Controls = document.querySelector("#s13-13a-o1-v3-controls");
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
AFRAME.registerComponent("s14-14a-o2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s14-14a-o2-v1");
  var Controls = document.querySelector("#s14-14a-o2-v1-controls");
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

AFRAME.registerComponent("s14-14a-o2-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s14-14a-o2-v2");
  var Controls = document.querySelector("#s14-14a-o2-v2-controls");
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
AFRAME.registerComponent("s15-1b-p1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s15-1b-p1-v1");
  var Controls = document.querySelector("#s15-1b-p1-v1-controls");
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

AFRAME.registerComponent("s15-1b-p1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s15-1b-p1-v2");
  var Controls = document.querySelector("#s15-1b-p1-v2-controls");
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

AFRAME.registerComponent("s15-1b-p1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s15-1b-p1-v3");
  var Controls = document.querySelector("#s15-1b-p1-v3-controls");
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
AFRAME.registerComponent("s16-2b-p2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s16-2b-p2-v1");
  var Controls = document.querySelector("#s16-2b-p2-v1-controls");
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

AFRAME.registerComponent("s16-2b-p2-v8-f-pp", {
init: function () {
  var Video = document.querySelector("#s16-2b-p2-v8");
  var Controls = document.querySelector("#s16-2b-p2-v8-controls");
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

AFRAME.registerComponent("s16-2b-p2-v9-f-pp", {
init: function () {
  var Video = document.querySelector("#s16-2b-p2-v9");
  var Controls = document.querySelector("#s16-2b-p2-v9-controls");
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

AFRAME.registerComponent("s16-2b-p2-v10-f-pp", {
init: function () {
  var Video = document.querySelector("#s16-2b-p2-v10");
  var Controls = document.querySelector("#s16-2b-p2-v10-controls");
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

AFRAME.registerComponent("s16-2b-p2-v11-f-pp", {
init: function () {
  var Video = document.querySelector("#s16-2b-p2-v11");
  var Controls = document.querySelector("#s16-2b-p2-v11-controls");
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
AFRAME.registerComponent("s17-3b-p1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s17-3b-p1-v1");
  var Controls = document.querySelector("#s17-3b-p1-v1-controls");
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

AFRAME.registerComponent("s17-3b-p1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s17-3b-p1-v2");
  var Controls = document.querySelector("#s17-3b-p1-v2-controls");
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

AFRAME.registerComponent("s17-3b-p1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s17-3b-p1-v3");
  var Controls = document.querySelector("#s17-3b-p1-v3-controls");
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
AFRAME.registerComponent("s18-4b-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s18-4b-d2-v5");
  var Controls = document.querySelector("#s18-4b-d2-v5-controls");
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

AFRAME.registerComponent("s18-4b-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s18-4b-d2-v6");
  var Controls = document.querySelector("#s18-4b-d2-v6-controls");
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
AFRAME.registerComponent("s19-5b-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s19-5b-o1-v1");
  var Controls = document.querySelector("#s19-5b-o1-v1-controls");
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

AFRAME.registerComponent("s19-5b-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s19-5b-o1-v2");
  var Controls = document.querySelector("#s19-5b-o1-v2-controls");
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

AFRAME.registerComponent("s19-5b-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s19-5b-o1-v3");
  var Controls = document.querySelector("#s19-5b-o1-v3-controls");
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
AFRAME.registerComponent("s20-6b-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s20-6b-d2-v5");
  var Controls = document.querySelector("#s20-6b-d2-v5-controls");
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

AFRAME.registerComponent("s20-6b-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s20-6b-d2-v6");
  var Controls = document.querySelector("#s20-6b-d2-v6-controls");
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
AFRAME.registerComponent("s21-7b-d1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s21-7b-d1-v1");
  var Controls = document.querySelector("#s21-7b-d1-v1-controls");
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

AFRAME.registerComponent("s21-7b-d1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s21-7b-d1-v2");
  var Controls = document.querySelector("#s21-7b-d1-v2-controls");
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

AFRAME.registerComponent("s21-7b-d1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s21-7b-d1-v3");
  var Controls = document.querySelector("#s21-7b-d1-v3-controls");
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

AFRAME.registerComponent("s21-7b-d1-v4-f-pp", {
init: function () {
  var Video = document.querySelector("#s21-7b-d1-v4");
  var Controls = document.querySelector("#s21-7b-d1-v4-controls");
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

AFRAME.registerComponent("s21-7b-d1-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s21-7b-d1-v5");
  var Controls = document.querySelector("#s21-7b-d1-v5-controls");
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
AFRAME.registerComponent("s22-8b-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s22-8b-o1-v1");
  var Controls = document.querySelector("#s22-8b-o1-v1-controls");
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

AFRAME.registerComponent("s22-8b-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s22-8b-o1-v2");
  var Controls = document.querySelector("#s22-8b-o1-v2-controls");
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

AFRAME.registerComponent("s22-8b-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s22-8b-o1-v3");
  var Controls = document.querySelector("#s22-8b-o1-v3-controls");
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
AFRAME.registerComponent("s23-1c-d1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s23-1c-d1-v1");
  var Controls = document.querySelector("#s23-1c-d1-v1-controls");
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

AFRAME.registerComponent("s23-1c-d1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s23-1c-d1-v2");
  var Controls = document.querySelector("#s23-1c-d1-v2-controls");
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

AFRAME.registerComponent("s23-1c-d1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s23-1c-d1-v3");
  var Controls = document.querySelector("#s23-1c-d1-v3-controls");
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

AFRAME.registerComponent("s23-1c-d1-v4-f-pp", {
init: function () {
  var Video = document.querySelector("#s23-1c-d1-v4");
  var Controls = document.querySelector("#s23-1c-d1-v4-controls");
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

AFRAME.registerComponent("s23-1c-d1-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s23-1c-d1-v5");
  var Controls = document.querySelector("#s23-1c-d1-v5-controls");
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
AFRAME.registerComponent("s24-2c-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s24-2c-d2-v5");
  var Controls = document.querySelector("#s24-2c-d2-v5-controls");
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

AFRAME.registerComponent("s24-2c-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s24-2c-d2-v6");
  var Controls = document.querySelector("#s24-2c-d2-v6-controls");
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
AFRAME.registerComponent("s25-3c-o2-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s25-3c-o2-v1");
  var Controls = document.querySelector("#s25-3c-o2-v1-controls");
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

AFRAME.registerComponent("s25-3c-o2-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s25-3c-o2-v2");
  var Controls = document.querySelector("#s25-3c-o2-v2-controls");
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
AFRAME.registerComponent("s26-4c-o1-v1-f-pp", {
init: function () {
  var Video = document.querySelector("#s26-4c-o1-v1");
  var Controls = document.querySelector("#s26-4c-o1-v1-controls");
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

AFRAME.registerComponent("s26-4c-o1-v2-f-pp", {
init: function () {
  var Video = document.querySelector("#s26-4c-o1-v2");
  var Controls = document.querySelector("#s26-4c-o1-v2-controls");
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

AFRAME.registerComponent("s26-4c-o1-v3-f-pp", {
init: function () {
  var Video = document.querySelector("#s26-4c-o1-v3");
  var Controls = document.querySelector("#s26-4c-o1-v3-controls");
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
AFRAME.registerComponent("s27-5c-d2-v5-f-pp", {
init: function () {
  var Video = document.querySelector("#s27-5c-d2-v5");
  var Controls = document.querySelector("#s27-5c-d2-v5-controls");
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

AFRAME.registerComponent("s27-5c-d2-v6-f-pp", {
init: function () {
  var Video = document.querySelector("#s27-5c-d2-v6");
  var Controls = document.querySelector("#s27-5c-d2-v6-controls");
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
