function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<main><header class="svelte-b4audr"><a href="/" class="home-button svelte-b4audr">Home</a></header> `;
  children($$payload);
  $$payload.out += `<!----></main>`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DVhcrOVk.js.map
