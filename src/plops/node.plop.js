import { generator } from "./utils/index.js";

const templates = [
  {
    name: "Express Template",
    path: "express-template"
  },
];

export default function (plop) {
  return generator(plop, templates);
}
