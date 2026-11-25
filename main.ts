// Fortune angle: a warning every AI agent knows is true —
// "just one small change" from a user is never one, and never small.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "A user will soon say 'just one small change' — it will be neither one nor small.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
