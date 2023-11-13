import { generator } from "./utils/index.js";

const templates = [
  {
    name: "Go-Template",
    path: "go-template"
  }
];

export default function (plop) {
  return generator(plop, templates);
}