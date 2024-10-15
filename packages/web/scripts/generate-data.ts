import { Group, Item } from "@/types/common";
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
      metaData: {
        referenceCode: "C1",
        hierarchy: "컬렉션(C)",
        dataSource: "도깨비공원",
        producer: "도깨비공원",
        productionDate: "2005-2022",
        hierarchyContent: `2005년 5월 14일 개장한 도깨비 공원에 살고 있는 1,000여 점의 도깨비들. 제주민속설화를 바탕으로 재탄생 된 다양한 모습의 도깨비는 6,000평 크기의 공원에 종족별로 흩어져 있다. 수작업으로 만들어진 각각의 도깨비는 와이어 패널 공법을 도입하여 철골로 구조를 만든 후 시멘트로 형태를 구체화하였다. 질감은 제주도의 현무암처럼 거칠지만 단단한 느낌을 준다. 도깨비 컬렉션은 작가 이해강이 재생산한 도깨비 일러스트와 사진작가 배추가 찍은 실물 사진 시리즈로 구성되어 있다.`,
        dataCountTemplate: "{value}개의 디지털 파일",
      },
      tags: ["도깨비"],
    },
    {
      id: "group-일러스트",
      name: "일러스트",
      metaData: {
        referenceCode: "C1S1",
        hierarchy: "시리즈(S)",
        producer: "이해강",
        productionDate: "2022",
        hierarchyContent: `본 시리즈의 자료는 작가 이해강이 작업한 일러스트 파일로 구성되어 있다. 도깨비 공원에 살고 있는 도깨비들의 특징을 살려 651개의 도깨비가 디지털 세상에서 새로운 생명을 얻었다.`,
        dataCountTemplate: "{value}개의 디지털 파일",
      },
      tags: ["도깨비", "일러스트"],
    },
    {
      id: "group-실물사진",
      name: "실물사진",
      metaData: {
        referenceCode: "C1S2",
        hierarchy: "시리즈(S)",
        producer: "배추, 도깨비공원",
        productionDate: "2005-2022",
        hierarchyContent: `본 시리즈의 자료는 2005년부터 2022년 사이에 촬영된 도깨비공원 도깨비 실물 사진으로 구성되어 있다. 사진작가 배추가 2022년에 촬영한 도깨비공원의 도깨비들과 그 이전에 촬영된 도깨비들의 사진 모음.`,
        dataCountTemplate: "{value}개의 디지털 사진 파일",
      },
      tags: ["도깨비", "실물사진"],
    },
  ];
  const items: Item[] = [];

  for await (const record of c1s1Parser) {
    console.log(`processing C1S1 ${record.inventoryNo} ${record.name}`);
    items.push({
      id: `illustration-${record.inventoryNo}`,
      name: record.name,
      inventoryNo: record.inventoryNo,
      imageUrl: `https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/${record.illustrationFileName}.webp`,
      resizedImageUrl: `https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/${record.illustrationFileName}.webp`,
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

    if (!record.fileName) {
      continue;
    }

    items.push({
      id: `original-${record.inventoryNo}`,
      inventoryNo: record.inventoryNo,
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
    import { Group, Item } from "@/types/common";

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
