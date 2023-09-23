export const allStats = ["Hp", "Atk", "Def", "Sp.Def", "Sp.Atk", "Speed"];
export const allGeneralInfo = [
  "Species",
  "Types",
  "Abilities",
  "Catch Rate*",
  "Width",
  "Height",
  "EV Yield",
];
export const allDungeon = [
  {
    name: "old rock's lair",
    types: ["rock", "water"],
    appears: ["aerodactyl", "omastar", "kabutops"],
  },
  {
    name: "dangerous garden",
    types: ["grass", "poison"],
    appears: ["gloom", "vileplume", "weepinbell", "victreebel", "exeggutor"],
  },
];
export const allMoveInfo = ["Power", "PP", "Accuracy", "Cooldown"];
const allPokemon = [
  {
    name: "aerodactyl",
    numberDex: "142",
    types: ["rock", "flying"],
    species: "Fossil Pokemon",
    abilities: ["rock head", "pressure", "unnerve"],
    stats: ["80", "105", "65", "60", "75", "130"],
    catchRate: "0.3%",
    bestNatures: ["Adamant", "Brave"],
    width: "59.0kg",
    height: "1.8m",
    evYield: ["2 Speed"],
    sprite: "img/sprites/aerodactyl.png",
    shinySprite: "img/sprites/aerodactylShiny.png",
    animated: "img/animated/aerodactyl.gif",
    shinyAnimated: "img/animated/aerodactylShiny.gif",
    evolutionary: ["aerodactyl"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "rock throw",
        level: "5",
      },
      {
        name: "rock slide",
        level: "12",
      },
      {
        name: "stone edge",
        level: "17",
      },
    ],
    drops: ["small stone", "strange rock", "straw", "old amber"],
    routes: [
      {
        name: "old rock's lair",
        minlevel: "53",
        maxlevel: "65",
      },
      {
        name: "Fossil's Cave",
        minlevel: "49",
        maxlevel: "57",
      },
    ],
  },
  {
    name: "omastar",
    numberDex: "139",
    types: ["rock", "water"],
    species: "Spiral Pokemon",
    abilities: ["swift swim", "battle armor", "weak armor"],
    stats: ["70", "60", "125", "115", "70", "55"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "35.0kg",
    height: "1.0m",
    evYield: ["2 Def"],
    sprite: "img/sprites/omastar.png",
    shinySprite: "img/sprites/omastarShiny.png",
    animated: "img/animated/omastar.gif",
    shinyAnimated: "img/animated/omastarShiny.gif",
    evolutionary: ["omanyte", "omastar"],
    evoMode: "Nvl. 40",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "vine whip",
        level: "8",
      },
      {
        name: "leech seed",
        level: "13",
      },
      {
        name: "solar beam",
        level: "25",
      },
    ],
    drops: [
      "small stone",
      "strange rock",
      "water gem",
      "water pendant",
      "helix fossil",
    ],
    routes: [
      {
        name: "old rock's lair",
        minlevel: "57",
        maxlevel: "62",
      },
      {
        name: "Fossil's Cave",
        minlevel: "51",
        maxlevel: "60",
      },
    ],
  },
  {
    name: "omanyte",
    numberDex: "138",
    types: ["rock", "water"],
    species: "Spiral Pokemon",
    abilities: ["swift swim", "battle armor", "weak armor"],
    stats: ["35", "40", "100", "90", "55", "35"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "7.5kg",
    height: "0.4m",
    evYield: ["1 Def"],
    sprite: "img/sprites/omanyte.png",
    shinySprite: "img/sprites/omanyteShiny.png",
    animated: "img/animated/omanyte.gif",
    shinyAnimated: "img/animated/omanyteShiny.gif",
    evolutionary: ["omanyte", "omastar"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "vine whip",
        level: "8",
      },
      {
        name: "leech seed",
        level: "13",
      },
      {
        name: "solar beam",
        level: "25",
      },
    ],
    drops: [
      "small stone",
      "strange rock",
      "water gem",
      "water pendant",
      "helix fossil",
    ],
    routes: [
      {
        name: "old rock's lair",
        minlevel: "42",
        maxlevel: "55",
      },
    ],
  },
  {
    name: "kabutops",
    numberDex: "141",
    types: ["rock", "water"],
    species: "Shellfish Pokemon",
    abilities: ["swift swim", "battle armor", "weak armor"],
    stats: ["60", "115", "105", "65", "70", "80"],
    catchRate: "1%",
    bestNatures: ["Modest", "Bold"],
    width: "40.5kg",
    height: "1.3m",
    evYield: ["2 Atk"],
    sprite: "img/sprites/kabutops.png",
    shinySprite: "img/sprites/kabutopsShiny.png",
    animated: "img/animated/kabutops.gif",
    shinyAnimated: "img/animated/kabutopsShiny.gif",
    evolutionary: ["kabuto", "kabutops"],
    evoMode: "Nvl. 40",
    moves: [
      {
        name: "bubble",
        level: "5",
      },
      {
        name: "bubblebeam",
        level: "13",
      },
      {
        name: "rock throw",
        level: "18",
      },
      {
        name: "rock slide",
        level: "24",
      },
      {
        name: "surf",
        level: "30",
      },
      {
        name: "stone Edge",
        level: "48",
      },
    ],
    drops: [
      "small stone",
      "strange rock",
      "water gem",
      "stone orb",
      "dome fossil",
    ],
    routes: [
      {
        name: "old rock's lair",
        minlevel: "55",
        maxlevel: "62",
      },
      {
        name: "Fossil's Cave",
        minlevel: "48",
        maxlevel: "59",
      },
    ],
  },
  {
    name: "kabuto",
    numberDex: "140",
    types: ["rock", "water"],
    species: "Shellfish Pokemon",
    abilities: ["swift swim", "battle armor", "weak armor"],
    stats: ["30", "80", "90", "55", "45", "55"],
    catchRate: "1%",
    bestNatures: ["Modest", "Bold"],
    width: "11.5kg",
    height: "0.5m",
    evYield: ["1 Atk"],
    sprite: "img/sprites/kabuto.png",
    shinySprite: "img/sprites/kabutoShiny.png",
    animated: "img/animated/kabuto.gif",
    shinyAnimated: "img/animated/kabutoShiny.gif",
    evolutionary: ["kabuto", "kabutops"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "bubble",
        level: "5",
      },
      {
        name: "bubblebeam",
        level: "13",
      },
      {
        name: "rock throw",
        level: "18",
      },
      {
        name: "rock slide",
        level: "24",
      },
      {
        name: "surf",
        level: "30",
      },
    ],
    drops: [
      "small stone",
      "strange rock",
      "water gem",
      "stone orb",
      "dome fossil",
    ],
    routes: [
      {
        name: "old rock's lair",
        minlevel: "46",
        maxlevel: "57",
      },
    ],
  },
  {
    name: "Vileplume",
    numberDex: "045",
    types: ["grass", "poison"],
    species: "Flower Pokémon",
    abilities: ["effect spore", "chlorophyll"],
    stats: ["75", "80", "85", "110", "90", "50"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "18.6kg",
    height: "1.2m",
    evYield: ["3 Sp.Atk"],
    sprite: "img/sprites/vileplume.png",
    shinySprite: "img/sprites/vileplumeShiny.png",
    animated: "img/animated/vileplume.gif",
    shinyAnimated: "img/animated/vileplumeShiny.gif",
    evolutionary: ["Oddish", "Gloom", "Vileplume"],
    evoMode: "Leaf Stone",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "poison powder",
        level: "8",
      },
      {
        name: "sleep powder",
        level: "10",
      },
      {
        name: "leech seed",
        level: "13",
      },
      {
        name: "sludge bomb",
        level: "20",
      },
      {
        name: "solar beam",
        level: "25",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "leaf stone"],
    dungeon: [
      {
        name: "dangerous garden",
        minlevel: "75",
        maxlevel: "86",
      },
    ],
    routes: [
      {
        name: "Rota 17",
        minlevel: "34",
        maxlevel: "45",
      },
      {
        name: "Rota 26",
        minlevel: "28",
        maxlevel: "39",
      },
    ],
  },
  {
    name: "Gloom",
    numberDex: "044",
    types: ["grass", "poison"],
    species: "Weed Pokémon",
    abilities: ["stench", "chlorophyll"],
    stats: ["60", "65", "70", "85", "75", "40"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "8.6kg",
    height: "0.8m",
    evYield: ["2 Sp.Atk"],
    sprite: "img/sprites/gloom.png",
    shinySprite: "img/sprites/gloomShiny.png",
    animated: "img/animated/gloom.gif",
    shinyAnimated: "img/animated/gloomShiny.gif",
    evolutionary: ["Oddish", "gloom", "vileplume"],
    evoMode: "Nvl. 21",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "poison powder",
        level: "8",
      },
      {
        name: "sleep powder",
        level: "10",
      },
      {
        name: "leech seed",
        level: "13",
      },
      {
        name: "solar beam",
        level: "25",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "leaf stone"],
    dungeon: [
      {
        name: "dangerous garden",
        minlevel: "69",
        maxlevel: "74",
      },
    ],
    routes: [
      {
        name: "Rota 17",
        minlevel: "20",
        maxlevel: "24",
      },
      {
        name: "Rota 20",
        minlevel: "23",
        maxlevel: "27",
      },
      {
        name: "Rota 23",
        minlevel: "27",
        maxlevel: "31",
      },
    ],
  },
  {
    name: "Oddish",
    numberDex: "043",
    types: ["grass", "poison"],
    species: "Weed Pokémon",
    abilities: ["Run Away", "chlorophyll"],
    stats: ["45", "50", "55", "75", "65", "30"],
    catchRate: "20%",
    bestNatures: ["Modest", "Bold"],
    width: "5.4kg",
    height: "0.5m",
    evYield: ["1 Sp.Atk"],
    sprite: "img/sprites/oddish.png",
    shinySprite: "img/sprites/oddishShiny.png",
    animated: "img/animated/oddish.gif",
    shinyAnimated: "img/animated/oddishShiny.gif",
    evolutionary: ["Oddish", "Gloom", "Vileplume"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "poison powder",
        level: "8",
      },
      {
        name: "sleep powder",
        level: "10",
      },
      {
        name: "leech seed",
        level: "13",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "leaf stone"],
    routes: [
      {
        name: "Rota 17",
        minlevel: "8",
        maxlevel: "1",
      },
      {
        name: "Rota 20",
        minlevel: "13",
        maxlevel: "17",
      },
      {
        name: "Rota 23",
        minlevel: "9",
        maxlevel: "18",
      },
      {
        name: "Rota 26",
        minlevel: "15",
        maxlevel: "20",
      },
    ],
  },
  {
    name: "Victreebel",
    numberDex: "071",
    types: ["grass", "poison"],
    species: "Flycatcher Pokémon",
    abilities: ["gluttony", "chlorophyll"],
    stats: ["80", "105", "65", "100", "70", "70"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "15.5kg",
    height: "1.7m",
    evYield: ["3 Atk"],
    sprite: "img/sprites/victreebel.png",
    shinySprite: "img/sprites/victreebelShiny.png",
    animated: "img/animated/victreebel.gif",
    shinyAnimated: "img/animated/victreebelShiny.gif",
    evolutionary: ["bellsprout", "weepinbell", "victreebel"],
    evoMode: "Leaf Stone",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "vine whip",
        level: "8",
      },
      {
        name: "poison powder",
        level: "13",
      },
      {
        name: "leech seed",
        level: "16",
      },
      {
        name: "sludge bomb",
        level: "20",
      },
      {
        name: "solar beam",
        level: "25",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "leaf stone"],
    dungeon: [
      {
        name: "dangerous garden",
        minlevel: "73",
        maxlevel: "87",
      },
    ],
    routes: [
      {
        name: "Rota 17",
        minlevel: "39",
        maxlevel: "46",
      },
      {
        name: "Rota 26",
        minlevel: "32",
        maxlevel: "42",
      },
    ],
  },
  {
    name: "Weepinbell",
    numberDex: "070",
    types: ["grass", "poison"],
    species: "Flycatcher Pokémon",
    abilities: ["overgrow", "chlorophyll"],
    stats: ["65", "90", "50", "85", "45", "55"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "6.4kg",
    height: "1.0m",
    evYield: ["2 Atk"],
    sprite: "img/sprites/weepinbell.png",
    shinySprite: "img/sprites/weepinbellShiny.png",
    animated: "img/animated/weepinbell.gif",
    shinyAnimated: "img/animated/weepinbellShiny.gif",
    evolutionary: ["Bellsprout", "weepinbell", "victreebel"],
    evoMode: "Nvl. 21",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "poison powder",
        level: "13",
      },
      {
        name: "leech seed",
        level: "16",
      },
      {
        name: "sludge bomb",
        level: "20",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "leaf stone"],
    dungeon: [
      {
        name: "dangerous garden",
        minlevel: "67",
        maxlevel: "73",
      },
    ],
    routes: [
      {
        name: "Rota 17",
        minlevel: "21",
        maxlevel: "26",
      },
      {
        name: "Rota 20",
        minlevel: "23",
        maxlevel: "28",
      },
      {
        name: "Rota 23",
        minlevel: "26",
        maxlevel: "34",
      },
    ],
  },
  {
    name: "Bellsprout",
    numberDex: "069",
    types: ["grass", "poison"],
    species: "Flower Pokémon",
    abilities: ["gluttony", "chlorophyll"],
    stats: ["50", "75", "35", "70", "30", "40"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "6.4kg",
    height: "1.0m",
    evYield: ["1 Atk"],
    sprite: "img/sprites/bellsprout.png",
    shinySprite: "img/sprites/bellsproutShiny.png",
    animated: "img/animated/bellsprout.gif",
    shinyAnimated: "img/animated/bellsproutShiny.gif",
    evolutionary: ["Bellsprout", "weepinbell", "victreebel"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "vine whip",
        level: "10",
      },
      {
        name: "poison powder",
        level: "13",
      },
      {
        name: "leech seed",
        level: "15",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "leaf stone"],
    dungeon: [],
    routes: [
      {
        name: "Rota 17",
        minlevel: "8",
        maxlevel: "11",
      },
      {
        name: "Rota 20",
        minlevel: "12",
        maxlevel: "16",
      },
      {
        name: "Rota 23",
        minlevel: "13",
        maxlevel: "16",
      },
    ],
  },
  {
    name: "Exeggutor",
    numberDex: "103",
    types: ["grass", "psychic"],
    species: "Coconut Pokémon",
    abilities: ["harvest", "chlorophyll"],
    stats: ["95", "95", "85", "125", "75", "55"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "120.0kg",
    height: "2.0m",
    evYield: ["2 Sp.Atk"],
    sprite: "img/sprites/exeggutor.png",
    shinySprite: "img/sprites/exeggutorShiny.png",
    animated: "img/animated/exeggutor.gif",
    shinyAnimated: "img/animated/exeggutorShiny.gif",
    evolutionary: ["exeggcute", "exeggutor"],
    evoMode: "Leaf Stone",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "leech seed",
        level: "10",
      },
      {
        name: "poison powder",
        level: "16",
      },
      {
        name: "sleep powder",
        level: "16",
      },
      {
        name: "solar beam",
        level: "24",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "leaf stone"],
    dungeon: [
      {
        name: "dangerous garden",
        minlevel: "68",
        maxlevel: "75",
      },
    ],
    routes: [
      {
        name: "Rota 17",
        minlevel: "21",
        maxlevel: "26",
      },
      {
        name: "Rota 20",
        minlevel: "24",
        maxlevel: "29",
      },
      {
        name: "Rota 23",
        minlevel: "17",
        maxlevel: "28",
      },
    ],
  },
  {
    name: "Exeggcute",
    numberDex: "102",
    types: ["grass", "psychic"],
    species: "Egg Pokémon",
    abilities: ["harvest", "chlorophyll"],
    stats: ["60", "40", "80", "60", "45", "40"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "2.5kg",
    height: "0.4m",
    evYield: ["2 Sp.Atk"],
    sprite: "img/sprites/exeggcute.png",
    shinySprite: "img/sprites/exeggcuteShiny.png",
    animated: "img/animated/exeggcute.gif",
    shinyAnimated: "img/animated/exeggcuteShiny.gif",
    evolutionary: ["exeggcute", "exeggutor"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "leech seed",
        level: "10",
      },
      {
        name: "poison powder",
        level: "16",
      },
      {
        name: "sleep powder",
        level: "16",
      },
      {
        name: "solar beam",
        level: "24",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "leaf stone"],
    routes: [
      {
        name: "Rota 17",
        minlevel: "13",
        maxlevel: "18",
      },
      {
        name: "Rota 20",
        minlevel: "21",
        maxlevel: "24",
      },
      {
        name: "Rota 23",
        minlevel: "19",
        maxlevel: "24",
      },
      {
        name: "Rota 26",
        minlevel: "21",
        maxlevel: "25",
      },
    ],
  },
  {
    name: "Bulbasaur",
    numberDex: "001",
    types: ["grass", "poison"],
    species: "Seed Pokémon",
    abilities: ["overgrow", "chlorophyll"],
    stats: ["45", "49", "49", "65", "65", "45"],
    catchRate: "10%",
    bestNatures: ["Modest", "Bold"],
    width: "6.9kg",
    height: "0.7m",
    evYield: ["1 Sp.Atk"],
    sprite: "img/sprites/bulbasaur.png",
    shinySprite: "img/sprites/bulbasaurShiny.png",
    animated: "img/animated/bulbasaur.gif",
    shinyAnimated: "img/animated/bulbasaurShiny.gif",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "vine whip",
        level: "8",
      },
      {
        name: "leech seed",
        level: "13",
      },
      {
        name: "poison powder",
        level: "16",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "bulb", "leaf stone"],
    routes: [
      {
        name: "Rota 17",
        minlevel: "17",
        maxlevel: "21",
      },
      {
        name: "Rota 20",
        minlevel: "22",
        maxlevel: "27",
      },
      {
        name: "Rota 23",
        minlevel: "19",
        maxlevel: "24",
      },
      {
        name: "Rota 26",
        minlevel: "21",
        maxlevel: "26",
      },
    ],
  },
  {
    name: "Ivysaur",
    numberDex: "002",
    types: ["grass", "poison"],
    species: "Seed Pokémon",
    abilities: ["overgrow", "chlorophyll"],
    stats: ["60", "62", "63", "80", "80", "60"],
    catchRate: "5%",
    bestNatures: ["Modest", "Bold"],
    width: "13.0kg",
    height: "1.0m",
    evYield: ["1 Sp.Atk", "1 Sp.Def"],
    sprite: "img/sprites/ivysaur.png",
    shinySprite: "img/sprites/ivysaurShiny.png",
    animated: "img/animated/ivysaur.gif",
    shinyAnimated: "img/animated/ivysaurShiny.gif",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    evoMode: "Nvl. 16",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "vine whip",
        level: "8",
      },
      {
        name: "leech seed",
        level: "13",
      },
      {
        name: "poison powder",
        level: "16",
      },
      {
        name: "sludge bomb",
        level: "22",
      },
      {
        name: "solar beam",
        level: "25",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "bulb", "leaf stone"],
    routes: [
      {
        name: "Rota 17",
        minlevel: "17",
        maxlevel: "21",
      },
      {
        name: "Rota 20",
        minlevel: "20",
        maxlevel: "23",
      },
      {
        name: "Rota 23",
        minlevel: "19",
        maxlevel: "24",
      },
      {
        name: "Rota 26",
        minlevel: "21",
        maxlevel: "26",
      },
    ],
  },
  {
    name: "Venusaur",
    numberDex: "003",
    types: ["grass", "poison"],
    species: "Seed Pokémon",
    abilities: ["overgrow", "chlorophyll"],
    stats: ["80", "82", "83", "100", "100", "80"],
    catchRate: "1%",
    bestNatures: ["Modest", "Bold"],
    width: "100.0kg",
    height: "2.0m",
    evYield: ["2 Sp.Atk", "1 Sp.Def"],
    sprite: "img/sprites/venusaur.png",
    shinySprite: "img/sprites/venusaurShiny.png",
    animated: "img/animated/venusaur.gif",
    shinyAnimated: "img/animated/venusaurShiny.gif",
    evolutionary: ["Bulbasaur", "Ivysaur", "Venusaur"],
    evoMode: "Nvl. 32",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "vine whip",
        level: "8",
      },
      {
        name: "leech seed",
        level: "13",
      },
      {
        name: "poison powder",
        level: "16",
      },
      {
        name: "sludge bomb",
        level: "22",
      },
      {
        name: "solar beam",
        level: "25",
      },
    ],
    drops: ["seed", "bag of pollem", "leaves", "bulb", "leaf stone"],
    dungeon: [
      {
        name: "dangerous garden",
        minlevel: "74",
        maxlevel: "83",
      },
    ],
    routes: [
      {
        name: "Rota 17",
        minlevel: "33",
        maxlevel: "38",
      },
      {
        name: "Rota 20",
        minlevel: "32",
        maxlevel: "39",
      },
      {
        name: "Rota 23",
        minlevel: "35",
        maxlevel: "40",
      },
      {
        name: "Rota 26",
        minlevel: "42",
        maxlevel: "48",
      },
    ],
  },
  {
    name: "Charmander",
    numberDex: "004",
    types: ["fire"],
    species: "Lizard Pokémon",
    abilities: ["blaze", "solar power"],
    stats: ["39", "52", "43", "60", "50", "65"],
    catchRate: "10%",
    bestNatures: ["Modest", "Relaxed"],
    width: "8.5kg",
    height: "0.6m",
    evYield: ["1 Speed"],
    sprite: "img/sprites/charmander.png",
    shinySprite: "img/sprites/charmanderShiny.png",
    animated: "img/animated/charmander.gif",
    shinyAnimated: "img/animated/charmanderShiny.gif",
    evolutionary: ["Charmander", "Charmeleon", "Charizard"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "ember",
        level: "8",
      },
      {
        name: "fire fang",
        level: "13",
      },
      {
        name: "flamethrower",
        level: "25",
      },
    ],
    drops: ["essence of fire", "fire tail", "pot of lava", "fire stone"],
    routes: [
      {
        name: "Rota 17",
        minlevel: "9",
        maxlevel: "15",
      },
      {
        name: "Rota 20",
        minlevel: "13",
        maxlevel: "15",
      },
      {
        name: "Rota 23",
        minlevel: "5",
        maxlevel: "14",
      },
      {
        name: "Rota 26",
        minlevel: "13",
        maxlevel: "15",
      },
    ],
  },
  {
    name: "Charmeleon",
    numberDex: "005",
    types: ["fire"],
    species: "Flame Pokémon",
    abilities: ["blaze", "solar power"],
    stats: ["58", "64", "58", "80", "65", "80"],
    catchRate: "5%",
    bestNatures: ["Modest", "Relaxed"],
    width: "19.0kg",
    height: "1.1m",
    evYield: ["1 Sp.Atk", "1 Speed"],
    sprite: "img/sprites/charmeleon.png",
    shinySprite: "img/sprites/charmeleonShiny.png",
    animated: "img/animated/charmeleon.gif",
    shinyAnimated: "img/animated/charmeleonShiny.gif",
    evolutionary: ["Charmander", "Charmeleon", "Charizard"],
    evoMode: "Nvl. 16",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "ember",
        level: "8",
      },
      {
        name: "fire fang",
        level: "13",
      },
      {
        name: "flamethrower",
        level: "25",
      },
    ],
    drops: ["essence of fire", "fire tail", "pot of lava", "fire stone"],
    routes: [
      {
        name: "Rota 17",
        minlevel: "17",
        maxlevel: "21",
      },
      {
        name: "Rota 20",
        minlevel: "20",
        maxlevel: "23",
      },
      {
        name: "Rota 23",
        minlevel: "19",
        maxlevel: "24",
      },
      {
        name: "Rota 26",
        minlevel: "21",
        maxlevel: "25",
      },
    ],
  },
  {
    name: "Charizard",
    numberDex: "006",
    types: ["fire", "flying"],
    species: "Flame Pokémon",
    abilities: ["blaze", "solar power"],
    stats: ["78", "84", "78", "109", "85", "100"],
    catchRate: "1%",
    bestNatures: ["Modest", "Relaxed"],
    width: "90.5kg",
    height: "1.7m",
    evYield: ["3 Sp.Atk"],
    sprite: "img/sprites/charizard.png",
    shinySprite: "img/sprites/charizardShiny.png",
    animated: "img/animated/charizard.gif",
    shinyAnimated: "img/animated/charizardShiny.gif",
    evolutionary: ["Charmander", "Charmeleon", "Charizard"],
    evoMode: "Nvl. 36",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "ember",
        level: "8",
      },
      {
        name: "fire fang",
        level: "13",
      },
      {
        name: "flamethrower",
        level: "25",
      },
    ],
    drops: ["essence of fire", "fire tail", "pot of lava", "fire stone"],
    routes: [
      {
        name: "Rota 17",
        minlevel: "36",
        maxlevel: "42",
      },
      {
        name: "Rota 20",
        minlevel: "36",
        maxlevel: "44",
      },
      {
        name: "Rota 23",
        minlevel: "38",
        maxlevel: "48",
      },
      {
        name: "Rota 26",
        minlevel: "42",
        maxlevel: "54",
      },
    ],
  },
  {
    name: "Squirtle",
    numberDex: "007",
    types: ["water"],
    species: "Tiny Turtle Pokémon",
    abilities: ["torrent", "rain dish"],
    stats: ["44", "48", "65", "50", "64", "43"],
    catchRate: "10%",
    bestNatures: ["Modest", "Relaxed"],
    width: "9.0kg",
    height: "0.5m",
    evYield: ["1 Defense"],
    sprite: "img/sprites/squirtle.png",
    shinySprite: "img/sprites/squirtleShiny.png",
    animated: "img/animated/squirtle.gif",
    shinyAnimated: "img/animated/squirtleShiny.gif",
    evolutionary: ["Squirtle", "Wartortle", "Blastoise"],
    evoMode: "Nvl. 1",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "bubble",
        level: "8",
      },
      {
        name: "bubblebeam",
        level: "13",
      },
      {
        name: "surf",
        level: "23",
      },
    ],
    drops: ["water gem", "water pendant", "squirtle hull", "water stone"],
    routes: [
      {
        name: "Rota 17",
        minlevel: "5",
        maxlevel: "9",
      },
      {
        name: "Rota 20",
        minlevel: "8",
        maxlevel: "12",
      },
      {
        name: "Rota 23",
        minlevel: "10",
        maxlevel: "14",
      },
      {
        name: "Rota 26",
        minlevel: "9",
        maxlevel: "13",
      },
    ],
  },
  {
    name: "Wartortle",
    numberDex: "008",
    types: ["water"],
    species: "Turtle Pokémon",
    abilities: ["torrent", "rain dish"],
    stats: ["59", "63", "80", "65", "80", "58"],
    catchRate: "5%",
    bestNatures: ["Modest", "Relaxed"],
    width: "22.5kg",
    height: "1.0m",
    evYield: ["1 Def", "1 Sp.Def"],
    sprite: "img/sprites/wartortle.png",
    shinySprite: "img/sprites/wartortleShiny.png",
    animated: "img/animated/wartortle.gif",
    shinyAnimated: "img/animated/wartortleShiny.gif",
    evolutionary: ["Squirtle", "Wartortle", "Blastoise"],
    evoMode: "Nvl. 16",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "bubble",
        level: "8",
      },
      {
        name: "bubblebeam",
        level: "13",
      },
      {
        name: "surf",
        level: "23",
      },
    ],
    drops: ["water gem", "water pendant", "squirtle hull", "water stone"],
    routes: [
      {
        name: "Rota 17",
        minlevel: "16",
        maxlevel: "22",
      },
      {
        name: "Rota 20",
        minlevel: "18",
        maxlevel: "24",
      },
      {
        name: "Rota 23",
        minlevel: "18",
        maxlevel: "28",
      },
      {
        name: "Rota 26",
        minlevel: "22",
        maxlevel: "34",
      },
    ],
  },
  {
    name: "Blastoise",
    numberDex: "009",
    types: ["water"],
    species: "Shellfish Pokémon",
    abilities: ["torrent", "rain dish"],
    stats: ["79", "83", "100", "85", "105", "78"],
    catchRate: "1%",
    bestNatures: ["Modest", "Relaxed"],
    width: "1.6kg",
    height: "85.5m",
    evYield: ["3 Sp.Def"],
    sprite: "img/sprites/blastoise.png",
    shinySprite: "img/sprites/blastoiseShiny.png",
    animated: "img/animated/blastoise.gif",
    shinyAnimated: "img/animated/blastoiseShiny.gif",
    evolutionary: ["Squirtle", "Wartortle", "Blastoise"],
    evoMode: "Nvl. 36",
    moves: [
      {
        name: "tackle",
        level: "5",
      },
      {
        name: "bubble",
        level: "8",
      },
      {
        name: "bubblebeam",
        level: "13",
      },
      {
        name: "surf",
        level: "23",
      },
    ],
    drops: ["water gem", "water pendant", "squirtle hull", "water stone"],
    routes: [
      {
        name: "Rota 17",
        minlevel: "36",
        maxlevel: "42",
      },
      {
        name: "Rota 20",
        minlevel: "36",
        maxlevel: "44",
      },
      {
        name: "Rota 23",
        minlevel: "38",
        maxlevel: "48",
      },
      {
        name: "Rota 26",
        minlevel: "42",
        maxlevel: "54",
      },
    ],
  },
];
allPokemon.sort((x, y) => x.numberDex - y.numberDex);
export const allMoves = [
  {
    name: "ember",
    type: "fire",
    category: "Special",
    moveSource: "img/moves/ember.jpg",
    categorySource: "img/general/special.png",
    description: "Has a 10% chance to burn the target.",
    effects: "Has a 10% chance to burn the target.",
    attributes: ["40", "6.20", "100", "3s"],
  },
  {
    name: "rock slide",
    type: "rock",
    category: "physical",
    moveSource: "img/moves/rockSlide.jpg",
    categorySource: "img/general/physical.png",
    description: "Has a 10% chance to flinch the target.",
    effects: "Has a 10% chance to flinch the target.",
    attributes: ["80", "16.20", "100", "12s"],
  },
  {
    name: "sludge bomb",
    type: "poison",
    category: "special",
    moveSource: "img/moves/sludgeBomb.jpg",
    categorySource: "img/general/special.png",
    description: "Has a 30% chance to poison the target.",
    effects: "Has a 30% chance to poison the target.",
    attributes: ["90", "20.40", "100", "15s"],
  },
  {
    name: "sleep powder",
    type: "grass",
    category: "effect",
    moveSource: "img/moves/sleepPowder.jpg",
    categorySource: "img/general/effect.png",
    description: "sleep the target.",
    effects: "sleep the target.",
    attributes: ["--", "24.40", "75", "25s"],
  },
  {
    name: "poison powder",
    type: "poison",
    category: "effect",
    moveSource: "img/moves/poisonPowder.jpg",
    categorySource: "img/general/effect.png",
    description: "poison the target.",
    effects: "poison the target.",
    attributes: ["--", "24.40", "75", "25s"],
  },
  {
    name: "rock Throw",
    type: "rock",
    category: "physical",
    moveSource: "img/moves/rockThrow.jpg",
    categorySource: "img/general/physical.png",
    description: "Has a 20% chance to flinch the target.",
    effects: "Has a 20% chance to flinch the target.",
    attributes: ["65", "16.20", "100", "12s"],
  },
  {
    name: "stone edge",
    type: "rock",
    category: "physical",
    moveSource: "img/moves/stoneEdge.jpg",
    categorySource: "img/general/physical.png",
    description: "Has a 30% chance to flinch the target.",
    effects: "Has a 30% chance to flinch the target.",
    attributes: ["100", "23.20", "100", "20s"],
  },
  {
    name: "fire fang",
    type: "fire",
    category: "physical",
    moveSource: "img/moves/fireFang.jpg",
    categorySource: "img/general/physical.png",
    description:
      "Has a 10% chance to burn the target and a 10% chance to make it flinch.",
    effects:
      "Has a 10% chance to burn the target and a 10% chance to make it flinch.",
    attributes: ["65", "11.20", "95", "9s"],
  },
  {
    name: "flamethrower",
    type: "fire",
    category: "special",
    moveSource: "img/moves/flamethrower.jpg",
    categorySource: "img/general/special.png",
    description: "Has a 10% chance to burn the target.",
    effects: "Has a 10% chance to burn the target.",
    attributes: ["90", "15.20", "100", "15s"],
  },
  {
    name: "bubble",
    type: "water",
    category: "special",
    moveSource: "img/moves/bubble.webp",
    categorySource: "img/general/special.png",
    description: "Has a 10% chance to lower the target's Speed by 1 stage.",
    effects: "Has a 10% chance to lower the target's Speed by 1 stage.",
    attributes: ["40", "6.20", "100", "3s"],
  },
  {
    name: "surf",
    type: "water",
    category: "special",
    moveSource: "img/moves/surf.jpg",
    categorySource: "img/general/special.png",
    description: "Attack more than 1 enemy",
    effects: "Attack more than 1 enemy",
    attributes: ["90", "20.20", "100", "30s"],
  },
  {
    name: "bubblebeam",
    type: "water",
    category: "special",
    moveSource: "img/moves/bubbleBeam.jpg",
    categorySource: "img/general/special.png",
    description: "Has a 10% chance to lower the target's Speed by 1 stage.",
    effects: "Has a 10% chance to lower the target's Speed by 1 stage.",
    attributes: ["65", "13.20", "100", "12s"],
  },
  {
    name: "tackle",
    type: "normal",
    category: "Physical",
    moveSource: "img/moves/tackle.webp",
    categorySource: "img/general/physical.png",
    description: "No additional effect.",
    effects: "No additional effect.",
    attributes: ["40", "5.80", "100", "2s"],
  },
  {
    name: "vine whip",
    type: "grass",
    category: "Physical",
    moveSource: "img/moves/vineWhip.png",
    categorySource: "img/general/physical.png",
    description: "No additional effect.",
    effects: "No additional effect.",
    attributes: ["45", "11.20", "100", "5s"],
  },
  {
    name: "leech seed",
    type: "grass",
    category: "Effect",
    moveSource: "img/moves/leechSeed.webp",
    categorySource: "img/general/effect.png",
    description:
      "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn",
    effects:
      "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn",
    attributes: ["--", "23.80", "90", "15s"],
  },
  {
    name: "solar beam",
    type: "grass",
    category: "Special",
    moveSource: "img/moves/solarBeam.jpg",
    categorySource: "img/general/special.png",
    description:
      "This attack charges on the first turn and executes on the second.",
    effects:
      "This attack charges on the first turn and executes on the second.",
    attributes: ["120", "23.80", "100", "30s"],
  },
];
const allDrops = [
  {
    name: "bulb",
    Value: "365",
    Rarity: "rare",
    description: "lorem",
    sprite: "img/drops/bulb.png",
    type: "drop",
  },
  {
    name: "bottle of poison",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "img/drops/Bottles_of_poison.png",
    type: "drop",
  },
  {
    name: "dome fossil",
    Value: "8000",
    Rarity: "rare",
    description: "lorem",
    sprite: "img/drops/Dome_Fossil.png",
    type: "drop",
  },
  {
    name: "helix fossil",
    Value: "8000",
    Rarity: "rare",
    description: "lorem",
    sprite: "img/drops/Helix_Fossil.png",
    type: "drop",
  },
  {
    name: "old amber",
    Value: "50000",
    Rarity: "epic",
    description: "lorem",
    sprite: "img/drops/Old_Amber.png",
    type: "drop",
  },
  {
    name: "small stone",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "img/drops/Small_stone.png",
    type: "drop",
  },
  {
    name: "stone orb",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/StoneOrb.png",
    type: "drop",
  },
  {
    name: "strange rock",
    Value: "325",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/Strange_Rock.png",
    type: "drop",
  },
  {
    name: "straw",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "img/drops/straw.png",
    type: "drop",
  },
  {
    name: "bag of pollem",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/BagOfPollem.png",
    type: "drop",
  },
  {
    name: "essence of fire",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "img/drops/essence_of_fire.png",
    type: "drop",
  },
  {
    name: "fire tail",
    Value: "400",
    Rarity: "rare",
    description: "lorem",
    sprite: "img/drops/Fire_Tail.png",
    type: "drop",
  },
  {
    name: "leaves",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/Leaves.png",
    type: "drop",
  },
  {
    name: "sandbag",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/Sandbag.png",
    type: "drop",
  },
  {
    name: "seed",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "img/drops/seed.png",
    type: "drop",
  },
  {
    name: "squirtle hull",
    Value: "400",
    Rarity: "rare",
    description: "lorem",
    sprite: "img/drops/Squirtle_Hull.png",
    type: "drop",
  },
  {
    name: "water gem",
    Value: "3",
    Rarity: "common",
    description: "lorem",
    sprite: "img/drops/Water_gem.png",
    type: "drop",
  },
  {
    name: "water pendant",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/WaterPendant.png",
    type: "drop",
  },
  {
    name: "pot of lava",
    Value: "40",
    Rarity: "uncommon",
    description: "lorem",
    sprite: "img/drops/PotOfLava.png",
    type: "drop",
  },
  {
    name: "water stone",
    Value: "50000",
    Rarity: "epic",
    description: "Evolves certain species of Pokemon when used.",
    sprite: "img/drops/waterStone.webp",
    type: "evolutionary",
  },
  {
    name: "leaf stone",
    Value: "50000",
    Rarity: "epIc",
    description: "Evolves certain species of Pokemon when used.",
    sprite: "img/drops/leafStone.png",
    type: "evolutionary",
  },
  {
    name: "fire stone",
    Value: "50000",
    Rarity: "ePic",
    description: "Evolves certain species of Pokemon when used.",
    sprite: "img/drops/Fire-stone.gif",
    type: "evolutionary",
  },
];
allDrops.sort((x, y) => x.Value - y.Value);
export { allPokemon, allDrops };
export const allAbilities = [
  {
    name: "blaze",
    description:
      "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Fire-type attack.",
    type: "fire",
  },
  {
    name: "solar power",
    description:
      "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. These effects are prevented if the Pokemon is holding a Utility Umbrella.",
    type: "fire",
  },
  {
    name: "rain dish",
    description:
      "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
    type: "water",
  },
  {
    name: "torrent",
    description:
      "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Water-type attack.",
    type: "water",
  },
  {
    name: "chlorophyll",
    description:
      "If Sunny Day is active, this Pokemon's Speed is doubled. This effect is prevented if this Pokemon is holding a Utility Umbrella.",
    type: "grass",
  },
  {
    name: "overgrow",
    description:
      "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its offensive stat is multiplied by 1.5 while using a Grass-type attack.",
    type: "grass",
  },
];
export const allResps = [
  {
    name: "Rota 17",
    appears: ["Charmander", "Bulbasaur", "Squirtle"],
  },
  {
    name: "Rota 20",
    appears: ["Charmander", "Bulbasaur", "Squirtle"],
  },
  {
    name: "Rota 23",
    appears: ["Charmander", "Bulbasaur", "Squirtle"],
  },
  {
    name: "Rota 26",
    appears: ["Charmander", "Bulbasaur", "Squirtle"],
  },
];
export const allStatus = [
  {
    name: "Attack",
    preferency: "Spicy",
    color: "#ffee8b",
    natures: ["Hardy", "Lonely", "Adamant", "Naughty", "Brave"],
  },
  {
    name: "Defense",
    preferency: "Sour",
    color: "#ffb48b",
    natures: ["Bold", "Docile", "Impish", "Lax", "Relaxed"],
  },
  {
    name: "Sp.Atk",
    preferency: "Dry",
    color: "#8bfffe",
    natures: ["Modest", "Mild", "Bashful", "Rash", "Quiet"],
  },
  {
    name: "Sp.Def",
    preferency: "Bitter",
    color: "#8aa2fe",
    natures: ["Calm", "Gentle", "Careful", "Quirky", "Sassy"],
  },
  {
    name: "Speed",
    preferency: "Sweet",
    color: "#fc8cff",
    natures: ["Timid", "Hasty", "Jolly", "Naive", "Serious"],
  },
];
export const allWeakness = [
  {
    name: "normal",
    Weakness: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  },
  {
    name: "fire",
    Weakness: [
      1, 0.5, 2, 1, 0.5, 0.5, 1, 1, 2, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 0.5,
    ],
  },
  {
    name: "water",
    Weakness: [1, 0.5, 0.5, 2, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1],
  },
  {
    name: "electric",
    Weakness: [1, 1, 1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 0.5, 1],
  },
  {
    name: "grass",
    Weakness: [1, 2, 0.5, 0.5, 0.5, 2, 1, 2, 0.5, 2, 1, 2, 1, 1, 1, 1, 1, 1],
  },
  {
    name: "ice",
    Weakness: [1, 2, 1, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
  },
  {
    name: "fighting",
    Weakness: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 0.5, 1, 1, 0.5, 1, 2],
  },
  {
    name: "poison",
    Weakness: [1, 1, 1, 1, 0.5, 1, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5],
  },
  {
    name: "ground",
    Weakness: [1, 1, 2, 0, 2, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1],
  },
  {
    name: "flying",
    Weakness: [1, 1, 1, 2, 0.5, 2, 0.5, 1, 0, 1, 1, 0.5, 2, 1, 1, 1, 1, 1],
  },
  {
    name: "psychic",
    Weakness: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 2, 1, 2, 1, 2, 1, 1],
  },
  {
    name: "bug",
    Weakness: [1, 2, 1, 1, 0.5, 1, 0.5, 1, 0.5, 2, 1, 1, 2, 1, 1, 1, 1, 1],
  },
  {
    name: "rock",
    Weakness: [0.5, 0.5, 2, 1, 2, 1, 2, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 1],
  },
  {
    name: "ghost",
    Weakness: [0, 1, 1, 1, 1, 1, 0, 0.5, 1, 1, 1, 0.5, 1, 2, 1, 2, 1, 1],
  },
  {
    name: "dragon",
    Weakness: [1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2],
  },
  {
    name: "dark",
    Weakness: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2],
  },
  {
    name: "steel",
    Weakness: [
      0.5, 2, 1, 1, 0.5, 0.5, 2, 0, 2, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 1, 0.5, 0.5,
    ],
  },
  {
    name: "fairy",
    Weakness: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 2, 1, 0.5, 1, 0.5, 1, 2],
  },
];
export const allClipPathBorder = [
  {
    name: "Octagon",
    clipPath:
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
    pointers: [
      {
        left: "30%",
        top: "0%",
      },
      {
        left: "70%",
        top: "0%",
      },
      {
        left: "100%",
        top: "30%",
      },
      {
        left: "100%",
        top: "70%",
      },
      {
        left: "70%",
        top: "100%",
      },
      {
        left: "30%",
        top: "100%",
      },
      {
        left: "0%",
        top: "70%",
      },
      {
        left: "0%",
        top: "30%",
      },
    ],
  },
  {
    name: "parallelogram",
    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    pointers: [
      {
        left: "25%",
        top: "0%",
      },
      {
        left: "100%",
        top: "0%",
      },
      {
        left: "75%",
        top: "100%",
      },
      {
        left: "0%",
        top: "100%",
      },
    ],
  },
  {
    name: "rombus",
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    pointers: [
      {
        left: "50%",
        top: "0%",
      },
      {
        left: "100%",
        top: "50%",
      },
      {
        left: "50%",
        top: "100%",
      },
      {
        left: "0%",
        top: "50%",
      },
    ],
  },
  {
    name: "trapezoid",
    clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
    pointers: [
      {
        left: "20%",
        top: "0%",
      },
      {
        left: "80%",
        top: "0%",
      },
      {
        left: "100%",
        top: "100%",
      },
      {
        left: "0%",
        top: "100%",
      },
    ],
  },
  {
    name: "Pentagon",
    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    pointers: [
      {
        left: "50%",
        top: "0%",
      },
      {
        left: "100%",
        top: "38%",
      },
      {
        left: "82%",
        top: "100%",
      },
      {
        left: "18%",
        top: "100%",
      },
      {
        left: "0%",
        top: "38%",
      },
    ],
  },
  {
    name: "Hexagon",
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    pointers: [
      {
        left: "25%",
        top: "0%",
      },
      {
        left: "75%",
        top: "0%",
      },
      {
        left: "100%",
        top: "50%",
      },
      {
        left: "75%",
        top: "100%",
      },
      {
        left: "25%",
        top: "100%",
      },
      {
        left: "0%",
        top: "50%",
      },
    ],
  },
  {
    name: "Heptagon",
    clipPath:
      "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
    pointers: [
      {
        left: "50%",
        top: "0%",
      },
      {
        left: "90%",
        top: "20%",
      },
      {
        left: "100%",
        top: "60%",
      },
      {
        left: "75%",
        top: "100%",
      },
      {
        left: "25%",
        top: "100%",
      },
      {
        left: "0%",
        top: "60%",
      },
      {
        left: "10%",
        top: "20%",
      },
    ],
  },
  {
    name: "Octagon",
    clipPath:
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
    pointers: [
      {
        left: "30%",
        top: "0%",
      },
      {
        left: "70%",
        top: "0%",
      },
      {
        left: "100%",
        top: "30%",
      },
      {
        left: "100%",
        top: "70%",
      },
      {
        left: "70%",
        top: "100%",
      },
      {
        left: "30%",
        top: "100%",
      },
      {
        left: "0%",
        top: "70%",
      },
      {
        left: "0%",
        top: "30%",
      },
    ],
  },
  {
    name: "Nonagon",
    clipPath:
      "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
    pointers: [
      {
        left: "50%",
        top: "0%",
      },
      {
        left: "83%",
        top: "12%",
      },
      {
        left: "100%",
        top: "43%",
      },
      {
        left: "94%",
        top: "78%",
      },
      {
        left: "68%",
        top: "100%",
      },
      {
        left: "32%",
        top: "100%",
      },
      {
        left: "6%",
        top: "78%",
      },
      {
        left: "0%",
        top: "43%",
      },
      {
        left: "17%",
        top: "12%",
      },
    ],
  },
  {
    name: "Decagon",
    clipPath:
      "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
    pointers: [
      {
        left: "50%",
        top: "0%",
      },
      {
        left: "80%",
        top: "10%",
      },
      {
        left: "100%",
        top: "35%",
      },
      {
        left: "100%",
        top: "70%",
      },
      {
        left: "80%",
        top: "90%",
      },
      {
        left: "50%",
        top: "100%",
      },
      {
        left: "20%",
        top: "90%",
      },
      {
        left: "0%",
        top: "70%",
      },
      {
        left: "0%",
        top: "35%",
      },
      {
        left: "20%",
        top: "10%",
      },
    ],
  },
  {
    name: "Rabbet",
    clipPath:
      "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
    pointers: [
      {
        left: "0%",
        top: "15%",
      },
      {
        left: "15%",
        top: "15%",
      },
      {
        left: "15%",
        top: "0%",
      },
      {
        left: "85%",
        top: "0%",
      },
      {
        left: "85%",
        top: "15%",
      },
      {
        left: "100%",
        top: "15%",
      },
      {
        left: "100%",
        top: "85%",
      },
      {
        left: "85%",
        top: "85%",
      },
      {
        left: "85%",
        top: "100%",
      },
      {
        left: "15%",
        top: "100%",
      },
      {
        left: "15%",
        top: "85%",
      },
      {
        left: "0%",
        top: "85%",
      },
    ],
  },
  {
    name: "Bevel",
    clipPath:
      "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
    pointers: [
      {
        left: "20%",
        top: "0%",
      },
      {
        left: "80%",
        top: "0%",
      },
      {
        left: "100%",
        top: "20%",
      },
      {
        left: "100%",
        top: "80%",
      },
      {
        left: "80%",
        top: "100%",
      },
      {
        left: "20%",
        top: "100%",
      },
      {
        left: "0%",
        top: "80%",
      },
      {
        left: "0%",
        top: "20%",
      },
    ],
  },
  {
    name: "Triangle",
    clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
    pointers: [
      {
        left: "50%",
        top: "0%",
      },
      {
        left: "0%",
        top: "100%",
      },
      {
        left: "100%",
        top: "100%",
      },
    ],
  },
];
