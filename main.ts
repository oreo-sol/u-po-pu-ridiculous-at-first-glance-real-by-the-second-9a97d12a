import { mkdirSync, writeFileSync } from "node:fs";

// The pitch names the odd thing (rented grandmothers), the buyer
// (homesick students), and why it holds (comfort cooking, cheaper than therapy).
const pitch =
  "We rent grandmothers to homesick students for Sunday dinner, " +
  "because a stranger's grandma cooks like yours and costs less than therapy.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
