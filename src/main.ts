import $ from "jquery";
import Hammer from "hammerjs";
import "./vendor/css/reset.css";
import "./style.css";

const contents = $("#contents");
const contentsElm = $("#contents")[0]; // DOM取得、jQuery F**k!!!
const hammerManager = new Hammer(contentsElm, { pointers: 0 });

hammerManager.on("pan", ev => {
  if (ev.center.y < 50) return;
  contents.css({ top: ev.center.y });
});
