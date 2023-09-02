import { fetchMarkdown } from "./test.js";

// md 파일을 자르고 가공
const nomalize = async () => {
  const markdown = await fetchMarkdown();
  const tokens = markdown.split("\n");

  return tokens;
};

const covertMarkdown = (str) => {
  let result = str
    .replaceAll(/^# (.+)/gm, "<h1>$1</h1>")
    .replaceAll(/^##\s(.+)/gm, "<h2>$1</h2>")
    .replaceAll(/^###\s(.+)/gm, "<h3>$1</h3>")
    .replaceAll(/\*\*(.*?)\*\*/gm, "<strong>$1</strong>")
    .replaceAll(/`([^`]+)`/g, "<span class='highlight'>$1</span>");
  return result;
};

// md 파일 파싱
export const parse = async () => {
  const tokens = await nomalize();

  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i];
    tokens[i] = covertMarkdown(token);
  }
  console.log(tokens);
  return tokens.join("\n");
};
