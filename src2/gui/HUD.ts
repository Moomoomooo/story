export const HUD = {
  hud: document.getElementById("hud"),
  healthBar: document.createElement("div"),
  spiritBar: document.createElement("div"),
  
  skillSelectScreen: document.createElement("div"),

  initialize: function() {
  },

  hide: function() {
    this.hud.style.display = 'none';
  },
  show: function() {
    this.hud.style.display = 'block';
  }
}
