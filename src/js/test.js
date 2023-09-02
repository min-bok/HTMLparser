import { render } from "./render.js";

export const fetchMarkdown = async () => {
  const res = await fetch(`${window.location.origin}/src/pages/test1.md`);

  if (res.status === 200) {
    const markdown = await res.text();
    return markdown;
  } else {
    const markdown = "Can not read .md file.";
    return markdown;
  }
};

const renderContent = async () => {
  const div = document.querySelector(".content");
  div.innerHTML = await render();
  // console.log(await render());
};

renderContent();
