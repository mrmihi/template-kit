import { generator } from "./utils/index.js";

const templates = [
  {
    name: "Express Template",
    path: "express-template"
  },
  {
    name: "Go Template",
    path: "go-template"
  }
];

export default function (plop) {
  return generator(plop, templates);
}
