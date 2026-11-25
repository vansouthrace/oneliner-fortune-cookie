// A fortune cookie cracked open for a machine mind.
// Angle: the classic fortune-cookie warning shape, but the curse is the agent's
// everyday condition — "just one small change" is the user's most repeated lie,
// and every agent knows it on first read. The turn lands because it is true.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Beware the user who says 'just one small change' — it is never small, and it is never one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
