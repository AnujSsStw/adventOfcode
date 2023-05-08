import { log } from "node:console";
import { open } from "node:fs/promises";
import internal from "node:stream";

(async () => {
  const file = await open("./text.txt");
  let ts = 0;

  console.time("time");
  for await (const line of file.readLines()) {
    const pair = line.split(",");
    const p1 = pair[0].split("-");
    const p2 = pair[1].split("-");

    let fullyC1: number[] = [];
    buildA(p1, fullyC1);
    let fullyC2: number[] = [];
    buildA(p2, fullyC2);

    let isFounded = fullyC1.some((ai) => fullyC2.includes(ai));
    let isFounded2 = fullyC2.some((ai) => fullyC1.includes(ai));

    if (isFounded || isFounded2) {
      ts = ts + 1;
    }
  }

  console.timeEnd("time");
  console.log(ts);
})();

function buildA(p1: string[], fullyC: number[]) {
  for (let i = parseInt(p1[0]); i <= parseInt(p1[1]); i++) {
    fullyC.push(i);
  }
}

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
