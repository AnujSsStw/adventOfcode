import { log } from "node:console";
import { open } from "node:fs/promises";
import internal from "node:stream";

(async () => {
  const file = await open("./text.txt");
  let ts = 0;

  const arr = [
    ["W", "D", "G", "B", "H", "R", "V"],
    ["J", "N", "G", "C", "R", "F"],
    ["L", "S", "F", "H", "D", "N", "J"],
    ["J", "D", "S", "V"],
    ["S", "H", "D", "R", "Q", "W", "N", "V"],
    ["P", "G", "H", "C", "M"],
    ["F", "J", "B", "G", "L", "Z", "H", "C"],
    ["S", "J", "R"],
    ["L", "G", "S", "R", "B", "N", "V", "M"],
  ];

  console.time("time");
  for await (const line of file.readLines()) {
    const sp = line.split(" ");
    const moves = sp.filter((val) =>
      !Number.isNaN(parseInt(val)) ? val : false
    );

    const amount = parseInt(moves[0]);
    const form = parseInt(moves[1]) - 1; //remove
    const to = parseInt(moves[2]) - 1; //add

    const removeItem: any = [];
    for (let i = 0; i < amount; i++) {
      removeItem.push(arr[form].pop());
    }

    removeItem.forEach((val: string) => {
      arr[to].push(val);
    });
  }
  log(arr);
  let s = "";
  arr.forEach((subArr) => {
    s += subArr.pop();
  });
  log(s);

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
