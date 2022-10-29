AFRAME.registerComponent("componentstarter", {
  init: function () {
    let pagnew = () => {
      this.el.setAttribute("visible", false);
    };

    this.el.addEventListener("click", pagnew);
  },
});
