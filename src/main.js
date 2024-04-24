import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "postcss";
import { objectify } from "postcss-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function edufit() {
  return ({ addComponents }) =>
    readdirSync(__dirname)
      .filter((value) => statSync(`${__dirname}/${value}`).isDirectory())
      .map((value) => readFileSync(`${__dirname}/${value}/${value}.css`))
      .forEach((value) => addComponents(objectify(parse(value))));
}
