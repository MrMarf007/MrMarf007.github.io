import { p as push, c as pop } from './index-nekjxHGH.js';
import { e as escape_html } from './escaping-BQR1pbqy.js';

function InfinitySweeper($$payload, $$props) {
  push();
  $$payload.out += `<main class="svelte-2kegpa">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button class="start-button">Start Game</button>`;
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
function Title($$payload, $$props) {
  let { title } = $$props;
  $$payload.out += `<main><h1 class="title svelte-eoh7cj">${escape_html(title)}</h1></main>`;
}
function _page($$payload) {
  $$payload.out += `<main>`;
  Title($$payload, { title: "Infinity Sweeper" });
  $$payload.out += `<!----> `;
  InfinitySweeper($$payload);
  $$payload.out += `<!----></main>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-PHKv2brC.js.map
