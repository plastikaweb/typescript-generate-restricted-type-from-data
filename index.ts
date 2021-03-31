const vehicles = [
  { name: "Van", wheels: 4 },
  { name: "Car", wheels: 4 },
  { name: "Motorcycle", wheels: 2 }
] as const;

type Vehicle = {
  [Prop in keyof typeof vehicles[number]]: typeof vehicles[number][Prop]
};

const a: Vehicle = { name: "Van", wheels: 2 };

console.log(a);
