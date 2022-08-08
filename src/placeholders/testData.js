const testUser = {
  sculptures: [
    { author: "jean", name: "sculpture1", material: "wood", isAvailable: true },
    { author: "michel", name: "sculpture1", material: "volcano stone", isAvailable: false },
    { author: "dureté", name: "sculpture1", material: "marble", isAvailable: true },
  ],
  animals: [
    { _id: 0, name: "jean", race: "persan", specie: "cat" },
    { _id: 1, name: "rené", race: "chowchow", specie: "dog" },
    { _id: 2, name: "michel", race: "asian rondoudou", specie: "elephant" },
  ],
  jobs: [
    { _id: 0, name: "tourneur", structure: "la tournure céleste", actualJob: true },
    { _id: 1, name: "rouleur", structure: "bad turn", actualJob: false },
    { _id: 2, name: "tournoyeur", structure: "gravity turn", actualJob: false },
  ],
};

export default testUser;
