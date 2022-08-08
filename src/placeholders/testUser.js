const testUser = {
  sculptures: [
    { author: "jean", name: "sculpture1", material: "wood", isAvailable: true },
    { author: "michel", name: "sculpture1", material: "volcano stone", isAvailable: false },
    { author: "dureté", name: "sculpture1", material: "marble", isAvailable: true },
  ],
  animals: [
    { name: "jean", race: "persan", specie: "cat" },
    { name: "rené", race: "chowchow", specie: "dog" },
    { name: "michel", race: "asian rondoudou", specie: "elephant" },
  ],
  jobs: [
    { name: "tourneur", structure: "la tournure céleste", isMyJob: true },
    { name: "rouleur", structure: "bad turn", isMyJob: false },
    { name: "tournoyeur", structure: "gravity turn", isMyJob: false },
  ],
};

export default testUser;
