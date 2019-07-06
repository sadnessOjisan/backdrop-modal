import $ from "jquery";
import Hammer from "hammerjs";
import "./vendor/css/reset.css";
import "./style.css";

const data = {
  yk1: {
    name: "T.K",
    age: "20代",
    description:
      "I am the bone of my sword. Steel is my body, and fire is my blood.I have created over a thousand blades.Unknown to Death. Nor known to Life. Have withstood pain to create many weapons. Yet, those hands will never hold anything. So as I pray, UNLIMITED BLADE WORKS. ",
  },
  yk2: {
    name: "T.K",
    age: "20代",
    description:
      "――― 体は剣で出来ている 血潮は鉄で、心は硝子 幾たびの戦場を越えて不敗  ただの一度も敗走はなく ただの一度も理解されない 彼の者は常に独り剣の丘で勝利に酔う  故に、その生涯に意味はなく その体は、きっと剣で出来ていた",
  },
  yk3: {
    name: "T.K",
    age: "20代",
    description:
      "Lorem ipsum dolor sit amet, libero arcu tempor sodales maecenas lectus, eros diam donec nec, quas dis hendrerit convallis massa feugiat, commodo sodales curabitur. Arcu sed massa suspendisse nulla, id pellentesque vel. Mauris ac et pellentesque platea sit inceptos, dolor condimentum felis ipsum felis sit, nunc tincidunt ultrices, ac parturient auctor, vulputate dolor. Molestie vitae viverra ac, pellentesque platea morbi dignissim. Aliquet lectus nam posuere, ornare elit dolor metus elit lacus. Massa massa a faucibus nulla a id.",
  },
  yk4: {
    name: "T.K",
    age: "20代",
    description:
      "Lorem ipsum dolor sit amet, libero arcu tempor sodales maecenas lectus, eros diam donec nec, quas dis hendrerit convallis massa feugiat, commodo sodales curabitur. Arcu sed massa suspendisse nulla, id pellentesque vel. Mauris ac et pellentesque platea sit inceptos, dolor condimentum felis ipsum felis sit, nunc tincidunt ultrices, ac parturient auctor, vulputate dolor. Molestie vitae viverra ac, pellentesque platea morbi dignissim. Aliquet lectus nam posuere, ornare elit dolor metus elit lacus. Massa massa a faucibus nulla a id.",
  },
  yk5: {
    name: "T.K",
    age: "20代",
    description:
      "Lorem ipsum dolor sit amet, libero arcu tempor sodales maecenas lectus, eros diam donec nec, quas dis hendrerit convallis massa feugiat, commodo sodales curabitur. Arcu sed massa suspendisse nulla, id pellentesque vel. Mauris ac et pellentesque platea sit inceptos, dolor condimentum felis ipsum felis sit, nunc tincidunt ultrices, ac parturient auctor, vulputate dolor. Molestie vitae viverra ac, pellentesque platea morbi dignissim. Aliquet lectus nam posuere, ornare elit dolor metus elit lacus. Massa massa a faucibus nulla a id.",
  },
  yk6: {
    name: "T.K",
    age: "20代",
    description:
      "Lorem ipsum dolor sit amet, libero arcu tempor sodales maecenas lectus, eros diam donec nec, quas dis hendrerit convallis massa feugiat, commodo sodales curabitur. Arcu sed massa suspendisse nulla, id pellentesque vel. Mauris ac et pellentesque platea sit inceptos, dolor condimentum felis ipsum felis sit, nunc tincidunt ultrices, ac parturient auctor, vulputate dolor. Molestie vitae viverra ac, pellentesque platea morbi dignissim. Aliquet lectus nam posuere, ornare elit dolor metus elit lacus. Massa massa a faucibus nulla a id.",
  },
  yk7: {
    name: "T.K",
    age: "20代",
    description:
      "Lorem ipsum dolor sit amet, libero arcu tempor sodales maecenas lectus, eros diam donec nec, quas dis hendrerit convallis massa feugiat, commodo sodales curabitur. Arcu sed massa suspendisse nulla, id pellentesque vel. Mauris ac et pellentesque platea sit inceptos, dolor condimentum felis ipsum felis sit, nunc tincidunt ultrices, ac parturient auctor, vulputate dolor. Molestie vitae viverra ac, pellentesque platea morbi dignissim. Aliquet lectus nam posuere, ornare elit dolor metus elit lacus. Massa massa a faucibus nulla a id.",
  },
  yk8: {
    name: "T.K",
    age: "20代",
    description:
      "Lorem ipsum dolor sit amet, libero arcu tempor sodales maecenas lectus, eros diam donec nec, quas dis hendrerit convallis massa feugiat, commodo sodales curabitur. Arcu sed massa suspendisse nulla, id pellentesque vel. Mauris ac et pellentesque platea sit inceptos, dolor condimentum felis ipsum felis sit, nunc tincidunt ultrices, ac parturient auctor, vulputate dolor. Molestie vitae viverra ac, pellentesque platea morbi dignissim. Aliquet lectus nam posuere, ornare elit dolor metus elit lacus. Massa massa a faucibus nulla a id.",
  },
  yk9: {
    name: "T.K",
    age: "20代",
    description:
      "Lorem ipsum dolor sit amet, libero arcu tempor sodales maecenas lectus, eros diam donec nec, quas dis hendrerit convallis massa feugiat, commodo sodales curabitur. Arcu sed massa suspendisse nulla, id pellentesque vel. Mauris ac et pellentesque platea sit inceptos, dolor condimentum felis ipsum felis sit, nunc tincidunt ultrices, ac parturient auctor, vulputate dolor. Molestie vitae viverra ac, pellentesque platea morbi dignissim. Aliquet lectus nam posuere, ornare elit dolor metus elit lacus. Massa massa a faucibus nulla a id.",
  },
};

const contents = $("#contents");
const contentsElm = $("#contents")[0]; // DOM取得、jQuery F**k!!!
const hammerManager = new Hammer(contentsElm, { pointers: 0 });
console.log(contents);
hammerManager.on("pan", ev => {
  const { deltaY, isFinal } = ev;
  console.log(ev);
  if (isFinal && deltaY > 0) {
    setTimeout(() => {
      contents.css({ display: "none" });
    }, 500);
  } else {
    if (deltaY > 0) {
      contents.css({ top: "95%", "transition-property": "top" });
    } else {
      contents.css({ top: "5%", "transition-property": "top" });
    }
  }
});

$(".icon").on("click", e => {
  contents.css({ top: "5%", "transition-property": "top", display: "initial" });
  const { src, id } = e.target;
  $("#profimg").attr("src", src);
  $("#name").text(data[id].name);
  $("#age").text(data[id].age);
  $("#description").text(data[id].description);
});
