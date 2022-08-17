const testUser = {
  sculptures: [
    { _id: 1254, author: "jean", name: "sculpture1", material: "wood", isAvailable: true },
    { _id: 78, author: "michel", name: "sculpture2", material: "volcano stone", isAvailable: false },
    { _id: 6786, author: "dureté", name: "sculpture3", material: "marble", isAvailable: true },
  ],
  animals: [
    { _id: 78512, name: "jean", race: "persan", specie: "cat" },
    { _id: 768945, name: "rené", race: "chowchow", specie: "dog" },
    { _id: 954, name: "michel", race: "asian", specie: "elephant" },
  ],
  jobs: [
    { _id: 56, name: "développeur", structure: "microsoft", actualJob: true },
    { _id: 465, name: "designer", structure: "google", actualJob: false },
    { _id: 325, name: "chef de projet", structure: "facebook", actualJob: false },
  ],
};

export default testUser;
