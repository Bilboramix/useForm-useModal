const testUser = {
  sculptures: [
    { author: "jean", name: "sculpture1", material: "wood", isAvailable: true },
    { author: "michel", name: "sculpture2", material: "volcano stone", isAvailable: false },
    { author: "dureté", name: "sculpture3", material: "marble", isAvailable: true },
  ],
  animals: [
    { _id: 0, name: "jean", race: "persan", specie: "cat" },
    { _id: 1, name: "rené", race: "chowchow", specie: "dog" },
    { _id: 2, name: "michel", race: "asian", specie: "elephant" },
  ],
  jobs: [
    { _id: 0, name: "développeur", structure: "microsoft", actualJob: true },
    { _id: 1, name: "designer", structure: "google", actualJob: false },
    { _id: 2, name: "chef de projet", structure: "facebook", actualJob: false },
  ],
};

export default testUser;
