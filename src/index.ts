import { sort } from "./sort";

console.log("Package Sorting System - Thoughtful Robotics\n");

const testCases = [
  {
    width: 50,
    height: 50,
    length: 50,
    mass: 10,
    description: "Standard package (not bulky, not heavy)",
  },
  {
    width: 100,
    height: 100,
    length: 100,
    mass: 10,
    description: "Bulky by volume (exactly 1,000,000 cm³)",
  },
  {
    width: 150,
    height: 50,
    length: 50,
    mass: 10,
    description: "Bulky by dimension (150cm width)",
  },
  {
    width: 50,
    height: 50,
    length: 50,
    mass: 25,
    description: "Heavy package (25kg)",
  },
  {
    width: 100,
    height: 100,
    length: 100,
    mass: 25,
    description: "Both bulky and heavy - REJECTED",
  },
  {
    width: 200,
    height: 200,
    length: 200,
    mass: 30,
    description: "Both bulky (dimensions) and heavy - REJECTED",
  },
  {
    width: 50,
    height: 50,
    length: 400,
    mass: 5,
    description: "Bulky by volume (1,000,000 cm³)",
  },
  {
    width: 149,
    height: 100,
    length: 50,
    mass: 19,
    description: "Standard (volume=745,000 cm³, mass=19kg)",
  },
];

testCases.forEach((testCase, index) => {
  const result = sort(
    testCase.width,
    testCase.height,
    testCase.length,
    testCase.mass
  );
  console.log(`Test ${index + 1}: ${testCase.description}`);
  console.log(
    `  Dimensions: ${testCase.width} x ${testCase.height} x ${testCase.length} cm`
  );
  console.log(`  Mass: ${testCase.mass} kg`);
  console.log(`  Result: ${result}\n`);
});
