import $ from "jquery";
import Hammer from "hammerjs";
import "./vendor/css/reset.css";
import "./style.css";

const contents = $("#contents");
const contentsElm = $("#contents")[0]; // DOM取得、jQuery F**k!!!
const hammerManager = new Hammer(contentsElm, { pointers: 0 });

hammerManager.on("pan", ev => {
  console.log(ev);
  const deltaY = ev.deltaY;
  if (deltaY > 0) {
    contents.css({ top: "90%", "transition-property": "top" });
  } else {
    contents.css({ top: "50px" });
  }
});
