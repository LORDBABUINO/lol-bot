import { pipe, map, chain } from "ramda";
(async () => {
  const chanceTablePerLevel = [
    // [1, 0, 0, 0, 0],
    // [1, 0, 0, 0, 0],
    // [1, 0, 0, 0, 0],
    // [0.8, 0.2, 0, 0, 0],
    // [0.3, 0.7, 0.25, 0, 0],
    // [0, 0.75, 0.25, 0, 0],
    // [0, 0.4, 0.6, 0, 0],
    // [0, 0, 0.7, 0.3, 0],
    // [0, 0, 0, 0.98, 0.02],
    // [0, 0, 0, 0.3, 0.7],

    // Possible chance table

    [1.0, 0, 0, 0, 0],
    [1.0, 0, 0, 0, 0],
    [0.75, 0.25, 0, 0, 0],
    [0.55, 0.3, 0.15, 0, 0],
    [0.45, 0.33, 0.2, 0],
    [0.25, 0.4, 0.3, 0.05, 0],
    [0.19, 0.3, 0.35, 0.15, 0.01],
    [0.16, 0.2, 0.35, 0.25, 0.04],
    [0.09, 0.15, 0.3, 0.3, 0.16], // <----
    [0.05, 0.1, 0.2, 40, 0.25],
    [0.01, 0.02, 0.12, 0.5, 0.35],
  ];

  const pool = [
    { qty: 13, pool: 22 },
    { qty: 13, pool: 20 },
    { qty: 13, pool: 17 },
    { qty: 13, pool: 10 },
    { qty: 8, pool: 9 },
  ];

  const campions = [
    { name: "Ahri", cost: 4 },
    { name: "Akali K/DA", cost: 4 },
    { name: "Akali True Damage", cost: 4 },
    { name: "Amumu", cost: 3 },
    { name: "Annie", cost: 1 },
    { name: "Aphelios", cost: 2 },
    { name: "Bard", cost: 2 },
    { name: "Blitzcrank", cost: 4 },
    { name: "Caitlyn", cost: 4 },
    { name: "Corki", cost: 1 },
    { name: "Ekko", cost: 3 },
    { name: "Evelynn", cost: 1 },
    { name: "Ezreal", cost: 4 },
    { name: "Garen", cost: 2 },
    { name: "Gnar", cost: 2 },
    { name: "Gragas", cost: 2 },
    { name: "Illaoi", cost: 5 },
    { name: "Jax", cost: 2 },
    { name: "Jhin", cost: 5 },
    { name: "Jinx", cost: 1 },
    { name: "KSante", cost: 1 },
    { name: "Kaisa", cost: 2 },
    { name: "Karthus", cost: 4 },
    { name: "Katarina", cost: 2 },
    { name: "Kayle", cost: 2 },
    { name: "Kayn", cost: 5 },
    { name: "Kennen", cost: 1 },
    { name: "Lillia", cost: 1 },
    { name: "Lucian", cost: 5 },
    { name: "Lulu", cost: 3 },
    { name: "Lux", cost: 3 },
    { name: "Miss Fortune", cost: 3 },
    { name: "Mordekaiser", cost: 3 },
    { name: "Nami", cost: 1 },
    { name: "Neeko", cost: 3 },
    { name: "Olaf", cost: 1 },
    { name: "Pantheon", cost: 2 },
    { name: "Poppy", cost: 4 },
    { name: "Qiyana", cost: 5 },
    { name: "Riven", cost: 3 },
    { name: "Samira", cost: 3 },
    { name: "Senna", cost: 2 },
    { name: "Seraphine", cost: 2 },
    { name: "Sett", cost: 3 },
    { name: "Sona", cost: 5 },
    { name: "Tahm Kench", cost: 1 },
    { name: "Taric", cost: 1 },
    { name: "Thresh", cost: 4 },
    { name: "Twisted Fate", cost: 4 },
    { name: "Twitch", cost: 2 },
    { name: "Urgot", cost: 3 },
    { name: "Vex", cost: 3 },
    { name: "Vi", cost: 1 },
    { name: "Viego", cost: 4 },
    { name: "Yasuo", cost: 1 },
    { name: "Yone", cost: 3 },
    { name: "Yorick", cost: 5 },
    { name: "Zac", cost: 4 },
    { name: "Zed", cost: 4 },
    { name: "Ziggs", cost: 5 },
  ];

  const board = [
    [
      { name: "Sett", qty: 3 },
      { name: "Gragas", qty: 3 },
      { name: "Kaisa", qty: 3 },
      { name: "Seraphine", qty: 3 },
      { name: "Evelynn", qty: 3 },
      { name: "Ahri", qty: 1 },
      { name: "Akali", qty: 1 },
      { name: "Neeko", qty: 1 },
    ],
    [
      { name: "Kennen", qty: 9 },
      { name: "Miss Fortune", qty: 3 },
      { name: "Bard", qty: 3 },
      { name: "Kaisa", qty: 3 },
      { name: "Lillia", qty: 3 },
      { name: "Neeko", qty: 1 },
    ],
    [
      { name: "Kayle", qty: 9 },
      { name: "Olaf", qty: 9 },
      { name: "Kaisa", qty: 3 },
      { name: "Seraphine", qty: 3 },
      { name: "Lillia", qty: 3 },
      { name: "Neeko", qty: 1 },
    ],
    [
      { name: "Ekko", qty: 3 },
      { name: "Miss Fortune", qty: 3 },
      { name: "Neeko", qty: 3 },
      { name: "Bard", qty: 3 },
      { name: "Kaisa", qty: 3 },
      { name: "Lillia", qty: 3 },
    ],
    [
      { name: "Taric", qty: 9 },
      { name: "Sett", qty: 3 },
      { name: "Gragas", qty: 3 },
      { name: "Nami", qty: 3 },
      { name: "Blitzcrank", qty: 1 },
      { name: "Urgot", qty: 1 },
      { name: "Kennen", qty: 1 },
    ],
    [
      { name: "Amumu", qty: 3 },
      { name: "Vex", qty: 3 },
      { name: "Annie", qty: 3 },
      { name: "Ekko", qty: 1 },
      { name: "Lulu", qty: 1 },
      { name: "Sett", qty: 1 },
      { name: "Gragas", qty: 1 },
      { name: "Seraphine", qty: 1 },
    ],
    [
      { name: "Mordekaiser", qty: 3 },
      { name: "Gnar", qty: 3 },
      { name: "Kennen", qty: 3 },
      { name: "Lillia", qty: 3 },
      { name: "Viego", qty: 1 },
      { name: "Neeko", qty: 1 },
      { name: "Kayle", qty: 1 },
    ],
    // [
    //   { name: "Illaoi", qty: 3 },
    //   { name: "Jhin", qty: 3 },
    //   { name: "Katarina", qty: 3 },
    //   { name: "Kennen", qty: 3 },
    //   { name: "Lulu", qty: 3 },
    //   { name: "Lux", qty: 3 },
    //   { name: "Miss Fortune", qty: 3 },
    //   { name: "Riven", qty: 3 },
    //   { name: "Sona", qty: 3 },
    // ],
  ];

  const comps = [
    [
      "Akali K/DA",
      "Karthus",
      "Viego",
      "Mordekaiser",
      "Yorick",
      "Neeko",
      "Gnar",
      "Lillia",
    ],
    [
      "Ahri",
      "Akali K/DA",
      "Ekko",
      "Neeko",
      "Seraphine",
      "Kaisa",
      "Kennen",
      "Lillia",
    ],
    [
      "Blitzcrank",
      "Twisted Fate",
      "Sona",
      "Ziggs",
      "Illaoi",
      "Lux",
      "Gragas",
      "Nami",
    ],
    [
      "Riven",
      "Yone",
      "Caitlyn",
      "Viego",
      "Mordekaiser",
      "Kayn",
      "Garen",
      "Kayle",
    ],
    ["Amumu", "Vex", "Twitch", "Poppy", "Amumu", "Vex", "Pantheon", "Twitch"],
  ];

  const player = {
    position: 1,
    level: 7,
  };

  const countChampionsOnBoard = (aBoard) => (aChampion) => ({
    ...aChampion,
    qtyOnBoard: aBoard.reduce(
      (total, aSquare) =>
        total + (aSquare.find(({ name }) => name === aChampion.name)?.qty ?? 0),
      0,
    ),
  });

  const calculateCurrentPool = (aPool) => (aChampion) => ({
    ...aChampion,
    currentPool: aPool[aChampion.cost - 1].qty - aChampion.qtyOnBoard,
  });

  const aggregateChampionLevelModifier =
    (level) => (chanceTable) => (aChampion) => ({
      ...aChampion,
      levelModifier: chanceTable[level - 1][aChampion.cost - 1],
    });

  const createSheet = (tableState) => (championList) => ({
    championList,
    tableState,
  });

  const calcutateTotalPosibleChampions = (championList) =>
    championList.reduce(
      (total, aChampion) =>
        total + (aChampion.levelModifier > 0 ? aChampion.currentPool : 0),
      0,
    );

  const calculateChance = (totalPossiblePool, currentPool) =>
    1 -
    Array(5)
      .fill()
      .reduce(
        (chance, _, index) =>
          (chance * (totalPossiblePool - currentPool - index)) /
          (totalPossiblePool - index),
        1,
      );

  const putChanceOnSheet = (sheet) => ({
    ...sheet,
    championList: sheet.championList.map((aChampion) => ({
      ...aChampion,
      chance:
        calculateChance(sheet.tableState, aChampion.currentPool) *
        aChampion.levelModifier,
    })),
  });

  const sortByChance = (sheet) => ({
    ...sheet,
    championList: sheet.championList.sort(
      (a, b) => b.chance - a.chance || b.cost - a.cost,
    ),
    comps: sheet.comps.sort((a, b) => b.chance - a.chance || b.cost - a.cost),
  });

  const calculateCompChance = (compList) => (sheet) => ({
    ...sheet,
    comps: compList.map((comp) => ({
      champions: comp,
      chance:
        1 -
        [...new Set(comp)].reduce(
          (chance, champion) =>
            chance *
            (1 -
              sheet.championList.find(({ name }) => name === champion).chance),
          1,
        ),
    })),
  });

  console.log(
    pipe(
      chain(createSheet, calcutateTotalPosibleChampions),
      putChanceOnSheet,
      calculateCompChance(comps),
      sortByChance,
    )(
      map(
        pipe(
          countChampionsOnBoard(board),
          calculateCurrentPool(pool),
          aggregateChampionLevelModifier(player.level)(chanceTablePerLevel),
        ),
      )(campions),
    ),
  );

  // const calculateBlindRowChance = (
  //   myBoard,
  //   myBuild,
  //   championList,
  //   myPool,
  //   chanceTable,
  //   me,
  // ) =>
  //   myBuild.map((name) => {
  //     const championCost = championList.find(
  //       (aChampion) => aChampion.name === name,
  //     ).cost;
  //     const chance = chanceTable[me.level - 1][championCost - 1];
  //     const totalPool = chanceTable[me.level - 1].reduce(
  //       (total, aChance, index) =>
  //         aChance > 0 ? total + myPool[index].qty * myPool[index].pool : total,
  //       0,
  //     );
  //     const currentQty = myBoard.reduce(
  //       (total, aBoard) =>
  //         total +
  //         (aBoard.some((aChampion) => aChampion.name === name)
  //           ? aBoard.find((aChampion) => aChampion.name === name).qty
  //           : 0),
  //       0,
  //     );
  //     return {
  //       name,
  //       chance,
  //       totalPool,
  //       currentQty,
  //       currentChance: ((totalPool - currentQty) / totalPool) * chance,
  //     };
  //   });
  // console.log(
  //   calculateBlindRowChance(
  //     board,
  //     build,
  //     pool,
  //     campions,
  //     chanceTablePerLevel,
  //     player,
  //   ),
  // );
})();
