import { log } from "node:console";
import { open } from "node:fs/promises";

(async () => {
  const file = await open("./text.txt");
  let ts = 0;

  console.time("time");
  const arr = [];
  for await (const line of file.readLines()) {
    if (arr.length < 3) {
      arr.push(line);
    } else {
      arr.length = 0;
      arr.push(line);
    }

    if (arr.length == 3) {
      const ch = matchInMore(arr)[0];
      // Using for loop for (a-z): 97-122 (A-Z): 65-90
      let a = ch.charCodeAt(0);
      if (ch >= "a" && ch <= "z") {
        const realC = a - 96;
        ts = ts + realC;
      } else {
        const realC = a - 38;
        ts = ts + realC;
      }
    }
    // const ch = match(p1, p2);
  }
  console.timeEnd("time");
  console.log(ts);
})();

function match(s1: string[], s2: string) {
  let count: string = "";

  for (let i in s1) {
    s2.includes(s1[i]) ? (count = s1[i]) : "";
  }

  return count;
}

function matchInMore(strings: string[]): string[] {
  let charSets = strings.map((s) => new Set(s.split("")));
  let intersection = new Set(charSets[0]);
  for (let i = 1; i < charSets.length; i++) {
    intersection = new Set(
      [...intersection].filter((char) => charSets[i].has(char))
    );
  }
  return Array.from(intersection);
}
