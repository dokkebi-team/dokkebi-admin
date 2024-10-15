import { Group, Item } from "@/types/common";

export const groups: Group[] = [
  {
    id: "group-도깨비",
    name: "도깨비",
    metaData: {
      referenceCode: "C1",
      hierarchy: "컬렉션(C)",
      dataSource: "도깨비공원",
      producer: "도깨비공원",
      productionDate: "2005-2022",
      hierarchyContent:
        "2005년 5월 14일 개장한 도깨비 공원에 살고 있는 1,000여 점의 도깨비들. 제주민속설화를 바탕으로 재탄생 된 다양한 모습의 도깨비는 6,000평 크기의 공원에 종족별로 흩어져 있다. 수작업으로 만들어진 각각의 도깨비는 와이어 패널 공법을 도입하여 철골로 구조를 만든 후 시멘트로 형태를 구체화하였다. 질감은 제주도의 현무암처럼 거칠지만 단단한 느낌을 준다. 도깨비 컬렉션은 작가 이해강이 재생산한 도깨비 일러스트와 사진작가 배추가 찍은 실물 사진 시리즈로 구성되어 있다.",
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
      hierarchyContent:
        "본 시리즈의 자료는 작가 이해강이 작업한 일러스트 파일로 구성되어 있다. 도깨비 공원에 살고 있는 도깨비들의 특징을 살려 651개의 도깨비가 디지털 세상에서 새로운 생명을 얻었다.",
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
      hierarchyContent:
        "본 시리즈의 자료는 2005년부터 2022년 사이에 촬영된 도깨비공원 도깨비 실물 사진으로 구성되어 있다. 사진작가 배추가 2022년에 촬영한 도깨비공원의 도깨비들과 그 이전에 촬영된 도깨비들의 사진 모음.",
      dataCountTemplate: "{value}개의 디지털 사진 파일",
    },
    tags: ["도깨비", "실물사진"],
  },
];
export const items: Item[] = [
  {
    id: "illustration-AD1",
    name: "101 (원오원)",
    inventoryNo: "AD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_01.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_01.webp",
    tags: [
      "도깨비",
      "일러스트",
      "AD1",
      "101 (원오원)",
      "꽃사자",
      "호이스",
      "대형",
    ],
  },
  {
    id: "illustration-AD2",
    name: "타고난네 3총사",
    inventoryNo: "AD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_02.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_02.webp",
    tags: [
      "도깨비",
      "일러스트",
      "AD2",
      "타고난네 3총사",
      "성",
      "타고난 피 종족",
      "호이스",
      "초대형",
    ],
  },
  {
    id: "illustration-AD3",
    name: "깨뽀졸",
    inventoryNo: "AD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_03.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_03.webp",
    tags: ["도깨비", "일러스트", "AD3", "깨뽀졸", "호이스", "초대형"],
  },
  {
    id: "illustration-AD4",
    name: "몬조",
    inventoryNo: "AD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_04.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_04.webp",
    tags: [
      "도깨비",
      "일러스트",
      "AD4",
      "몬조",
      "영혼",
      "그림자 셰르파 부족",
      "호이스",
      "중형",
    ],
  },
  {
    id: "illustration-AD5",
    name: "암굴왕",
    inventoryNo: "AD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_05.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_05.webp",
    tags: ["도깨비", "일러스트", "AD5", "암굴왕", "변종", "호이스", "소형"],
  },
  {
    id: "illustration-BD1",
    name: "피야",
    inventoryNo: "BD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_06.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_06.webp",
    tags: ["도깨비", "일러스트", "BD1", "피야", "유랑비", "제아쿨", "중형"],
  },
  {
    id: "illustration-BD2",
    name: "두비다비",
    inventoryNo: "BD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_07.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_07.webp",
    tags: ["도깨비", "일러스트", "BD2", "두비다비", "제아쿨", "소형"],
  },
  {
    id: "illustration-BD3",
    name: "갓 (GOT)",
    inventoryNo: "BD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_08.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_08.webp",
    tags: ["도깨비", "일러스트", "BD3", "갓 (GOT)", "변종", "제아쿨", "소형"],
  },
  {
    id: "illustration-BD4",
    name: "추누주",
    inventoryNo: "BD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_09.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_09.webp",
    tags: ["도깨비", "일러스트", "BD4", "추누주", "만물", "제아쿨", "대형"],
  },
  {
    id: "illustration-BD5",
    name: "궁그무",
    inventoryNo: "BD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_10.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_10.webp",
    tags: ["도깨비", "일러스트", "BD5", "궁그무", "동물", "제아쿨", "소형"],
  },
  {
    id: "illustration-BD6",
    name: "사라 wihtout ㅇ",
    inventoryNo: "BD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_11.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_11.webp",
    tags: ["도깨비", "일러스트", "BD6", "사라 wihtout ㅇ", "제아쿨", "소형"],
  },
  {
    id: "illustration-BD7",
    name: "오리대감 우리마님",
    inventoryNo: "BD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_12.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_12.webp",
    tags: ["도깨비", "일러스트", "BD7", "오리대감 우리마님", "제아쿨", "소형"],
  },
  {
    id: "illustration-BD8",
    name: "정체불명의 가죽",
    inventoryNo: "BD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_13.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_13.webp",
    tags: [
      "도깨비",
      "일러스트",
      "BD8",
      "정체불명의 가죽",
      "아티팩트",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-BD9",
    name: "미슈",
    inventoryNo: "BD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_14.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_14.webp",
    tags: ["도깨비", "일러스트", "BD9", "미슈", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-BD10",
    name: "청구리",
    inventoryNo: "BD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_15.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_15.webp",
    tags: ["도깨비", "일러스트", "BD10", "청구리", "제아쿨", "소형"],
  },
  {
    id: "illustration-BD11",
    name: "하삼",
    inventoryNo: "BD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_16.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_16.webp",
    tags: ["도깨비", "일러스트", "BD11", "하삼", "만물", "제아쿨", "소형"],
  },
  {
    id: "illustration-BD12",
    name: "네지",
    inventoryNo: "BD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_17.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_17.webp",
    tags: [
      "도깨비",
      "일러스트",
      "BD12",
      "네지",
      "변종(통굴)",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-BD13",
    name: "마기",
    inventoryNo: "BD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_18.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_18.webp",
    tags: [
      "도깨비",
      "일러스트",
      "BD13",
      "마기",
      "변종(통굴)",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-BD14",
    name: "촉수벌레 막내",
    inventoryNo: "BD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_19.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_19.webp",
    tags: ["도깨비", "일러스트", "BD14", "촉수벌레 막내", "제아쿨", "소형"],
  },
  {
    id: "illustration-BD15",
    name: "대갈장군",
    inventoryNo: "BD15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_20.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_20.webp",
    tags: ["도깨비", "일러스트", "BD15", "대갈장군", "제아쿨", "소형"],
  },
  {
    id: "illustration-BD16",
    name: "야나야",
    inventoryNo: "BD16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_21.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_21.webp",
    tags: ["도깨비", "일러스트", "BD16", "야나야", "제아쿨", "중형"],
  },
  {
    id: "illustration-BD17",
    name: "야모야",
    inventoryNo: "BD17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_22.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_22.webp",
    tags: ["도깨비", "일러스트", "BD17", "야모야", "제아쿨", "중형"],
  },
  {
    id: "illustration-BD18",
    name: "수수깡",
    inventoryNo: "BD18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_23.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_23.webp",
    tags: ["도깨비", "일러스트", "BD18", "수수깡", "제아쿨", "중형"],
  },
  {
    id: "illustration-BD19",
    name: "지야불",
    inventoryNo: "BD19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_24.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_24.webp",
    tags: ["도깨비", "일러스트", "BD19", "지야불", "제아쿨", "소형"],
  },
  {
    id: "illustration-BD20",
    name: "오오니 조다느",
    inventoryNo: "BD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_25.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_25.webp",
    tags: [
      "도깨비",
      "일러스트",
      "BD20",
      "오오니 조다느",
      "외래종",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-BD21",
    name: "스믈런의 증기 갑옷",
    inventoryNo: "BD21",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_26.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_26.webp",
    tags: [
      "도깨비",
      "일러스트",
      "BD21",
      "스믈런의 증기 갑옷",
      "아티팩트",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-BD22",
    name: "스믈런",
    inventoryNo: "BD22",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_27.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_27.webp",
    tags: [
      "도깨비",
      "일러스트",
      "BD22",
      "스믈런",
      "영혼",
      "통굴",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-BD23",
    name: "초",
    inventoryNo: "BD23",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_28.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_28.webp",
    tags: ["도깨비", "일러스트", "BD23", "초", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-BD24",
    name: "누각",
    inventoryNo: "BD24",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_29.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_29.webp",
    tags: ["도깨비", "일러스트", "BD24", "누각", "제아쿨", "대형"],
  },
  {
    id: "illustration-CD1",
    name: "버섯 하봉",
    inventoryNo: "CD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_30.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_30.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD1",
      "버섯 하봉",
      "영혼",
      "영혼콜라주",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD2",
    name: "왕도깨비",
    inventoryNo: "CD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_31.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_31.webp",
    tags: ["도깨비", "일러스트", "CD2", "왕도깨비", "제아쿨", "초대형"],
  },
  {
    id: "illustration-CD3",
    name: "여인초 스캇",
    inventoryNo: "CD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_32.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_32.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD3",
      "여인초 스캇",
      "영혼",
      "영혼콜라주",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD4",
    name: "쎄시봉 여인초",
    inventoryNo: "CD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_33.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_33.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD4",
      "쎄시봉 여인초",
      "식물",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD5",
    name: "봄이어미의 돌",
    inventoryNo: "CD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_34.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_34.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD5",
      "봄이어미의 돌",
      "돌",
      "제아쿨",
      "대형",
    ],
  },
  {
    id: "illustration-CD6",
    name: "촉수 벌레 첫째의 돌",
    inventoryNo: "CD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_35.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_35.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD6",
      "촉수 벌레 첫째의 돌",
      "돌",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD7",
    name: "외로운 논백버미",
    inventoryNo: "CD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_36.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_36.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD7",
      "외로운 논백버미",
      "돌",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD8",
    name: "쾌성 도깨비가 버려둔 돌",
    inventoryNo: "CD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_37.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_37.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD8",
      "쾌성 도깨비가 버려둔 돌",
      "식물",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD9",
    name: "도디리도르의 신발",
    inventoryNo: "CD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_38.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_38.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD9",
      "도디리도르의 신발",
      "아티팩트",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD10",
    name: "버크",
    inventoryNo: "CD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_39.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_39.webp",
    tags: ["도깨비", "일러스트", "CD10", "버크", "돌", "제아쿨", "소형"],
  },
  {
    id: "illustration-CD11",
    name: "피지와 길섶나그네의 밀애",
    inventoryNo: "CD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_40.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_40.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD11",
      "피지와 길섶나그네의 밀애",
      "돌",
      "제아쿨",
      "초소형",
    ],
  },
  {
    id: "illustration-CD12",
    name: "이십일장군과 사십장군, 그리고 수수깡의 성기",
    inventoryNo: "CD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_41.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_41.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD12",
      "이십일장군과 사십장군, 그리고 수수깡의 성기",
      "돌",
      "제아쿨",
      "초소형",
    ],
  },
  {
    id: "illustration-CD13",
    name: "버려진 키",
    inventoryNo: "CD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_42.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_42.webp",
    tags: ["도깨비", "일러스트", "CD13", "버려진 키", "돌", "제아쿨", "초소형"],
  },
  {
    id: "illustration-CD14",
    name: "설문대할망의 가면",
    inventoryNo: "CD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_43.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_43.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD14",
      "설문대할망의 가면",
      "돌",
      "아티팩트",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD15",
    name: "머랭햄시",
    inventoryNo: "CD15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_44.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_44.webp",
    tags: ["도깨비", "일러스트", "CD15", "머랭햄시", "돌", "제아쿨", "초소형"],
  },
  {
    id: "illustration-CD16",
    name: "재빠른 마기의 몸",
    inventoryNo: "CD16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_45.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_45.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD16",
      "재빠른 마기의 몸",
      "돌",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD17",
    name: "소원탑",
    inventoryNo: "CD17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_46.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_46.webp",
    tags: ["도깨비", "일러스트", "CD17", "소원탑", "돌", "제아쿨", "초소형"],
  },
  {
    id: "illustration-CD18",
    name: "일몽령",
    inventoryNo: "CD18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_47.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_47.webp",
    tags: ["도깨비", "일러스트", "CD18", "일몽령", "돌", "제아쿨", "초소형"],
  },
  {
    id: "illustration-CD19",
    name: "도디리도르",
    inventoryNo: "CD19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_48.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_48.webp",
    tags: ["도깨비", "일러스트", "CD19", "도디리도르", "제아쿨", "소형"],
  },
  {
    id: "illustration-CD20",
    name: "소굴",
    inventoryNo: "CD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_49.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_49.webp",
    tags: ["도깨비", "일러스트", "CD20", "소굴", "돌", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD21",
    name: "소굴들",
    inventoryNo: "CD21",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_50.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_50.webp",
    tags: ["도깨비", "일러스트", "CD21", "소굴들", "돌", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD22",
    name: "미무무",
    inventoryNo: "CD22",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_51.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_51.webp",
    tags: ["도깨비", "일러스트", "CD22", "미무무", "돌", "제아쿨", "소형"],
  },
  {
    id: "illustration-CD23",
    name: "사상가 ‘다 눗’",
    inventoryNo: "CD23",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_52.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_52.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD23",
      "사상가 ‘다 눗’",
      "반도깨비",
      "제아쿨",
      "초소형",
    ],
  },
  {
    id: "illustration-CD24",
    name: "작은 도깨비 폴",
    inventoryNo: "CD24",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_53.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_53.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD24",
      "작은 도깨비 폴",
      "돌",
      "제아쿨",
      "초소형",
    ],
  },
  {
    id: "illustration-CD25",
    name: "동재",
    inventoryNo: "CD25",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_54.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_54.webp",
    tags: ["도깨비", "일러스트", "CD25", "동재", "돌", "제아쿨", "소형"],
  },
  {
    id: "illustration-CD26",
    name: "통굴",
    inventoryNo: "CD26",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_55.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_55.webp",
    tags: ["도깨비", "일러스트", "CD26", "통굴", "돌", "제아쿨", "초소형"],
  },
  {
    id: "illustration-CD27",
    name: "마왕과 칠십사장군",
    inventoryNo: "CD27",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_56.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_56.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD27",
      "마왕과 칠십사장군",
      "돌",
      "제아쿨",
      "초소형",
    ],
  },
  {
    id: "illustration-CD28",
    name: "비운의 돌",
    inventoryNo: "CD28",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_57.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_57.webp",
    tags: ["도깨비", "일러스트", "CD28", "비운의 돌", "돌", "제아쿨", "초소형"],
  },
  {
    id: "illustration-CD29",
    name: "디졸",
    inventoryNo: "CD29",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_58.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_58.webp",
    tags: ["도깨비", "일러스트", "CD29", "디졸", "제아쿨", "초소형"],
  },
  {
    id: "illustration-CD30",
    name: "몹비탈",
    inventoryNo: "CD30",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_59.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_59.webp",
    tags: ["도깨비", "일러스트", "CD30", "몹비탈", "돌", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD31",
    name: "단두오름",
    inventoryNo: "CD31",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_60.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_60.webp",
    tags: ["도깨비", "일러스트", "CD31", "단두오름", "성", "제아쿨", "초대형"],
  },
  {
    id: "illustration-CD32",
    name: "자질란",
    inventoryNo: "CD32",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_61.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_61.webp",
    tags: ["도깨비", "일러스트", "CD32", "자질란", "돌", "제아쿨", "중형"],
  },
  {
    id: "illustration-CT1",
    name: "도깨비 신 나무",
    inventoryNo: "CT1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_62.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_62.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CT1",
      "도깨비 신 나무",
      "신",
      "제아쿨",
      "대형",
    ],
  },
  {
    id: "illustration-CD33",
    name: "삼백육십사장군",
    inventoryNo: "CD33",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_63.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_63.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD33",
      "삼백육십사장군",
      "돌",
      "느영나영 / 오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD34",
    name: "사선장",
    inventoryNo: "CD34",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_64.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_64.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD34",
      "사선장",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD35",
    name: "빚",
    inventoryNo: "CD35",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_65.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_65.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD35",
      "빚",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD36",
    name: "바거스",
    inventoryNo: "CD36",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_66.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_66.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD36",
      "바거스",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD37",
    name: "느영나영 좌측 탑",
    inventoryNo: "CD37",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_67.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_67.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD37",
      "느영나영 좌측 탑",
      "탑",
      "느영나영",
      "제아쿨",
      "초대형",
    ],
  },
  {
    id: "illustration-CD38",
    name: "에라",
    inventoryNo: "CD38",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_68.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_68.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD38",
      "에라",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD39",
    name: "칫",
    inventoryNo: "CD39",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_69.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_69.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD39",
      "칫",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD40",
    name: "하이킥커",
    inventoryNo: "CD40",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_70.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_70.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD40",
      "하이킥커",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD41",
    name: "헛",
    inventoryNo: "CD41",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_71.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_71.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD41",
      "헛",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD42",
    name: "이짜",
    inventoryNo: "CD42",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_72.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_72.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD42",
      "이짜",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD43",
    name: "파",
    inventoryNo: "CD43",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_73.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_73.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD43",
      "파",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD44",
    name: "티캇",
    inventoryNo: "CD44",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_74.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_74.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD44",
      "티캇",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD45",
    name: "지글",
    inventoryNo: "CD45",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_75.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_75.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD45",
      "지글",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD46",
    name: "때매",
    inventoryNo: "CD46",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_76.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_76.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD46",
      "때매",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD47",
    name: "그레",
    inventoryNo: "CD47",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_77.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_77.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD47",
      "그레",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD48",
    name: "구",
    inventoryNo: "CD48",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_78.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_78.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD48",
      "구",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD49",
    name: "카라리",
    inventoryNo: "CD49",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_79.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_79.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD49",
      "카라리",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD50",
    name: "두붐",
    inventoryNo: "CD50",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_80.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_80.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD50",
      "두붐",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD51",
    name: "느영나영 우측탑",
    inventoryNo: "CD51",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_81.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_81.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD51",
      "느영나영 우측탑",
      "탑",
      "느영나영",
      "제아쿨",
      "초대형",
    ],
  },
  {
    id: "illustration-CD52",
    name: "느영나영 후문",
    inventoryNo: "CD52",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_82.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_82.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD52",
      "느영나영 후문",
      "탑",
      "느영나영",
      "제아쿨",
      "초대형",
    ],
  },
  {
    id: "illustration-CD53",
    name: "옴옴",
    inventoryNo: "CD53",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_83.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_83.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD53",
      "옴옴",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD54",
    name: "앉은뱅이 아잉",
    inventoryNo: "CD54",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_84.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_84.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD54",
      "앉은뱅이 아잉",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD55",
    name: "나디알",
    inventoryNo: "CD55",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_85.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_85.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD55",
      "나디알",
      "영혼",
      "영혼콜라주",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD56",
    name: "짜라르",
    inventoryNo: "CD56",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_86.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_86.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD56",
      "짜라르",
      "돌",
      "느영나영",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD57",
    name: "소칠",
    inventoryNo: "CD57",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_87.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_87.webp",
    tags: ["도깨비", "일러스트", "CD57", "소칠", "동물", "제아쿨", "소형"],
  },
  {
    id: "illustration-CD58",
    name: "누군가의 머리였던 네모난, 인자한 얼굴의 탕굴",
    inventoryNo: "CD58",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_88.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_88.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD58",
      "누군가의 머리였던 네모난, 인자한 얼굴의 탕굴",
      "돌",
      "통굴",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD59",
    name: "누군가의 머리였던 반원 통굴",
    inventoryNo: "CD59",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_89.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_89.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD59",
      "누군가의 머리였던 반원 통굴",
      "돌",
      "통굴",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD60",
    name: "누군가의 머리였던 네모난, 후회 가득한 얼굴의 통굴",
    inventoryNo: "CD60",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_90.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_90.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD60",
      "누군가의 머리였던 네모난, 후회 가득한 얼굴의 통굴",
      "돌",
      "통굴",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD61",
    name: "요나프",
    inventoryNo: "CD61",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_91.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_91.webp",
    tags: ["도깨비", "일러스트", "CD61", "요나프", "돌", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD62",
    name: "누군가의 머리였던 분노 가득한 얼굴의 통굴",
    inventoryNo: "CD62",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_92.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_92.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD62",
      "누군가의 머리였던 분노 가득한 얼굴의 통굴",
      "돌",
      "통굴",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD63",
    name: "허수 느영나영",
    inventoryNo: "CD63",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_93.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_93.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD63",
      "허수 느영나영",
      "돌",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD64",
    name: "잭(CD84)의 통굴",
    inventoryNo: "CD64",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_94.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_94.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD64",
      "잭(CD84)의 통굴",
      "돌",
      "통굴",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD65",
    name: "케소르(CD83)의 돌이된 육신(CD65)\r\n",
    inventoryNo: "CD65",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_95.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_95.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD65",
      "케소르(CD83)의 돌이된 육신(CD65)",
      "돌",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD66",
    name: "잘못 참수한 나머지 두번 참수된 뾰족머리 통굴",
    inventoryNo: "CD66",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_96.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_96.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD66",
      "잘못 참수한 나머지 두번 참수된 뾰족머리 통굴",
      "돌",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD67",
    name: "오링",
    inventoryNo: "CD67",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_97.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_97.webp",
    tags: ["도깨비", "일러스트", "CD67", "오링", "제아쿨", "소형"],
  },
  {
    id: "illustration-CD68",
    name: "칵투스",
    inventoryNo: "CD68",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_98.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_98.webp",
    tags: ["도깨비", "일러스트", "CD68", "칵투스", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD69",
    name: "가리오",
    inventoryNo: "CD69",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_99.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_99.webp",
    tags: ["도깨비", "일러스트", "CD69", "가리오", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD70",
    name: "",
    inventoryNo: "CD70",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_100.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_100.webp",
    tags: ["도깨비", "일러스트", "CD70", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD71",
    name: "",
    inventoryNo: "CD71",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_101.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_101.webp",
    tags: ["도깨비", "일러스트", "CD71", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD72",
    name: "",
    inventoryNo: "CD72",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_102.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_102.webp",
    tags: ["도깨비", "일러스트", "CD72", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD73",
    name: "",
    inventoryNo: "CD73",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_103.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_103.webp",
    tags: ["도깨비", "일러스트", "CD73", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD74",
    name: "",
    inventoryNo: "CD74",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_104.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_104.webp",
    tags: ["도깨비", "일러스트", "CD74", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD75",
    name: "",
    inventoryNo: "CD75",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_105.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_105.webp",
    tags: ["도깨비", "일러스트", "CD75", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD76",
    name: "",
    inventoryNo: "CD76",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_106.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_106.webp",
    tags: ["도깨비", "일러스트", "CD76", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD77",
    name: "제스트",
    inventoryNo: "CD77",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_107.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_107.webp",
    tags: ["도깨비", "일러스트", "CD77", "제스트", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD78",
    name: "",
    inventoryNo: "CD78",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_108.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_108.webp",
    tags: ["도깨비", "일러스트", "CD78", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD79",
    name: "",
    inventoryNo: "CD79",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_109.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_109.webp",
    tags: ["도깨비", "일러스트", "CD79", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD80",
    name: "",
    inventoryNo: "CD80",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_110.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_110.webp",
    tags: ["도깨비", "일러스트", "CD80", "동물", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD81",
    name: "",
    inventoryNo: "CD81",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_111.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_111.webp",
    tags: ["도깨비", "일러스트", "CD81", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD82",
    name: "",
    inventoryNo: "CD82",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_112.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_112.webp",
    tags: ["도깨비", "일러스트", "CD82", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD83",
    name: "케소르",
    inventoryNo: "CD83",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_113.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_113.webp",
    tags: ["도깨비", "일러스트", "CD83", "케소르", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD84",
    name: "잭",
    inventoryNo: "CD84",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_114.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_114.webp",
    tags: ["도깨비", "일러스트", "CD84", "잭", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD85",
    name: "",
    inventoryNo: "CD85",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_115.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_115.webp",
    tags: ["도깨비", "일러스트", "CD85", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD86",
    name: "",
    inventoryNo: "CD86",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_116.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_116.webp",
    tags: ["도깨비", "일러스트", "CD86", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD87",
    name: "스릉",
    inventoryNo: "CD87",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_117.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_117.webp",
    tags: ["도깨비", "일러스트", "CD87", "스릉", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD88",
    name: "",
    inventoryNo: "CD88",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_118.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_118.webp",
    tags: ["도깨비", "일러스트", "CD88", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD89",
    name: "",
    inventoryNo: "CD89",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_119.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_119.webp",
    tags: ["도깨비", "일러스트", "CD89", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD90",
    name: "세례안내자 ‘세세’",
    inventoryNo: "CD90",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_120.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_120.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD90",
      "세례안내자 ‘세세’",
      "도깨비 / 영혼",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-CD91",
    name: "키피",
    inventoryNo: "CD91",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_121.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_121.webp",
    tags: ["도깨비", "일러스트", "CD91", "키피", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-CD92",
    name: "쎄시봉 유카",
    inventoryNo: "CD92",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_122.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_122.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD92",
      "쎄시봉 유카",
      "영혼",
      "영혼콜라주",
      "제아쿨",
      "대형",
    ],
  },
  {
    id: "illustration-CD93",
    name: "쎄시봉 용설란",
    inventoryNo: "CD93",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_123.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_123.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD93",
      "쎄시봉 용설란",
      "식물",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD94",
    name: "쎄시봉 칵투스 (CD94)\r\n",
    inventoryNo: "CD94",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_124.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_124.webp",
    tags: [
      "도깨비",
      "일러스트",
      "CD94",
      "쎄시봉 칵투스 (CD94)",
      "식물",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-CD95",
    name: "연못깨비",
    inventoryNo: "CD95",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_125.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_125.webp",
    tags: ["도깨비", "일러스트", "CD95", "연못깨비", "정령", "제아쿨", "대형"],
  },
  {
    id: "illustration-DD1",
    name: "투씨-아",
    inventoryNo: "DD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_126.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_126.webp",
    tags: [
      "도깨비",
      "일러스트",
      "DD1",
      "투씨-아",
      "가위 종족",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-DD2",
    name: "알껍데기",
    inventoryNo: "DD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_127.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_127.webp",
    tags: ["도깨비", "일러스트", "DD2", "알껍데기", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD3",
    name: "옐로우 아이",
    inventoryNo: "DD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_128.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_128.webp",
    tags: [
      "도깨비",
      "일러스트",
      "DD3",
      "옐로우 아이",
      "영혼",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-DD4",
    name: "피의 골렘",
    inventoryNo: "DD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_129.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_129.webp",
    tags: ["도깨비", "일러스트", "DD4", "피의 골렘", "제아쿨", "중형"],
  },
  {
    id: "illustration-DD5",
    name: "체솟",
    inventoryNo: "DD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_130.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_130.webp",
    tags: ["도깨비", "일러스트", "DD5", "체솟", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD6",
    name: "디오스",
    inventoryNo: "DD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_131.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_131.webp",
    tags: ["도깨비", "일러스트", "DD6", "디오스", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-DD7",
    name: "코랏",
    inventoryNo: "DD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_132.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_132.webp",
    tags: ["도깨비", "일러스트", "DD7", "코랏", "제아쿨", "중형"],
  },
  {
    id: "illustration-DD8",
    name: "칼리스퀘어",
    inventoryNo: "DD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_133.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_133.webp",
    tags: ["도깨비", "일러스트", "DD8", "칼리스퀘어", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD9",
    name: "칼리펭퀸",
    inventoryNo: "DD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_134.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_134.webp",
    tags: ["도깨비", "일러스트", "DD9", "칼리펭퀸", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD10",
    name: "야옹이",
    inventoryNo: "DD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_135.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_135.webp",
    tags: ["도깨비", "일러스트", "DD10", "야옹이", "동물", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD11",
    name: "혹부리 돼지",
    inventoryNo: "DD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_136.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_136.webp",
    tags: [
      "도깨비",
      "일러스트",
      "DD11",
      "혹부리 돼지",
      "동물",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "illustration-DD12",
    name: "수지르라",
    inventoryNo: "DD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_137.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_137.webp",
    tags: ["도깨비", "일러스트", "DD12", "수지르라", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD13",
    name: "ROTH",
    inventoryNo: "DD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_138.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_138.webp",
    tags: ["도깨비", "일러스트", "DD13", "ROTH", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD14",
    name: "아리다",
    inventoryNo: "DD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_139.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_139.webp",
    tags: ["도깨비", "일러스트", "DD14", "아리다", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD15",
    name: "도깨비 신부",
    inventoryNo: "DD15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_140.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_140.webp",
    tags: ["도깨비", "일러스트", "DD15", "도깨비 신부", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD16",
    name: "도깨비 신랑",
    inventoryNo: "DD16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_141.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_141.webp",
    tags: ["도깨비", "일러스트", "DD16", "도깨비 신랑", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD17",
    name: "쬬마숑",
    inventoryNo: "DD17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_142.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_142.webp",
    tags: ["도깨비", "일러스트", "DD17", "쬬마숑", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD18",
    name: "헨&텔",
    inventoryNo: "DD18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_143.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_143.webp",
    tags: ["도깨비", "일러스트", "DD18", "헨&텔", "제아쿨", "소형"],
  },
  {
    id: "illustration-DD19",
    name: "돈잘레말레",
    inventoryNo: "DD19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_144.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_144.webp",
    tags: ["도깨비", "일러스트", "DD19", "돈잘레말레", "제아쿨", "중형"],
  },
  {
    id: "illustration-DD20",
    name: "아이셔",
    inventoryNo: "DD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_145.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_145.webp",
    tags: ["도깨비", "일러스트", "DD20", "아이셔", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-DD21",
    name: "그려진 정승",
    inventoryNo: "DD21",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_146.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_146.webp",
    tags: [
      "도깨비",
      "일러스트",
      "DD21",
      "그려진 정승",
      "영혼",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-DD22",
    name: "파직 코뿔손",
    inventoryNo: "DD22",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_147.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_147.webp",
    tags: [
      "도깨비",
      "일러스트",
      "DD22",
      "파직 코뿔손",
      "동물",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-DD23",
    name: "느타리",
    inventoryNo: "DD23",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_148.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_148.webp",
    tags: ["도깨비", "일러스트", "DD23", "느타리", "제아쿨", "중형"],
  },
  {
    id: "illustration-DD24",
    name: "매드리호",
    inventoryNo: "DD24",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_149.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_149.webp",
    tags: ["도깨비", "일러스트", "DD24", "매드리호", "식물", "제아쿨", "중형"],
  },
  {
    id: "illustration-DD25",
    name: "이정퓨",
    inventoryNo: "DD25",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_150.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_150.webp",
    tags: ["도깨비", "일러스트", "DD25", "이정퓨", "영혼", "제아쿨", "중형"],
  },
  {
    id: "illustration-ED1",
    name: "원만부",
    inventoryNo: "ED1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_151.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_151.webp",
    tags: ["도깨비", "일러스트", "ED1", "원만부", "탑", "호이스트", "초대형"],
  },
  {
    id: "illustration-ED2",
    name: "앵두깨비",
    inventoryNo: "ED2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_152.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_152.webp",
    tags: ["도깨비", "일러스트", "ED2", "앵두깨비", "호이스트", "초대형"],
  },
  {
    id: "illustration-ED3",
    name: "피의 가면 ‘황숭이깨비’",
    inventoryNo: "ED3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_153.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_153.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED3",
      "피의 가면 ‘황숭이깨비’",
      "숭이깨비 종족",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "illustration-ED4",
    name: "토토속 형제 발모예르",
    inventoryNo: "ED4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_154.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_154.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED4",
      "토토속 형제 발모예르",
      "귀속 도깨비 + 숭이깨비 종족",
      "호이스트",
      "대형",
    ],
  },
  {
    id: "illustration-ED5",
    name: "토토속 형제 발앍락",
    inventoryNo: "ED5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_155.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_155.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED5",
      "토토속 형제 발앍락",
      "귀속 도깨비 + 정령(천지인 돌)",
      "호이스트",
      "대형",
    ],
  },
  {
    id: "illustration-ED6",
    name: "흰수염 숭이깨비",
    inventoryNo: "ED6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_156.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_156.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED6",
      "흰수염 숭이깨비",
      "숭이깨비 종족",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "illustration-ED7",
    name: "붉은 얼굴 숭이깨비",
    inventoryNo: "ED7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_157.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_157.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED7",
      "붉은 얼굴 숭이깨비",
      "숭이깨비 종족",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "illustration-ED8",
    name: "휠나리",
    inventoryNo: "ED8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_158.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_158.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED8",
      "휠나리",
      "영혼",
      "영혼콜라주",
      "호이스트",
      "초대형",
    ],
  },
  {
    id: "illustration-ED9",
    name: "도깨비 성 aka. 돌무덤",
    inventoryNo: "ED9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_159.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_159.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED9",
      "도깨비 성 aka. 돌무덤",
      "성",
      "돌",
      "호이스트와 제아쿨의 경계",
      "초대형",
    ],
  },
  {
    id: "illustration-ED10",
    name: "대롱깨비",
    inventoryNo: "ED10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_160.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_160.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED10",
      "대롱깨비",
      "영혼",
      "영혼콜라주",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "illustration-ED11",
    name: "막이깨비",
    inventoryNo: "ED11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_161.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_161.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED11",
      "막이깨비",
      "영혼",
      "영혼콜라주",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "illustration-ED12",
    name: "영혼꼴라주 도깨비불",
    inventoryNo: "ED12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_162.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_162.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED12",
      "영혼꼴라주 도깨비불",
      "영혼",
      "영혼콜라주",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "illustration-ED13",
    name: "털복숭이 숭이깨비",
    inventoryNo: "ED13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_163.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_163.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED13",
      "털복숭이 숭이깨비",
      "숭이깨비 or 털복숭이 종족",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "illustration-ED14",
    name: "옥색 얼굴 아기 숭이깨비",
    inventoryNo: "ED14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_164.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_164.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED14",
      "옥색 얼굴 아기 숭이깨비",
      "숭이깨비 종족",
      "호이스트",
      "소형",
    ],
  },
  {
    id: "illustration-ED15",
    name: "소년별 숭이깨비",
    inventoryNo: "ED15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_165.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_165.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED15",
      "소년별 숭이깨비",
      "숭이깨비 종족",
      "호이스트",
      "소형",
    ],
  },
  {
    id: "illustration-ED16",
    name: "종알종알",
    inventoryNo: "ED16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_166.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_166.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED16",
      "종알종알",
      "영혼",
      "영혼콜라주",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "illustration-ED17",
    name: "옥동자 숭이깨비",
    inventoryNo: "ED17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_167.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_167.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED17",
      "옥동자 숭이깨비",
      "숭이깨비 종족",
      "호이스트",
      "소형",
    ],
  },
  {
    id: "illustration-ED18",
    name: "영혼콜라주 정승",
    inventoryNo: "ED18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_168.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_168.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED18",
      "영혼콜라주 정승",
      "영혼",
      "영혼콜라주",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "illustration-ED19",
    name: "노란반점 파란 숭이깨비",
    inventoryNo: "ED19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_169.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_169.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED19",
      "노란반점 파란 숭이깨비",
      "숭이깨비 종족",
      "호이스트",
      "소형",
    ],
  },
  {
    id: "illustration-ED20",
    name: "옥색 얼굴 소년 숭이깨비",
    inventoryNo: "ED20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_170.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_170.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED20",
      "옥색 얼굴 소년 숭이깨비",
      "숭이깨비 종족",
      "호이스트",
      "소형",
    ],
  },
  {
    id: "illustration-ED21",
    name: "붉은 반점 숭이깨비",
    inventoryNo: "ED21",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_171.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_171.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED21",
      "붉은 반점 숭이깨비",
      "숭이깨비 종족",
      "호이스트",
      "소형",
    ],
  },
  {
    id: "illustration-ED22",
    name: "밀레니엄 탑",
    inventoryNo: "ED22",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_172.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_172.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ED22",
      "밀레니엄 탑",
      "탑",
      "돌",
      "제아쿨",
      "대형",
    ],
  },
  {
    id: "illustration-FD1",
    name: "",
    inventoryNo: "FD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_173.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_173.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD1",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD2",
    name: "",
    inventoryNo: "FD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_174.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_174.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD2",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD3",
    name: "",
    inventoryNo: "FD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_175.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_175.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD3",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD4",
    name: "",
    inventoryNo: "FD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_176.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_176.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD4",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD5",
    name: "",
    inventoryNo: "FD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_177.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_177.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD5",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD6",
    name: "",
    inventoryNo: "FD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_178.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_178.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD6",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD7",
    name: "",
    inventoryNo: "FD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_179.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_179.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD7",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD8",
    name: "",
    inventoryNo: "FD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_180.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_180.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD8",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD9",
    name: "",
    inventoryNo: "FD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_181.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_181.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD9",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD10",
    name: "",
    inventoryNo: "FD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_182.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_182.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD10",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD11",
    name: "",
    inventoryNo: "FD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_183.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_183.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD11",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD12",
    name: "",
    inventoryNo: "FD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_184.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_184.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD12",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD13",
    name: "",
    inventoryNo: "FD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_185.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_185.webp",
    tags: [
      "도깨비",
      "일러스트",
      "FD13",
      "영혼",
      "국기",
      "플래그십 아일랜드",
      "소형",
    ],
  },
  {
    id: "illustration-FD14",
    name: "장고깨비",
    inventoryNo: "FD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_186.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_186.webp",
    tags: ["도깨비", "일러스트", "FD14", "장고깨비", "만물", "선래흘", "중형"],
  },
  {
    id: "illustration-FD15",
    name: "",
    inventoryNo: "FD15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_187.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_187.webp",
    tags: ["도깨비", "일러스트", "FD15", "돌", "선래흘"],
  },
  {
    id: "illustration-FD16",
    name: "",
    inventoryNo: "FD16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_188.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_188.webp",
    tags: ["도깨비", "일러스트", "FD16", "돌", "선래흘"],
  },
  {
    id: "illustration-FD17",
    name: "",
    inventoryNo: "FD17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_189.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_189.webp",
    tags: ["도깨비", "일러스트", "FD17", "돌", "선래흘"],
  },
  {
    id: "illustration-FD18",
    name: "",
    inventoryNo: "FD18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_190.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_190.webp",
    tags: ["도깨비", "일러스트", "FD18", "돌", "선래흘"],
  },
  {
    id: "illustration-FD19",
    name: "",
    inventoryNo: "FD19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_191.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_191.webp",
    tags: ["도깨비", "일러스트", "FD19", "도깨비 / 돌", "선래흘"],
  },
  {
    id: "illustration-FD20",
    name: "모자장수 옥예티",
    inventoryNo: "FD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_192.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_192.webp",
    tags: ["도깨비", "일러스트", "FD20", "모자장수 옥예티", "선래흘", "소형"],
  },
  {
    id: "illustration-GD1",
    name: "포크레인",
    inventoryNo: "GD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_193.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_193.webp",
    tags: [
      "도깨비",
      "일러스트",
      "GD1",
      "포크레인",
      "만물",
      "아티팩트",
      "카리스",
      "대형",
    ],
  },
  {
    id: "illustration-GD2",
    name: "",
    inventoryNo: "GD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_194.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_194.webp",
    tags: ["도깨비", "일러스트", "GD2", "만물", "카리스"],
  },
  {
    id: "illustration-GD3",
    name: "",
    inventoryNo: "GD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_195.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_195.webp",
    tags: ["도깨비", "일러스트", "GD3", "만물", "카리스"],
  },
  {
    id: "illustration-GD4",
    name: "",
    inventoryNo: "GD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_196.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_196.webp",
    tags: ["도깨비", "일러스트", "GD4", "만물", "카리스"],
  },
  {
    id: "illustration-GD5",
    name: "",
    inventoryNo: "GD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_197.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_197.webp",
    tags: ["도깨비", "일러스트", "GD5", "만물", "카리스"],
  },
  {
    id: "illustration-GD6",
    name: "",
    inventoryNo: "GD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_198.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_198.webp",
    tags: ["도깨비", "일러스트", "GD6", "만물", "카리스"],
  },
  {
    id: "illustration-GD7",
    name: "",
    inventoryNo: "GD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_199.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_199.webp",
    tags: ["도깨비", "일러스트", "GD7", "만물", "카리스"],
  },
  {
    id: "illustration-GD8",
    name: "",
    inventoryNo: "GD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_200.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_200.webp",
    tags: ["도깨비", "일러스트", "GD8", "만물", "카리스"],
  },
  {
    id: "illustration-GD9",
    name: "",
    inventoryNo: "GD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_201.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_201.webp",
    tags: ["도깨비", "일러스트", "GD9", "만물", "카리스"],
  },
  {
    id: "illustration-GD10",
    name: "",
    inventoryNo: "GD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_202.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_202.webp",
    tags: ["도깨비", "일러스트", "GD10", "만물", "카리스"],
  },
  {
    id: "illustration-GD11",
    name: "",
    inventoryNo: "GD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_203.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_203.webp",
    tags: ["도깨비", "일러스트", "GD11", "만물", "카리스"],
  },
  {
    id: "illustration-GD12",
    name: "",
    inventoryNo: "GD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_204.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_204.webp",
    tags: ["도깨비", "일러스트", "GD12", "만물", "카리스"],
  },
  {
    id: "illustration-GD13",
    name: "",
    inventoryNo: "GD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_205.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_205.webp",
    tags: ["도깨비", "일러스트", "GD13", "만물", "카리스"],
  },
  {
    id: "illustration-GD14",
    name: "",
    inventoryNo: "GD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_206.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_206.webp",
    tags: ["도깨비", "일러스트", "GD14", "만물", "카리스"],
  },
  {
    id: "illustration-GD15",
    name: "",
    inventoryNo: "GD15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_207.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_207.webp",
    tags: ["도깨비", "일러스트", "GD15", "만물", "카리스"],
  },
  {
    id: "illustration-GD16",
    name: "",
    inventoryNo: "GD16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_208.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_208.webp",
    tags: ["도깨비", "일러스트", "GD16", "만물", "카리스"],
  },
  {
    id: "illustration-GD17",
    name: "",
    inventoryNo: "GD17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_209.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_209.webp",
    tags: ["도깨비", "일러스트", "GD17", "만물", "카리스"],
  },
  {
    id: "illustration-GD18",
    name: "",
    inventoryNo: "GD18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_210.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_210.webp",
    tags: ["도깨비", "일러스트", "GD18", "만물", "카리스"],
  },
  {
    id: "illustration-GD19",
    name: "",
    inventoryNo: "GD19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_211.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_211.webp",
    tags: ["도깨비", "일러스트", "GD19", "만물", "카리스"],
  },
  {
    id: "illustration-GD20",
    name: "",
    inventoryNo: "GD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_212.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_212.webp",
    tags: ["도깨비", "일러스트", "GD20", "만물", "카리스"],
  },
  {
    id: "illustration-GD21",
    name: "",
    inventoryNo: "GD21",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_213.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_213.webp",
    tags: ["도깨비", "일러스트", "GD21", "만물", "카리스"],
  },
  {
    id: "illustration-GD22",
    name: "",
    inventoryNo: "GD22",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_214.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_214.webp",
    tags: ["도깨비", "일러스트", "GD22", "만물", "카리스"],
  },
  {
    id: "illustration-GD23",
    name: "",
    inventoryNo: "GD23",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_215.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_215.webp",
    tags: ["도깨비", "일러스트", "GD23", "만물", "카리스"],
  },
  {
    id: "illustration-GD24",
    name: "",
    inventoryNo: "GD24",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_216.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_216.webp",
    tags: ["도깨비", "일러스트", "GD24", "만물", "카리스"],
  },
  {
    id: "illustration-GD25",
    name: "",
    inventoryNo: "GD25",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_217.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_217.webp",
    tags: ["도깨비", "일러스트", "GD25", "만물", "카리스"],
  },
  {
    id: "illustration-GD26",
    name: "",
    inventoryNo: "GD26",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_218.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_218.webp",
    tags: ["도깨비", "일러스트", "GD26", "만물", "카리스"],
  },
  {
    id: "illustration-GD27",
    name: "",
    inventoryNo: "GD27",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_219.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_219.webp",
    tags: ["도깨비", "일러스트", "GD27", "만물", "카리스"],
  },
  {
    id: "illustration-GD28",
    name: "",
    inventoryNo: "GD28",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_220.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_220.webp",
    tags: ["도깨비", "일러스트", "GD28", "만물", "카리스"],
  },
  {
    id: "illustration-GD29",
    name: "",
    inventoryNo: "GD29",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_221.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_221.webp",
    tags: ["도깨비", "일러스트", "GD29", "만물", "카리스"],
  },
  {
    id: "illustration-GD30",
    name: "",
    inventoryNo: "GD30",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_222.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_222.webp",
    tags: ["도깨비", "일러스트", "GD30", "만물", "카리스"],
  },
  {
    id: "illustration-GD31",
    name: "",
    inventoryNo: "GD31",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_223.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_223.webp",
    tags: ["도깨비", "일러스트", "GD31", "만물", "카리스"],
  },
  {
    id: "illustration-GD32",
    name: "",
    inventoryNo: "GD32",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_224.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_224.webp",
    tags: ["도깨비", "일러스트", "GD32", "만물", "카리스"],
  },
  {
    id: "illustration-GD33",
    name: "",
    inventoryNo: "GD33",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_225.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_225.webp",
    tags: ["도깨비", "일러스트", "GD33", "탑", "만물", "카리스"],
  },
  {
    id: "illustration-HD1",
    name: "흑정승",
    inventoryNo: "HD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_226.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_226.webp",
    tags: ["도깨비", "일러스트", "HD1", "흑정승", "으시시 - 동쪽 구역", "대형"],
  },
  {
    id: "illustration-HD2",
    name: "음욕",
    inventoryNo: "HD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_227.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_227.webp",
    tags: [
      "도깨비",
      "일러스트",
      "HD2",
      "음욕",
      "영혼",
      "으시시 - 동쪽 구역",
      "대형",
    ],
  },
  {
    id: "illustration-HD3",
    name: "질투",
    inventoryNo: "HD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_228.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_228.webp",
    tags: [
      "도깨비",
      "일러스트",
      "HD3",
      "질투",
      "영혼",
      "으시시 - 동쪽 구역",
      "대형",
    ],
  },
  {
    id: "illustration-HD4",
    name: "으시시 뒷문 aka. 지옥문",
    inventoryNo: "HD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_229.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_229.webp",
    tags: [
      "도깨비",
      "일러스트",
      "HD4",
      "으시시 뒷문 aka. 지옥문",
      "영혼",
      "으시시 - 동쪽 구역",
      "대형",
    ],
  },
  {
    id: "illustration-HD5",
    name: "탐욕",
    inventoryNo: "HD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_230.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_230.webp",
    tags: [
      "도깨비",
      "일러스트",
      "HD5",
      "탐욕",
      "영혼",
      "으시시 - 동쪽 구역",
      "대형",
    ],
  },
  {
    id: "illustration-HD6",
    name: "분노",
    inventoryNo: "HD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_231.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_231.webp",
    tags: [
      "도깨비",
      "일러스트",
      "HD6",
      "분노",
      "영혼",
      "으시시 - 동쪽 구역",
      "대형",
    ],
  },
  {
    id: "illustration-HD7",
    name: "나태",
    inventoryNo: "HD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_232.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_232.webp",
    tags: [
      "도깨비",
      "일러스트",
      "HD7",
      "나태",
      "영혼",
      "으시시 - 동쪽 구역",
      "대형",
    ],
  },
  {
    id: "illustration-HD8",
    name: "음욕의 꼬리",
    inventoryNo: "HD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_233.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_233.webp",
    tags: [
      "도깨비",
      "일러스트",
      "HD8",
      "음욕의 꼬리",
      "영혼",
      "으시시 - 동쪽 구역",
      "소형",
    ],
  },
  {
    id: "illustration-HD9",
    name: "교만",
    inventoryNo: "HD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_234.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_234.webp",
    tags: [
      "도깨비",
      "일러스트",
      "HD9",
      "교만",
      "영혼",
      "으시시 - 동쪽 구역",
      "대형",
    ],
  },
  {
    id: "illustration-HD10",
    name: "인색",
    inventoryNo: "HD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_235.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_235.webp",
    tags: [
      "도깨비",
      "일러스트",
      "HD10",
      "인색",
      "영혼",
      "으시시 - 동쪽 구역",
      "대형",
    ],
  },
  {
    id: "illustration-ID1",
    name: "도리스와 와리스",
    inventoryNo: "ID1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_236.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_236.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ID1",
      "도리스와 와리스",
      "변종(통굴)",
      "선래흘",
      "소형",
    ],
  },
  {
    id: "illustration-ID2",
    name: "무언성",
    inventoryNo: "ID2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_237.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_237.webp",
    tags: ["도깨비", "일러스트", "ID2", "무언성", "성", "선래흘", "초대형"],
  },
  {
    id: "illustration-ID3",
    name: "두둠두",
    inventoryNo: "ID3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_238.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_238.webp",
    tags: ["도깨비", "일러스트", "ID3", "두둠두", "쾌성", "소형"],
  },
  {
    id: "illustration-ID4",
    name: "캐오오",
    inventoryNo: "ID4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_239.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_239.webp",
    tags: ["도깨비", "일러스트", "ID4", "캐오오", "쾌성", "소형"],
  },
  {
    id: "illustration-ID5",
    name: "북칙타",
    inventoryNo: "ID5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_240.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_240.webp",
    tags: ["도깨비", "일러스트", "ID5", "북칙타", "쾌성", "소형"],
  },
  {
    id: "illustration-ID6",
    name: "툽 aka 거대아르미",
    inventoryNo: "ID6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_241.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_241.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ID6",
      "툽 aka 거대아르미",
      "동물",
      "선래흘",
      "대형",
    ],
  },
  {
    id: "illustration-ID7",
    name: "줄기사자",
    inventoryNo: "ID7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_242.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_242.webp",
    tags: ["도깨비", "일러스트", "ID7", "줄기사자", "동물", "선래흘", "대형"],
  },
  {
    id: "illustration-ID8",
    name: "너무다나무",
    inventoryNo: "ID8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_243.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_243.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ID8",
      "너무다나무",
      "변종(통굴)",
      "선래흘",
      "중형",
    ],
  },
  {
    id: "illustration-ID9",
    name: "삼몽령",
    inventoryNo: "ID9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_244.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_244.webp",
    tags: ["도깨비", "일러스트", "ID9", "삼몽령", "영혼", "해인경", "초대형"],
  },
  {
    id: "illustration-ID10",
    name: "잎피리와 잎피리피리와 잎피리피리피리",
    inventoryNo: "ID10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_245.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_245.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ID10",
      "잎피리와 잎피리피리와 잎피리피리피리",
      "유랑비",
      "해인경",
      "대형",
    ],
  },
  {
    id: "illustration-ID11",
    name: "그래그리오 사형제",
    inventoryNo: "ID11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_246.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_246.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ID11",
      "그래그리오 사형제",
      "유랑비",
      "해인경",
      "대형, 소형",
    ],
  },
  {
    id: "illustration-JD1",
    name: "허수허수깨비",
    inventoryNo: "JD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_247.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_247.webp",
    tags: ["도깨비", "일러스트", "JD1", "허수허수깨비", "?", "으시시"],
  },
  {
    id: "illustration-JD2",
    name: "으시시",
    inventoryNo: "JD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_248.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_248.webp",
    tags: ["도깨비", "일러스트", "JD2", "으시시", "성", "초대형"],
  },
  {
    id: "illustration-JD3",
    name: "어둑시니",
    inventoryNo: "JD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_249.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_249.webp",
    tags: ["도깨비", "일러스트", "JD3", "어둑시니", "으시시", "소형~초대형"],
  },
  {
    id: "illustration-KD1",
    name: "깨슈타인타워",
    inventoryNo: "KD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_250.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_250.webp",
    tags: ["도깨비", "일러스트", "KD1", "깨슈타인타워", "성", "미치", "초대형"],
  },
  {
    id: "illustration-KD2",
    name: "으시시 옆문",
    inventoryNo: "KD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_251.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_251.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD2",
      "으시시 옆문",
      "미치와 으시시의 경계",
      "대형",
    ],
  },
  {
    id: "illustration-KD3",
    name: "집씨",
    inventoryNo: "KD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_252.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_252.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD3",
      "집씨",
      "털복숭이 종족",
      "미치",
      "소형",
    ],
  },
  {
    id: "illustration-KD4",
    name: "보터링",
    inventoryNo: "KD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_253.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_253.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD4",
      "보터링",
      "털복숭이 종족",
      "미치",
      "소형",
    ],
  },
  {
    id: "illustration-KD5",
    name: "존프르숭이",
    inventoryNo: "KD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_254.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_254.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD5",
      "존프르숭이",
      "숭이깨비 종족",
      "미치",
      "소형",
    ],
  },
  {
    id: "illustration-KD6",
    name: "난파 숭이깨비",
    inventoryNo: "KD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_255.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_255.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD6",
      "난파 숭이깨비",
      "숭이깨비 종족",
      "미치",
      "중형",
    ],
  },
  {
    id: "illustration-KD7",
    name: "고주망태 숭이깨비",
    inventoryNo: "KD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_256.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_256.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD7",
      "고주망태 숭이깨비",
      "숭이깨비 종족",
      "미치",
      "중형",
    ],
  },
  {
    id: "illustration-KD8",
    name: "복면 숭이깨비",
    inventoryNo: "KD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_257.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_257.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD8",
      "복면 숭이깨비",
      "숭이깨비 종족",
      "미치",
      "중형",
    ],
  },
  {
    id: "illustration-KD9",
    name: "동구미",
    inventoryNo: "KD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_258.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_258.webp",
    tags: ["도깨비", "일러스트", "KD9", "동구미", "미치", "중형"],
  },
  {
    id: "illustration-KD10",
    name: "끄라띠와 꼬라삐",
    inventoryNo: "KD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_259.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_259.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD10",
      "끄라띠와 꼬라삐",
      "털복숭이 종족",
      "미치",
      "중형, 소형",
    ],
  },
  {
    id: "illustration-KD11",
    name: "키루",
    inventoryNo: "KD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_260.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_260.webp",
    tags: ["도깨비", "일러스트", "KD11", "키루", "영혼", "미치", "중형"],
  },
  {
    id: "illustration-KD12",
    name: "시루",
    inventoryNo: "KD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_261.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_261.webp",
    tags: ["도깨비", "일러스트", "KD12", "시루", "영혼", "미치", "중형"],
  },
  {
    id: "illustration-KD13",
    name: "지루",
    inventoryNo: "KD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_262.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_262.webp",
    tags: ["도깨비", "일러스트", "KD13", "지루", "영혼", "미치", "중형"],
  },
  {
    id: "illustration-KD14",
    name: "도리, 스리, 션",
    inventoryNo: "KD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_263.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_263.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD14",
      "도리, 스리, 션",
      "털복숭이 종족",
      "미치",
      "중형, 중형, 소형",
    ],
  },
  {
    id: "illustration-KD15",
    name: "울빠미",
    inventoryNo: "KD15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_264.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_264.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD15",
      "울빠미",
      "털복숭이 종족",
      "미치",
      "중형",
    ],
  },
  {
    id: "illustration-KD16",
    name: "크라요숭이",
    inventoryNo: "KD16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_265.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_265.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD16",
      "크라요숭이",
      "숭이깨비 종족",
      "미치",
      "중형",
    ],
  },
  {
    id: "illustration-KD17",
    name: "오라이드숭이",
    inventoryNo: "KD17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_266.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_266.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD17",
      "오라이드숭이",
      "숭이깨비 종족",
      "미치",
      "중형",
    ],
  },
  {
    id: "illustration-KD18",
    name: "빌리",
    inventoryNo: "KD18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_267.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_267.webp",
    tags: ["도깨비", "일러스트", "KD18", "빌리", "미치", "소형"],
  },
  {
    id: "illustration-KD19",
    name: "복숭이깨비",
    inventoryNo: "KD19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_268.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_268.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD19",
      "복숭이깨비",
      "숭이깨비 종족",
      "미치",
      "소형",
    ],
  },
  {
    id: "illustration-KD20",
    name: "펭퀸",
    inventoryNo: "KD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_269.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_269.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD20",
      "펭퀸",
      "털복숭이 종족",
      "미치",
      "대형",
    ],
  },
  {
    id: "illustration-KD21",
    name: "스타더스트",
    inventoryNo: "KD21",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_270.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_270.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD21",
      "스타더스트",
      "털복숭이 종족",
      "미치",
      "소형",
    ],
  },
  {
    id: "illustration-KD22",
    name: "혹부리 숭이깨비",
    inventoryNo: "KD22",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_271.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_271.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD22",
      "혹부리 숭이깨비",
      "숭이깨비 종족",
      "미치",
      "소형",
    ],
  },
  {
    id: "illustration-KD23",
    name: "스피리스트와 스피",
    inventoryNo: "KD23",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_272.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_272.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD23",
      "스피리스트와 스피",
      "털복숭이 종족",
      "미치",
      "대형, 소형",
    ],
  },
  {
    id: "illustration-KD24",
    name: "소비, 더비, 러비",
    inventoryNo: "KD24",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_273.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_273.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD24",
      "소비, 더비, 러비",
      "털복숭이 종족",
      "미치",
      "소형, 중형, 소형",
    ],
  },
  {
    id: "illustration-KD25",
    name: "카이악, 마이악, 치수, 피수",
    inventoryNo: "KD25",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_274.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_274.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD25",
      "카이악, 마이악, 치수, 피수",
      "털복숭이 종족",
      "미치",
      "중형, 대형, 소형, 소형",
    ],
  },
  {
    id: "illustration-KD26",
    name: "치아와 팍씨",
    inventoryNo: "KD26",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_275.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_275.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD26",
      "치아와 팍씨",
      "숭이깨비 종족",
      "미치",
      "소형, 소형",
    ],
  },
  {
    id: "illustration-KD27",
    name: "쏘오, 모리, 매오",
    inventoryNo: "KD27",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_276.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_276.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD27",
      "쏘오, 모리, 매오",
      "털복숭이 종족",
      "미치",
      "소형, 중형, 소형",
    ],
  },
  {
    id: "illustration-KD28",
    name: "딱끼오와 꼬이락",
    inventoryNo: "KD28",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_277.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_277.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD28",
      "딱끼오와 꼬이락",
      "털복숭이 종족",
      "미치",
      "중형, 중형",
    ],
  },
  {
    id: "illustration-KD29",
    name: "크쉬트와 타이쿵",
    inventoryNo: "KD29",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_278.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_278.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD29",
      "크쉬트와 타이쿵",
      "털복숭이 종족",
      "미치",
      "중형, 중형",
    ],
  },
  {
    id: "illustration-KD30",
    name: "오잉구",
    inventoryNo: "KD30",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_279.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_279.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD30",
      "오잉구",
      "털복숭이 종족",
      "미치",
      "중형",
    ],
  },
  {
    id: "illustration-KD31",
    name: "털복정숭",
    inventoryNo: "KD31",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_280.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_280.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD31",
      "털복정숭",
      "털복숭이 종족",
      "미치",
      "중형",
    ],
  },
  {
    id: "illustration-KD32",
    name: "도드리",
    inventoryNo: "KD32",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_281.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_281.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD32",
      "도드리",
      "털복숭이 종족",
      "미치",
      "소형",
    ],
  },
  {
    id: "illustration-KD33",
    name: "분홍가위깨비",
    inventoryNo: "KD33",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_282.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_282.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD33",
      "분홍가위깨비",
      "가위 종족",
      "미치",
      "대형",
    ],
  },
  {
    id: "illustration-KD34",
    name: "옥가위깨비",
    inventoryNo: "KD34",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_283.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_283.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD34",
      "옥가위깨비",
      "가위 종족",
      "미치",
      "대형",
    ],
  },
  {
    id: "illustration-KD35",
    name: "파란가위깨비",
    inventoryNo: "KD35",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_284.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_284.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD35",
      "파란가위깨비",
      "가위 종족",
      "미치",
      "대형",
    ],
  },
  {
    id: "illustration-KD36",
    name: "살가위깨비",
    inventoryNo: "KD36",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_285.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_285.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD36",
      "살가위깨비",
      "가위 종족",
      "미치",
      "대형",
    ],
  },
  {
    id: "illustration-KD37",
    name: "초록가위깨비",
    inventoryNo: "KD37",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_286.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_286.webp",
    tags: [
      "도깨비",
      "일러스트",
      "KD37",
      "초록가위깨비",
      "가위 종족",
      "미치",
      "대형",
    ],
  },
  {
    id: "illustration-KD38",
    name: "주황 동나귀",
    inventoryNo: "KD38",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_287.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_287.webp",
    tags: ["도깨비", "일러스트", "KD38", "주황 동나귀", "동물", "미치", "소형"],
  },
  {
    id: "illustration-KD39",
    name: "형광 동나귀",
    inventoryNo: "KD39",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_288.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_288.webp",
    tags: ["도깨비", "일러스트", "KD39", "형광 동나귀", "동물", "미치", "소형"],
  },
  {
    id: "illustration-KD40",
    name: "노랑 동나귀",
    inventoryNo: "KD40",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_289.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_289.webp",
    tags: ["도깨비", "일러스트", "KD40", "노랑 동나귀", "동물", "미치", "소형"],
  },
  {
    id: "illustration-KD41",
    name: "분홍 동나귀",
    inventoryNo: "KD41",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_290.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_290.webp",
    tags: ["도깨비", "일러스트", "KD41", "분홍 동나귀", "동물", "미치", "소형"],
  },
  {
    id: "illustration-KD42",
    name: "초록 동나귀",
    inventoryNo: "KD42",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_291.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_291.webp",
    tags: ["도깨비", "일러스트", "KD42", "초록 동나귀", "동물", "미치", "소형"],
  },
  {
    id: "illustration-LD1",
    name: "일장군",
    inventoryNo: "LD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_292.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_292.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD1",
      "일장군",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD2",
    name: "사십육장군",
    inventoryNo: "LD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_293.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_293.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD2",
      "사십육장군",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD3",
    name: "사십오장군",
    inventoryNo: "LD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_294.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_294.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD3",
      "사십오장군",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD4",
    name: "나왔어 (삼십육장군)",
    inventoryNo: "LD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_295.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_295.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD4",
      "나왔어 (삼십육장군)",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD5",
    name: "겨털용사(이십팔장군)",
    inventoryNo: "LD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_296.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_296.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD5",
      "겨털용사(이십팔장군)",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD6",
    name: "칠십칠장군",
    inventoryNo: "LD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_297.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_297.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD6",
      "칠십칠장군",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD7",
    name: "사백구십이장군",
    inventoryNo: "LD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_298.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_298.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD7",
      "사백구십이장군",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD8",
    name: "",
    inventoryNo: "LD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_299.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_299.webp",
    tags: ["도깨비", "일러스트", "LD8", "돌", "오백장군", "제아쿨", "중형"],
  },
  {
    id: "illustration-LD9",
    name: "삼백팔십팔장군",
    inventoryNo: "LD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_300.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_300.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD9",
      "삼백팔십팔장군",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD10",
    name: "삼백삼장군",
    inventoryNo: "LD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_301.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_301.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD10",
      "삼백삼장군",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD11",
    name: "이백이십이장군",
    inventoryNo: "LD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_302.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_302.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD11",
      "이백이십이장군",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD12",
    name: "",
    inventoryNo: "LD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_303.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_303.webp",
    tags: ["도깨비", "일러스트", "LD12", "돌", "오백장군"],
  },
  {
    id: "illustration-LD13",
    name: "백오십구장군",
    inventoryNo: "LD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_304.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_304.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD13",
      "백오십구장군",
      "돌",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD14",
    name: "",
    inventoryNo: "LD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_305.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_305.webp",
    tags: ["도깨비", "일러스트", "LD14", "돌", "오백장군"],
  },
  {
    id: "illustration-LD15",
    name: "",
    inventoryNo: "LD15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_306.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_306.webp",
    tags: ["도깨비", "일러스트", "LD15", "돌", "오백장군"],
  },
  {
    id: "illustration-LD16",
    name: "",
    inventoryNo: "LD16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_307.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_307.webp",
    tags: ["도깨비", "일러스트", "LD16", "돌", "오백장군"],
  },
  {
    id: "illustration-LD17",
    name: "",
    inventoryNo: "LD17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_308.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_308.webp",
    tags: ["도깨비", "일러스트", "LD17", "돌", "오백장군"],
  },
  {
    id: "illustration-LD18",
    name: "",
    inventoryNo: "LD18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_309.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_309.webp",
    tags: ["도깨비", "일러스트", "LD18", "돌", "오백장군"],
  },
  {
    id: "illustration-LD19",
    name: "",
    inventoryNo: "LD19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_310.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_310.webp",
    tags: ["도깨비", "일러스트", "LD19", "돌", "오백장군"],
  },
  {
    id: "illustration-LD20",
    name: "삼신건반",
    inventoryNo: "LD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_311.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_311.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD20",
      "삼신건반",
      "탑",
      "오백장군",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "illustration-LD21",
    name: "천지인의 심마니 좁교",
    inventoryNo: "LD21",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_312.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_312.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD21",
      "천지인의 심마니 좁교",
      "제아쿨과 천지인의 경계",
      "소형",
    ],
  },
  {
    id: "illustration-LD22",
    name: "국꼬꼬",
    inventoryNo: "LD22",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_313.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_313.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD22",
      "국꼬꼬",
      "영혼",
      "그림자 셰르파 부족",
    ],
  },
  {
    id: "illustration-LD23",
    name: "햑챠챠",
    inventoryNo: "LD23",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_314.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_314.webp",
    tags: [
      "도깨비",
      "일러스트",
      "LD23",
      "햑챠챠",
      "영혼",
      "그림자 셰르파 부족",
    ],
  },
  {
    id: "illustration-MD1",
    name: "깨숑",
    inventoryNo: "MD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_315.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_315.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD1",
      "깨숑",
      "해인경 - 깨숑 파루자 타운",
      "초대형",
    ],
  },
  {
    id: "illustration-MD2",
    name: "노란별츠카",
    inventoryNo: "MD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_316.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_316.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD2",
      "노란별츠카",
      "돌",
      "아티팩트",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD3",
    name: "회돌이",
    inventoryNo: "MD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_317.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_317.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD3",
      "회돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD4",
    name: "뱅돌이",
    inventoryNo: "MD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_318.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_318.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD4",
      "뱅돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD5",
    name: "키돌이",
    inventoryNo: "MD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_319.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_319.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD5",
      "키돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD6",
    name: "치돌이",
    inventoryNo: "MD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_320.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_320.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD6",
      "치돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD7",
    name: "파딛돌",
    inventoryNo: "MD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_321.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_321.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD7",
      "파딛돌",
      "돌",
      "두번째 자식 (두번째 자식과 버미의 교배종)",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD8",
    name: "코딛돌",
    inventoryNo: "MD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_322.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_322.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD8",
      "코딛돌",
      "돌",
      "두번째 자식 (두번째 자식과 버미의 교배종)",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD9",
    name: "라돌돌",
    inventoryNo: "MD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_323.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_323.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD9",
      "라돌돌",
      "돌",
      "두번째 자식 (동물)",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD10",
    name: "시루아돌",
    inventoryNo: "MD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_324.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_324.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD10",
      "시루아돌",
      "돌",
      "두번째 자식 (2세대)",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD11",
    name: "포리아편",
    inventoryNo: "MD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_325.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_325.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD11",
      "포리아편",
      "돌",
      "두번째 자식 (동물)",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD12",
    name: "채돌돌",
    inventoryNo: "MD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_326.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_326.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD12",
      "채돌돌",
      "정령",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD13",
    name: "우리오르",
    inventoryNo: "MD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_327.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_327.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD13",
      "우리오르",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD14",
    name: "다르돌이, 마르돌이",
    inventoryNo: "MD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_328.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_328.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD14",
      "다르돌이, 마르돌이",
      "돌",
      "두번째 자식 (2세대)",
      "해인경 - 깨숑 파루자 타운",
      "소형, 소형",
    ],
  },
  {
    id: "illustration-MD15",
    name: "어미버미",
    inventoryNo: "MD15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_329.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_329.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD15",
      "어미버미",
      "돌",
      "버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD16",
    name: "도딛돌",
    inventoryNo: "MD16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_330.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_330.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD16",
      "도딛돌",
      "돌",
      "두번째 자식 (두번째 자식과 버미의 교배종)",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD17",
    name: "삿룽",
    inventoryNo: "MD17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_331.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_331.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD17",
      "삿룽",
      "돌",
      "두번째 자식 (2세대)",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD18",
    name: "아고, 고새",
    inventoryNo: "MD18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_332.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_332.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD18",
      "아고, 고새",
      "변종, 두번째 자식 (2세대)",
      "해인경 - 깨숑 파루자 타운",
      "소형, 소형",
    ],
  },
  {
    id: "illustration-MD19",
    name: "해마르",
    inventoryNo: "MD19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_333.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_333.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD19",
      "해마르",
      "동물",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD20",
    name: "꼬까리",
    inventoryNo: "MD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_334.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_334.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD20",
      "꼬까리",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD21",
    name: "범버미",
    inventoryNo: "MD21",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_335.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_335.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD21",
      "범버미",
      "돌",
      "버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD22",
    name: "아리랑",
    inventoryNo: "MD22",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_336.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_336.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD22",
      "아리랑",
      "유랑비",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD23",
    name: "청이랑",
    inventoryNo: "MD23",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_337.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_337.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD23",
      "청이랑",
      "유랑비",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD24",
    name: "대장장이 도버미",
    inventoryNo: "MD24",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_338.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_338.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD24",
      "대장장이 도버미",
      "돌",
      "버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD25",
    name: "자버미",
    inventoryNo: "MD25",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_339.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_339.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD25",
      "자버미",
      "돌",
      "버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD26",
    name: "대장장이 오버미",
    inventoryNo: "MD26",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_340.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_340.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD26",
      "대장장이 오버미",
      "돌",
      "버미",
      "해인경 - 깨숑 파루자 타운",
      "중형",
    ],
  },
  {
    id: "illustration-MD27",
    name: "라오버미",
    inventoryNo: "MD27",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_341.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_341.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD27",
      "라오버미",
      "돌",
      "버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD28",
    name: "지린버미",
    inventoryNo: "MD28",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_342.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_342.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD28",
      "지린버미",
      "돌",
      "버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD29",
    name: "윌이랑",
    inventoryNo: "MD29",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_343.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_343.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD29",
      "윌이랑",
      "유랑비",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD30",
    name: "엘리랑",
    inventoryNo: "MD30",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_344.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_344.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD30",
      "엘리랑",
      "유랑비",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD31",
    name: "마아르미",
    inventoryNo: "MD31",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_345.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_345.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD31",
      "마아르미",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD32",
    name: "봉아르미",
    inventoryNo: "MD32",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_346.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_346.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD32",
      "봉아르미",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD33",
    name: "스팅아르미",
    inventoryNo: "MD33",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_347.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_347.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD33",
      "스팅아르미",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD34",
    name: "백아르미",
    inventoryNo: "MD34",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_348.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_348.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD34",
      "백아르미",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD35",
    name: "모아프아르미가족",
    inventoryNo: "MD35",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_349.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_349.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD35",
      "모아프아르미가족",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD36",
    name: "조셰프아르미",
    inventoryNo: "MD36",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_350.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_350.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD36",
      "조셰프아르미",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD37",
    name: "작은신선 테차르미",
    inventoryNo: "MD37",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_351.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_351.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD37",
      "작은신선 테차르미",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD38",
    name: "트윈아르미 하르미",
    inventoryNo: "MD38",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_352.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_352.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD38",
      "트윈아르미 하르미",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD39",
    name: "트윈아르미 두르미",
    inventoryNo: "MD39",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_353.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_353.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD39",
      "트윈아르미 두르미",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD40",
    name: "루미아르미",
    inventoryNo: "MD40",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_354.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_354.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD40",
      "루미아르미",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD41",
    name: "스피오아르미",
    inventoryNo: "MD41",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_355.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_355.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD41",
      "스피오아르미",
      "동물",
      "아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD42",
    name: "강돌이",
    inventoryNo: "MD42",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_356.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_356.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD42",
      "강돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD43",
    name: "방돌이",
    inventoryNo: "MD43",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_357.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_357.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD43",
      "방돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD44",
    name: "레돌이",
    inventoryNo: "MD44",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_358.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_358.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD44",
      "레돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD45",
    name: "노란별카르",
    inventoryNo: "MD45",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_359.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_359.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD45",
      "노란별카르",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD46",
    name: "로돌이",
    inventoryNo: "MD46",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_360.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_360.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD46",
      "로돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD47",
    name: "위돌이",
    inventoryNo: "MD47",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_361.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_361.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD47",
      "위돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD48",
    name: "태돌이",
    inventoryNo: "MD48",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_362.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_362.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD48",
      "태돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD49",
    name: "캐돌이",
    inventoryNo: "MD49",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_363.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_363.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD49",
      "캐돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD50",
    name: "배또리",
    inventoryNo: "MD50",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_364.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_364.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD50",
      "배또리",
      "돌",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD51",
    name: "매또리",
    inventoryNo: "MD51",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_365.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_365.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD51",
      "매또리",
      "돌",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD52",
    name: "해돌이",
    inventoryNo: "MD52",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_366.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_366.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD52",
      "해돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD53",
    name: "푸돌이",
    inventoryNo: "MD53",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_367.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_367.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD53",
      "푸돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-MD54",
    name: "오돌이",
    inventoryNo: "MD54",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_368.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_368.webp",
    tags: [
      "도깨비",
      "일러스트",
      "MD54",
      "오돌이",
      "돌",
      "두번째 자식",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND1",
    name: "뽀숑",
    inventoryNo: "ND1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_369.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_369.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND1",
      "뽀숑",
      "해인경 - 뽀숑 룰루 타운",
      "초대형",
    ],
  },
  {
    id: "illustration-ND2",
    name: "피구낭",
    inventoryNo: "ND2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_370.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_370.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND2",
      "피구낭",
      "해인경 - 뽀숑 룰루 타운",
      "초대형",
    ],
  },
  {
    id: "illustration-ND3",
    name: "츠카스테",
    inventoryNo: "ND3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_371.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_371.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND3",
      "츠카스테",
      "돌",
      "아티팩트",
      "해인경 - 뽀숑 룰루 타운",
      "초대형",
    ],
  },
  {
    id: "illustration-ND4",
    name: "사릿다르",
    inventoryNo: "ND4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_372.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_372.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND4",
      "사릿다르",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND5",
    name: "청소부 자주파",
    inventoryNo: "ND5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_373.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_373.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND5",
      "청소부 자주파",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND6",
    name: "아올",
    inventoryNo: "ND6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_374.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_374.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND6",
      "아올",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND7",
    name: "라므",
    inventoryNo: "ND7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_375.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_375.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND7",
      "라므",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND8",
    name: "행크",
    inventoryNo: "ND8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_376.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_376.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND8",
      "행크",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND9",
    name: "닝가요",
    inventoryNo: "ND9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_377.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_377.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND9",
      "닝가요",
      "혼종 - 도깨비 + 만물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND10",
    name: "펠러",
    inventoryNo: "ND10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_378.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_378.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND10",
      "펠러",
      "혼종 - 도깨비 + 만물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND11",
    name: "느룽",
    inventoryNo: "ND11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_379.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_379.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND11",
      "느룽",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND12",
    name: "모시모시",
    inventoryNo: "ND12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_380.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_380.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND12",
      "모시모시",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND13",
    name: "라라비로비로",
    inventoryNo: "ND13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_381.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_381.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND13",
      "라라비로비로",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND14",
    name: "투라옹",
    inventoryNo: "ND14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_382.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_382.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND14",
      "투라옹",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND15",
    name: "고니",
    inventoryNo: "ND15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_383.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_383.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND15",
      "고니",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND16",
    name: "킁",
    inventoryNo: "ND16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_384.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_384.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND16",
      "킁",
      "만물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND17",
    name: "링티엔팔",
    inventoryNo: "ND17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_385.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_385.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND17",
      "링티엔팔",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND18",
    name: "시스레, 가시레, 바스레, 너스레",
    inventoryNo: "ND18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_386.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_386.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND18",
      "시스레, 가시레, 바스레, 너스레",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND19",
    name: "넵슈스",
    inventoryNo: "ND19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_387.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_387.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND19",
      "넵슈스",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND20",
    name: "동동동, 게라",
    inventoryNo: "ND20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_388.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_388.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND20",
      "동동동, 게라",
      "해인경 - 뽀숑 룰루 타운",
      "소형, 소형",
    ],
  },
  {
    id: "illustration-ND21",
    name: "AT",
    inventoryNo: "ND21",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_389.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_389.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND21",
      "AT",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND22",
    name: "깨비꽃",
    inventoryNo: "ND22",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_390.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_390.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND22",
      "깨비꽃",
      "만물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND23",
    name: "속숑삭숑",
    inventoryNo: "ND23",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_391.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_391.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND23",
      "속숑삭숑",
      "아티팩트",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND24",
    name: "싸다만똥",
    inventoryNo: "ND24",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_392.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_392.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND24",
      "싸다만똥",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND25",
    name: "티비티비",
    inventoryNo: "ND25",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_393.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_393.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND25",
      "티비티비",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND26",
    name: "노봇",
    inventoryNo: "ND26",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_394.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_394.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND26",
      "노봇",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND27",
    name: "왁왁",
    inventoryNo: "ND27",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_395.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_395.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND27",
      "왁왁",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND28",
    name: "톰파루",
    inventoryNo: "ND28",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_396.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_396.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND28",
      "톰파루",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND29",
    name: "다우르프",
    inventoryNo: "ND29",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_397.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_397.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND29",
      "다우르프",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND30",
    name: "웁앤옵",
    inventoryNo: "ND30",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_398.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_398.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND30",
      "웁앤옵",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND31",
    name: "넸넸",
    inventoryNo: "ND31",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_399.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_399.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND31",
      "넸넸",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND32",
    name: "놈팽팽",
    inventoryNo: "ND32",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_400.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_400.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND32",
      "놈팽팽",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND33",
    name: "주룹팽팽",
    inventoryNo: "ND33",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_401.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_401.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND33",
      "주룹팽팽",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND34",
    name: "크팽팽",
    inventoryNo: "ND34",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_402.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_402.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND34",
      "크팽팽",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND35",
    name: "호리팽팽",
    inventoryNo: "ND35",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_403.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_403.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND35",
      "호리팽팽",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND36",
    name: "탬버린 꽃",
    inventoryNo: "ND36",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_404.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_404.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND36",
      "탬버린 꽃",
      "식물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND37",
    name: "딕딕도",
    inventoryNo: "ND37",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_405.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_405.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND37",
      "딕딕도",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND38",
    name: "육서방",
    inventoryNo: "ND38",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_406.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_406.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND38",
      "육서방",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND39",
    name: "샤코",
    inventoryNo: "ND39",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_407.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_407.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND39",
      "샤코",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND40",
    name: "도리무",
    inventoryNo: "ND40",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_408.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_408.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND40",
      "도리무",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND41",
    name: "호울",
    inventoryNo: "ND41",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_409.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_409.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND41",
      "호울",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND42",
    name: "까짜기",
    inventoryNo: "ND42",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_410.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_410.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND42",
      "까짜기",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND43",
    name: "울라",
    inventoryNo: "ND43",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_411.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_411.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND43",
      "울라",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND44",
    name: "우카스",
    inventoryNo: "ND44",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_412.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_412.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND44",
      "우카스",
      "동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND45",
    name: "롭피",
    inventoryNo: "ND45",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_413.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_413.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND45",
      "롭피",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND46",
    name: "빨간별사카",
    inventoryNo: "ND46",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_414.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_414.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND46",
      "빨간별사카",
      "돌",
      "아티팩트",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND47",
    name: "히위고쿠, 뽁",
    inventoryNo: "ND47",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_415.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_415.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND47",
      "히위고쿠, 뽁",
      "도깨비, 동물",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND48",
    name: "노란별이츠",
    inventoryNo: "ND48",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_416.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_416.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND48",
      "노란별이츠",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND49",
    name: "호호 이모",
    inventoryNo: "ND49",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_417.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_417.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND49",
      "호호 이모",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND50",
    name: "브로콜리 삼촌",
    inventoryNo: "ND50",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_418.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_418.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND50",
      "브로콜리 삼촌",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-ND51",
    name: "팡",
    inventoryNo: "ND51",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_419.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_419.webp",
    tags: [
      "도깨비",
      "일러스트",
      "ND51",
      "팡",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "illustration-OD1",
    name: "징가숑타워",
    inventoryNo: "OD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_420.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_420.webp",
    tags: ["도깨비", "일러스트", "OD1", "징가숑타워", "탑", "해인경", "초대형"],
  },
  {
    id: "illustration-OD2",
    name: "페파 눗",
    inventoryNo: "OD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_421.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_421.webp",
    tags: [
      "도깨비",
      "일러스트",
      "OD2",
      "페파 눗",
      "반도깨비",
      "해인경 - 상념과 망상의 방",
      "중형",
    ],
  },
  {
    id: "illustration-OD3",
    name: "도리 눗",
    inventoryNo: "OD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_422.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_422.webp",
    tags: [
      "도깨비",
      "일러스트",
      "OD3",
      "도리 눗",
      "반도깨비",
      "해인경 - 상념과 망상의 방",
      "중형",
    ],
  },
  {
    id: "illustration-OD4",
    name: "도깨비(문자)",
    inventoryNo: "OD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_423.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_423.webp",
    tags: [
      "도깨비",
      "일러스트",
      "OD4",
      "도깨비(문자)",
      "영혼",
      "아티팩트",
      "해인경",
      "소형",
    ],
  },
  {
    id: "illustration-OD5",
    name: "몬조",
    inventoryNo: "OD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_424.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_424.webp",
    tags: [
      "도깨비",
      "일러스트",
      "OD5",
      "몬조",
      "영혼",
      "그림자 셰르파 부족",
      "해인경",
      "중형",
    ],
  },
  {
    id: "illustration-OD6",
    name: "백야콘",
    inventoryNo: "OD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_425.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_425.webp",
    tags: [
      "도깨비",
      "일러스트",
      "OD6",
      "백야콘",
      "변종(만물)",
      "해인경",
      "대형",
    ],
  },
  {
    id: "illustration-OD7",
    name: "야콘",
    inventoryNo: "OD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_426.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_426.webp",
    tags: ["도깨비", "일러스트", "OD7", "야콘", "해인경", "소형"],
  },
  {
    id: "illustration-OD8",
    name: "",
    inventoryNo: "OD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_427.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_427.webp",
    tags: ["도깨비", "일러스트", "OD8", "해인경", "소형"],
  },
  {
    id: "illustration-OD9",
    name: "꽃사자",
    inventoryNo: "OD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_428.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_428.webp",
    tags: ["도깨비", "일러스트", "OD9", "꽃사자", "동물", "해인경", "초대형"],
  },
  {
    id: "illustration-OD10",
    name: "토립",
    inventoryNo: "OD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_429.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_429.webp",
    tags: ["도깨비", "일러스트", "OD10", "토립", "동물", "해인경", "소형"],
  },
  {
    id: "illustration-OD11",
    name: "이뽀",
    inventoryNo: "OD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_430.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_430.webp",
    tags: [
      "도깨비",
      "일러스트",
      "OD11",
      "이뽀",
      "성",
      "만물 / 도깨비",
      "몽당",
      "초대형",
    ],
  },
  {
    id: "illustration-OD12",
    name: "",
    inventoryNo: "OD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_431.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_431.webp",
    tags: ["도깨비", "일러스트", "OD12", "몽당"],
  },
  {
    id: "illustration-OD13",
    name: "",
    inventoryNo: "OD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_432.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_432.webp",
    tags: ["도깨비", "일러스트", "OD13", "몽당"],
  },
  {
    id: "illustration-PD1-1",
    name: "깨뽀 (3면상)",
    inventoryNo: "PD1-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_433.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_433.webp",
    tags: ["도깨비", "일러스트", "PD1-1", "깨뽀 (3면상)", "봉당", "초대형"],
  },
  {
    id: "illustration-PD1-2",
    name: "깨뽀 (3면상)",
    inventoryNo: "PD1-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_434.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_434.webp",
    tags: ["도깨비", "일러스트", "PD1-2", "깨뽀 (3면상)", "봉당", "초대형"],
  },
  {
    id: "illustration-PD1-3",
    name: "깨뽀 (3면상)",
    inventoryNo: "PD1-3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_435.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_435.webp",
    tags: ["도깨비", "일러스트", "PD1-3", "깨뽀 (3면상)", "봉당", "초대형"],
  },
  {
    id: "illustration-PD2",
    name: "",
    inventoryNo: "PD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_436.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_436.webp",
    tags: ["도깨비", "일러스트", "PD2", "동물", "봉당"],
  },
  {
    id: "illustration-PD3",
    name: "",
    inventoryNo: "PD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_437.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_437.webp",
    tags: ["도깨비", "일러스트", "PD3", "동물", "봉당"],
  },
  {
    id: "illustration-PD4-1",
    name: "",
    inventoryNo: "PD4-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_438.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_438.webp",
    tags: ["도깨비", "일러스트", "PD4-1", "알", "봉당"],
  },
  {
    id: "illustration-PD4-2",
    name: "",
    inventoryNo: "PD4-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_439.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_439.webp",
    tags: ["도깨비", "일러스트", "PD4-2", "알", "봉당"],
  },
  {
    id: "illustration-PD5-1",
    name: "",
    inventoryNo: "PD5-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_440.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_440.webp",
    tags: ["도깨비", "일러스트", "PD5-1", "알", "봉당"],
  },
  {
    id: "illustration-PD5-2",
    name: "",
    inventoryNo: "PD5-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_441.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_441.webp",
    tags: ["도깨비", "일러스트", "PD5-2", "알", "봉당"],
  },
  {
    id: "illustration-PD6-1",
    name: "",
    inventoryNo: "PD6-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_443.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_443.webp",
    tags: ["도깨비", "일러스트", "PD6-1", "알", "봉당"],
  },
  {
    id: "illustration-PD6-2",
    name: "",
    inventoryNo: "PD6-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_442.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_442.webp",
    tags: ["도깨비", "일러스트", "PD6-2", "알", "봉당"],
  },
  {
    id: "illustration-PD6-3",
    name: "",
    inventoryNo: "PD6-3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_444.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_444.webp",
    tags: ["도깨비", "일러스트", "PD6-3", "알", "봉당"],
  },
  {
    id: "illustration-PD7-1",
    name: "",
    inventoryNo: "PD7-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_445.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_445.webp",
    tags: ["도깨비", "일러스트", "PD7-1", "알", "봉당"],
  },
  {
    id: "illustration-PD7-2",
    name: "",
    inventoryNo: "PD7-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_446.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_446.webp",
    tags: ["도깨비", "일러스트", "PD7-2", "알", "봉당"],
  },
  {
    id: "illustration-PD8-1",
    name: "",
    inventoryNo: "PD8-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_449.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_449.webp",
    tags: ["도깨비", "일러스트", "PD8-1", "알", "봉당"],
  },
  {
    id: "illustration-PD8-2",
    name: "",
    inventoryNo: "PD8-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_447.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_447.webp",
    tags: ["도깨비", "일러스트", "PD8-2", "알", "봉당"],
  },
  {
    id: "illustration-PD8-3",
    name: "",
    inventoryNo: "PD8-3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_448.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_448.webp",
    tags: ["도깨비", "일러스트", "PD8-3", "알", "봉당"],
  },
  {
    id: "illustration-PD9",
    name: "",
    inventoryNo: "PD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_450.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_450.webp",
    tags: ["도깨비", "일러스트", "PD9", "동물", "봉당"],
  },
  {
    id: "illustration-PD10",
    name: "",
    inventoryNo: "PD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_451.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_451.webp",
    tags: ["도깨비", "일러스트", "PD10", "동물", "봉당"],
  },
  {
    id: "illustration-PD11-1",
    name: "",
    inventoryNo: "PD11-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_452.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_452.webp",
    tags: ["도깨비", "일러스트", "PD11-1", "알", "봉당"],
  },
  {
    id: "illustration-PD11-2",
    name: "",
    inventoryNo: "PD11-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_453.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_453.webp",
    tags: ["도깨비", "일러스트", "PD11-2", "알", "봉당"],
  },
  {
    id: "illustration-PD12-1",
    name: "",
    inventoryNo: "PD12-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_454.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_454.webp",
    tags: ["도깨비", "일러스트", "PD12-1", "알", "봉당"],
  },
  {
    id: "illustration-PD12-2",
    name: "",
    inventoryNo: "PD12-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_455.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_455.webp",
    tags: ["도깨비", "일러스트", "PD12-2", "알", "봉당"],
  },
  {
    id: "illustration-PD13-1",
    name: "",
    inventoryNo: "PD13-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_456.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_456.webp",
    tags: ["도깨비", "일러스트", "PD13-1", "알", "봉당"],
  },
  {
    id: "illustration-PD13-2",
    name: "",
    inventoryNo: "PD13-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_457.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_457.webp",
    tags: ["도깨비", "일러스트", "PD13-2", "알", "봉당"],
  },
  {
    id: "illustration-PD14",
    name: "",
    inventoryNo: "PD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_458.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_458.webp",
    tags: ["도깨비", "일러스트", "PD14", "알", "봉당"],
  },
  {
    id: "illustration-PD15-1",
    name: "",
    inventoryNo: "PD15-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_461.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_461.webp",
    tags: ["도깨비", "일러스트", "PD15-1", "동물", "봉당"],
  },
  {
    id: "illustration-PD15-2",
    name: "",
    inventoryNo: "PD15-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_460.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_460.webp",
    tags: ["도깨비", "일러스트", "PD15-2", "알", "봉당"],
  },
  {
    id: "illustration-PD15-3",
    name: "",
    inventoryNo: "PD15-3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_459.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_459.webp",
    tags: ["도깨비", "일러스트", "PD15-3", "알", "봉당"],
  },
  {
    id: "illustration-PD16-1",
    name: "",
    inventoryNo: "PD16-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_462.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_462.webp",
    tags: ["도깨비", "일러스트", "PD16-1", "알", "봉당"],
  },
  {
    id: "illustration-PD16-2",
    name: "",
    inventoryNo: "PD16-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_463.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_463.webp",
    tags: ["도깨비", "일러스트", "PD16-2", "알", "봉당"],
  },
  {
    id: "illustration-PD17-1",
    name: "",
    inventoryNo: "PD17-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_466.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_466.webp",
    tags: ["도깨비", "일러스트", "PD17-1", "동물", "봉당"],
  },
  {
    id: "illustration-PD17-2",
    name: "",
    inventoryNo: "PD17-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_464.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_464.webp",
    tags: ["도깨비", "일러스트", "PD17-2", "알", "봉당"],
  },
  {
    id: "illustration-PD17-3",
    name: "",
    inventoryNo: "PD17-3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_465.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_465.webp",
    tags: ["도깨비", "일러스트", "PD17-3", "알", "봉당"],
  },
  {
    id: "illustration-PD18-1",
    name: "",
    inventoryNo: "PD18-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_471.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_471.webp",
    tags: ["도깨비", "일러스트", "PD18-1", "알", "봉당"],
  },
  {
    id: "illustration-PD18-2",
    name: "",
    inventoryNo: "PD18-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_470.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_470.webp",
    tags: ["도깨비", "일러스트", "PD18-2", "알", "봉당"],
  },
  {
    id: "illustration-PD18-3",
    name: "",
    inventoryNo: "PD18-3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_469.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_469.webp",
    tags: ["도깨비", "일러스트", "PD18-3", "알", "봉당"],
  },
  {
    id: "illustration-PD18-4",
    name: "",
    inventoryNo: "PD18-4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_468.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_468.webp",
    tags: ["도깨비", "일러스트", "PD18-4", "알", "봉당"],
  },
  {
    id: "illustration-PD18-5",
    name: "",
    inventoryNo: "PD18-5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_467.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_467.webp",
    tags: ["도깨비", "일러스트", "PD18-5", "알", "봉당"],
  },
  {
    id: "illustration-PD19-1",
    name: "",
    inventoryNo: "PD19-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_476.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_476.webp",
    tags: ["도깨비", "일러스트", "PD19-1", "동물", "봉당"],
  },
  {
    id: "illustration-PD19-2",
    name: "",
    inventoryNo: "PD19-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_475.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_475.webp",
    tags: ["도깨비", "일러스트", "PD19-2", "동물", "봉당"],
  },
  {
    id: "illustration-PD19-3",
    name: "",
    inventoryNo: "PD19-3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_474.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_474.webp",
    tags: ["도깨비", "일러스트", "PD19-3", "동물", "봉당"],
  },
  {
    id: "illustration-PD19-4",
    name: "",
    inventoryNo: "PD19-4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_477.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_477.webp",
    tags: ["도깨비", "일러스트", "PD19-4", "동물", "봉당"],
  },
  {
    id: "illustration-PD19-5",
    name: "",
    inventoryNo: "PD19-5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_473.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_473.webp",
    tags: ["도깨비", "일러스트", "PD19-5", "알", "봉당"],
  },
  {
    id: "illustration-PD19-6",
    name: "",
    inventoryNo: "PD19-6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_472.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_472.webp",
    tags: ["도깨비", "일러스트", "PD19-6", "알", "봉당"],
  },
  {
    id: "illustration-PD20",
    name: "",
    inventoryNo: "PD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_478.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_478.webp",
    tags: ["도깨비", "일러스트", "PD20", "동물", "봉당"],
  },
  {
    id: "illustration-PD21-1",
    name: "",
    inventoryNo: "PD21-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_479.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_479.webp",
    tags: ["도깨비", "일러스트", "PD21-1", "동물", "봉당"],
  },
  {
    id: "illustration-PD21-2",
    name: "",
    inventoryNo: "PD21-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_480.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_480.webp",
    tags: ["도깨비", "일러스트", "PD21-2", "동물", "봉당"],
  },
  {
    id: "illustration-PD22-1",
    name: "",
    inventoryNo: "PD22-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_481.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_481.webp",
    tags: ["도깨비", "일러스트", "PD22-1", "동물", "봉당"],
  },
  {
    id: "illustration-PD22-2",
    name: "",
    inventoryNo: "PD22-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_482.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_482.webp",
    tags: ["도깨비", "일러스트", "PD22-2", "알", "봉당"],
  },
  {
    id: "illustration-PD22-3",
    name: "",
    inventoryNo: "PD22-3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_483.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_483.webp",
    tags: ["도깨비", "일러스트", "PD22-3", "알", "봉당"],
  },
  {
    id: "illustration-PD23-1",
    name: "",
    inventoryNo: "PD23-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_484.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_484.webp",
    tags: ["도깨비", "일러스트", "PD23-1", "동물", "봉당"],
  },
  {
    id: "illustration-PD23-2",
    name: "",
    inventoryNo: "PD23-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_485.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_485.webp",
    tags: ["도깨비", "일러스트", "PD23-2", "동물", "봉당"],
  },
  {
    id: "illustration-PD24-1",
    name: "",
    inventoryNo: "PD24-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_487.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_487.webp",
    tags: ["도깨비", "일러스트", "PD24-1", "알", "봉당"],
  },
  {
    id: "illustration-PD24-2",
    name: "",
    inventoryNo: "PD24-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_486.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_486.webp",
    tags: ["도깨비", "일러스트", "PD24-2", "알", "봉당"],
  },
  {
    id: "illustration-PD25-1",
    name: "",
    inventoryNo: "PD25-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_488.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_488.webp",
    tags: ["도깨비", "일러스트", "PD25-1", "알", "봉당"],
  },
  {
    id: "illustration-PD25-2",
    name: "",
    inventoryNo: "PD25-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_489.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_489.webp",
    tags: ["도깨비", "일러스트", "PD25-2", "알", "봉당"],
  },
  {
    id: "illustration-PD26",
    name: "",
    inventoryNo: "PD26",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_490.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_490.webp",
    tags: ["도깨비", "일러스트", "PD26", "동물", "봉당"],
  },
  {
    id: "illustration-PD27",
    name: "",
    inventoryNo: "PD27",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_491.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_491.webp",
    tags: ["도깨비", "일러스트", "PD27", "동물", "봉당"],
  },
  {
    id: "illustration-PD28-1",
    name: "",
    inventoryNo: "PD28-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_492.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_492.webp",
    tags: ["도깨비", "일러스트", "PD28-1", "동물", "봉당"],
  },
  {
    id: "illustration-PD28-2",
    name: "",
    inventoryNo: "PD28-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_493.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_493.webp",
    tags: ["도깨비", "일러스트", "PD28-2", "동물", "봉당"],
  },
  {
    id: "illustration-PD29-1",
    name: "",
    inventoryNo: "PD29-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_494.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_494.webp",
    tags: ["도깨비", "일러스트", "PD29-1", "동물", "봉당"],
  },
  {
    id: "illustration-PD29-2",
    name: "",
    inventoryNo: "PD29-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_495.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_495.webp",
    tags: ["도깨비", "일러스트", "PD29-2", "동물", "봉당"],
  },
  {
    id: "illustration-PD30",
    name: "",
    inventoryNo: "PD30",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_496.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_496.webp",
    tags: ["도깨비", "일러스트", "PD30", "동물", "봉당"],
  },
  {
    id: "illustration-PD31-1",
    name: "",
    inventoryNo: "PD31-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_497.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_497.webp",
    tags: ["도깨비", "일러스트", "PD31-1", "알", "봉당"],
  },
  {
    id: "illustration-PD31-2",
    name: "",
    inventoryNo: "PD31-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_499.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_499.webp",
    tags: ["도깨비", "일러스트", "PD31-2", "알", "봉당"],
  },
  {
    id: "illustration-PD31-3",
    name: "",
    inventoryNo: "PD31-3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_498.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_498.webp",
    tags: ["도깨비", "일러스트", "PD31-3", "알", "봉당"],
  },
  {
    id: "illustration-PD32-1",
    name: "",
    inventoryNo: "PD32-1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_502.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_502.webp",
    tags: ["도깨비", "일러스트", "PD32-1", "알", "봉당"],
  },
  {
    id: "illustration-PD32-2",
    name: "",
    inventoryNo: "PD32-2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_501.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_501.webp",
    tags: ["도깨비", "일러스트", "PD32-2", "알", "봉당"],
  },
  {
    id: "illustration-PD32-3",
    name: "",
    inventoryNo: "PD32-3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_500.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_500.webp",
    tags: ["도깨비", "일러스트", "PD32-3", "알", "봉당"],
  },
  {
    id: "illustration-PD33",
    name: "",
    inventoryNo: "PD33",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_503.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_503.webp",
    tags: ["도깨비", "일러스트", "PD33", "봉당"],
  },
  {
    id: "illustration-PD34",
    name: "",
    inventoryNo: "PD34",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_504.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_504.webp",
    tags: ["도깨비", "일러스트", "PD34", "봉당"],
  },
  {
    id: "illustration-PD35",
    name: "",
    inventoryNo: "PD35",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_505.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_505.webp",
    tags: ["도깨비", "일러스트", "PD35", "봉당"],
  },
  {
    id: "illustration-PD36",
    name: "",
    inventoryNo: "PD36",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_506.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_506.webp",
    tags: ["도깨비", "일러스트", "PD36", "봉당"],
  },
  {
    id: "illustration-QD1",
    name: "운도",
    inventoryNo: "QD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_507.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_507.webp",
    tags: ["도깨비", "일러스트", "QD1", "운도", "퐁당", "초대형"],
  },
  {
    id: "illustration-QD2",
    name: "표사자",
    inventoryNo: "QD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_508.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_508.webp",
    tags: ["도깨비", "일러스트", "QD2", "표사자", "퐁당", "초대형"],
  },
  {
    id: "illustration-RD1",
    name: "해치",
    inventoryNo: "RD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_509.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_509.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD1",
      "해치",
      "동물",
      "영물",
      "천지인 - 정령의 숲 초입",
      "대형",
    ],
  },
  {
    id: "illustration-RD2",
    name: "해초",
    inventoryNo: "RD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_510.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_510.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD2",
      "해초",
      "동물",
      "영물",
      "천지인 - 정령의 숲 초입",
      "대형",
    ],
  },
  {
    id: "illustration-RD3",
    name: "뇌투뇌",
    inventoryNo: "RD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_511.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_511.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD3",
      "뇌투뇌",
      "정령",
      "돌",
      "천지인 - 정령의 숲 초입",
      "소형",
    ],
  },
  {
    id: "illustration-RD4",
    name: "맨투맨",
    inventoryNo: "RD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_512.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_512.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD4",
      "맨투맨",
      "정령",
      "돌",
      "천지인 - 정령의 숲 초입",
      "소형",
    ],
  },
  {
    id: "illustration-RD5",
    name: "너투너",
    inventoryNo: "RD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_513.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_513.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD5",
      "너투너",
      "정령",
      "돌",
      "천지인 - 정령의 숲 초입",
      "소형",
    ],
  },
  {
    id: "illustration-RD6",
    name: "죽었어야 할 운명 싸랄두톨",
    inventoryNo: "RD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_514.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_514.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD6",
      "죽었어야 할 운명 싸랄두톨",
      "정령",
      "정승",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD7",
    name: "죽었어야할 운명 팔분의일",
    inventoryNo: "RD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_515.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_515.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD7",
      "죽었어야할 운명 팔분의일",
      "정령",
      "정승",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD8",
    name: "죽었어야 할 운명 함잣",
    inventoryNo: "RD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_516.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_516.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD8",
      "죽었어야 할 운명 함잣",
      "정령",
      "정승",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD9",
    name: "죽었어야 할 운명 자작",
    inventoryNo: "RD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_517.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_517.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD9",
      "죽었어야 할 운명 자작",
      "정령",
      "정승",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD10",
    name: "죽었어야 할 운명 암염",
    inventoryNo: "RD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_518.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_518.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD10",
      "죽었어야 할 운명 암염",
      "정령",
      "정승",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD11",
    name: "죽었어야 할 운명 타르 ",
    inventoryNo: "RD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_519.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_519.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD11",
      "죽었어야 할 운명 타르",
      "정령",
      "정승",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD12",
    name: "너도냐",
    inventoryNo: "RD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_520.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_520.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD12",
      "너도냐",
      "정령",
      "가짜 조형물",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD13",
    name: "나는좀",
    inventoryNo: "RD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_521.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_521.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD13",
      "나는좀",
      "정령",
      "가짜 조형물",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD14",
    name: "나돈데",
    inventoryNo: "RD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_522.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_522.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD14",
      "나돈데",
      "정령",
      "가짜 조형물",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD15",
    name: "천지인",
    inventoryNo: "RD15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_523.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_523.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD15",
      "천지인",
      "탑",
      "선대의 탑",
      "천지인 - 정령의 숲 초입",
      "대형",
    ],
  },
  {
    id: "illustration-RD16",
    name: "해일랑 - 천지인 지키미, 일명 죽음에서 돌아온 자",
    inventoryNo: "RD16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_524.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_524.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD16",
      "해일랑 - 천지인 지키미, 일명 죽음에서 돌아온 자",
      "유랑비",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD17",
    name: "옥석탑",
    inventoryNo: "RD17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_525.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_525.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD17",
      "옥석탑",
      "탑",
      "후대의 탑",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD18",
    name: "원석탑",
    inventoryNo: "RD18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_526.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_526.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD18",
      "원석탑",
      "탑",
      "후대의 탑",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD19",
    name: "석목탑",
    inventoryNo: "RD19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_527.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_527.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD19",
      "석목탑",
      "탑",
      "후대의 탑",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD20",
    name: "소왓",
    inventoryNo: "RD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_528.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_528.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD20",
      "소왓",
      "정령",
      "가짜 조형물",
      "천지인 - 정령의 숲 초입",
      "소형",
    ],
  },
  {
    id: "illustration-RD21",
    name: "겅한댄하멍 남매",
    inventoryNo: "RD21",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_529.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_529.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD21",
      "겅한댄하멍 남매",
      "정령",
      "돌",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD22",
    name: "겅하잰햄신디 형제",
    inventoryNo: "RD22",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_530.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_530.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD22",
      "겅하잰햄신디 형제",
      "정령",
      "가짜 조형물",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD23",
    name: "삼신 참나무",
    inventoryNo: "RD23",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_531.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_531.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD23",
      "삼신 참나무",
      "정령",
      "아티팩트",
      "천지인 - 정령의 숲 초입",
      "대형",
    ],
  },
  {
    id: "illustration-RD24",
    name: "게네",
    inventoryNo: "RD24",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_532.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_532.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD24",
      "게네",
      "동물",
      "영물",
      "천지인 - 정령의 숲 초입",
      "소형",
    ],
  },
  {
    id: "illustration-RD25",
    name: "몽구름",
    inventoryNo: "RD25",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_533.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_533.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD25",
      "몽구름",
      "정령",
      "돌",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD26",
    name: "못이룬 손톱",
    inventoryNo: "RD26",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_534.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_534.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD26",
      "못이룬 손톱",
      "정령",
      "돌",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD27",
    name: "계약된 결속자",
    inventoryNo: "RD27",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_535.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_535.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD27",
      "계약된 결속자",
      "정령",
      "돌",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD28",
    name: "억눌린 오름",
    inventoryNo: "RD28",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_536.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_536.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD28",
      "억눌린 오름",
      "정령",
      "돌",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "illustration-RD29",
    name: "삼신 오름",
    inventoryNo: "RD29",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_537.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_537.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD29",
      "삼신 오름",
      "정령",
      "돌",
      "천지인 - 정령의 숲 초입",
      "대형",
    ],
  },
  {
    id: "illustration-RD30",
    name: "길주",
    inventoryNo: "RD30",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_538.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_538.webp",
    tags: ["도깨비", "일러스트", "RD30", "길주", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD31",
    name: "금리",
    inventoryNo: "RD31",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_539.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_539.webp",
    tags: ["도깨비", "일러스트", "RD31", "금리", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD32",
    name: "혁장",
    inventoryNo: "RD32",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_540.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_540.webp",
    tags: ["도깨비", "일러스트", "RD32", "혁장", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD33",
    name: "미지",
    inventoryNo: "RD33",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_541.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_541.webp",
    tags: ["도깨비", "일러스트", "RD33", "미지", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD34",
    name: "자명",
    inventoryNo: "RD34",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_542.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_542.webp",
    tags: ["도깨비", "일러스트", "RD34", "자명", "영혼", "퐁당", "중형"],
  },
  {
    id: "illustration-RD35",
    name: "봉수",
    inventoryNo: "RD35",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_543.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_543.webp",
    tags: ["도깨비", "일러스트", "RD35", "봉수", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD36",
    name: "서불",
    inventoryNo: "RD36",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_544.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_544.webp",
    tags: ["도깨비", "일러스트", "RD36", "서불", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD37",
    name: "소미",
    inventoryNo: "RD37",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_545.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_545.webp",
    tags: ["도깨비", "일러스트", "RD37", "소미", "퐁당", "중형"],
  },
  {
    id: "illustration-RD38",
    name: "자림",
    inventoryNo: "RD38",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_546.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_546.webp",
    tags: ["도깨비", "일러스트", "RD38", "자림", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD39",
    name: "중진",
    inventoryNo: "RD39",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_547.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_547.webp",
    tags: ["도깨비", "일러스트", "RD39", "중진", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD40",
    name: "마리노신",
    inventoryNo: "RD40",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_548.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_548.webp",
    tags: ["도깨비", "일러스트", "RD40", "마리노신", "영혼", "퐁당", "중형"],
  },
  {
    id: "illustration-RD41",
    name: "라구",
    inventoryNo: "RD41",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_549.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_549.webp",
    tags: ["도깨비", "일러스트", "RD41", "라구", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD42",
    name: "다제",
    inventoryNo: "RD42",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_550.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_550.webp",
    tags: ["도깨비", "일러스트", "RD42", "다제", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD43",
    name: "라자",
    inventoryNo: "RD43",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_551.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_551.webp",
    tags: ["도깨비", "일러스트", "RD43", "라자", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD44",
    name: "진묘",
    inventoryNo: "RD44",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_552.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_552.webp",
    tags: ["도깨비", "일러스트", "RD44", "진묘", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD45",
    name: "빈라",
    inventoryNo: "RD45",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_553.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_553.webp",
    tags: ["도깨비", "일러스트", "RD45", "빈라", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD46",
    name: "실무",
    inventoryNo: "RD46",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_554.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_554.webp",
    tags: ["도깨비", "일러스트", "RD46", "실무", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD47",
    name: "오루",
    inventoryNo: "RD47",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_555.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_555.webp",
    tags: ["도깨비", "일러스트", "RD47", "오루", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD48",
    name: "소진홍",
    inventoryNo: "RD48",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_556.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_556.webp",
    tags: ["도깨비", "일러스트", "RD48", "소진홍", "퐁당", "중형"],
  },
  {
    id: "illustration-RD49",
    name: "송무",
    inventoryNo: "RD49",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_557.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_557.webp",
    tags: ["도깨비", "일러스트", "RD49", "송무", "퐁당", "소형"],
  },
  {
    id: "illustration-RD50",
    name: "남겨진 쎄시봉 버섯 쌍둥이",
    inventoryNo: "RD50",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_558.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_558.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD50",
      "남겨진 쎄시봉 버섯 쌍둥이",
      "식물",
      "퐁당",
      "중형",
    ],
  },
  {
    id: "illustration-RD51",
    name: "희두",
    inventoryNo: "RD51",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_559.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_559.webp",
    tags: ["도깨비", "일러스트", "RD51", "희두", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD52",
    name: "다루",
    inventoryNo: "RD52",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_560.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_560.webp",
    tags: ["도깨비", "일러스트", "RD52", "다루", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD53",
    name: "동민",
    inventoryNo: "RD53",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_561.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_561.webp",
    tags: ["도깨비", "일러스트", "RD53", "동민", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD54",
    name: "주시",
    inventoryNo: "RD54",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_562.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_562.webp",
    tags: ["도깨비", "일러스트", "RD54", "주시", "퐁당", "중형"],
  },
  {
    id: "illustration-RD55",
    name: "호화",
    inventoryNo: "RD55",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_563.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_563.webp",
    tags: ["도깨비", "일러스트", "RD55", "호화", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD56",
    name: "송우",
    inventoryNo: "RD56",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_564.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_564.webp",
    tags: ["도깨비", "일러스트", "RD56", "송우", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD57",
    name: "지석",
    inventoryNo: "RD57",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_565.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_565.webp",
    tags: ["도깨비", "일러스트", "RD57", "지석", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD58",
    name: "솔애",
    inventoryNo: "RD58",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_566.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_566.webp",
    tags: ["도깨비", "일러스트", "RD58", "솔애", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD59",
    name: "강소",
    inventoryNo: "RD59",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_567.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_567.webp",
    tags: ["도깨비", "일러스트", "RD59", "강소", "퐁당", "소형"],
  },
  {
    id: "illustration-RD60",
    name: "주살",
    inventoryNo: "RD60",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_568.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_568.webp",
    tags: ["도깨비", "일러스트", "RD60", "주살", "영혼", "퐁당", "중형"],
  },
  {
    id: "illustration-RD61",
    name: "형구",
    inventoryNo: "RD61",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_569.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_569.webp",
    tags: ["도깨비", "일러스트", "RD61", "형구", "퐁당", "중형"],
  },
  {
    id: "illustration-RD62",
    name: "방신",
    inventoryNo: "RD62",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_570.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_570.webp",
    tags: ["도깨비", "일러스트", "RD62", "방신", "퐁당", "소형"],
  },
  {
    id: "illustration-RD63",
    name: "파미도",
    inventoryNo: "RD63",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_571.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_571.webp",
    tags: ["도깨비", "일러스트", "RD63", "파미도", "퐁당", "소형"],
  },
  {
    id: "illustration-RD64",
    name: "민근",
    inventoryNo: "RD64",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_572.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_572.webp",
    tags: ["도깨비", "일러스트", "RD64", "민근", "퐁당", "소형"],
  },
  {
    id: "illustration-RD65",
    name: "진도",
    inventoryNo: "RD65",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_573.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_573.webp",
    tags: ["도깨비", "일러스트", "RD65", "진도", "퐁당", "소형"],
  },
  {
    id: "illustration-RD66",
    name: "이슬",
    inventoryNo: "RD66",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_574.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_574.webp",
    tags: ["도깨비", "일러스트", "RD66", "이슬", "퐁당", "소형"],
  },
  {
    id: "illustration-RD67",
    name: "서진",
    inventoryNo: "RD67",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_575.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_575.webp",
    tags: ["도깨비", "일러스트", "RD67", "서진", "퐁당", "소형"],
  },
  {
    id: "illustration-RD68",
    name: "정실",
    inventoryNo: "RD68",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_576.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_576.webp",
    tags: ["도깨비", "일러스트", "RD68", "정실", "퐁당", "소형"],
  },
  {
    id: "illustration-RD69",
    name: "막수",
    inventoryNo: "RD69",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_577.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_577.webp",
    tags: ["도깨비", "일러스트", "RD69", "막수", "퐁당", "소형"],
  },
  {
    id: "illustration-RD70",
    name: "경진",
    inventoryNo: "RD70",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_578.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_578.webp",
    tags: ["도깨비", "일러스트", "RD70", "경진", "퐁당", "소형"],
  },
  {
    id: "illustration-RD71",
    name: "시몬",
    inventoryNo: "RD71",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_579.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_579.webp",
    tags: ["도깨비", "일러스트", "RD71", "시몬", "돌", "퐁당", "중형"],
  },
  {
    id: "illustration-RD72",
    name: "동수",
    inventoryNo: "RD72",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_580.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_580.webp",
    tags: ["도깨비", "일러스트", "RD72", "동수", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD73",
    name: "지음",
    inventoryNo: "RD73",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_581.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_581.webp",
    tags: ["도깨비", "일러스트", "RD73", "지음", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD74",
    name: "막수",
    inventoryNo: "RD74",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_582.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_582.webp",
    tags: ["도깨비", "일러스트", "RD74", "막수", "영혼", "돌", "퐁당", "중형"],
  },
  {
    id: "illustration-RD75",
    name: "완달",
    inventoryNo: "RD75",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_583.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_583.webp",
    tags: ["도깨비", "일러스트", "RD75", "완달", "퐁당", "중형"],
  },
  {
    id: "illustration-RD76",
    name: "소영, 영수",
    inventoryNo: "RD76",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_584.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_584.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD76",
      "소영, 영수",
      "영혼",
      "돌",
      "퐁당",
      "소형, 소형",
    ],
  },
  {
    id: "illustration-RD77",
    name: "찬수",
    inventoryNo: "RD77",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_585.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_585.webp",
    tags: ["도깨비", "일러스트", "RD77", "찬수", "퐁당", "중형"],
  },
  {
    id: "illustration-RD78",
    name: "아중",
    inventoryNo: "RD78",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_586.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_586.webp",
    tags: ["도깨비", "일러스트", "RD78", "아중", "영혼", "돌", "퐁당", "중형"],
  },
  {
    id: "illustration-RD79",
    name: "석진",
    inventoryNo: "RD79",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_587.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_587.webp",
    tags: ["도깨비", "일러스트", "RD79", "석진", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD80",
    name: "종달",
    inventoryNo: "RD80",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_588.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_588.webp",
    tags: ["도깨비", "일러스트", "RD80", "종달", "퐁당", "초소형"],
  },
  {
    id: "illustration-RD81",
    name: "자림",
    inventoryNo: "RD81",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_589.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_589.webp",
    tags: ["도깨비", "일러스트", "RD81", "자림", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD82",
    name: " 석동지",
    inventoryNo: "RD82",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_590.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_590.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD82",
      "석동지",
      "영혼",
      "돌",
      "퐁당",
      "소형",
    ],
  },
  {
    id: "illustration-RD83",
    name: "슬기",
    inventoryNo: "RD83",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_591.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_591.webp",
    tags: ["도깨비", "일러스트", "RD83", "슬기", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD84",
    name: "아진",
    inventoryNo: "RD84",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_592.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_592.webp",
    tags: ["도깨비", "일러스트", "RD84", "아진", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD85",
    name: "명아",
    inventoryNo: "RD85",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_593.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_593.webp",
    tags: ["도깨비", "일러스트", "RD85", "명아", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD86",
    name: "진풍",
    inventoryNo: "RD86",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_594.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_594.webp",
    tags: ["도깨비", "일러스트", "RD86", "진풍", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD87",
    name: "류진",
    inventoryNo: "RD87",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_595.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_595.webp",
    tags: ["도깨비", "일러스트", "RD87", "류진", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD88",
    name: "변웅",
    inventoryNo: "RD88",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_596.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_596.webp",
    tags: ["도깨비", "일러스트", "RD88", "변웅", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD89",
    name: "추동",
    inventoryNo: "RD89",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_597.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_597.webp",
    tags: ["도깨비", "일러스트", "RD89", "추동", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD90",
    name: "안빈",
    inventoryNo: "RD90",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_598.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_598.webp",
    tags: ["도깨비", "일러스트", "RD90", "안빈", "영혼", "퐁당", "소형"],
  },
  {
    id: "illustration-RD91",
    name: "임슬",
    inventoryNo: "RD91",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_599.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_599.webp",
    tags: ["도깨비", "일러스트", "RD91", "임슬", "영혼", "돌", "퐁당", "중형"],
  },
  {
    id: "illustration-RD92",
    name: "수림",
    inventoryNo: "RD92",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_600.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_600.webp",
    tags: ["도깨비", "일러스트", "RD92", "수림", "영혼", "퐁당", "중형"],
  },
  {
    id: "illustration-RD93",
    name: "진호, 호진",
    inventoryNo: "RD93",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_601.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_601.webp",
    tags: [
      "도깨비",
      "일러스트",
      "RD93",
      "진호, 호진",
      "영혼",
      "퐁당",
      "소형, 소형",
    ],
  },
  {
    id: "illustration-RD94",
    name: "선식",
    inventoryNo: "RD94",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_602.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_602.webp",
    tags: ["도깨비", "일러스트", "RD94", "선식", "영혼", "돌", "퐁당", "중형"],
  },
  {
    id: "illustration-RD95",
    name: "갑환",
    inventoryNo: "RD95",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_603.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_603.webp",
    tags: ["도깨비", "일러스트", "RD95", "갑환", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD96",
    name: "호석",
    inventoryNo: "RD96",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_604.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_604.webp",
    tags: ["도깨비", "일러스트", "RD96", "호석", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD97",
    name: "창호",
    inventoryNo: "RD97",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_605.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_605.webp",
    tags: ["도깨비", "일러스트", "RD97", "창호", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD98",
    name: "김청",
    inventoryNo: "RD98",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_606.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_606.webp",
    tags: ["도깨비", "일러스트", "RD98", "김청", "영혼", "돌", "퐁당", "소형"],
  },
  {
    id: "illustration-RD99",
    name: "성신",
    inventoryNo: "RD99",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_607.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_607.webp",
    tags: ["도깨비", "일러스트", "RD99", "성신", "영혼", "돌", "퐁당", "중형"],
  },
  {
    id: "illustration-SD1",
    name: "곤파 방카르",
    inventoryNo: "SD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_608.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_608.webp",
    tags: [
      "도깨비",
      "일러스트",
      "SD1",
      "곤파 방카르",
      "변종",
      "천지인 - 정령의 숲",
      "소형",
    ],
  },
  {
    id: "illustration-SD2",
    name: "",
    inventoryNo: "SD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_609.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_609.webp",
    tags: [
      "도깨비",
      "일러스트",
      "SD2",
      "정령",
      "돌",
      "천지인 - 정령의 숲",
      "초소형",
    ],
  },
  {
    id: "illustration-SD3",
    name: "",
    inventoryNo: "SD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_610.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_610.webp",
    tags: ["도깨비", "일러스트", "SD3", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD4",
    name: "",
    inventoryNo: "SD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_611.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_611.webp",
    tags: ["도깨비", "일러스트", "SD4", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD5",
    name: "",
    inventoryNo: "SD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_612.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_612.webp",
    tags: ["도깨비", "일러스트", "SD5", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD6",
    name: "",
    inventoryNo: "SD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_613.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_613.webp",
    tags: ["도깨비", "일러스트", "SD6", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD7",
    name: "",
    inventoryNo: "SD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_614.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_614.webp",
    tags: ["도깨비", "일러스트", "SD7", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD8",
    name: "",
    inventoryNo: "SD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_615.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_615.webp",
    tags: ["도깨비", "일러스트", "SD8", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD9",
    name: "",
    inventoryNo: "SD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_616.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_616.webp",
    tags: ["도깨비", "일러스트", "SD9", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD10",
    name: "",
    inventoryNo: "SD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_617.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_617.webp",
    tags: ["도깨비", "일러스트", "SD10", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD11",
    name: "",
    inventoryNo: "SD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_618.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_618.webp",
    tags: ["도깨비", "일러스트", "SD11", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD12",
    name: "",
    inventoryNo: "SD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_619.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_619.webp",
    tags: ["도깨비", "일러스트", "SD12", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD13",
    name: "",
    inventoryNo: "SD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_620.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_620.webp",
    tags: ["도깨비", "일러스트", "SD13", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD14",
    name: "",
    inventoryNo: "SD14",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_621.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_621.webp",
    tags: ["도깨비", "일러스트", "SD14", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD15",
    name: "",
    inventoryNo: "SD15",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_622.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_622.webp",
    tags: ["도깨비", "일러스트", "SD15", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD16",
    name: "",
    inventoryNo: "SD16",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_623.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_623.webp",
    tags: ["도깨비", "일러스트", "SD16", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD17",
    name: "",
    inventoryNo: "SD17",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_624.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_624.webp",
    tags: ["도깨비", "일러스트", "SD17", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD18",
    name: "",
    inventoryNo: "SD18",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_625.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_625.webp",
    tags: ["도깨비", "일러스트", "SD18", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD19",
    name: "",
    inventoryNo: "SD19",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_626.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_626.webp",
    tags: ["도깨비", "일러스트", "SD19", "정령", "돌", "천지인 - 정령의 숲"],
  },
  {
    id: "illustration-SD20",
    name: "",
    inventoryNo: "SD20",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_627.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_627.webp",
    tags: [
      "도깨비",
      "일러스트",
      "SD20",
      "영혼",
      "그림자 셰르파 부족",
      "천지인 - 정령의 숲",
    ],
  },
  {
    id: "illustration-TD1",
    name: "",
    inventoryNo: "TD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_628.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_628.webp",
    tags: ["도깨비", "일러스트", "TD1", "토그리 마을"],
  },
  {
    id: "illustration-TD2",
    name: "",
    inventoryNo: "TD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_629.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_629.webp",
    tags: [
      "도깨비",
      "일러스트",
      "TD2",
      "영혼",
      "그림자 셰르파 부족",
      "토그리 마을",
    ],
  },
  {
    id: "illustration-TD3",
    name: "",
    inventoryNo: "TD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_630.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_630.webp",
    tags: ["도깨비", "일러스트", "TD3", "만물", "토그리 마을"],
  },
  {
    id: "illustration-TD4",
    name: "",
    inventoryNo: "TD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_631.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_631.webp",
    tags: ["도깨비", "일러스트", "TD4", "만물", "토그리 마을"],
  },
  {
    id: "illustration-TD5",
    name: "",
    inventoryNo: "TD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_632.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_632.webp",
    tags: ["도깨비", "일러스트", "TD5", "만물", "토그리 마을"],
  },
  {
    id: "illustration-TD6",
    name: "",
    inventoryNo: "TD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_633.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_633.webp",
    tags: ["도깨비", "일러스트", "TD6", "만물", "토그리 마을"],
  },
  {
    id: "illustration-TD7",
    name: "",
    inventoryNo: "TD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_634.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_634.webp",
    tags: ["도깨비", "일러스트", "TD7", "만물", "토그리 마을"],
  },
  {
    id: "illustration-TD8",
    name: "",
    inventoryNo: "TD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_635.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_635.webp",
    tags: ["도깨비", "일러스트", "TD8", "만물", "토그리 마을"],
  },
  {
    id: "illustration-TD9",
    name: "",
    inventoryNo: "TD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_636.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_636.webp",
    tags: ["도깨비", "일러스트", "TD9", "만물", "토그리 마을"],
  },
  {
    id: "illustration-TD10",
    name: "",
    inventoryNo: "TD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_637.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_637.webp",
    tags: ["도깨비", "일러스트", "TD10", "만물", "토그리 마을"],
  },
  {
    id: "illustration-TD11",
    name: "",
    inventoryNo: "TD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_638.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_638.webp",
    tags: ["도깨비", "일러스트", "TD11", "만물", "토그리 마을"],
  },
  {
    id: "illustration-UD1",
    name: "",
    inventoryNo: "UD1",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_639.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_639.webp",
    tags: ["도깨비", "일러스트", "UD1", "정령", "밤밤"],
  },
  {
    id: "illustration-UD2",
    name: "",
    inventoryNo: "UD2",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_640.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_640.webp",
    tags: ["도깨비", "일러스트", "UD2", "정령", "밤밤"],
  },
  {
    id: "illustration-UD3",
    name: "",
    inventoryNo: "UD3",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_641.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_641.webp",
    tags: ["도깨비", "일러스트", "UD3", "정령", "밤밤"],
  },
  {
    id: "illustration-UD4",
    name: "",
    inventoryNo: "UD4",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_642.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_642.webp",
    tags: ["도깨비", "일러스트", "UD4", "정령", "밤밤"],
  },
  {
    id: "illustration-UD5",
    name: "",
    inventoryNo: "UD5",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_643.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_643.webp",
    tags: ["도깨비", "일러스트", "UD5", "정령", "밤밤"],
  },
  {
    id: "illustration-UD6",
    name: "",
    inventoryNo: "UD6",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_644.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_644.webp",
    tags: ["도깨비", "일러스트", "UD6", "정령", "밤밤"],
  },
  {
    id: "illustration-UD7",
    name: "",
    inventoryNo: "UD7",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_645.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_645.webp",
    tags: ["도깨비", "일러스트", "UD7", "정령", "밤밤"],
  },
  {
    id: "illustration-UD8",
    name: "",
    inventoryNo: "UD8",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_646.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_646.webp",
    tags: ["도깨비", "일러스트", "UD8", "정령", "밤밤"],
  },
  {
    id: "illustration-UD9",
    name: "",
    inventoryNo: "UD9",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_647.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_647.webp",
    tags: ["도깨비", "일러스트", "UD9", "정령", "밤밤"],
  },
  {
    id: "illustration-UD10",
    name: "",
    inventoryNo: "UD10",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_648.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_648.webp",
    tags: ["도깨비", "일러스트", "UD10", "정령", "밤밤"],
  },
  {
    id: "illustration-UD11",
    name: "",
    inventoryNo: "UD11",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_649.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_649.webp",
    tags: ["도깨비", "일러스트", "UD11", "정령", "밤밤"],
  },
  {
    id: "illustration-UD12",
    name: "",
    inventoryNo: "UD12",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_650.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_650.webp",
    tags: ["도깨비", "일러스트", "UD12", "정령", "밤밤"],
  },
  {
    id: "illustration-UD13",
    name: "",
    inventoryNo: "UD13",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_651.webp",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/optimized_illustrations/DOKKEBI_651.webp",
    tags: ["도깨비", "일러스트", "UD13", "정령", "밤밤"],
  },
  {
    id: "original-AD1",
    inventoryNo: "AD1",
    name: "101 (원오원)",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090611.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090611.jpg",
    tags: ["도깨비", "실물사진", "AD1", "101 (원오원)", "호이스", "대형"],
  },
  {
    id: "original-AD2",
    inventoryNo: "AD2",
    name: "타고난네 3총사",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090617.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090617.jpg",
    tags: ["도깨비", "실물사진", "AD2", "타고난네 3총사", "호이스", "초대형"],
  },
  {
    id: "original-AD3",
    inventoryNo: "AD3",
    name: "깨뽀졸",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100496.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100496.jpg",
    tags: ["도깨비", "실물사진", "AD3", "깨뽀졸", "호이스", "초대형"],
  },
  {
    id: "original-AD4",
    inventoryNo: "AD4",
    name: "몬조",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090643.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090643.jpg",
    tags: ["도깨비", "실물사진", "AD4", "몬조", "호이스", "중형"],
  },
  {
    id: "original-AD5",
    inventoryNo: "AD5",
    name: "암굴왕",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090654.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090654.jpg",
    tags: ["도깨비", "실물사진", "AD5", "암굴왕", "호이스", "소형"],
  },
  {
    id: "original-BD1",
    inventoryNo: "BD1",
    name: "피야",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090686.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090686.jpg",
    tags: ["도깨비", "실물사진", "BD1", "피야", "제아쿨", "중형"],
  },
  {
    id: "original-BD2",
    inventoryNo: "BD2",
    name: "두비다비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090691.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090691.jpg",
    tags: ["도깨비", "실물사진", "BD2", "두비다비", "제아쿨", "소형"],
  },
  {
    id: "original-BD3",
    inventoryNo: "BD3",
    name: "갓 (GOT)",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090694.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090694.jpg",
    tags: ["도깨비", "실물사진", "BD3", "갓 (GOT)", "제아쿨", "소형"],
  },
  {
    id: "original-BD4",
    inventoryNo: "BD4",
    name: "추누주",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090700.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090700.jpg",
    tags: ["도깨비", "실물사진", "BD4", "추누주", "제아쿨", "대형"],
  },
  {
    id: "original-BD5",
    inventoryNo: "BD5",
    name: "궁그무",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090703.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090703.jpg",
    tags: ["도깨비", "실물사진", "BD5", "궁그무", "제아쿨", "소형"],
  },
  {
    id: "original-BD6",
    inventoryNo: "BD6",
    name: "사라 wihtout ㅇ",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090705.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090705.jpg",
    tags: ["도깨비", "실물사진", "BD6", "사라 wihtout ㅇ", "제아쿨", "소형"],
  },
  {
    id: "original-BD7",
    inventoryNo: "BD7",
    name: "오리대감 우리마님",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090707.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090707.jpg",
    tags: ["도깨비", "실물사진", "BD7", "오리대감 우리마님", "제아쿨", "소형"],
  },
  {
    id: "original-BD8",
    inventoryNo: "BD8",
    name: "정체불명의 가죽",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090709.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090709.jpg",
    tags: ["도깨비", "실물사진", "BD8", "정체불명의 가죽", "제아쿨", "중형"],
  },
  {
    id: "original-BD9",
    inventoryNo: "BD9",
    name: "미슈",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090712.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090712.jpg",
    tags: ["도깨비", "실물사진", "BD9", "미슈", "제아쿨", "중형"],
  },
  {
    id: "original-BD10",
    inventoryNo: "BD10",
    name: "청구리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090718.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090718.jpg",
    tags: ["도깨비", "실물사진", "BD10", "청구리", "제아쿨", "소형"],
  },
  {
    id: "original-BD11",
    inventoryNo: "BD11",
    name: "하삼",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090721.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090721.jpg",
    tags: ["도깨비", "실물사진", "BD11", "하삼", "제아쿨", "소형"],
  },
  {
    id: "original-BD12",
    inventoryNo: "BD12",
    name: "네지",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090727.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090727.jpg",
    tags: ["도깨비", "실물사진", "BD12", "네지", "제아쿨", "소형"],
  },
  {
    id: "original-BD13",
    inventoryNo: "BD13",
    name: "마기",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090733.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090733.jpg",
    tags: ["도깨비", "실물사진", "BD13", "마기", "제아쿨", "소형"],
  },
  {
    id: "original-BD14",
    inventoryNo: "BD14",
    name: "촉수벌레 막내",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090742.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090742.jpg",
    tags: ["도깨비", "실물사진", "BD14", "촉수벌레 막내", "제아쿨", "소형"],
  },
  {
    id: "original-BD15",
    inventoryNo: "BD15",
    name: "대갈장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090748.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090748.jpg",
    tags: ["도깨비", "실물사진", "BD15", "대갈장군", "제아쿨", "소형"],
  },
  {
    id: "original-BD16",
    inventoryNo: "BD16",
    name: "야나야",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090754.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090754.jpg",
    tags: ["도깨비", "실물사진", "BD16", "야나야", "제아쿨", "중형"],
  },
  {
    id: "original-BD17",
    inventoryNo: "BD17",
    name: "야모야",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090760.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090760.jpg",
    tags: ["도깨비", "실물사진", "BD17", "야모야", "제아쿨", "중형"],
  },
  {
    id: "original-BD18",
    inventoryNo: "BD18",
    name: "수수깡",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090766.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090766.jpg",
    tags: ["도깨비", "실물사진", "BD18", "수수깡", "제아쿨", "중형"],
  },
  {
    id: "original-BD19",
    inventoryNo: "BD19",
    name: "지야불",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090772.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090772.jpg",
    tags: ["도깨비", "실물사진", "BD19", "지야불", "제아쿨", "소형"],
  },
  {
    id: "original-BD20",
    inventoryNo: "BD20",
    name: "오오니 조다느",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090778.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090778.jpg",
    tags: ["도깨비", "실물사진", "BD20", "오오니 조다느", "제아쿨", "중형"],
  },
  {
    id: "original-BD21",
    inventoryNo: "BD21",
    name: "스믈런의 증기 갑옷",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090784.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090784.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "BD21",
      "스믈런의 증기 갑옷",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "original-BD22",
    inventoryNo: "BD22",
    name: "스믈런",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090790.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090790.jpg",
    tags: ["도깨비", "실물사진", "BD22", "스믈런", "제아쿨", "중형"],
  },
  {
    id: "original-BD23",
    inventoryNo: "BD23",
    name: "초",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090796.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090796.jpg",
    tags: ["도깨비", "실물사진", "BD23", "초", "제아쿨", "중형"],
  },
  {
    id: "original-BD24",
    inventoryNo: "BD24",
    name: "누각",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090802.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090802.jpg",
    tags: ["도깨비", "실물사진", "BD24", "누각", "제아쿨", "대형"],
  },
  {
    id: "original-CD1",
    inventoryNo: "CD1",
    name: "버섯 하봉",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090814.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090814.jpg",
    tags: ["도깨비", "실물사진", "CD1", "버섯 하봉", "제아쿨", "중형"],
  },
  {
    id: "original-CD2",
    inventoryNo: "CD2",
    name: "왕도깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100494.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100494.jpg",
    tags: ["도깨비", "실물사진", "CD2", "왕도깨비", "제아쿨", "초대형"],
  },
  {
    id: "original-CD3",
    inventoryNo: "CD3",
    name: "여인초 스캇",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090826.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090826.jpg",
    tags: ["도깨비", "실물사진", "CD3", "여인초 스캇", "제아쿨", "중형"],
  },
  {
    id: "original-CD4",
    inventoryNo: "CD4",
    name: "쎄시봉 여인초",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090832.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090832.jpg",
    tags: ["도깨비", "실물사진", "CD4", "쎄시봉 여인초", "제아쿨", "중형"],
  },
  {
    id: "original-CD5",
    inventoryNo: "CD5",
    name: "봄이어미의 돌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090835.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090835.jpg",
    tags: ["도깨비", "실물사진", "CD5", "봄이어미의 돌", "제아쿨", "대형"],
  },
  {
    id: "original-CD6",
    inventoryNo: "CD6",
    name: "촉수 벌레 첫째의 돌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090844.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090844.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD6",
      "촉수 벌레 첫째의 돌",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "original-CD7",
    inventoryNo: "CD7",
    name: "외로운 논백버미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090850.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090850.jpg",
    tags: ["도깨비", "실물사진", "CD7", "외로운 논백버미", "제아쿨", "소형"],
  },
  {
    id: "original-CD8",
    inventoryNo: "CD8",
    name: "쾌성 도깨비가 버려둔 돌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090862.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090862.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD8",
      "쾌성 도깨비가 버려둔 돌",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "original-CD9",
    inventoryNo: "CD9",
    name: "도디리도르의 신발",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090868.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090868.jpg",
    tags: ["도깨비", "실물사진", "CD9", "도디리도르의 신발", "제아쿨", "소형"],
  },
  {
    id: "original-CD10",
    inventoryNo: "CD10",
    name: "버크",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090874.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090874.jpg",
    tags: ["도깨비", "실물사진", "CD10", "버크", "제아쿨", "소형"],
  },
  {
    id: "original-CD11",
    inventoryNo: "CD11",
    name: "피지와 길섶나그네의 밀애",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090880.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090880.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD11",
      "피지와 길섶나그네의 밀애",
      "제아쿨",
      "초소형",
    ],
  },
  {
    id: "original-CD12",
    inventoryNo: "CD12",
    name: "이십일장군과 사십장군, 그리고 수수깡의 성기",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090886.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090886.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD12",
      "이십일장군과 사십장군, 그리고 수수깡의 성기",
      "제아쿨",
      "초소형",
    ],
  },
  {
    id: "original-CD13",
    inventoryNo: "CD13",
    name: "버려진 키",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090892.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090892.jpg",
    tags: ["도깨비", "실물사진", "CD13", "버려진 키", "제아쿨", "초소형"],
  },
  {
    id: "original-CD14",
    inventoryNo: "CD14",
    name: "설문대할망의 가면",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090898.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090898.jpg",
    tags: ["도깨비", "실물사진", "CD14", "설문대할망의 가면", "제아쿨", "소형"],
  },
  {
    id: "original-CD15",
    inventoryNo: "CD15",
    name: "머랭햄시",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090904.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090904.jpg",
    tags: ["도깨비", "실물사진", "CD15", "머랭햄시", "제아쿨", "초소형"],
  },
  {
    id: "original-CD16",
    inventoryNo: "CD16",
    name: "재빠른 마기의 몸",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090910.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090910.jpg",
    tags: ["도깨비", "실물사진", "CD16", "재빠른 마기의 몸", "제아쿨", "소형"],
  },
  {
    id: "original-CD17",
    inventoryNo: "CD17",
    name: "소원탑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090919.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090919.jpg",
    tags: ["도깨비", "실물사진", "CD17", "소원탑", "제아쿨", "초소형"],
  },
  {
    id: "original-CD18",
    inventoryNo: "CD18",
    name: "일몽령",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090925.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090925.jpg",
    tags: ["도깨비", "실물사진", "CD18", "일몽령", "제아쿨", "초소형"],
  },
  {
    id: "original-CD19",
    inventoryNo: "CD19",
    name: "도디리도르",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090931.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090931.jpg",
    tags: ["도깨비", "실물사진", "CD19", "도디리도르", "제아쿨", "소형"],
  },
  {
    id: "original-CD20",
    inventoryNo: "CD20",
    name: "소굴",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090934.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090934.jpg",
    tags: ["도깨비", "실물사진", "CD20", "소굴", "제아쿨", "중형"],
  },
  {
    id: "original-CD21",
    inventoryNo: "CD21",
    name: "소굴들",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090946.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090946.jpg",
    tags: ["도깨비", "실물사진", "CD21", "소굴들", "제아쿨", "중형"],
  },
  {
    id: "original-CD22",
    inventoryNo: "CD22",
    name: "미무무",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090952.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090952.jpg",
    tags: ["도깨비", "실물사진", "CD22", "미무무", "제아쿨", "소형"],
  },
  {
    id: "original-CD23",
    inventoryNo: "CD23",
    name: "사상가 ‘다 눗’",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090958.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090958.jpg",
    tags: ["도깨비", "실물사진", "CD23", "사상가 ‘다 눗’", "제아쿨", "초소형"],
  },
  {
    id: "original-CD24",
    inventoryNo: "CD24",
    name: "작은 도깨비 폴",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090961.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090961.jpg",
    tags: ["도깨비", "실물사진", "CD24", "작은 도깨비 폴", "제아쿨", "초소형"],
  },
  {
    id: "original-CD25",
    inventoryNo: "CD25",
    name: "동재",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090970.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090970.jpg",
    tags: ["도깨비", "실물사진", "CD25", "동재", "제아쿨", "소형"],
  },
  {
    id: "original-CD26",
    inventoryNo: "CD26",
    name: "통굴",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090973.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090973.jpg",
    tags: ["도깨비", "실물사진", "CD26", "통굴", "제아쿨", "초소형"],
  },
  {
    id: "original-CD27",
    inventoryNo: "CD27",
    name: "마왕과 칠십사장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090979.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090979.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD27",
      "마왕과 칠십사장군",
      "제아쿨",
      "초소형",
    ],
  },
  {
    id: "original-CD28",
    inventoryNo: "CD28",
    name: "비운의 돌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090988.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090988.jpg",
    tags: ["도깨비", "실물사진", "CD28", "비운의 돌", "제아쿨", "초소형"],
  },
  {
    id: "original-CD29",
    inventoryNo: "CD29",
    name: "디졸",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1090994.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1090994.jpg",
    tags: ["도깨비", "실물사진", "CD29", "디졸", "제아쿨", "초소형"],
  },
  {
    id: "original-CD30",
    inventoryNo: "CD30",
    name: "몹비탈",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1091000.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1091000.jpg",
    tags: ["도깨비", "실물사진", "CD30", "몹비탈", "제아쿨", "중형"],
  },
  {
    id: "original-CD31",
    inventoryNo: "CD31",
    name: "단두오름",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100006.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100006.jpg",
    tags: ["도깨비", "실물사진", "CD31", "단두오름", "제아쿨", "초대형"],
  },
  {
    id: "original-CD32",
    inventoryNo: "CD32",
    name: "자질란",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100015.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100015.jpg",
    tags: ["도깨비", "실물사진", "CD32", "자질란", "제아쿨", "중형"],
  },
  {
    id: "original-CT1",
    inventoryNo: "CT1",
    name: "도깨비 신 나무",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100018.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100018.jpg",
    tags: ["도깨비", "실물사진", "CT1", "도깨비 신 나무", "제아쿨", "대형"],
  },
  {
    id: "original-CD33",
    inventoryNo: "CD33",
    name: "삼백육십사장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100039.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100039.jpg",
    tags: ["도깨비", "실물사진", "CD33", "삼백육십사장군", "제아쿨", "중형"],
  },
  {
    id: "original-CD34",
    inventoryNo: "CD34",
    name: "사선장",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100042.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100042.jpg",
    tags: ["도깨비", "실물사진", "CD34", "사선장", "제아쿨", "중형"],
  },
  {
    id: "original-CD35",
    inventoryNo: "CD35",
    name: "빚",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100051.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100051.jpg",
    tags: ["도깨비", "실물사진", "CD35", "빚", "제아쿨", "중형"],
  },
  {
    id: "original-CD36",
    inventoryNo: "CD36",
    name: "바거스",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100057.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100057.jpg",
    tags: ["도깨비", "실물사진", "CD36", "바거스", "제아쿨", "중형"],
  },
  {
    id: "original-CD37",
    inventoryNo: "CD37",
    name: "느영나영 좌측 탑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100069.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100069.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD37",
      "느영나영 좌측 탑",
      "제아쿨",
      "초대형",
    ],
  },
  {
    id: "original-CD38",
    inventoryNo: "CD38",
    name: "에라",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100075.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100075.jpg",
    tags: ["도깨비", "실물사진", "CD38", "에라", "제아쿨", "중형"],
  },
  {
    id: "original-CD39",
    inventoryNo: "CD39",
    name: "칫",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100081.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100081.jpg",
    tags: ["도깨비", "실물사진", "CD39", "칫", "제아쿨", "중형"],
  },
  {
    id: "original-CD40",
    inventoryNo: "CD40",
    name: "하이킥커",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100091.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100091.jpg",
    tags: ["도깨비", "실물사진", "CD40", "하이킥커", "제아쿨", "중형"],
  },
  {
    id: "original-CD41",
    inventoryNo: "CD41",
    name: "헛",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100093.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100093.jpg",
    tags: ["도깨비", "실물사진", "CD41", "헛", "제아쿨", "중형"],
  },
  {
    id: "original-CD42",
    inventoryNo: "CD42",
    name: "이짜",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100099.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100099.jpg",
    tags: ["도깨비", "실물사진", "CD42", "이짜", "제아쿨", "중형"],
  },
  {
    id: "original-CD43",
    inventoryNo: "CD43",
    name: "파",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100102.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100102.jpg",
    tags: ["도깨비", "실물사진", "CD43", "파", "제아쿨", "중형"],
  },
  {
    id: "original-CD44",
    inventoryNo: "CD44",
    name: "티캇",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100108.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100108.jpg",
    tags: ["도깨비", "실물사진", "CD44", "티캇", "제아쿨", "중형"],
  },
  {
    id: "original-CD45",
    inventoryNo: "CD45",
    name: "지글",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100115.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100115.jpg",
    tags: ["도깨비", "실물사진", "CD45", "지글", "제아쿨", "중형"],
  },
  {
    id: "original-CD46",
    inventoryNo: "CD46",
    name: "때매",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100120.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100120.jpg",
    tags: ["도깨비", "실물사진", "CD46", "때매", "제아쿨", "중형"],
  },
  {
    id: "original-CD47",
    inventoryNo: "CD47",
    name: "그레",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100126.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100126.jpg",
    tags: ["도깨비", "실물사진", "CD47", "그레", "제아쿨", "중형"],
  },
  {
    id: "original-CD48",
    inventoryNo: "CD48",
    name: "구",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100132.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100132.jpg",
    tags: ["도깨비", "실물사진", "CD48", "구", "제아쿨", "중형"],
  },
  {
    id: "original-CD49",
    inventoryNo: "CD49",
    name: "카라리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100138.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100138.jpg",
    tags: ["도깨비", "실물사진", "CD49", "카라리", "제아쿨", "중형"],
  },
  {
    id: "original-CD50",
    inventoryNo: "CD50",
    name: "두붐",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100144.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100144.jpg",
    tags: ["도깨비", "실물사진", "CD50", "두붐", "제아쿨", "중형"],
  },
  {
    id: "original-CD51",
    inventoryNo: "CD51",
    name: "느영나영 우측탑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100150.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100150.jpg",
    tags: ["도깨비", "실물사진", "CD51", "느영나영 우측탑", "제아쿨", "초대형"],
  },
  {
    id: "original-CD52",
    inventoryNo: "CD52",
    name: "느영나영 후문",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100156.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100156.jpg",
    tags: ["도깨비", "실물사진", "CD52", "느영나영 후문", "제아쿨", "초대형"],
  },
  {
    id: "original-CD53",
    inventoryNo: "CD53",
    name: "옴옴",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100162.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100162.jpg",
    tags: ["도깨비", "실물사진", "CD53", "옴옴", "제아쿨", "중형"],
  },
  {
    id: "original-CD54",
    inventoryNo: "CD54",
    name: "앉은뱅이 아잉",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100168.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100168.jpg",
    tags: ["도깨비", "실물사진", "CD54", "앉은뱅이 아잉", "제아쿨", "중형"],
  },
  {
    id: "original-CD55",
    inventoryNo: "CD55",
    name: "나디알",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100175.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100175.jpg",
    tags: ["도깨비", "실물사진", "CD55", "나디알", "제아쿨", "중형"],
  },
  {
    id: "original-CD56",
    inventoryNo: "CD56",
    name: "짜라르",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100177.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100177.jpg",
    tags: ["도깨비", "실물사진", "CD56", "짜라르", "제아쿨", "중형"],
  },
  {
    id: "original-CD57",
    inventoryNo: "CD57",
    name: "소칠",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100189.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100189.jpg",
    tags: ["도깨비", "실물사진", "CD57", "소칠", "제아쿨", "소형"],
  },
  {
    id: "original-CD58",
    inventoryNo: "CD58",
    name: "누군가의 머리였던 네모난, 인자한 얼굴의 탕굴",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100201.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100201.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD58",
      "누군가의 머리였던 네모난, 인자한 얼굴의 탕굴",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "original-CD59",
    inventoryNo: "CD59",
    name: "누군가의 머리였던 반원 통굴",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100207.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100207.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD59",
      "누군가의 머리였던 반원 통굴",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "original-CD60",
    inventoryNo: "CD60",
    name: "누군가의 머리였던 네모난, 후회 가득한 얼굴의 통굴",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100213.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100213.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD60",
      "누군가의 머리였던 네모난, 후회 가득한 얼굴의 통굴",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "original-CD61",
    inventoryNo: "CD61",
    name: "요나프",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100219.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100219.jpg",
    tags: ["도깨비", "실물사진", "CD61", "요나프", "제아쿨", "중형"],
  },
  {
    id: "original-CD62",
    inventoryNo: "CD62",
    name: "누군가의 머리였던 분노 가득한 얼굴의 통굴",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100225.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100225.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD62",
      "누군가의 머리였던 분노 가득한 얼굴의 통굴",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "original-CD63",
    inventoryNo: "CD63",
    name: "허수 느영나영",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100231.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100231.jpg",
    tags: ["도깨비", "실물사진", "CD63", "허수 느영나영", "제아쿨", "중형"],
  },
  {
    id: "original-CD64",
    inventoryNo: "CD64",
    name: "잭(CD84)의 통굴",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100237.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100237.jpg",
    tags: ["도깨비", "실물사진", "CD64", "잭(CD84)의 통굴", "제아쿨", "중형"],
  },
  {
    id: "original-CD65",
    inventoryNo: "CD65",
    name: "케소르(CD83)의 돌이된 육신(CD65)\r\n",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100244.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100244.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD65",
      "케소르(CD83)의 돌이된 육신(CD65)",
      "제아쿨",
      "소형",
    ],
  },
  {
    id: "original-CD66",
    inventoryNo: "CD66",
    name: "잘못 참수한 나머지 두번 참수된 뾰족머리 통굴",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100246.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100246.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD66",
      "잘못 참수한 나머지 두번 참수된 뾰족머리 통굴",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "original-CD67",
    inventoryNo: "CD67",
    name: "오링",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100256.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100256.jpg",
    tags: ["도깨비", "실물사진", "CD67", "오링", "제아쿨", "소형"],
  },
  {
    id: "original-CD68",
    inventoryNo: "CD68",
    name: "칵투스",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100270.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100270.jpg",
    tags: ["도깨비", "실물사진", "CD68", "칵투스", "제아쿨", "중형"],
  },
  {
    id: "original-CD69",
    inventoryNo: "CD69",
    name: "가리오",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100276.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100276.jpg",
    tags: ["도깨비", "실물사진", "CD69", "가리오", "제아쿨", "중형"],
  },
  {
    id: "original-CD70",
    inventoryNo: "CD70",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100279.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100279.jpg",
    tags: ["도깨비", "실물사진", "CD70", "제아쿨", "중형"],
  },
  {
    id: "original-CD71",
    inventoryNo: "CD71",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100288.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100288.jpg",
    tags: ["도깨비", "실물사진", "CD71", "제아쿨", "중형"],
  },
  {
    id: "original-CD72",
    inventoryNo: "CD72",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100291.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100291.jpg",
    tags: ["도깨비", "실물사진", "CD72", "제아쿨", "중형"],
  },
  {
    id: "original-CD73",
    inventoryNo: "CD73",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100300.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100300.jpg",
    tags: ["도깨비", "실물사진", "CD73", "제아쿨", "중형"],
  },
  {
    id: "original-CD74",
    inventoryNo: "CD74",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100306.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100306.jpg",
    tags: ["도깨비", "실물사진", "CD74", "제아쿨", "중형"],
  },
  {
    id: "original-CD75",
    inventoryNo: "CD75",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100309.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100309.jpg",
    tags: ["도깨비", "실물사진", "CD75", "제아쿨", "중형"],
  },
  {
    id: "original-CD76",
    inventoryNo: "CD76",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100315.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100315.jpg",
    tags: ["도깨비", "실물사진", "CD76", "제아쿨", "중형"],
  },
  {
    id: "original-CD77",
    inventoryNo: "CD77",
    name: "제스트",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100321.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100321.jpg",
    tags: ["도깨비", "실물사진", "CD77", "제스트", "제아쿨", "중형"],
  },
  {
    id: "original-CD78",
    inventoryNo: "CD78",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100327.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100327.jpg",
    tags: ["도깨비", "실물사진", "CD78", "제아쿨", "중형"],
  },
  {
    id: "original-CD79",
    inventoryNo: "CD79",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100336.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100336.jpg",
    tags: ["도깨비", "실물사진", "CD79", "제아쿨", "중형"],
  },
  {
    id: "original-CD80",
    inventoryNo: "CD80",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100342.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100342.jpg",
    tags: ["도깨비", "실물사진", "CD80", "제아쿨", "중형"],
  },
  {
    id: "original-CD81",
    inventoryNo: "CD81",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100348.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100348.jpg",
    tags: ["도깨비", "실물사진", "CD81", "제아쿨", "중형"],
  },
  {
    id: "original-CD82",
    inventoryNo: "CD82",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100357.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100357.jpg",
    tags: ["도깨비", "실물사진", "CD82", "제아쿨", "중형"],
  },
  {
    id: "original-CD83",
    inventoryNo: "CD83",
    name: "케소르",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100363.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100363.jpg",
    tags: ["도깨비", "실물사진", "CD83", "케소르", "제아쿨", "중형"],
  },
  {
    id: "original-CD84",
    inventoryNo: "CD84",
    name: "잭",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100369.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100369.jpg",
    tags: ["도깨비", "실물사진", "CD84", "잭", "제아쿨", "중형"],
  },
  {
    id: "original-CD85",
    inventoryNo: "CD85",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100379.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100379.jpg",
    tags: ["도깨비", "실물사진", "CD85", "제아쿨", "중형"],
  },
  {
    id: "original-CD86",
    inventoryNo: "CD86",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100385.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100385.jpg",
    tags: ["도깨비", "실물사진", "CD86", "제아쿨", "중형"],
  },
  {
    id: "original-CD87",
    inventoryNo: "CD87",
    name: "스릉",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100391.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100391.jpg",
    tags: ["도깨비", "실물사진", "CD87", "스릉", "제아쿨", "중형"],
  },
  {
    id: "original-CD88",
    inventoryNo: "CD88",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100394.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100394.jpg",
    tags: ["도깨비", "실물사진", "CD88", "제아쿨", "중형"],
  },
  {
    id: "original-CD89",
    inventoryNo: "CD89",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100399.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100399.jpg",
    tags: ["도깨비", "실물사진", "CD89", "제아쿨", "중형"],
  },
  {
    id: "original-CD90",
    inventoryNo: "CD90",
    name: "세례안내자 ‘세세’",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100401.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100401.jpg",
    tags: ["도깨비", "실물사진", "CD90", "세례안내자 ‘세세’", "제아쿨", "소형"],
  },
  {
    id: "original-CD91",
    inventoryNo: "CD91",
    name: "키피",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100405.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100405.jpg",
    tags: ["도깨비", "실물사진", "CD91", "키피", "제아쿨", "중형"],
  },
  {
    id: "original-CD92",
    inventoryNo: "CD92",
    name: "쎄시봉 유카",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100409.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100409.jpg",
    tags: ["도깨비", "실물사진", "CD92", "쎄시봉 유카", "제아쿨", "대형"],
  },
  {
    id: "original-CD93",
    inventoryNo: "CD93",
    name: "쎄시봉 용설란",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100410.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100410.jpg",
    tags: ["도깨비", "실물사진", "CD93", "쎄시봉 용설란", "제아쿨", "중형"],
  },
  {
    id: "original-CD94",
    inventoryNo: "CD94",
    name: "쎄시봉 칵투스 (CD94)\r\n",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100417.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100417.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "CD94",
      "쎄시봉 칵투스 (CD94)",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "original-CD95",
    inventoryNo: "CD95",
    name: "연못깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100422.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100422.jpg",
    tags: ["도깨비", "실물사진", "CD95", "연못깨비", "제아쿨", "대형"],
  },
  {
    id: "original-DD1",
    inventoryNo: "DD1",
    name: "투씨-아",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100425.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100425.jpg",
    tags: ["도깨비", "실물사진", "DD1", "투씨-아", "제아쿨", "소형"],
  },
  {
    id: "original-DD2",
    inventoryNo: "DD2",
    name: "알껍데기",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100428.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100428.jpg",
    tags: ["도깨비", "실물사진", "DD2", "알껍데기", "제아쿨", "소형"],
  },
  {
    id: "original-DD3",
    inventoryNo: "DD3",
    name: "옐로우 아이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100430.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100430.jpg",
    tags: ["도깨비", "실물사진", "DD3", "옐로우 아이", "제아쿨", "소형"],
  },
  {
    id: "original-DD4",
    inventoryNo: "DD4",
    name: "피의 골렘",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100435.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100435.jpg",
    tags: ["도깨비", "실물사진", "DD4", "피의 골렘", "제아쿨", "중형"],
  },
  {
    id: "original-DD5",
    inventoryNo: "DD5",
    name: "체솟",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100439.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100439.jpg",
    tags: ["도깨비", "실물사진", "DD5", "체솟", "제아쿨", "소형"],
  },
  {
    id: "original-DD6",
    inventoryNo: "DD6",
    name: "디오스",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100441.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100441.jpg",
    tags: ["도깨비", "실물사진", "DD6", "디오스", "제아쿨", "중형"],
  },
  {
    id: "original-DD7",
    inventoryNo: "DD7",
    name: "코랏",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100444.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100444.jpg",
    tags: ["도깨비", "실물사진", "DD7", "코랏", "제아쿨", "중형"],
  },
  {
    id: "original-DD8",
    inventoryNo: "DD8",
    name: "칼리스퀘어",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100446.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100446.jpg",
    tags: ["도깨비", "실물사진", "DD8", "칼리스퀘어", "제아쿨", "소형"],
  },
  {
    id: "original-DD9",
    inventoryNo: "DD9",
    name: "칼리펭퀸",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100447.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100447.jpg",
    tags: ["도깨비", "실물사진", "DD9", "칼리펭퀸", "제아쿨", "소형"],
  },
  {
    id: "original-DD10",
    inventoryNo: "DD10",
    name: "야옹이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100452.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100452.jpg",
    tags: ["도깨비", "실물사진", "DD10", "야옹이", "제아쿨", "소형"],
  },
  {
    id: "original-DD11",
    inventoryNo: "DD11",
    name: "혹부리 돼지",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100455.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100455.jpg",
    tags: ["도깨비", "실물사진", "DD11", "혹부리 돼지", "제아쿨", "소형"],
  },
  {
    id: "original-DD12",
    inventoryNo: "DD12",
    name: "수지르라",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100457.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100457.jpg",
    tags: ["도깨비", "실물사진", "DD12", "수지르라", "제아쿨", "소형"],
  },
  {
    id: "original-DD13",
    inventoryNo: "DD13",
    name: "ROTH",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100459.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100459.jpg",
    tags: ["도깨비", "실물사진", "DD13", "ROTH", "제아쿨", "소형"],
  },
  {
    id: "original-DD14",
    inventoryNo: "DD14",
    name: "아리다",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100461.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100461.jpg",
    tags: ["도깨비", "실물사진", "DD14", "아리다", "제아쿨", "소형"],
  },
  {
    id: "original-DD15",
    inventoryNo: "DD15",
    name: "도깨비 신부",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100463.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100463.jpg",
    tags: ["도깨비", "실물사진", "DD15", "도깨비 신부", "제아쿨", "소형"],
  },
  {
    id: "original-DD16",
    inventoryNo: "DD16",
    name: "도깨비 신랑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100465.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100465.jpg",
    tags: ["도깨비", "실물사진", "DD16", "도깨비 신랑", "제아쿨", "소형"],
  },
  {
    id: "original-DD17",
    inventoryNo: "DD17",
    name: "쬬마숑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100467.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100467.jpg",
    tags: ["도깨비", "실물사진", "DD17", "쬬마숑", "제아쿨", "소형"],
  },
  {
    id: "original-DD18",
    inventoryNo: "DD18",
    name: "헨&텔",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100471.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100471.jpg",
    tags: ["도깨비", "실물사진", "DD18", "헨&텔", "제아쿨", "소형"],
  },
  {
    id: "original-DD19",
    inventoryNo: "DD19",
    name: "돈잘레말레",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100475.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100475.jpg",
    tags: ["도깨비", "실물사진", "DD19", "돈잘레말레", "제아쿨", "중형"],
  },
  {
    id: "original-DD20",
    inventoryNo: "DD20",
    name: "아이셔",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100477.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100477.jpg",
    tags: ["도깨비", "실물사진", "DD20", "아이셔", "제아쿨", "중형"],
  },
  {
    id: "original-DD21",
    inventoryNo: "DD21",
    name: "그려진 정승",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100478.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100478.jpg",
    tags: ["도깨비", "실물사진", "DD21", "그려진 정승", "제아쿨", "중형"],
  },
  {
    id: "original-DD22",
    inventoryNo: "DD22",
    name: "파직 코뿔손",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100482.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100482.jpg",
    tags: ["도깨비", "실물사진", "DD22", "파직 코뿔손", "제아쿨", "중형"],
  },
  {
    id: "original-DD23",
    inventoryNo: "DD23",
    name: "느타리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100485.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100485.jpg",
    tags: ["도깨비", "실물사진", "DD23", "느타리", "제아쿨", "중형"],
  },
  {
    id: "original-DD24",
    inventoryNo: "DD24",
    name: "매드리호",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100490.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100490.jpg",
    tags: ["도깨비", "실물사진", "DD24", "매드리호", "제아쿨", "중형"],
  },
  {
    id: "original-DD25",
    inventoryNo: "DD25",
    name: "이정퓨",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100492.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100492.jpg",
    tags: ["도깨비", "실물사진", "DD25", "이정퓨", "제아쿨", "중형"],
  },
  {
    id: "original-ED1",
    inventoryNo: "ED1",
    name: "원만부",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100500.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100500.jpg",
    tags: ["도깨비", "실물사진", "ED1", "원만부", "호이스트", "초대형"],
  },
  {
    id: "original-ED2",
    inventoryNo: "ED2",
    name: "앵두깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100507.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100507.jpg",
    tags: ["도깨비", "실물사진", "ED2", "앵두깨비", "호이스트", "초대형"],
  },
  {
    id: "original-ED3",
    inventoryNo: "ED3",
    name: "피의 가면 ‘황숭이깨비’",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100508.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100508.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED3",
      "피의 가면 ‘황숭이깨비’",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "original-ED4",
    inventoryNo: "ED4",
    name: "토토속 형제 발모예르",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100512.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100512.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED4",
      "토토속 형제 발모예르",
      "호이스트",
      "대형",
    ],
  },
  {
    id: "original-ED5",
    inventoryNo: "ED5",
    name: "토토속 형제 발앍락",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100513.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100513.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED5",
      "토토속 형제 발앍락",
      "호이스트",
      "대형",
    ],
  },
  {
    id: "original-ED6",
    inventoryNo: "ED6",
    name: "흰수염 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100519.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100519.jpg",
    tags: ["도깨비", "실물사진", "ED6", "흰수염 숭이깨비", "호이스트", "중형"],
  },
  {
    id: "original-ED7",
    inventoryNo: "ED7",
    name: "붉은 얼굴 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100520.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100520.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED7",
      "붉은 얼굴 숭이깨비",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "original-ED8",
    inventoryNo: "ED8",
    name: "휠나리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100651.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100651.jpg",
    tags: ["도깨비", "실물사진", "ED8", "휠나리", "호이스트", "초대형"],
  },
  {
    id: "original-ED9",
    inventoryNo: "ED9",
    name: "도깨비 성 aka. 돌무덤",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100531.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100531.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED9",
      "도깨비 성 aka. 돌무덤",
      "호이스트와 제아쿨의 경계",
      "초대형",
    ],
  },
  {
    id: "original-ED10",
    inventoryNo: "ED10",
    name: "대롱깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100534.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100534.jpg",
    tags: ["도깨비", "실물사진", "ED10", "대롱깨비", "호이스트", "중형"],
  },
  {
    id: "original-ED11",
    inventoryNo: "ED11",
    name: "막이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100536.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100536.jpg",
    tags: ["도깨비", "실물사진", "ED11", "막이깨비", "호이스트", "중형"],
  },
  {
    id: "original-ED12",
    inventoryNo: "ED12",
    name: "영혼꼴라주 도깨비불",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100539.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100539.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED12",
      "영혼꼴라주 도깨비불",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "original-ED13",
    inventoryNo: "ED13",
    name: "털복숭이 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100541.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100541.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED13",
      "털복숭이 숭이깨비",
      "호이스트",
      "중형",
    ],
  },
  {
    id: "original-ED14",
    inventoryNo: "ED14",
    name: "옥색 얼굴 아기 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100544.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100544.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED14",
      "옥색 얼굴 아기 숭이깨비",
      "호이스트",
      "소형",
    ],
  },
  {
    id: "original-ED15",
    inventoryNo: "ED15",
    name: "소년별 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100545.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100545.jpg",
    tags: ["도깨비", "실물사진", "ED15", "소년별 숭이깨비", "호이스트", "소형"],
  },
  {
    id: "original-ED16",
    inventoryNo: "ED16",
    name: "종알종알",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100548.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100548.jpg",
    tags: ["도깨비", "실물사진", "ED16", "종알종알", "호이스트", "중형"],
  },
  {
    id: "original-ED17",
    inventoryNo: "ED17",
    name: "옥동자 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100549.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100549.jpg",
    tags: ["도깨비", "실물사진", "ED17", "옥동자 숭이깨비", "호이스트", "소형"],
  },
  {
    id: "original-ED18",
    inventoryNo: "ED18",
    name: "영혼콜라주 정승",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100552.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100552.jpg",
    tags: ["도깨비", "실물사진", "ED18", "영혼콜라주 정승", "호이스트", "중형"],
  },
  {
    id: "original-ED19",
    inventoryNo: "ED19",
    name: "노란반점 파란 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100556.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100556.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED19",
      "노란반점 파란 숭이깨비",
      "호이스트",
      "소형",
    ],
  },
  {
    id: "original-ED20",
    inventoryNo: "ED20",
    name: "옥색 얼굴 소년 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100558.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100558.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED20",
      "옥색 얼굴 소년 숭이깨비",
      "호이스트",
      "소형",
    ],
  },
  {
    id: "original-ED21",
    inventoryNo: "ED21",
    name: "붉은 반점 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100561.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100561.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ED21",
      "붉은 반점 숭이깨비",
      "호이스트",
      "소형",
    ],
  },
  {
    id: "original-ED22",
    inventoryNo: "ED22",
    name: "밀레니엄 탑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100565.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100565.jpg",
    tags: ["도깨비", "실물사진", "ED22", "밀레니엄 탑", "제아쿨", "대형"],
  },
  {
    id: "original-FD1",
    inventoryNo: "FD1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100586.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100586.jpg",
    tags: ["도깨비", "실물사진", "FD1", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD2",
    inventoryNo: "FD2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100589.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100589.jpg",
    tags: ["도깨비", "실물사진", "FD2", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD3",
    inventoryNo: "FD3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100590.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100590.jpg",
    tags: ["도깨비", "실물사진", "FD3", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD4",
    inventoryNo: "FD4",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100592.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100592.jpg",
    tags: ["도깨비", "실물사진", "FD4", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD5",
    inventoryNo: "FD5",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100597.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100597.jpg",
    tags: ["도깨비", "실물사진", "FD5", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD6",
    inventoryNo: "FD6",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100581.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100581.jpg",
    tags: ["도깨비", "실물사진", "FD6", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD7",
    inventoryNo: "FD7",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100600.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100600.jpg",
    tags: ["도깨비", "실물사진", "FD7", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD8",
    inventoryNo: "FD8",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100602.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100602.jpg",
    tags: ["도깨비", "실물사진", "FD8", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD9",
    inventoryNo: "FD9",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100606.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100606.jpg",
    tags: ["도깨비", "실물사진", "FD9", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD10",
    inventoryNo: "FD10",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100609.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100609.jpg",
    tags: ["도깨비", "실물사진", "FD10", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD11",
    inventoryNo: "FD11",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100613.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100613.jpg",
    tags: ["도깨비", "실물사진", "FD11", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD12",
    inventoryNo: "FD12",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100615.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100615.jpg",
    tags: ["도깨비", "실물사진", "FD12", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD13",
    inventoryNo: "FD13",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100620.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100620.jpg",
    tags: ["도깨비", "실물사진", "FD13", "플래그십 아일랜드", "소형"],
  },
  {
    id: "original-FD14",
    inventoryNo: "FD14",
    name: "장고깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100623.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100623.jpg",
    tags: ["도깨비", "실물사진", "FD14", "장고깨비", "선래흘", "중형"],
  },
  {
    id: "original-FD15",
    inventoryNo: "FD15",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100628.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100628.jpg",
    tags: ["도깨비", "실물사진", "FD15", "선래흘"],
  },
  {
    id: "original-FD16",
    inventoryNo: "FD16",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100630.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100630.jpg",
    tags: ["도깨비", "실물사진", "FD16", "선래흘"],
  },
  {
    id: "original-FD17",
    inventoryNo: "FD17",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100633.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100633.jpg",
    tags: ["도깨비", "실물사진", "FD17", "선래흘"],
  },
  {
    id: "original-FD18",
    inventoryNo: "FD18",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100634.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100634.jpg",
    tags: ["도깨비", "실물사진", "FD18", "선래흘"],
  },
  {
    id: "original-FD19",
    inventoryNo: "FD19",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100639.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100639.jpg",
    tags: ["도깨비", "실물사진", "FD19", "선래흘"],
  },
  {
    id: "original-FD20",
    inventoryNo: "FD20",
    name: "모자장수 옥예티",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100643.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100643.jpg",
    tags: ["도깨비", "실물사진", "FD20", "모자장수 옥예티", "선래흘", "소형"],
  },
  {
    id: "original-GD1",
    inventoryNo: "GD1",
    name: "포크레인",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100649.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100649.jpg",
    tags: ["도깨비", "실물사진", "GD1", "포크레인", "카리스", "대형"],
  },
  {
    id: "original-GD2",
    inventoryNo: "GD2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100656.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100656.jpg",
    tags: ["도깨비", "실물사진", "GD2", "카리스"],
  },
  {
    id: "original-GD3",
    inventoryNo: "GD3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100660.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100660.jpg",
    tags: ["도깨비", "실물사진", "GD3", "카리스"],
  },
  {
    id: "original-GD4",
    inventoryNo: "GD4",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100663.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100663.jpg",
    tags: ["도깨비", "실물사진", "GD4", "카리스"],
  },
  {
    id: "original-GD5",
    inventoryNo: "GD5",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100664.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100664.jpg",
    tags: ["도깨비", "실물사진", "GD5", "카리스"],
  },
  {
    id: "original-GD6",
    inventoryNo: "GD6",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100667.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100667.jpg",
    tags: ["도깨비", "실물사진", "GD6", "카리스"],
  },
  {
    id: "original-GD7",
    inventoryNo: "GD7",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100671.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100671.jpg",
    tags: ["도깨비", "실물사진", "GD7", "카리스"],
  },
  {
    id: "original-GD8",
    inventoryNo: "GD8",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100673.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100673.jpg",
    tags: ["도깨비", "실물사진", "GD8", "카리스"],
  },
  {
    id: "original-GD9",
    inventoryNo: "GD9",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100677.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100677.jpg",
    tags: ["도깨비", "실물사진", "GD9", "카리스"],
  },
  {
    id: "original-GD10",
    inventoryNo: "GD10",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100682.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100682.jpg",
    tags: ["도깨비", "실물사진", "GD10", "카리스"],
  },
  {
    id: "original-GD11",
    inventoryNo: "GD11",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100684.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100684.jpg",
    tags: ["도깨비", "실물사진", "GD11", "카리스"],
  },
  {
    id: "original-GD12",
    inventoryNo: "GD12",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100685.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100685.jpg",
    tags: ["도깨비", "실물사진", "GD12", "카리스"],
  },
  {
    id: "original-GD13",
    inventoryNo: "GD13",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100688.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100688.jpg",
    tags: ["도깨비", "실물사진", "GD13", "카리스"],
  },
  {
    id: "original-GD14",
    inventoryNo: "GD14",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100689.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100689.jpg",
    tags: ["도깨비", "실물사진", "GD14", "카리스"],
  },
  {
    id: "original-GD15",
    inventoryNo: "GD15",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100691.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100691.jpg",
    tags: ["도깨비", "실물사진", "GD15", "카리스"],
  },
  {
    id: "original-GD16",
    inventoryNo: "GD16",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100694.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100694.jpg",
    tags: ["도깨비", "실물사진", "GD16", "카리스"],
  },
  {
    id: "original-GD17",
    inventoryNo: "GD17",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100695.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100695.jpg",
    tags: ["도깨비", "실물사진", "GD17", "카리스"],
  },
  {
    id: "original-GD18",
    inventoryNo: "GD18",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100698.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100698.jpg",
    tags: ["도깨비", "실물사진", "GD18", "카리스"],
  },
  {
    id: "original-GD19",
    inventoryNo: "GD19",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100699.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100699.jpg",
    tags: ["도깨비", "실물사진", "GD19", "카리스"],
  },
  {
    id: "original-GD20",
    inventoryNo: "GD20",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100703.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100703.jpg",
    tags: ["도깨비", "실물사진", "GD20", "카리스"],
  },
  {
    id: "original-GD21",
    inventoryNo: "GD21",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100704.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100704.jpg",
    tags: ["도깨비", "실물사진", "GD21", "카리스"],
  },
  {
    id: "original-GD22",
    inventoryNo: "GD22",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100707.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100707.jpg",
    tags: ["도깨비", "실물사진", "GD22", "카리스"],
  },
  {
    id: "original-GD23",
    inventoryNo: "GD23",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100708.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100708.jpg",
    tags: ["도깨비", "실물사진", "GD23", "카리스"],
  },
  {
    id: "original-GD24",
    inventoryNo: "GD24",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100711.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100711.jpg",
    tags: ["도깨비", "실물사진", "GD24", "카리스"],
  },
  {
    id: "original-GD25",
    inventoryNo: "GD25",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100712.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100712.jpg",
    tags: ["도깨비", "실물사진", "GD25", "카리스"],
  },
  {
    id: "original-GD26",
    inventoryNo: "GD26",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100714.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100714.jpg",
    tags: ["도깨비", "실물사진", "GD26", "카리스"],
  },
  {
    id: "original-GD27",
    inventoryNo: "GD27",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100716.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100716.jpg",
    tags: ["도깨비", "실물사진", "GD27", "카리스"],
  },
  {
    id: "original-GD28",
    inventoryNo: "GD28",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100719.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100719.jpg",
    tags: ["도깨비", "실물사진", "GD28", "카리스"],
  },
  {
    id: "original-GD29",
    inventoryNo: "GD29",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100721.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100721.jpg",
    tags: ["도깨비", "실물사진", "GD29", "카리스"],
  },
  {
    id: "original-GD30",
    inventoryNo: "GD30",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100723.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100723.jpg",
    tags: ["도깨비", "실물사진", "GD30", "카리스"],
  },
  {
    id: "original-GD31",
    inventoryNo: "GD31",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100727.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100727.jpg",
    tags: ["도깨비", "실물사진", "GD31", "카리스"],
  },
  {
    id: "original-GD32",
    inventoryNo: "GD32",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100730.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100730.jpg",
    tags: ["도깨비", "실물사진", "GD32", "카리스"],
  },
  {
    id: "original-GD33",
    inventoryNo: "GD33",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400598.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400598.jpg",
    tags: ["도깨비", "실물사진", "GD33", "카리스"],
  },
  {
    id: "original-HD1",
    inventoryNo: "HD1",
    name: "흑정승",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100737.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100737.jpg",
    tags: ["도깨비", "실물사진", "HD1", "흑정승", "으시시 - 동쪽 구역", "대형"],
  },
  {
    id: "original-HD2",
    inventoryNo: "HD2",
    name: "음욕",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100749.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100749.jpg",
    tags: ["도깨비", "실물사진", "HD2", "음욕", "으시시 - 동쪽 구역", "대형"],
  },
  {
    id: "original-HD3",
    inventoryNo: "HD3",
    name: "질투",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100751.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100751.jpg",
    tags: ["도깨비", "실물사진", "HD3", "질투", "으시시 - 동쪽 구역", "대형"],
  },
  {
    id: "original-HD4",
    inventoryNo: "HD4",
    name: "으시시 뒷문 aka. 지옥문",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100755.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100755.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "HD4",
      "으시시 뒷문 aka. 지옥문",
      "으시시 - 동쪽 구역",
      "대형",
    ],
  },
  {
    id: "original-HD5",
    inventoryNo: "HD5",
    name: "탐욕",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100758.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100758.jpg",
    tags: ["도깨비", "실물사진", "HD5", "탐욕", "으시시 - 동쪽 구역", "대형"],
  },
  {
    id: "original-HD6",
    inventoryNo: "HD6",
    name: "분노",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100761.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100761.jpg",
    tags: ["도깨비", "실물사진", "HD6", "분노", "으시시 - 동쪽 구역", "대형"],
  },
  {
    id: "original-HD7",
    inventoryNo: "HD7",
    name: "나태",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100764.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100764.jpg",
    tags: ["도깨비", "실물사진", "HD7", "나태", "으시시 - 동쪽 구역", "대형"],
  },
  {
    id: "original-HD8",
    inventoryNo: "HD8",
    name: "음욕의 꼬리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100767.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100767.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "HD8",
      "음욕의 꼬리",
      "으시시 - 동쪽 구역",
      "소형",
    ],
  },
  {
    id: "original-ID1",
    inventoryNo: "ID1",
    name: "도리스와 와리스",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100783.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100783.jpg",
    tags: ["도깨비", "실물사진", "ID1", "도리스와 와리스", "선래흘", "소형"],
  },
  {
    id: "original-ID2",
    inventoryNo: "ID2",
    name: "무언성",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100776.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100776.jpg",
    tags: ["도깨비", "실물사진", "ID2", "무언성", "선래흘", "초대형"],
  },
  {
    id: "original-ID3",
    inventoryNo: "ID3",
    name: "두둠두",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100785.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100785.jpg",
    tags: ["도깨비", "실물사진", "ID3", "두둠두", "쾌성", "소형"],
  },
  {
    id: "original-ID4",
    inventoryNo: "ID4",
    name: "캐오오",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100787.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100787.jpg",
    tags: ["도깨비", "실물사진", "ID4", "캐오오", "쾌성", "소형"],
  },
  {
    id: "original-ID5",
    inventoryNo: "ID5",
    name: "북칙타",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100790.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100790.jpg",
    tags: ["도깨비", "실물사진", "ID5", "북칙타", "쾌성", "소형"],
  },
  {
    id: "original-ID6",
    inventoryNo: "ID6",
    name: "툽 aka 거대아르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100795.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100795.jpg",
    tags: ["도깨비", "실물사진", "ID6", "툽 aka 거대아르미", "선래흘", "대형"],
  },
  {
    id: "original-ID7",
    inventoryNo: "ID7",
    name: "줄기사자",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100799.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100799.jpg",
    tags: ["도깨비", "실물사진", "ID7", "줄기사자", "선래흘", "대형"],
  },
  {
    id: "original-ID8",
    inventoryNo: "ID8",
    name: "너무다나무",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100801.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100801.jpg",
    tags: ["도깨비", "실물사진", "ID8", "너무다나무", "선래흘", "중형"],
  },
  {
    id: "original-ID9",
    inventoryNo: "ID9",
    name: "삼몽령",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100804.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100804.jpg",
    tags: ["도깨비", "실물사진", "ID9", "삼몽령", "해인경", "초대형"],
  },
  {
    id: "original-ID10",
    inventoryNo: "ID10",
    name: "잎피리와 잎피리피리와 잎피리피리피리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100808.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100808.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ID10",
      "잎피리와 잎피리피리와 잎피리피리피리",
      "해인경",
      "대형",
    ],
  },
  {
    id: "original-ID11",
    inventoryNo: "ID11",
    name: "그래그리오 사형제",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100986.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100986.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ID11",
      "그래그리오 사형제",
      "해인경",
      "대형, 소형",
    ],
  },
  {
    id: "original-JD1",
    inventoryNo: "JD1",
    name: "허수허수깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100810.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100810.jpg",
    tags: ["도깨비", "실물사진", "JD1", "허수허수깨비", "으시시", "?"],
  },
  {
    id: "original-JD2",
    inventoryNo: "JD2",
    name: "으시시",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100814.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100814.jpg",
    tags: ["도깨비", "실물사진", "JD2", "으시시", "초대형"],
  },
  {
    id: "original-JD3",
    inventoryNo: "JD3",
    name: "어둑시니",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100816.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100816.jpg",
    tags: ["도깨비", "실물사진", "JD3", "어둑시니", "으시시", "소형~초대형"],
  },
  {
    id: "original-KD1",
    inventoryNo: "KD1",
    name: "깨슈타인타워",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100820.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100820.jpg",
    tags: ["도깨비", "실물사진", "KD1", "깨슈타인타워", "미치", "초대형"],
  },
  {
    id: "original-KD2",
    inventoryNo: "KD2",
    name: "으시시 옆문",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100826.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100826.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "KD2",
      "으시시 옆문",
      "미치와 으시시의 경계",
      "대형",
    ],
  },
  {
    id: "original-KD3",
    inventoryNo: "KD3",
    name: "집씨",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100828.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100828.jpg",
    tags: ["도깨비", "실물사진", "KD3", "집씨", "미치", "소형"],
  },
  {
    id: "original-KD4",
    inventoryNo: "KD4",
    name: "보터링",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100830.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100830.jpg",
    tags: ["도깨비", "실물사진", "KD4", "보터링", "미치", "소형"],
  },
  {
    id: "original-KD5",
    inventoryNo: "KD5",
    name: "존프르숭이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100832.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100832.jpg",
    tags: ["도깨비", "실물사진", "KD5", "존프르숭이", "미치", "소형"],
  },
  {
    id: "original-KD6",
    inventoryNo: "KD6",
    name: "난파 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100833.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100833.jpg",
    tags: ["도깨비", "실물사진", "KD6", "난파 숭이깨비", "미치", "중형"],
  },
  {
    id: "original-KD7",
    inventoryNo: "KD7",
    name: "고주망태 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100836.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100836.jpg",
    tags: ["도깨비", "실물사진", "KD7", "고주망태 숭이깨비", "미치", "중형"],
  },
  {
    id: "original-KD8",
    inventoryNo: "KD8",
    name: "복면 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100838.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100838.jpg",
    tags: ["도깨비", "실물사진", "KD8", "복면 숭이깨비", "미치", "중형"],
  },
  {
    id: "original-KD9",
    inventoryNo: "KD9",
    name: "동구미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100841.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100841.jpg",
    tags: ["도깨비", "실물사진", "KD9", "동구미", "미치", "중형"],
  },
  {
    id: "original-KD10",
    inventoryNo: "KD10",
    name: "끄라띠와 꼬라삐",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100844.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100844.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "KD10",
      "끄라띠와 꼬라삐",
      "미치",
      "중형, 소형",
    ],
  },
  {
    id: "original-KD11",
    inventoryNo: "KD11",
    name: "키루",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100847.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100847.jpg",
    tags: ["도깨비", "실물사진", "KD11", "키루", "미치", "중형"],
  },
  {
    id: "original-KD12",
    inventoryNo: "KD12",
    name: "시루",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100850.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100850.jpg",
    tags: ["도깨비", "실물사진", "KD12", "시루", "미치", "중형"],
  },
  {
    id: "original-KD13",
    inventoryNo: "KD13",
    name: "지루",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100851.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100851.jpg",
    tags: ["도깨비", "실물사진", "KD13", "지루", "미치", "중형"],
  },
  {
    id: "original-KD14",
    inventoryNo: "KD14",
    name: "도리, 스리, 션",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100854.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100854.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "KD14",
      "도리, 스리, 션",
      "미치",
      "중형, 중형, 소형",
    ],
  },
  {
    id: "original-KD15",
    inventoryNo: "KD15",
    name: "울빠미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100856.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100856.jpg",
    tags: ["도깨비", "실물사진", "KD15", "울빠미", "미치", "중형"],
  },
  {
    id: "original-KD16",
    inventoryNo: "KD16",
    name: "크라요숭이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100858.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100858.jpg",
    tags: ["도깨비", "실물사진", "KD16", "크라요숭이", "미치", "중형"],
  },
  {
    id: "original-KD17",
    inventoryNo: "KD17",
    name: "오라이드숭이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100860.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100860.jpg",
    tags: ["도깨비", "실물사진", "KD17", "오라이드숭이", "미치", "중형"],
  },
  {
    id: "original-KD18",
    inventoryNo: "KD18",
    name: "빌리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100862.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100862.jpg",
    tags: ["도깨비", "실물사진", "KD18", "빌리", "미치", "소형"],
  },
  {
    id: "original-KD19",
    inventoryNo: "KD19",
    name: "복숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100864.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100864.jpg",
    tags: ["도깨비", "실물사진", "KD19", "복숭이깨비", "미치", "소형"],
  },
  {
    id: "original-KD20",
    inventoryNo: "KD20",
    name: "펭퀸",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100866.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100866.jpg",
    tags: ["도깨비", "실물사진", "KD20", "펭퀸", "미치", "대형"],
  },
  {
    id: "original-KD21",
    inventoryNo: "KD21",
    name: "스타더스트",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100868.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100868.jpg",
    tags: ["도깨비", "실물사진", "KD21", "스타더스트", "미치", "소형"],
  },
  {
    id: "original-KD22",
    inventoryNo: "KD22",
    name: "혹부리 숭이깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100871.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100871.jpg",
    tags: ["도깨비", "실물사진", "KD22", "혹부리 숭이깨비", "미치", "소형"],
  },
  {
    id: "original-KD23",
    inventoryNo: "KD23",
    name: "스피리스트와 스피",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100873.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100873.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "KD23",
      "스피리스트와 스피",
      "미치",
      "대형, 소형",
    ],
  },
  {
    id: "original-KD24",
    inventoryNo: "KD24",
    name: "소비, 더비, 러비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100879.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100879.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "KD24",
      "소비, 더비, 러비",
      "미치",
      "소형, 중형, 소형",
    ],
  },
  {
    id: "original-KD25",
    inventoryNo: "KD25",
    name: "카이악, 마이악, 치수, 피수",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100882.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100882.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "KD25",
      "카이악, 마이악, 치수, 피수",
      "미치",
      "중형, 대형, 소형, 소형",
    ],
  },
  {
    id: "original-KD26",
    inventoryNo: "KD26",
    name: "치아와 팍씨",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100886.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100886.jpg",
    tags: ["도깨비", "실물사진", "KD26", "치아와 팍씨", "미치", "소형, 소형"],
  },
  {
    id: "original-KD27",
    inventoryNo: "KD27",
    name: "쏘오, 모리, 매오",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100889.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100889.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "KD27",
      "쏘오, 모리, 매오",
      "미치",
      "소형, 중형, 소형",
    ],
  },
  {
    id: "original-KD28",
    inventoryNo: "KD28",
    name: "딱끼오와 꼬이락",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100891.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100891.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "KD28",
      "딱끼오와 꼬이락",
      "미치",
      "중형, 중형",
    ],
  },
  {
    id: "original-KD29",
    inventoryNo: "KD29",
    name: "크쉬트와 타이쿵",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100893.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100893.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "KD29",
      "크쉬트와 타이쿵",
      "미치",
      "중형, 중형",
    ],
  },
  {
    id: "original-KD30",
    inventoryNo: "KD30",
    name: "오잉구",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100898.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100898.jpg",
    tags: ["도깨비", "실물사진", "KD30", "오잉구", "미치", "중형"],
  },
  {
    id: "original-KD31",
    inventoryNo: "KD31",
    name: "털복정숭",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100900.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100900.jpg",
    tags: ["도깨비", "실물사진", "KD31", "털복정숭", "미치", "중형"],
  },
  {
    id: "original-KD32",
    inventoryNo: "KD32",
    name: "도드리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100901.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100901.jpg",
    tags: ["도깨비", "실물사진", "KD32", "도드리", "미치", "소형"],
  },
  {
    id: "original-KD33",
    inventoryNo: "KD33",
    name: "분홍가위깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100904.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100904.jpg",
    tags: ["도깨비", "실물사진", "KD33", "분홍가위깨비", "미치", "대형"],
  },
  {
    id: "original-KD34",
    inventoryNo: "KD34",
    name: "옥가위깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100906.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100906.jpg",
    tags: ["도깨비", "실물사진", "KD34", "옥가위깨비", "미치", "대형"],
  },
  {
    id: "original-KD35",
    inventoryNo: "KD35",
    name: "파란가위깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100908.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100908.jpg",
    tags: ["도깨비", "실물사진", "KD35", "파란가위깨비", "미치", "대형"],
  },
  {
    id: "original-KD36",
    inventoryNo: "KD36",
    name: "살가위깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100909.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100909.jpg",
    tags: ["도깨비", "실물사진", "KD36", "살가위깨비", "미치", "대형"],
  },
  {
    id: "original-KD37",
    inventoryNo: "KD37",
    name: "초록가위깨비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100911.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100911.jpg",
    tags: ["도깨비", "실물사진", "KD37", "초록가위깨비", "미치", "대형"],
  },
  {
    id: "original-KD38",
    inventoryNo: "KD38",
    name: "주황 동나귀",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100914.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100914.jpg",
    tags: ["도깨비", "실물사진", "KD38", "주황 동나귀", "미치", "소형"],
  },
  {
    id: "original-KD39",
    inventoryNo: "KD39",
    name: "형광 동나귀",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100916.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100916.jpg",
    tags: ["도깨비", "실물사진", "KD39", "형광 동나귀", "미치", "소형"],
  },
  {
    id: "original-KD40",
    inventoryNo: "KD40",
    name: "노랑 동나귀",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100918.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100918.jpg",
    tags: ["도깨비", "실물사진", "KD40", "노랑 동나귀", "미치", "소형"],
  },
  {
    id: "original-KD41",
    inventoryNo: "KD41",
    name: "분홍 동나귀",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100919.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100919.jpg",
    tags: ["도깨비", "실물사진", "KD41", "분홍 동나귀", "미치", "소형"],
  },
  {
    id: "original-KD42",
    inventoryNo: "KD42",
    name: "초록 동나귀",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100923.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100923.jpg",
    tags: ["도깨비", "실물사진", "KD42", "초록 동나귀", "미치", "소형"],
  },
  {
    id: "original-LD1",
    inventoryNo: "LD1",
    name: "일장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100924.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100924.jpg",
    tags: ["도깨비", "실물사진", "LD1", "일장군", "제아쿨", "중형"],
  },
  {
    id: "original-LD2",
    inventoryNo: "LD2",
    name: "사십육장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100928.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100928.jpg",
    tags: ["도깨비", "실물사진", "LD2", "사십육장군", "제아쿨", "중형"],
  },
  {
    id: "original-LD3",
    inventoryNo: "LD3",
    name: "사십오장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100930.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100930.jpg",
    tags: ["도깨비", "실물사진", "LD3", "사십오장군", "제아쿨", "중형"],
  },
  {
    id: "original-LD4",
    inventoryNo: "LD4",
    name: "나왔어 (삼십육장군)",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100936.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100936.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "LD4",
      "나왔어 (삼십육장군)",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "original-LD5",
    inventoryNo: "LD5",
    name: "겨털용사(이십팔장군)",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100940.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100940.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "LD5",
      "겨털용사(이십팔장군)",
      "제아쿨",
      "중형",
    ],
  },
  {
    id: "original-LD6",
    inventoryNo: "LD6",
    name: "칠십칠장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100944.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100944.jpg",
    tags: ["도깨비", "실물사진", "LD6", "칠십칠장군", "제아쿨", "중형"],
  },
  {
    id: "original-LD7",
    inventoryNo: "LD7",
    name: "사백구십이장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100946.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100946.jpg",
    tags: ["도깨비", "실물사진", "LD7", "사백구십이장군", "제아쿨", "중형"],
  },
  {
    id: "original-LD8",
    inventoryNo: "LD8",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100948.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100948.jpg",
    tags: ["도깨비", "실물사진", "LD8", "제아쿨", "중형"],
  },
  {
    id: "original-LD9",
    inventoryNo: "LD9",
    name: "삼백팔십팔장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100951.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100951.jpg",
    tags: ["도깨비", "실물사진", "LD9", "삼백팔십팔장군", "제아쿨", "중형"],
  },
  {
    id: "original-LD10",
    inventoryNo: "LD10",
    name: "삼백삼장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100954.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100954.jpg",
    tags: ["도깨비", "실물사진", "LD10", "삼백삼장군", "제아쿨", "중형"],
  },
  {
    id: "original-LD11",
    inventoryNo: "LD11",
    name: "이백이십이장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100956.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100956.jpg",
    tags: ["도깨비", "실물사진", "LD11", "이백이십이장군", "제아쿨", "중형"],
  },
  {
    id: "original-LD12",
    inventoryNo: "LD12",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100958.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100958.jpg",
    tags: ["도깨비", "실물사진", "LD12"],
  },
  {
    id: "original-LD13",
    inventoryNo: "LD13",
    name: "백오십구장군",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100960.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100960.jpg",
    tags: ["도깨비", "실물사진", "LD13", "백오십구장군", "제아쿨", "중형"],
  },
  {
    id: "original-LD14",
    inventoryNo: "LD14",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100962.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100962.jpg",
    tags: ["도깨비", "실물사진", "LD14"],
  },
  {
    id: "original-LD15",
    inventoryNo: "LD15",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100964.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100964.jpg",
    tags: ["도깨비", "실물사진", "LD15"],
  },
  {
    id: "original-LD16",
    inventoryNo: "LD16",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100966.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100966.jpg",
    tags: ["도깨비", "실물사진", "LD16"],
  },
  {
    id: "original-LD17",
    inventoryNo: "LD17",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100968.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100968.jpg",
    tags: ["도깨비", "실물사진", "LD17"],
  },
  {
    id: "original-LD18",
    inventoryNo: "LD18",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100971.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100971.jpg",
    tags: ["도깨비", "실물사진", "LD18"],
  },
  {
    id: "original-LD19",
    inventoryNo: "LD19",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100973.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100973.jpg",
    tags: ["도깨비", "실물사진", "LD19"],
  },
  {
    id: "original-LD20",
    inventoryNo: "LD20",
    name: "삼신건반",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100976.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100976.jpg",
    tags: ["도깨비", "실물사진", "LD20", "삼신건반", "제아쿨", "중형"],
  },
  {
    id: "original-LD21",
    inventoryNo: "LD21",
    name: "천지인의 심마니 좁교",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100978.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100978.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "LD21",
      "천지인의 심마니 좁교",
      "제아쿨과 천지인의 경계",
      "소형",
    ],
  },
  {
    id: "original-LD22",
    inventoryNo: "LD22",
    name: "국꼬꼬",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100981.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100981.jpg",
    tags: ["도깨비", "실물사진", "LD22", "국꼬꼬"],
  },
  {
    id: "original-LD23",
    inventoryNo: "LD23",
    name: "햑챠챠",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100982.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100982.jpg",
    tags: ["도깨비", "실물사진", "LD23", "햑챠챠"],
  },
  {
    id: "original-MD1",
    inventoryNo: "MD1",
    name: "깨숑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100988.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100988.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD1",
      "깨숑",
      "해인경 - 깨숑 파루자 타운",
      "초대형",
    ],
  },
  {
    id: "original-MD2",
    inventoryNo: "MD2",
    name: "노란별츠카",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100993.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100993.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD2",
      "노란별츠카",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD3",
    inventoryNo: "MD3",
    name: "회돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100995.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100995.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD3",
      "회돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD4",
    inventoryNo: "MD4",
    name: "뱅돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1100997.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1100997.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD4",
      "뱅돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD5",
    inventoryNo: "MD5",
    name: "키돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110001.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110001.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD5",
      "키돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD6",
    inventoryNo: "MD6",
    name: "치돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110002.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110002.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD6",
      "치돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD7",
    inventoryNo: "MD7",
    name: "파딛돌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110004.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110004.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD7",
      "파딛돌",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD8",
    inventoryNo: "MD8",
    name: "코딛돌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110006.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110006.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD8",
      "코딛돌",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD9",
    inventoryNo: "MD9",
    name: "라돌돌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110010.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110010.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD9",
      "라돌돌",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD10",
    inventoryNo: "MD10",
    name: "시루아돌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110011.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110011.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD10",
      "시루아돌",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD11",
    inventoryNo: "MD11",
    name: "포리아편",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110013.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110013.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD11",
      "포리아편",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD12",
    inventoryNo: "MD12",
    name: "채돌돌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110016.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110016.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD12",
      "채돌돌",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD13",
    inventoryNo: "MD13",
    name: "우리오르",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110017.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110017.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD13",
      "우리오르",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD14",
    inventoryNo: "MD14",
    name: "다르돌이, 마르돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110019.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110019.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD14",
      "다르돌이, 마르돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형, 소형",
    ],
  },
  {
    id: "original-MD15",
    inventoryNo: "MD15",
    name: "어미버미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110023.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110023.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD15",
      "어미버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD16",
    inventoryNo: "MD16",
    name: "도딛돌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110025.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110025.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD16",
      "도딛돌",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD17",
    inventoryNo: "MD17",
    name: "삿룽",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110027.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110027.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD17",
      "삿룽",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD18",
    inventoryNo: "MD18",
    name: "아고, 고새",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110028.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110028.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD18",
      "아고, 고새",
      "해인경 - 깨숑 파루자 타운",
      "소형, 소형",
    ],
  },
  {
    id: "original-MD19",
    inventoryNo: "MD19",
    name: "해마르",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110030.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110030.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD19",
      "해마르",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD20",
    inventoryNo: "MD20",
    name: "꼬까리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110033.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110033.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD20",
      "꼬까리",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD21",
    inventoryNo: "MD21",
    name: "범버미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110035.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110035.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD21",
      "범버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD22",
    inventoryNo: "MD22",
    name: "아리랑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110036.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110036.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD22",
      "아리랑",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD23",
    inventoryNo: "MD23",
    name: "청이랑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110039.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110039.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD23",
      "청이랑",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD24",
    inventoryNo: "MD24",
    name: "대장장이 도버미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110041.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110041.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD24",
      "대장장이 도버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD25",
    inventoryNo: "MD25",
    name: "자버미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110043.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110043.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD25",
      "자버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD26",
    inventoryNo: "MD26",
    name: "대장장이 오버미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110046.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110046.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD26",
      "대장장이 오버미",
      "해인경 - 깨숑 파루자 타운",
      "중형",
    ],
  },
  {
    id: "original-MD27",
    inventoryNo: "MD27",
    name: "라오버미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110047.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110047.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD27",
      "라오버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD28",
    inventoryNo: "MD28",
    name: "지린버미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110049.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110049.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD28",
      "지린버미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD29",
    inventoryNo: "MD29",
    name: "윌이랑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110052.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110052.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD29",
      "윌이랑",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD30",
    inventoryNo: "MD30",
    name: "엘리랑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110054.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110054.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD30",
      "엘리랑",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD31",
    inventoryNo: "MD31",
    name: "마아르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110056.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110056.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD31",
      "마아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD32",
    inventoryNo: "MD32",
    name: "봉아르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110062.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110062.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD32",
      "봉아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD33",
    inventoryNo: "MD33",
    name: "스팅아르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110063.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110063.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD33",
      "스팅아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD34",
    inventoryNo: "MD34",
    name: "백아르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110066.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110066.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD34",
      "백아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD35",
    inventoryNo: "MD35",
    name: "모아프아르미가족",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110067.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110067.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD35",
      "모아프아르미가족",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD36",
    inventoryNo: "MD36",
    name: "조셰프아르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110072.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110072.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD36",
      "조셰프아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD37",
    inventoryNo: "MD37",
    name: "작은신선 테차르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110074.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110074.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD37",
      "작은신선 테차르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD38",
    inventoryNo: "MD38",
    name: "트윈아르미 하르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110075.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110075.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD38",
      "트윈아르미 하르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD39",
    inventoryNo: "MD39",
    name: "트윈아르미 두르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110077.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110077.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD39",
      "트윈아르미 두르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD40",
    inventoryNo: "MD40",
    name: "루미아르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110079.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110079.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD40",
      "루미아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD41",
    inventoryNo: "MD41",
    name: "스피오아르미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110081.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110081.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD41",
      "스피오아르미",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD42",
    inventoryNo: "MD42",
    name: "강돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110083.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110083.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD42",
      "강돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD43",
    inventoryNo: "MD43",
    name: "방돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110086.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110086.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD43",
      "방돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD44",
    inventoryNo: "MD44",
    name: "레돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110088.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110088.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD44",
      "레돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD45",
    inventoryNo: "MD45",
    name: "노란별카르",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110089.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110089.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD45",
      "노란별카르",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD46",
    inventoryNo: "MD46",
    name: "로돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110092.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110092.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD46",
      "로돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD47",
    inventoryNo: "MD47",
    name: "위돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110093.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110093.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD47",
      "위돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD48",
    inventoryNo: "MD48",
    name: "태돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110095.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110095.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD48",
      "태돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD49",
    inventoryNo: "MD49",
    name: "캐돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110098.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110098.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD49",
      "캐돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD50",
    inventoryNo: "MD50",
    name: "배또리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110100.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110100.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD50",
      "배또리",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD51",
    inventoryNo: "MD51",
    name: "매또리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110102.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110102.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD51",
      "매또리",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD52",
    inventoryNo: "MD52",
    name: "해돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110104.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110104.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD52",
      "해돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD53",
    inventoryNo: "MD53",
    name: "푸돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110106.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110106.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD53",
      "푸돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-MD54",
    inventoryNo: "MD54",
    name: "오돌이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110108.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110108.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "MD54",
      "오돌이",
      "해인경 - 깨숑 파루자 타운",
      "소형",
    ],
  },
  {
    id: "original-ND1",
    inventoryNo: "ND1",
    name: "뽀숑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/P1440076.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/P1440076.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND1",
      "뽀숑",
      "해인경 - 뽀숑 룰루 타운",
      "초대형",
    ],
  },
  {
    id: "original-ND2",
    inventoryNo: "ND2",
    name: "피구낭",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400613.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400613.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND2",
      "피구낭",
      "해인경 - 뽀숑 룰루 타운",
      "초대형",
    ],
  },
  {
    id: "original-ND3",
    inventoryNo: "ND3",
    name: "츠카스테",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400618.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400618.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND3",
      "츠카스테",
      "해인경 - 뽀숑 룰루 타운",
      "초대형",
    ],
  },
  {
    id: "original-ND4",
    inventoryNo: "ND4",
    name: "사릿다르",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400621.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400621.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND4",
      "사릿다르",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND5",
    inventoryNo: "ND5",
    name: "청소부 자주파",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400624.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400624.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND5",
      "청소부 자주파",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND6",
    inventoryNo: "ND6",
    name: "아올",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400628.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400628.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND6",
      "아올",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND7",
    inventoryNo: "ND7",
    name: "라므",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400632.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400632.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND7",
      "라므",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND8",
    inventoryNo: "ND8",
    name: "행크",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400633.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400633.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND8",
      "행크",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND9",
    inventoryNo: "ND9",
    name: "닝가요",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400638.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400638.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND9",
      "닝가요",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND10",
    inventoryNo: "ND10",
    name: "펠러",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400642.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400642.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND10",
      "펠러",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND11",
    inventoryNo: "ND11",
    name: "느룽",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400644.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400644.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND11",
      "느룽",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND12",
    inventoryNo: "ND12",
    name: "모시모시",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400647.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400647.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND12",
      "모시모시",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND13",
    inventoryNo: "ND13",
    name: "라라비로비로",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400652.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400652.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND13",
      "라라비로비로",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND14",
    inventoryNo: "ND14",
    name: "투라옹",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400654.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400654.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND14",
      "투라옹",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND15",
    inventoryNo: "ND15",
    name: "고니",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400657.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400657.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND15",
      "고니",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND16",
    inventoryNo: "ND16",
    name: "킁",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400659.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400659.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND16",
      "킁",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND17",
    inventoryNo: "ND17",
    name: "링티엔팔",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400663.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400663.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND17",
      "링티엔팔",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND18",
    inventoryNo: "ND18",
    name: "시스레, 가시레, 바스레, 너스레",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400665.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400665.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND18",
      "시스레, 가시레, 바스레, 너스레",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND19",
    inventoryNo: "ND19",
    name: "넵슈스",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400670.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400670.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND19",
      "넵슈스",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND20",
    inventoryNo: "ND20",
    name: "동동동, 게라",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400675.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400675.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND20",
      "동동동, 게라",
      "해인경 - 뽀숑 룰루 타운",
      "소형, 소형",
    ],
  },
  {
    id: "original-ND21",
    inventoryNo: "ND21",
    name: "AT",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400679.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400679.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND21",
      "AT",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND22",
    inventoryNo: "ND22",
    name: "깨비꽃",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400682.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400682.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND22",
      "깨비꽃",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND23",
    inventoryNo: "ND23",
    name: "속숑삭숑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400683.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400683.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND23",
      "속숑삭숑",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND24",
    inventoryNo: "ND24",
    name: "싸다만똥",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400689.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400689.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND24",
      "싸다만똥",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND25",
    inventoryNo: "ND25",
    name: "티비티비",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400691.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400691.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND25",
      "티비티비",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND26",
    inventoryNo: "ND26",
    name: "노봇",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400695.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400695.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND26",
      "노봇",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND27",
    inventoryNo: "ND27",
    name: "왁왁",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400697.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400697.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND27",
      "왁왁",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND28",
    inventoryNo: "ND28",
    name: "톰파루",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400701.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400701.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND28",
      "톰파루",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND29",
    inventoryNo: "ND29",
    name: "다우르프",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400704.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400704.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND29",
      "다우르프",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND30",
    inventoryNo: "ND30",
    name: "웁앤옵",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400708.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400708.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND30",
      "웁앤옵",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND31",
    inventoryNo: "ND31",
    name: "넸넸",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400710.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400710.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND31",
      "넸넸",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND32",
    inventoryNo: "ND32",
    name: "놈팽팽",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400714.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400714.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND32",
      "놈팽팽",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND33",
    inventoryNo: "ND33",
    name: "주룹팽팽",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400716.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400716.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND33",
      "주룹팽팽",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND34",
    inventoryNo: "ND34",
    name: "크팽팽",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400727.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400727.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND34",
      "크팽팽",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND35",
    inventoryNo: "ND35",
    name: "호리팽팽",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400730.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400730.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND35",
      "호리팽팽",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND36",
    inventoryNo: "ND36",
    name: "탬버린 꽃",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400732.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400732.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND36",
      "탬버린 꽃",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND37",
    inventoryNo: "ND37",
    name: "딕딕도",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400735.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400735.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND37",
      "딕딕도",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND38",
    inventoryNo: "ND38",
    name: "육서방",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400738.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400738.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND38",
      "육서방",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND39",
    inventoryNo: "ND39",
    name: "샤코",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400741.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400741.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND39",
      "샤코",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND40",
    inventoryNo: "ND40",
    name: "도리무",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400744.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400744.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND40",
      "도리무",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND41",
    inventoryNo: "ND41",
    name: "호울",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400747.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400747.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND41",
      "호울",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND42",
    inventoryNo: "ND42",
    name: "까짜기",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400748.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400748.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND42",
      "까짜기",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND43",
    inventoryNo: "ND43",
    name: "울라",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400753.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400753.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND43",
      "울라",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND44",
    inventoryNo: "ND44",
    name: "우카스",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400757.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400757.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND44",
      "우카스",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND45",
    inventoryNo: "ND45",
    name: "롭피",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400761.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400761.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND45",
      "롭피",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND46",
    inventoryNo: "ND46",
    name: "빨간별사카",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400762.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400762.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND46",
      "빨간별사카",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND47",
    inventoryNo: "ND47",
    name: "히위고쿠, 뽁",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400768.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400768.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND47",
      "히위고쿠, 뽁",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND48",
    inventoryNo: "ND48",
    name: "노란별이츠",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400770.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400770.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND48",
      "노란별이츠",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND49",
    inventoryNo: "ND49",
    name: "호호 이모",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400773.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400773.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND49",
      "호호 이모",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND50",
    inventoryNo: "ND50",
    name: "브로콜리 삼촌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400776.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400776.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND50",
      "브로콜리 삼촌",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-ND51",
    inventoryNo: "ND51",
    name: "팡",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400778.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400778.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "ND51",
      "팡",
      "해인경 - 뽀숑 룰루 타운",
      "소형",
    ],
  },
  {
    id: "original-OD1",
    inventoryNo: "OD1",
    name: "징가숑타워",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110111.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110111.jpg",
    tags: ["도깨비", "실물사진", "OD1", "징가숑타워", "해인경", "초대형"],
  },
  {
    id: "original-OD2",
    inventoryNo: "OD2",
    name: "페파 눗",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110226.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110226.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "OD2",
      "페파 눗",
      "해인경 - 상념과 망상의 방",
      "중형",
    ],
  },
  {
    id: "original-OD3",
    inventoryNo: "OD3",
    name: "도리 눗",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110225.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110225.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "OD3",
      "도리 눗",
      "해인경 - 상념과 망상의 방",
      "중형",
    ],
  },
  {
    id: "original-OD4",
    inventoryNo: "OD4",
    name: "도깨비(문자)",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400792.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400792.jpg",
    tags: ["도깨비", "실물사진", "OD4", "도깨비(문자)", "해인경", "소형"],
  },
  {
    id: "original-OD5",
    inventoryNo: "OD5",
    name: "몬조",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110227.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110227.jpg",
    tags: ["도깨비", "실물사진", "OD5", "몬조", "해인경", "중형"],
  },
  {
    id: "original-OD6",
    inventoryNo: "OD6",
    name: "백야콘",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110229.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110229.jpg",
    tags: ["도깨비", "실물사진", "OD6", "백야콘", "해인경", "대형"],
  },
  {
    id: "original-OD7",
    inventoryNo: "OD7",
    name: "야콘",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110232.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110232.jpg",
    tags: ["도깨비", "실물사진", "OD7", "야콘", "해인경", "소형"],
  },
  {
    id: "original-OD8",
    inventoryNo: "OD8",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400786.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400786.jpg",
    tags: ["도깨비", "실물사진", "OD8", "해인경", "소형"],
  },
  {
    id: "original-OD9",
    inventoryNo: "OD9",
    name: "꽃사자",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110233.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110233.jpg",
    tags: ["도깨비", "실물사진", "OD9", "꽃사자", "해인경", "초대형"],
  },
  {
    id: "original-OD10",
    inventoryNo: "OD10",
    name: "토립",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110237.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110237.jpg",
    tags: ["도깨비", "실물사진", "OD10", "토립", "해인경", "소형"],
  },
  {
    id: "original-OD11",
    inventoryNo: "OD11",
    name: "이뽀",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110239.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110239.jpg",
    tags: ["도깨비", "실물사진", "OD11", "이뽀", "몽당", "초대형"],
  },
  {
    id: "original-OD12",
    inventoryNo: "OD12",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410234.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410234.jpg",
    tags: ["도깨비", "실물사진", "OD12", "몽당"],
  },
  {
    id: "original-OD13",
    inventoryNo: "OD13",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410228.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410228.jpg",
    tags: ["도깨비", "실물사진", "OD13", "몽당"],
  },
  {
    id: "original-PD1-1",
    inventoryNo: "PD1-1",
    name: "깨뽀 (3면상)",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110116.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110116.jpg",
    tags: ["도깨비", "실물사진", "PD1-1", "깨뽀 (3면상)", "봉당", "초대형"],
  },
  {
    id: "original-PD1-2",
    inventoryNo: "PD1-2",
    name: "깨뽀 (3면상)",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110147.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110147.jpg",
    tags: ["도깨비", "실물사진", "PD1-2", "깨뽀 (3면상)", "봉당", "초대형"],
  },
  {
    id: "original-PD1-3",
    inventoryNo: "PD1-3",
    name: "깨뽀 (3면상)",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110198.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110198.jpg",
    tags: ["도깨비", "실물사진", "PD1-3", "깨뽀 (3면상)", "봉당", "초대형"],
  },
  {
    id: "original-PD2",
    inventoryNo: "PD2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110118.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110118.jpg",
    tags: ["도깨비", "실물사진", "PD2", "봉당"],
  },
  {
    id: "original-PD3",
    inventoryNo: "PD3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110119.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110119.jpg",
    tags: ["도깨비", "실물사진", "PD3", "봉당"],
  },
  {
    id: "original-PD4-1",
    inventoryNo: "PD4-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110121.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110121.jpg",
    tags: ["도깨비", "실물사진", "PD4-1", "봉당"],
  },
  {
    id: "original-PD4-2",
    inventoryNo: "PD4-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110121.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110121.jpg",
    tags: ["도깨비", "실물사진", "PD4-2", "봉당"],
  },
  {
    id: "original-PD5-1",
    inventoryNo: "PD5-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110125.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110125.jpg",
    tags: ["도깨비", "실물사진", "PD5-1", "봉당"],
  },
  {
    id: "original-PD5-2",
    inventoryNo: "PD5-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110125.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110125.jpg",
    tags: ["도깨비", "실물사진", "PD5-2", "봉당"],
  },
  {
    id: "original-PD6-1",
    inventoryNo: "PD6-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110126.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110126.jpg",
    tags: ["도깨비", "실물사진", "PD6-1", "봉당"],
  },
  {
    id: "original-PD6-2",
    inventoryNo: "PD6-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110126.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110126.jpg",
    tags: ["도깨비", "실물사진", "PD6-2", "봉당"],
  },
  {
    id: "original-PD6-3",
    inventoryNo: "PD6-3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110126.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110126.jpg",
    tags: ["도깨비", "실물사진", "PD6-3", "봉당"],
  },
  {
    id: "original-PD7-1",
    inventoryNo: "PD7-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110129.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110129.jpg",
    tags: ["도깨비", "실물사진", "PD7-1", "봉당"],
  },
  {
    id: "original-PD7-2",
    inventoryNo: "PD7-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110129.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110129.jpg",
    tags: ["도깨비", "실물사진", "PD7-2", "봉당"],
  },
  {
    id: "original-PD8-1",
    inventoryNo: "PD8-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110131.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110131.jpg",
    tags: ["도깨비", "실물사진", "PD8-1", "봉당"],
  },
  {
    id: "original-PD8-2",
    inventoryNo: "PD8-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110131.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110131.jpg",
    tags: ["도깨비", "실물사진", "PD8-2", "봉당"],
  },
  {
    id: "original-PD8-3",
    inventoryNo: "PD8-3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110131.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110131.jpg",
    tags: ["도깨비", "실물사진", "PD8-3", "봉당"],
  },
  {
    id: "original-PD9",
    inventoryNo: "PD9",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110133.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110133.jpg",
    tags: ["도깨비", "실물사진", "PD9", "봉당"],
  },
  {
    id: "original-PD10",
    inventoryNo: "PD10",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110135.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110135.jpg",
    tags: ["도깨비", "실물사진", "PD10", "봉당"],
  },
  {
    id: "original-PD11-1",
    inventoryNo: "PD11-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110138.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110138.jpg",
    tags: ["도깨비", "실물사진", "PD11-1", "봉당"],
  },
  {
    id: "original-PD11-2",
    inventoryNo: "PD11-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110138.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110138.jpg",
    tags: ["도깨비", "실물사진", "PD11-2", "봉당"],
  },
  {
    id: "original-PD12-1",
    inventoryNo: "PD12-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110139.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110139.jpg",
    tags: ["도깨비", "실물사진", "PD12-1", "봉당"],
  },
  {
    id: "original-PD12-2",
    inventoryNo: "PD12-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110139.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110139.jpg",
    tags: ["도깨비", "실물사진", "PD12-2", "봉당"],
  },
  {
    id: "original-PD13-1",
    inventoryNo: "PD13-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110142.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110142.jpg",
    tags: ["도깨비", "실물사진", "PD13-1", "봉당"],
  },
  {
    id: "original-PD13-2",
    inventoryNo: "PD13-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110142.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110142.jpg",
    tags: ["도깨비", "실물사진", "PD13-2", "봉당"],
  },
  {
    id: "original-PD14",
    inventoryNo: "PD14",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110144.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110144.jpg",
    tags: ["도깨비", "실물사진", "PD14", "봉당"],
  },
  {
    id: "original-PD15-1",
    inventoryNo: "PD15-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110149.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110149.jpg",
    tags: ["도깨비", "실물사진", "PD15-1", "봉당"],
  },
  {
    id: "original-PD15-2",
    inventoryNo: "PD15-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110149.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110149.jpg",
    tags: ["도깨비", "실물사진", "PD15-2", "봉당"],
  },
  {
    id: "original-PD15-3",
    inventoryNo: "PD15-3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110149.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110149.jpg",
    tags: ["도깨비", "실물사진", "PD15-3", "봉당"],
  },
  {
    id: "original-PD16-1",
    inventoryNo: "PD16-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110155.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110155.jpg",
    tags: ["도깨비", "실물사진", "PD16-1", "봉당"],
  },
  {
    id: "original-PD16-2",
    inventoryNo: "PD16-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110155.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110155.jpg",
    tags: ["도깨비", "실물사진", "PD16-2", "봉당"],
  },
  {
    id: "original-PD17-1",
    inventoryNo: "PD17-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110159.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110159.jpg",
    tags: ["도깨비", "실물사진", "PD17-1", "봉당"],
  },
  {
    id: "original-PD17-2",
    inventoryNo: "PD17-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110159.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110159.jpg",
    tags: ["도깨비", "실물사진", "PD17-2", "봉당"],
  },
  {
    id: "original-PD17-3",
    inventoryNo: "PD17-3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110159.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110159.jpg",
    tags: ["도깨비", "실물사진", "PD17-3", "봉당"],
  },
  {
    id: "original-PD18-1",
    inventoryNo: "PD18-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110162.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110162.jpg",
    tags: ["도깨비", "실물사진", "PD18-1", "봉당"],
  },
  {
    id: "original-PD18-2",
    inventoryNo: "PD18-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110162.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110162.jpg",
    tags: ["도깨비", "실물사진", "PD18-2", "봉당"],
  },
  {
    id: "original-PD18-3",
    inventoryNo: "PD18-3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110162.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110162.jpg",
    tags: ["도깨비", "실물사진", "PD18-3", "봉당"],
  },
  {
    id: "original-PD18-4",
    inventoryNo: "PD18-4",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110162.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110162.jpg",
    tags: ["도깨비", "실물사진", "PD18-4", "봉당"],
  },
  {
    id: "original-PD18-5",
    inventoryNo: "PD18-5",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110162.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110162.jpg",
    tags: ["도깨비", "실물사진", "PD18-5", "봉당"],
  },
  {
    id: "original-PD19-1",
    inventoryNo: "PD19-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110164.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110164.jpg",
    tags: ["도깨비", "실물사진", "PD19-1", "봉당"],
  },
  {
    id: "original-PD19-2",
    inventoryNo: "PD19-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110164.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110164.jpg",
    tags: ["도깨비", "실물사진", "PD19-2", "봉당"],
  },
  {
    id: "original-PD19-3",
    inventoryNo: "PD19-3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110164.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110164.jpg",
    tags: ["도깨비", "실물사진", "PD19-3", "봉당"],
  },
  {
    id: "original-PD19-4",
    inventoryNo: "PD19-4",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110164.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110164.jpg",
    tags: ["도깨비", "실물사진", "PD19-4", "봉당"],
  },
  {
    id: "original-PD19-5",
    inventoryNo: "PD19-5",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110164.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110164.jpg",
    tags: ["도깨비", "실물사진", "PD19-5", "봉당"],
  },
  {
    id: "original-PD19-6",
    inventoryNo: "PD19-6",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110164.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110164.jpg",
    tags: ["도깨비", "실물사진", "PD19-6", "봉당"],
  },
  {
    id: "original-PD20",
    inventoryNo: "PD20",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110168.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110168.jpg",
    tags: ["도깨비", "실물사진", "PD20", "봉당"],
  },
  {
    id: "original-PD21-1",
    inventoryNo: "PD21-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110170.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110170.jpg",
    tags: ["도깨비", "실물사진", "PD21-1", "봉당"],
  },
  {
    id: "original-PD21-2",
    inventoryNo: "PD21-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110170.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110170.jpg",
    tags: ["도깨비", "실물사진", "PD21-2", "봉당"],
  },
  {
    id: "original-PD22-1",
    inventoryNo: "PD22-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110172.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110172.jpg",
    tags: ["도깨비", "실물사진", "PD22-1", "봉당"],
  },
  {
    id: "original-PD22-2",
    inventoryNo: "PD22-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110172.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110172.jpg",
    tags: ["도깨비", "실물사진", "PD22-2", "봉당"],
  },
  {
    id: "original-PD22-3",
    inventoryNo: "PD22-3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110172.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110172.jpg",
    tags: ["도깨비", "실물사진", "PD22-3", "봉당"],
  },
  {
    id: "original-PD23-1",
    inventoryNo: "PD23-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110174.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110174.jpg",
    tags: ["도깨비", "실물사진", "PD23-1", "봉당"],
  },
  {
    id: "original-PD23-2",
    inventoryNo: "PD23-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110174.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110174.jpg",
    tags: ["도깨비", "실물사진", "PD23-2", "봉당"],
  },
  {
    id: "original-PD24-1",
    inventoryNo: "PD24-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110176.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110176.jpg",
    tags: ["도깨비", "실물사진", "PD24-1", "봉당"],
  },
  {
    id: "original-PD24-2",
    inventoryNo: "PD24-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110176.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110176.jpg",
    tags: ["도깨비", "실물사진", "PD24-2", "봉당"],
  },
  {
    id: "original-PD25-1",
    inventoryNo: "PD25-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110178.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110178.jpg",
    tags: ["도깨비", "실물사진", "PD25-1", "봉당"],
  },
  {
    id: "original-PD25-2",
    inventoryNo: "PD25-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110178.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110178.jpg",
    tags: ["도깨비", "실물사진", "PD25-2", "봉당"],
  },
  {
    id: "original-PD26",
    inventoryNo: "PD26",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110180.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110180.jpg",
    tags: ["도깨비", "실물사진", "PD26", "봉당"],
  },
  {
    id: "original-PD27",
    inventoryNo: "PD27",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110184.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110184.jpg",
    tags: ["도깨비", "실물사진", "PD27", "봉당"],
  },
  {
    id: "original-PD28-1",
    inventoryNo: "PD28-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110186.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110186.jpg",
    tags: ["도깨비", "실물사진", "PD28-1", "봉당"],
  },
  {
    id: "original-PD28-2",
    inventoryNo: "PD28-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110186.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110186.jpg",
    tags: ["도깨비", "실물사진", "PD28-2", "봉당"],
  },
  {
    id: "original-PD29-1",
    inventoryNo: "PD29-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110188.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110188.jpg",
    tags: ["도깨비", "실물사진", "PD29-1", "봉당"],
  },
  {
    id: "original-PD29-2",
    inventoryNo: "PD29-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110188.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110188.jpg",
    tags: ["도깨비", "실물사진", "PD29-2", "봉당"],
  },
  {
    id: "original-PD30",
    inventoryNo: "PD30",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110192.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110192.jpg",
    tags: ["도깨비", "실물사진", "PD30", "봉당"],
  },
  {
    id: "original-PD31-1",
    inventoryNo: "PD31-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110194.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110194.jpg",
    tags: ["도깨비", "실물사진", "PD31-1", "봉당"],
  },
  {
    id: "original-PD31-2",
    inventoryNo: "PD31-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110194.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110194.jpg",
    tags: ["도깨비", "실물사진", "PD31-2", "봉당"],
  },
  {
    id: "original-PD31-3",
    inventoryNo: "PD31-3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110194.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110194.jpg",
    tags: ["도깨비", "실물사진", "PD31-3", "봉당"],
  },
  {
    id: "original-PD32-1",
    inventoryNo: "PD32-1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110196.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110196.jpg",
    tags: ["도깨비", "실물사진", "PD32-1", "봉당"],
  },
  {
    id: "original-PD32-2",
    inventoryNo: "PD32-2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110196.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110196.jpg",
    tags: ["도깨비", "실물사진", "PD32-2", "봉당"],
  },
  {
    id: "original-PD32-3",
    inventoryNo: "PD32-3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110196.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110196.jpg",
    tags: ["도깨비", "실물사진", "PD32-3", "봉당"],
  },
  {
    id: "original-PD33",
    inventoryNo: "PD33",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110201.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110201.jpg",
    tags: ["도깨비", "실물사진", "PD33", "봉당"],
  },
  {
    id: "original-PD34",
    inventoryNo: "PD34",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110203.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110203.jpg",
    tags: ["도깨비", "실물사진", "PD34", "봉당"],
  },
  {
    id: "original-PD35",
    inventoryNo: "PD35",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110208.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110208.jpg",
    tags: ["도깨비", "실물사진", "PD35", "봉당"],
  },
  {
    id: "original-PD36",
    inventoryNo: "PD36",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110210.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110210.jpg",
    tags: ["도깨비", "실물사진", "PD36", "봉당"],
  },
  {
    id: "original-QD1",
    inventoryNo: "QD1",
    name: "운도",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1110215.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1110215.jpg",
    tags: ["도깨비", "실물사진", "QD1", "운도", "퐁당", "초대형"],
  },
  {
    id: "original-QD2",
    inventoryNo: "QD2",
    name: "표사자",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410223.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410223.jpg",
    tags: ["도깨비", "실물사진", "QD2", "표사자", "퐁당", "초대형"],
  },
  {
    id: "original-RD1",
    inventoryNo: "RD1",
    name: "해치",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400807.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400807.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD1",
      "해치",
      "천지인 - 정령의 숲 초입",
      "대형",
    ],
  },
  {
    id: "original-RD2",
    inventoryNo: "RD2",
    name: "해초",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400811.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400811.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD2",
      "해초",
      "천지인 - 정령의 숲 초입",
      "대형",
    ],
  },
  {
    id: "original-RD3",
    inventoryNo: "RD3",
    name: "뇌투뇌",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400814.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400814.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD3",
      "뇌투뇌",
      "천지인 - 정령의 숲 초입",
      "소형",
    ],
  },
  {
    id: "original-RD4",
    inventoryNo: "RD4",
    name: "맨투맨",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400816.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400816.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD4",
      "맨투맨",
      "천지인 - 정령의 숲 초입",
      "소형",
    ],
  },
  {
    id: "original-RD5",
    inventoryNo: "RD5",
    name: "너투너",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400820.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400820.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD5",
      "너투너",
      "천지인 - 정령의 숲 초입",
      "소형",
    ],
  },
  {
    id: "original-RD6",
    inventoryNo: "RD6",
    name: "죽었어야 할 운명 싸랄두톨",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400822.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400822.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD6",
      "죽었어야 할 운명 싸랄두톨",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD7",
    inventoryNo: "RD7",
    name: "죽었어야할 운명 팔분의일",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400824.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400824.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD7",
      "죽었어야할 운명 팔분의일",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD8",
    inventoryNo: "RD8",
    name: "죽었어야 할 운명 함잣",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400827.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400827.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD8",
      "죽었어야 할 운명 함잣",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD9",
    inventoryNo: "RD9",
    name: "죽었어야 할 운명 자작",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400831.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400831.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD9",
      "죽었어야 할 운명 자작",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD10",
    inventoryNo: "RD10",
    name: "죽었어야 할 운명 암염",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400834.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400834.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD10",
      "죽었어야 할 운명 암염",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD11",
    inventoryNo: "RD11",
    name: "죽었어야 할 운명 타르 ",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400836.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400836.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD11",
      "죽었어야 할 운명 타르",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD12",
    inventoryNo: "RD12",
    name: "너도냐",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400839.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400839.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD12",
      "너도냐",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD13",
    inventoryNo: "RD13",
    name: "나는좀",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400840.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400840.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD13",
      "나는좀",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD14",
    inventoryNo: "RD14",
    name: "나돈데",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400843.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400843.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD14",
      "나돈데",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD15",
    inventoryNo: "RD15",
    name: "천지인",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400847.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400847.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD15",
      "천지인",
      "천지인 - 정령의 숲 초입",
      "대형",
    ],
  },
  {
    id: "original-RD16",
    inventoryNo: "RD16",
    name: "해일랑 - 천지인 지키미, 일명 죽음에서 돌아온 자",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400851.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400851.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD16",
      "해일랑 - 천지인 지키미, 일명 죽음에서 돌아온 자",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD17",
    inventoryNo: "RD17",
    name: "옥석탑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400915.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400915.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD17",
      "옥석탑",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD18",
    inventoryNo: "RD18",
    name: "원석탑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400917.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400917.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD18",
      "원석탑",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD19",
    inventoryNo: "RD19",
    name: "석목탑",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400920.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400920.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD19",
      "석목탑",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD20",
    inventoryNo: "RD20",
    name: "소왓",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400923.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400923.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD20",
      "소왓",
      "천지인 - 정령의 숲 초입",
      "소형",
    ],
  },
  {
    id: "original-RD21",
    inventoryNo: "RD21",
    name: "겅한댄하멍 남매",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400926.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400926.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD21",
      "겅한댄하멍 남매",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD22",
    inventoryNo: "RD22",
    name: "겅하잰햄신디 형제",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400928.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400928.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD22",
      "겅하잰햄신디 형제",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD23",
    inventoryNo: "RD23",
    name: "삼신 참나무",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400997.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400997.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD23",
      "삼신 참나무",
      "천지인 - 정령의 숲 초입",
      "대형",
    ],
  },
  {
    id: "original-RD24",
    inventoryNo: "RD24",
    name: "게네",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1401000.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1401000.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD24",
      "게네",
      "천지인 - 정령의 숲 초입",
      "소형",
    ],
  },
  {
    id: "original-RD25",
    inventoryNo: "RD25",
    name: "몽구름",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410003.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410003.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD25",
      "몽구름",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD26",
    inventoryNo: "RD26",
    name: "못이룬 손톱",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410005.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410005.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD26",
      "못이룬 손톱",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD27",
    inventoryNo: "RD27",
    name: "계약된 결속자",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410008.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410008.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD27",
      "계약된 결속자",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD28",
    inventoryNo: "RD28",
    name: "억눌린 오름",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410011.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410011.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD28",
      "억눌린 오름",
      "천지인 - 정령의 숲 초입",
      "중형",
    ],
  },
  {
    id: "original-RD29",
    inventoryNo: "RD29",
    name: "삼신 오름",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410013.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410013.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD29",
      "삼신 오름",
      "천지인 - 정령의 숲 초입",
      "대형",
    ],
  },
  {
    id: "original-RD30",
    inventoryNo: "RD30",
    name: "길주",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410016.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410016.jpg",
    tags: ["도깨비", "실물사진", "RD30", "길주", "퐁당", "소형"],
  },
  {
    id: "original-RD31",
    inventoryNo: "RD31",
    name: "금리",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410019.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410019.jpg",
    tags: ["도깨비", "실물사진", "RD31", "금리", "퐁당", "소형"],
  },
  {
    id: "original-RD32",
    inventoryNo: "RD32",
    name: "혁장",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410022.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410022.jpg",
    tags: ["도깨비", "실물사진", "RD32", "혁장", "퐁당", "소형"],
  },
  {
    id: "original-RD33",
    inventoryNo: "RD33",
    name: "미지",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410024.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410024.jpg",
    tags: ["도깨비", "실물사진", "RD33", "미지", "퐁당", "소형"],
  },
  {
    id: "original-RD34",
    inventoryNo: "RD34",
    name: "자명",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410028.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410028.jpg",
    tags: ["도깨비", "실물사진", "RD34", "자명", "퐁당", "중형"],
  },
  {
    id: "original-RD35",
    inventoryNo: "RD35",
    name: "봉수",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410030.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410030.jpg",
    tags: ["도깨비", "실물사진", "RD35", "봉수", "퐁당", "소형"],
  },
  {
    id: "original-RD36",
    inventoryNo: "RD36",
    name: "서불",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410033.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410033.jpg",
    tags: ["도깨비", "실물사진", "RD36", "서불", "퐁당", "소형"],
  },
  {
    id: "original-RD37",
    inventoryNo: "RD37",
    name: "소미",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410037.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410037.jpg",
    tags: ["도깨비", "실물사진", "RD37", "소미", "퐁당", "중형"],
  },
  {
    id: "original-RD38",
    inventoryNo: "RD38",
    name: "자림",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410039.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410039.jpg",
    tags: ["도깨비", "실물사진", "RD38", "자림", "퐁당", "소형"],
  },
  {
    id: "original-RD39",
    inventoryNo: "RD39",
    name: "중진",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410040.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410040.jpg",
    tags: ["도깨비", "실물사진", "RD39", "중진", "퐁당", "소형"],
  },
  {
    id: "original-RD40",
    inventoryNo: "RD40",
    name: "마리노신",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410043.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410043.jpg",
    tags: ["도깨비", "실물사진", "RD40", "마리노신", "퐁당", "중형"],
  },
  {
    id: "original-RD41",
    inventoryNo: "RD41",
    name: "라구",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410046.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410046.jpg",
    tags: ["도깨비", "실물사진", "RD41", "라구", "퐁당", "소형"],
  },
  {
    id: "original-RD42",
    inventoryNo: "RD42",
    name: "다제",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410049.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410049.jpg",
    tags: ["도깨비", "실물사진", "RD42", "다제", "퐁당", "소형"],
  },
  {
    id: "original-RD43",
    inventoryNo: "RD43",
    name: "라자",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410050.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410050.jpg",
    tags: ["도깨비", "실물사진", "RD43", "라자", "퐁당", "소형"],
  },
  {
    id: "original-RD44",
    inventoryNo: "RD44",
    name: "진묘",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410054.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410054.jpg",
    tags: ["도깨비", "실물사진", "RD44", "진묘", "퐁당", "소형"],
  },
  {
    id: "original-RD45",
    inventoryNo: "RD45",
    name: "빈라",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410058.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410058.jpg",
    tags: ["도깨비", "실물사진", "RD45", "빈라", "퐁당", "소형"],
  },
  {
    id: "original-RD46",
    inventoryNo: "RD46",
    name: "실무",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410059.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410059.jpg",
    tags: ["도깨비", "실물사진", "RD46", "실무", "퐁당", "소형"],
  },
  {
    id: "original-RD47",
    inventoryNo: "RD47",
    name: "오루",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410061.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410061.jpg",
    tags: ["도깨비", "실물사진", "RD47", "오루", "퐁당", "소형"],
  },
  {
    id: "original-RD48",
    inventoryNo: "RD48",
    name: "소진홍",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410067.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410067.jpg",
    tags: ["도깨비", "실물사진", "RD48", "소진홍", "퐁당", "중형"],
  },
  {
    id: "original-RD49",
    inventoryNo: "RD49",
    name: "송무",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410070.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410070.jpg",
    tags: ["도깨비", "실물사진", "RD49", "송무", "퐁당", "소형"],
  },
  {
    id: "original-RD50",
    inventoryNo: "RD50",
    name: "남겨진 쎄시봉 버섯 쌍둥이",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410072.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410072.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "RD50",
      "남겨진 쎄시봉 버섯 쌍둥이",
      "퐁당",
      "중형",
    ],
  },
  {
    id: "original-RD51",
    inventoryNo: "RD51",
    name: "희두",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410075.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410075.jpg",
    tags: ["도깨비", "실물사진", "RD51", "희두", "퐁당", "소형"],
  },
  {
    id: "original-RD52",
    inventoryNo: "RD52",
    name: "다루",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410076.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410076.jpg",
    tags: ["도깨비", "실물사진", "RD52", "다루", "퐁당", "소형"],
  },
  {
    id: "original-RD53",
    inventoryNo: "RD53",
    name: "동민",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410079.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410079.jpg",
    tags: ["도깨비", "실물사진", "RD53", "동민", "퐁당", "소형"],
  },
  {
    id: "original-RD54",
    inventoryNo: "RD54",
    name: "주시",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410080.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410080.jpg",
    tags: ["도깨비", "실물사진", "RD54", "주시", "퐁당", "중형"],
  },
  {
    id: "original-RD55",
    inventoryNo: "RD55",
    name: "호화",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410084.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410084.jpg",
    tags: ["도깨비", "실물사진", "RD55", "호화", "퐁당", "소형"],
  },
  {
    id: "original-RD56",
    inventoryNo: "RD56",
    name: "송우",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410087.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410087.jpg",
    tags: ["도깨비", "실물사진", "RD56", "송우", "퐁당", "소형"],
  },
  {
    id: "original-RD57",
    inventoryNo: "RD57",
    name: "지석",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410089.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410089.jpg",
    tags: ["도깨비", "실물사진", "RD57", "지석", "퐁당", "소형"],
  },
  {
    id: "original-RD58",
    inventoryNo: "RD58",
    name: "솔애",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410093.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410093.jpg",
    tags: ["도깨비", "실물사진", "RD58", "솔애", "퐁당", "소형"],
  },
  {
    id: "original-RD59",
    inventoryNo: "RD59",
    name: "강소",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410094.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410094.jpg",
    tags: ["도깨비", "실물사진", "RD59", "강소", "퐁당", "소형"],
  },
  {
    id: "original-RD60",
    inventoryNo: "RD60",
    name: "주살",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410096 L1410098.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410096 L1410098.jpg",
    tags: ["도깨비", "실물사진", "RD60", "주살", "퐁당", "중형"],
  },
  {
    id: "original-RD61",
    inventoryNo: "RD61",
    name: "형구",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410101.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410101.jpg",
    tags: ["도깨비", "실물사진", "RD61", "형구", "퐁당", "중형"],
  },
  {
    id: "original-RD62",
    inventoryNo: "RD62",
    name: "방신",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410103.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410103.jpg",
    tags: ["도깨비", "실물사진", "RD62", "방신", "퐁당", "소형"],
  },
  {
    id: "original-RD63",
    inventoryNo: "RD63",
    name: "파미도",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410106.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410106.jpg",
    tags: ["도깨비", "실물사진", "RD63", "파미도", "퐁당", "소형"],
  },
  {
    id: "original-RD64",
    inventoryNo: "RD64",
    name: "민근",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410108.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410108.jpg",
    tags: ["도깨비", "실물사진", "RD64", "민근", "퐁당", "소형"],
  },
  {
    id: "original-RD65",
    inventoryNo: "RD65",
    name: "진도",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410110.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410110.jpg",
    tags: ["도깨비", "실물사진", "RD65", "진도", "퐁당", "소형"],
  },
  {
    id: "original-RD66",
    inventoryNo: "RD66",
    name: "이슬",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410116.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410116.jpg",
    tags: ["도깨비", "실물사진", "RD66", "이슬", "퐁당", "소형"],
  },
  {
    id: "original-RD67",
    inventoryNo: "RD67",
    name: "서진",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410118.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410118.jpg",
    tags: ["도깨비", "실물사진", "RD67", "서진", "퐁당", "소형"],
  },
  {
    id: "original-RD68",
    inventoryNo: "RD68",
    name: "정실",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410121.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410121.jpg",
    tags: ["도깨비", "실물사진", "RD68", "정실", "퐁당", "소형"],
  },
  {
    id: "original-RD69",
    inventoryNo: "RD69",
    name: "막수",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410123.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410123.jpg",
    tags: ["도깨비", "실물사진", "RD69", "막수", "퐁당", "소형"],
  },
  {
    id: "original-RD70",
    inventoryNo: "RD70",
    name: "경진",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410126.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410126.jpg",
    tags: ["도깨비", "실물사진", "RD70", "경진", "퐁당", "소형"],
  },
  {
    id: "original-RD71",
    inventoryNo: "RD71",
    name: "시몬",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410128.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410128.jpg",
    tags: ["도깨비", "실물사진", "RD71", "시몬", "퐁당", "중형"],
  },
  {
    id: "original-RD72",
    inventoryNo: "RD72",
    name: "동수",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410131.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410131.jpg",
    tags: ["도깨비", "실물사진", "RD72", "동수", "퐁당", "소형"],
  },
  {
    id: "original-RD73",
    inventoryNo: "RD73",
    name: "지음",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410133.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410133.jpg",
    tags: ["도깨비", "실물사진", "RD73", "지음", "퐁당", "소형"],
  },
  {
    id: "original-RD74",
    inventoryNo: "RD74",
    name: "막수",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410135.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410135.jpg",
    tags: ["도깨비", "실물사진", "RD74", "막수", "퐁당", "중형"],
  },
  {
    id: "original-RD75",
    inventoryNo: "RD75",
    name: "완달",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410140.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410140.jpg",
    tags: ["도깨비", "실물사진", "RD75", "완달", "퐁당", "중형"],
  },
  {
    id: "original-RD76",
    inventoryNo: "RD76",
    name: "소영, 영수",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410143.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410143.jpg",
    tags: ["도깨비", "실물사진", "RD76", "소영, 영수", "퐁당", "소형, 소형"],
  },
  {
    id: "original-RD77",
    inventoryNo: "RD77",
    name: "찬수",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410150.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410150.jpg",
    tags: ["도깨비", "실물사진", "RD77", "찬수", "퐁당", "중형"],
  },
  {
    id: "original-RD78",
    inventoryNo: "RD78",
    name: "아중",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410148.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410148.jpg",
    tags: ["도깨비", "실물사진", "RD78", "아중", "퐁당", "중형"],
  },
  {
    id: "original-RD79",
    inventoryNo: "RD79",
    name: "석진",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410158.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410158.jpg",
    tags: ["도깨비", "실물사진", "RD79", "석진", "퐁당", "소형"],
  },
  {
    id: "original-RD80",
    inventoryNo: "RD80",
    name: "종달",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410162.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410162.jpg",
    tags: ["도깨비", "실물사진", "RD80", "종달", "퐁당", "초소형"],
  },
  {
    id: "original-RD81",
    inventoryNo: "RD81",
    name: "자림",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410163.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410163.jpg",
    tags: ["도깨비", "실물사진", "RD81", "자림", "퐁당", "소형"],
  },
  {
    id: "original-RD82",
    inventoryNo: "RD82",
    name: " 석동지",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410167.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410167.jpg",
    tags: ["도깨비", "실물사진", "RD82", "석동지", "퐁당", "소형"],
  },
  {
    id: "original-RD83",
    inventoryNo: "RD83",
    name: "슬기",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410170.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410170.jpg",
    tags: ["도깨비", "실물사진", "RD83", "슬기", "퐁당", "소형"],
  },
  {
    id: "original-RD84",
    inventoryNo: "RD84",
    name: "아진",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410173.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410173.jpg",
    tags: ["도깨비", "실물사진", "RD84", "아진", "퐁당", "소형"],
  },
  {
    id: "original-RD85",
    inventoryNo: "RD85",
    name: "명아",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410175.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410175.jpg",
    tags: ["도깨비", "실물사진", "RD85", "명아", "퐁당", "소형"],
  },
  {
    id: "original-RD86",
    inventoryNo: "RD86",
    name: "진풍",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410177.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410177.jpg",
    tags: ["도깨비", "실물사진", "RD86", "진풍", "퐁당", "소형"],
  },
  {
    id: "original-RD87",
    inventoryNo: "RD87",
    name: "류진",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410181.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410181.jpg",
    tags: ["도깨비", "실물사진", "RD87", "류진", "퐁당", "소형"],
  },
  {
    id: "original-RD88",
    inventoryNo: "RD88",
    name: "변웅",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410184.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410184.jpg",
    tags: ["도깨비", "실물사진", "RD88", "변웅", "퐁당", "소형"],
  },
  {
    id: "original-RD89",
    inventoryNo: "RD89",
    name: "추동",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410186.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410186.jpg",
    tags: ["도깨비", "실물사진", "RD89", "추동", "퐁당", "소형"],
  },
  {
    id: "original-RD90",
    inventoryNo: "RD90",
    name: "안빈",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410189.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410189.jpg",
    tags: ["도깨비", "실물사진", "RD90", "안빈", "퐁당", "소형"],
  },
  {
    id: "original-RD91",
    inventoryNo: "RD91",
    name: "임슬",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410192.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410192.jpg",
    tags: ["도깨비", "실물사진", "RD91", "임슬", "퐁당", "중형"],
  },
  {
    id: "original-RD92",
    inventoryNo: "RD92",
    name: "수림",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410197.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410197.jpg",
    tags: ["도깨비", "실물사진", "RD92", "수림", "퐁당", "중형"],
  },
  {
    id: "original-RD93",
    inventoryNo: "RD93",
    name: "진호, 호진",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410201.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410201.jpg",
    tags: ["도깨비", "실물사진", "RD93", "진호, 호진", "퐁당", "소형, 소형"],
  },
  {
    id: "original-RD94",
    inventoryNo: "RD94",
    name: "선식",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410206.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410206.jpg",
    tags: ["도깨비", "실물사진", "RD94", "선식", "퐁당", "중형"],
  },
  {
    id: "original-RD95",
    inventoryNo: "RD95",
    name: "갑환",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410208.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410208.jpg",
    tags: ["도깨비", "실물사진", "RD95", "갑환", "퐁당", "소형"],
  },
  {
    id: "original-RD96",
    inventoryNo: "RD96",
    name: "호석",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410210.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410210.jpg",
    tags: ["도깨비", "실물사진", "RD96", "호석", "퐁당", "소형"],
  },
  {
    id: "original-RD97",
    inventoryNo: "RD97",
    name: "창호",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410213.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410213.jpg",
    tags: ["도깨비", "실물사진", "RD97", "창호", "퐁당", "소형"],
  },
  {
    id: "original-RD98",
    inventoryNo: "RD98",
    name: "김청",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410217.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410217.jpg",
    tags: ["도깨비", "실물사진", "RD98", "김청", "퐁당", "소형"],
  },
  {
    id: "original-RD99",
    inventoryNo: "RD99",
    name: "성신",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1410221.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1410221.jpg",
    tags: ["도깨비", "실물사진", "RD99", "성신", "퐁당", "중형"],
  },
  {
    id: "original-SD1",
    inventoryNo: "SD1",
    name: "곤파 방카르",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400856.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400856.jpg",
    tags: [
      "도깨비",
      "실물사진",
      "SD1",
      "곤파 방카르",
      "천지인 - 정령의 숲",
      "소형",
    ],
  },
  {
    id: "original-SD2",
    inventoryNo: "SD2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400860.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400860.jpg",
    tags: ["도깨비", "실물사진", "SD2", "천지인 - 정령의 숲", "초소형"],
  },
  {
    id: "original-SD3",
    inventoryNo: "SD3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400864.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400864.jpg",
    tags: ["도깨비", "실물사진", "SD3", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD4",
    inventoryNo: "SD4",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400868.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400868.jpg",
    tags: ["도깨비", "실물사진", "SD4", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD5",
    inventoryNo: "SD5",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400871.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400871.jpg",
    tags: ["도깨비", "실물사진", "SD5", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD6",
    inventoryNo: "SD6",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400875.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400875.jpg",
    tags: ["도깨비", "실물사진", "SD6", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD7",
    inventoryNo: "SD7",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400877.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400877.jpg",
    tags: ["도깨비", "실물사진", "SD7", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD8",
    inventoryNo: "SD8",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400879.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400879.jpg",
    tags: ["도깨비", "실물사진", "SD8", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD9",
    inventoryNo: "SD9",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400884.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400884.jpg",
    tags: ["도깨비", "실물사진", "SD9", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD10",
    inventoryNo: "SD10",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400886.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400886.jpg",
    tags: ["도깨비", "실물사진", "SD10", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD11",
    inventoryNo: "SD11",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400889.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400889.jpg",
    tags: ["도깨비", "실물사진", "SD11", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD12",
    inventoryNo: "SD12",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400892.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400892.jpg",
    tags: ["도깨비", "실물사진", "SD12", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD13",
    inventoryNo: "SD13",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400895.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400895.jpg",
    tags: ["도깨비", "실물사진", "SD13", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD14",
    inventoryNo: "SD14",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400897.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400897.jpg",
    tags: ["도깨비", "실물사진", "SD14", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD15",
    inventoryNo: "SD15",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400898.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400898.jpg",
    tags: ["도깨비", "실물사진", "SD15", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD16",
    inventoryNo: "SD16",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400901.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400901.jpg",
    tags: ["도깨비", "실물사진", "SD16", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD17",
    inventoryNo: "SD17",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400902.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400902.jpg",
    tags: ["도깨비", "실물사진", "SD17", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD18",
    inventoryNo: "SD18",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400904.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400904.jpg",
    tags: ["도깨비", "실물사진", "SD18", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD19",
    inventoryNo: "SD19",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400907.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400907.jpg",
    tags: ["도깨비", "실물사진", "SD19", "천지인 - 정령의 숲"],
  },
  {
    id: "original-SD20",
    inventoryNo: "SD20",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400912.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400912.jpg",
    tags: ["도깨비", "실물사진", "SD20", "천지인 - 정령의 숲"],
  },
  {
    id: "original-TD1",
    inventoryNo: "TD1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400933.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400933.jpg",
    tags: ["도깨비", "실물사진", "TD1", "토그리 마을"],
  },
  {
    id: "original-TD2",
    inventoryNo: "TD2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400935.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400935.jpg",
    tags: ["도깨비", "실물사진", "TD2", "토그리 마을"],
  },
  {
    id: "original-TD3",
    inventoryNo: "TD3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400938.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400938.jpg",
    tags: ["도깨비", "실물사진", "TD3", "토그리 마을"],
  },
  {
    id: "original-TD4",
    inventoryNo: "TD4",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400941.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400941.jpg",
    tags: ["도깨비", "실물사진", "TD4", "토그리 마을"],
  },
  {
    id: "original-TD5",
    inventoryNo: "TD5",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400942.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400942.jpg",
    tags: ["도깨비", "실물사진", "TD5", "토그리 마을"],
  },
  {
    id: "original-TD6",
    inventoryNo: "TD6",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400945.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400945.jpg",
    tags: ["도깨비", "실물사진", "TD6", "토그리 마을"],
  },
  {
    id: "original-TD7",
    inventoryNo: "TD7",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400948.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400948.jpg",
    tags: ["도깨비", "실물사진", "TD7", "토그리 마을"],
  },
  {
    id: "original-TD8",
    inventoryNo: "TD8",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400949.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400949.jpg",
    tags: ["도깨비", "실물사진", "TD8", "토그리 마을"],
  },
  {
    id: "original-TD9",
    inventoryNo: "TD9",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400953.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400953.jpg",
    tags: ["도깨비", "실물사진", "TD9", "토그리 마을"],
  },
  {
    id: "original-TD10",
    inventoryNo: "TD10",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400954.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400954.jpg",
    tags: ["도깨비", "실물사진", "TD10", "토그리 마을"],
  },
  {
    id: "original-TD11",
    inventoryNo: "TD11",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400957.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400957.jpg",
    tags: ["도깨비", "실물사진", "TD11", "토그리 마을"],
  },
  {
    id: "original-UD1",
    inventoryNo: "UD1",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400958.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400958.jpg",
    tags: ["도깨비", "실물사진", "UD1", "밤밤"],
  },
  {
    id: "original-UD2",
    inventoryNo: "UD2",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400963.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400963.jpg",
    tags: ["도깨비", "실물사진", "UD2", "밤밤"],
  },
  {
    id: "original-UD3",
    inventoryNo: "UD3",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400966.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400966.jpg",
    tags: ["도깨비", "실물사진", "UD3", "밤밤"],
  },
  {
    id: "original-UD4",
    inventoryNo: "UD4",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400968.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400968.jpg",
    tags: ["도깨비", "실물사진", "UD4", "밤밤"],
  },
  {
    id: "original-UD5",
    inventoryNo: "UD5",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400970.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400970.jpg",
    tags: ["도깨비", "실물사진", "UD5", "밤밤"],
  },
  {
    id: "original-UD6",
    inventoryNo: "UD6",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400972.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400972.jpg",
    tags: ["도깨비", "실물사진", "UD6", "밤밤"],
  },
  {
    id: "original-UD7",
    inventoryNo: "UD7",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400976.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400976.jpg",
    tags: ["도깨비", "실물사진", "UD7", "밤밤"],
  },
  {
    id: "original-UD8",
    inventoryNo: "UD8",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400980.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400980.jpg",
    tags: ["도깨비", "실물사진", "UD8", "밤밤"],
  },
  {
    id: "original-UD9",
    inventoryNo: "UD9",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400983.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400983.jpg",
    tags: ["도깨비", "실물사진", "UD9", "밤밤"],
  },
  {
    id: "original-UD10",
    inventoryNo: "UD10",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400985.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400985.jpg",
    tags: ["도깨비", "실물사진", "UD10", "밤밤"],
  },
  {
    id: "original-UD11",
    inventoryNo: "UD11",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400989.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400989.jpg",
    tags: ["도깨비", "실물사진", "UD11", "밤밤"],
  },
  {
    id: "original-UD12",
    inventoryNo: "UD12",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400992.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400992.jpg",
    tags: ["도깨비", "실물사진", "UD12", "밤밤"],
  },
  {
    id: "original-UD13",
    inventoryNo: "UD13",
    name: "",
    imageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/L1400994.jpg",
    resizedImageUrl:
      "https://ifzehytogmlbmhdixlmc.supabase.co/storage/v1/object/public/assets/originals/resized/L1400994.jpg",
    tags: ["도깨비", "실물사진", "UD13", "밤밤"],
  },
];
