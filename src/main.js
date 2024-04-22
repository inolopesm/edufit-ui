import { readFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "postcss";
import { objectify } from "postcss-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Get Components
 * @param {string} name
 * @returns {import("postcss-js").CssInJs}
 */
function getComponents(name) {
  const css = readFileSync(`${__dirname}/${name}/${name}.css`, "utf8");
  return objectify(parse(css));
}

/**
 * Setup edufit ui
 * @returns {import("tailwindcss/types/config").PluginCreator}
 */
export default function edufit() {
  return ({ addComponents }) => {
    addComponents(getComponents("alert"));
    addComponents(getComponents("button"));
    addComponents(getComponents("input"));
  };
}
