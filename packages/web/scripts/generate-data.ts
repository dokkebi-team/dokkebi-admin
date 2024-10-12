import { Group, Item } from "@/types";
import { parse } from "csv-parse";
import fs from "node:fs";
import path from "node:path";

const c1s1Parser = fs
  .createReadStream(path.join(__dirname, "C1S1.csv"))
  .pipe(parse({ columns: true }));

const c1s2Parser = fs
  .createReadStream(path.join(__dirname, "C1S2.csv"))
  .pipe(parse({ columns: true }));

const dedupe = (arr: string[]) => {
  return Array.from(new Set(arr));
};

const sanitizeTags = (tags: string[]) => {
  return dedupe(tags.map((tag) => tag.trim())).filter(Boolean);
};

async function main() {
  const groups: Group[] = [
    {
      id: "group-도깨비",
      name: "도깨비",
      tags: ["도깨비"],
    },
    {
      id: "group-일러스트",
      name: "일러스트",
      tags: ["도깨비", "일러스트"],
    },
    {
      id: "group-실물사진",
      name: "실물사진",
      tags: ["도깨비", "실물사진"],
    },
  ];
  const items: Item[] = [];

  for await (const record of c1s1Parser) {
    console.log(`processing C1S1 ${record.inventoryNo} ${record.name}`);
    items.push({
      id: `illustration-${record.inventoryNo}`,
      name: record.name,
      imageUrl: `https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/${record.illustrationFileName}.webp`,
      resizedImageUrl: `https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/resized/${record.illustrationFileName}.webp`,
      tags: sanitizeTags([
        "도깨비",
        "일러스트",
        record.inventoryNo,
        record.name,
        record.type,
        record.subType,
        record.regionName,
        record.size,
      ]),
    });
  }

  for await (const record of c1s2Parser) {
    console.log(`processing C1S2 ${record.inventoryNo} ${record.name}`);
    items.push({
      id: `original-${record.inventoryNo}`,
      name: record.name,
      imageUrl: `https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/${record.fileName}.jpg`,
      resizedImageUrl: `https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/${record.fileName}.jpg`,
      tags: sanitizeTags([
        "도깨비",
        "실물사진",
        record.inventoryNo,
        record.name,
        record.regionName,
        record.size,
      ]),
    });
  }

  if (!fs.existsSync(path.join(__dirname, "../generated"))) {
    fs.mkdirSync(path.join(__dirname, "../generated"));
  }

  fs.writeFileSync(
    path.join(__dirname, "../generated/data.ts"),
    `
    import { Group, Item } from "@/types";

    export const groups: Group[] = ${JSON.stringify(groups, null, 2)};
    export const items: Item[] = ${JSON.stringify(items, null, 2)};
    `,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {});
