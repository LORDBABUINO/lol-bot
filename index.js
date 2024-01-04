(async () => {
  const chanceTablePerLevel = [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0.8, 0.2, 0, 0, 0],
    [0.3, 0.7, 0.25, 0, 0],
    [0, 0.75, 0.25, 0, 0],
    [0, 0.4, 0.6, 0, 0],
    [0, 0, 0.7, 0.3, 0],
    [0, 0, 0, 0.98, 0.02],
    [0, 0, 0, 0.3, 0.7],
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
      { name: "Evelynn", qty: 3 },
      { name: "Jax", qty: 3 },
      { name: "Kaisa", qty: 3 },
      { name: "Kennen", qty: 3 },
      { name: "Lillia", qty: 3 },
      { name: "Olaf", qty: 3 },
      { name: "Tahm Kench", qty: 3 },
      { name: "Vi", qty: 3 },
      { name: "Yasuo", qty: 3 },
    ],
    [
      { name: "Ahri", qty: 3 },
      { name: "Annie", qty: 3 },
      { name: "Blitzcrank", qty: 3 },
      { name: "Garen", qty: 3 },
      { name: "Katarina", qty: 3 },
      { name: "Mordekaiser", qty: 3 },
      { name: "Poppy", qty: 3 },
      { name: "Taric", qty: 3 },
      { name: "Yone", qty: 3 },
    ],
    [
      { name: "Akali K/DA", qty: 3 },
      { name: "Aphelios", qty: 3 },
      { name: "Bard", qty: 3 },
      { name: "Caitlyn", qty: 3 },
      { name: "Corki", qty: 3 },
      { name: "Ezreal", qty: 3 },
      { name: "Jinx", qty: 3 },
      { name: "Lux", qty: 3 },
      { name: "Senna", qty: 3 },
    ],
    [
      { name: "Akali True Damage", qty: 3 },
      { name: "Amumu", qty: 3 },
      { name: "Gnar", qty: 3 },
      { name: "Jhin", qty: 3 },
      { name: "Kennen", qty: 3 },
      { name: "Lulu", qty: 3 },
      { name: "Neeko", qty: 3 },
      { name: "Riven", qty: 3 },
      { name: "Sona", qty: 3 },
    ],
    [
      { name: "Ekko", qty: 3 },
      { name: "Gragas", qty: 3 },
      { name: "Jax", qty: 3 },
      { name: "Kayle", qty: 3 },
      { name: "Kayn", qty: 3 },
      { name: "Kennen", qty: 3 },
      { name: "Sett", qty: 3 },
      { name: "Thresh", qty: 3 },
      { name: "Viego", qty: 3 },
    ],
    [
      { name: "Illaoi", qty: 3 },
      { name: "Jhin", qty: 3 },
      { name: "Katarina", qty: 3 },
      { name: "Kennen", qty: 3 },
      { name: "Lulu", qty: 3 },
      { name: "Lux", qty: 3 },
      { name: "Miss Fortune", qty: 3 },
      { name: "Riven", qty: 3 },
      { name: "Sona", qty: 3 },
    ],
    [
      { name: "Ekko", qty: 3 },
      { name: "Gragas", qty: 3 },
      { name: "Jax", qty: 3 },
      { name: "Kayle", qty: 3 },
      { name: "Kayn", qty: 3 },
      { name: "Kennen", qty: 3 },
      { name: "Sett", qty: 3 },
      { name: "Thresh", qty: 3 },
      { name: "Viego", qty: 3 },
    ],
    [
      { name: "Illaoi", qty: 3 },
      { name: "Jhin", qty: 3 },
      { name: "Katarina", qty: 3 },
      { name: "Kennen", qty: 3 },
      { name: "Lulu", qty: 3 },
      { name: "Lux", qty: 3 },
      { name: "Miss Fortune", qty: 3 },
      { name: "Riven", qty: 3 },
      { name: "Sona", qty: 3 },
    ],
  ];

  const build = [
    "Ahri",
    "Akali K/DA",
    "Ekko",
    "Neeko",
    "Seraphine",
    "Kaisa",
    "Kennen",
    "Lillia",
  ];

  const player = {
    position: 1,
    level: 9,
  };

  const calculateBlindRowChance = (
    myBoard,
    myBuild,
    championList,
    myPool,
    chanceTable,
    me,
  ) =>
    myBuild.map((name) => {
      const championCost = championList.find(
        (aChampion) => aChampion.name === name,
      ).cost;
      const chance = chanceTable[me.level - 1][championCost - 1];
      const totalPool = chanceTable[me.level - 1].reduce(
        (total, aChance, index) =>
          aChance > 0 ? total + myPool[index].qty * myPool[index].pool : total,
        0,
      );
      const currentQty = myBoard.reduce(
        (total, aBoard) =>
          total +
          (aBoard.some((aChampion) => aChampion.name === name)
            ? aBoard.find((aChampion) => aChampion.name === name).qty
            : 0),
        0,
      );
      return {
        name,
        chance,
        totalPool,
        currentQty,
        currentChance: ((totalPool - currentQty) / totalPool) * chance,
      };
    });
  console.log(
    calculateBlindRowChance(
      board,
      build,
      pool,
      campions,
      chanceTablePerLevel,
      player,
    ),
  );
})();
