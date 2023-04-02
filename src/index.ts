// console.log("hello fist type script line");
// console.log("kjddj");

const age: number = 20;

// any type
const sales = 8383838;
const salesAmount = "jdjdj";
const isSales = true;

function render(document: any) {
  console.log(document);
}

// array

const numArrases: number[] = [];
numArrases[0] = 1;

// normally type script giving good intellisense
numArrases.forEach((eachNumber) => {
  eachNumber.toFixed();
});

// tuples
//  ? tuples giving the fixed length of array with the fixed type of data

const person: [string, number, object] = ["joe", 10, Object];
person[1] = 20;

// enums
// ? enums are the fixed set of values ,can insert  value based on the enum specified literals

const enum Size {
  small = 1,
  Medium,
  Large,
}
const Medium: number = 220;
const mySize: Size = Medium;

console.log(mySize);

// functions
function CalculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 0.2;
  }
  return income * 0.4;
}

CalculateTax(10_000);

// objects

let employees: {
  id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 0,
  retire: (date: Date) => {
    console.log(date);
  },
};

employees.name = "vishnu";

const retiedAt = employees.retire(new Date());

// ! going to advance types

// type aliases

// we can reuse the types aliases across multiple object

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const notChangedIdEmployee: Employee = {
  id: 1,
  name: "siva",
  retire: (date: Date) => {
    console.log(date);
  },
};

const notChangedIdEmployee2: Employee = {
  id: 2,
  name: "siva",
  retire: (date: Date) => {
    console.log(date);
  },
};

// union types

// we can use union types to specify the multiple types of annotation

function KgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}
console.log(KgToLbs(10));
console.log(KgToLbs("10"));

// intersection type

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type DraggableResizable = Draggable & Resizable;

const textBox: DraggableResizable = {
  drag: () => {},
  resize: () => {},
};

console.log(textBox);

// literals type

// literals means exact and specific

const quantity: 50 | 100 = 100;
const metric: "inch" | "cm" = "inch";

type QuantityAlias = 50 | 100;
type MetricAlias = "inch" | "meter";

const quantityWithTypeAlias: QuantityAlias = 50;

const metricWithTypeAlias: MetricAlias = "meter";

// nullable type

function greetings(name: string | null | undefined) {
  if (!!name === true) {
    console.log(`hello ${name}`);
  } else {
    console.log("hello stranger");
  }
}

greetings(undefined);

// optional chaining

type getCustomersAlias = {
  birthDay?: Date;
};

function getCustomers(id: number): getCustomersAlias | null | undefined {
  return !!id === false ? undefined : { birthDay: new Date() };
}

const gotCustomerData = getCustomers(1);

console.log(gotCustomerData?.birthDay?.toDateString());

// in optional chaining a method called optional calling
const log: any = null;
log?.();
