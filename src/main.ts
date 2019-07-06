import $ from "jquery";
import Hammer from "hammerjs";
import "./vendor/css/reset.css";
import "./style.css";

const contents = $("#contents");
const contentsElm = $("#contents")[0]; // DOM取得、jQuery F**k!!!
const hammerManager = new Hammer(contentsElm, {});

hammerManager.on("pan", ev => {
  console.log(ev);
  contents.css({ top: ev.center.y - contents.outerHeight() / 2 });
});
