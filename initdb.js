const sql = require("better-sqlite3");
const db = sql("words.db");

const dummyMeals = [
  { word: "abandon", meaning: " b\u1ecf, t\u1eeb b\u1ecf\r\n", day: 1 },
  {
    word: "abandoned",
    meaning: " b\u1ecb b\u1ecf r\u01a1i, b\u1ecb ru\u1ed3ng b\u1ecf\r\n",
    day: 1,
  },
  {
    word: "ability",
    meaning: " kh\u1ea3 n\u0103ng, n\u0103ng l\u1ef1c\r\n",
    day: 1,
  },
  {
    word: "able",
    meaning: " c\u00f3 n\u0103ng l\u1ef1c, c\u00f3 t\u00e0i\r\n",
    day: 1,
  },
  {
    word: "unable",
    meaning:
      " kh\u00f4ng c\u00f3 n\u0103ng l\u1ef1c, kh\u00f4ng c\u00f3 t\u00e0i\r\n",
    day: 1,
  },
  { word: "about", meaning: " kho\u1ea3ng, v\u1ec1\r\n", day: 1 },
  {
    word: "above",
    meaning: " \u1edf tr\u00ean, l\u00ean tr\u00ean\r\n",
    day: 1,
  },
  {
    word: "abroad",
    meaning: " \u1edf, ra n\u01b0\u1edbc ngo\u00e0i, ngo\u00e0i tr\u1eddi\r\n",
    day: 1,
  },
  { word: "absence", meaning: " s\u1ef1 v\u1eafng m\u1eb7t\r\n", day: 1 },
  {
    word: "absent",
    meaning: " v\u1eafng m\u1eb7t, ngh\u1ec9\r\n",
    day: 1,
  },
  {
    word: "absolute",
    meaning: " tuy\u1ec7t \u0111\u1ed1i, ho\u00e0n to\u00e0n\r (adj)\n",
    day: 1,
  },
  {
    word: "absolutely",
    meaning: " tuy\u1ec7t \u0111\u1ed1i, ho\u00e0n to\u00e0n\r (adv)\n",
    day: 1,
  },
  {
    word: "absorb",
    meaning: " thu h\u00fat, h\u1ea5p thu, l\u00f4i cu\u1ed1n\r\n",
    day: 1,
  },
  {
    word: "abuse",
    meaning: " l\u1ed9ng h\u00e0nh, l\u1ea1m d\u1ee5ng\r\n",
    day: 1,
  },
  {
    word: "academic",
    meaning:
      " thu\u1ed9c h\u1ecdc vi\u1ec7n, \u0110H, vi\u1ec7n h\u00e0n l\u00e2m\r\n",
    day: 1,
  },
  {
    word: "accent",
    meaning: " tr\u1ecdng \u00e2m, d\u1ea5u tr\u1ecdng \u00e2m\r\n",
    day: 1,
  },
  {
    word: "accept",
    meaning: " ch\u1ea5p nh\u1eadn, ch\u1ea5p thu\u1eadn\r\n",
    day: 1,
  },
  {
    word: "acceptable",
    meaning: " c\u00f3 th\u1ec3 ch\u1ea5p nh\u1eadn, ch\u1ea5p thu\u1eadn\r\n",
    day: 1,
  },
  {
    word: "unacceptable",
    meaning:
      "kh\u00f4ng th\u1ec3 ch\u1ea5p nh\u1eadn, ch\u1ea5p thu\u1eadn\r\n",
    day: 1,
  },
  {
    word: "access",
    meaning: " l\u1ed1i, c\u1eeda, \u0111\u01b0\u1eddng v\u00e0o\r\n",
    day: 1,
  },
  { word: "accident", meaning: " tai n\u1ea1n, r\u1ee7i ro\r\n", day: 1 },
  { word: "by_accident", meaning: "v\u00f4 t\u00ecnh\r\n", day: 1 },
  {
    word: "accidental",
    meaning: " t\u00ecnh c\u1edd, b\u1ea5t ng\u1edd\r\n",
    day: 1,
  },
  {
    word: "accidentally",
    meaning: " t\u00ecnh c\u1edd, ng\u1eabu nhi\u00ean\r\n",
    day: 1,
  },
  {
    word: "accommodation",
    meaning: " s\u1ef1 th\u00edch nghi, \u0111i\u1ec1u ti\u1ebft\r\n",
    day: 1,
  },
  {
    word: "accompany",
    meaning: " \u0111i theo, \u0111i c\u00f9ng, k\u00e8m theo\r\n",
    day: 1,
  },
  { word: "according", meaning: " theo, y theo\r\n", day: 1 },
  {
    word: "account",
    meaning:
      " t\u00e0i kho\u1ea3n, k\u1ebf to\u00e1n; t\u00ednh to\u00e1n, t\u00ednh \u0111\u1ebfn\r\n",
    day: 1,
  },
  {
    word: "accurate",
    meaning:
      " \u0111\u00fang \u0111\u1eafn, ch\u00ednh x\u00e1c, x\u00e1c \u0111\u00e1ng\r\n",
    day: 1,
  },
  {
    word: "accurately",
    meaning: " \u0111\u00fang \u0111\u1eafn, ch\u00ednh x\u00e1c\r\n",
    day: 1,
  },
  {
    word: "accuse",
    meaning: " t\u1ed1 c\u00e1o, bu\u1ed9c t\u1ed9i, k\u1ebft t\u1ed9i\r\n",
    day: 1,
  },
  {
    word: "achieve",
    meaning:
      " \u0111\u1ea1t \u0111\u01b0\u1ee3c, d\u00e0nh \u0111\u01b0\u1ee3c\r\n",
    day: 1,
  },
  {
    word: "achievement",
    meaning: " th\u00e0nh t\u00edch, th\u00e0nh t\u1ef1u\r\n",
    day: 1,
  },
  { word: "acid", meaning: " axit\r\n", day: 1 },
  {
    word: "acknowledge",
    meaning: " c\u00f4ng nh\u1eadn, th\u1eeba nh\u1eadn\r\n",
    day: 1,
  },
  {
    word: "acquire",
    meaning:
      " d\u00e0nh \u0111\u01b0\u1ee3c, \u0111\u1ea1t \u0111\u01b0\u1ee3c, ki\u1ebfm \u0111\u01b0\u1ee3c\r\n",
    day: 1,
  },
  { word: "across", meaning: " qua, ngang qua\r\n", day: 1 },
  {
    word: "act",
    meaning:
      "h\u00e0nh \u0111\u1ed9ng, h\u00e0nh vi, c\u1eed ch\u1ec9, \u0111\u1ed1i x\u1eed\r\n",
    day: 1,
  },
  {
    word: "action",
    meaning:
      "h\u00e0nh \u0111\u1ed9ng, h\u00e0nh vi, t\u00e1c \u0111\u1ed9ng\r\n",
    day: 1,
  },
  {
    word: "take_action",
    meaning: "h\u00e0nh \u0111\u1ed9ng\r\n",
    day: 1,
  },
  {
    word: "active",
    meaning: "t\u00edch c\u1ef1c ho\u1ea1t \u0111\u1ed9ng, nhanh nh\u1eb9n\r\n",
    day: 1,
  },
  { word: "actor,actress", meaning: "di\u1ec5n vi\u00ean", day: 1 },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS words (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       word TEXT NOT NULL UNIQUE,
       meaning TEXT NOT NULL,
       day INTEGER NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO words VALUES (
         null,
         @word,
         @meaning,
         @day
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
