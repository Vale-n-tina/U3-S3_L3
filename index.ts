// 1) stringhe, numeri, booleani, undefaind, null , any
// 2)
const myName: string = "valentina";
const myAge: number = 24;
const StudyDeveloper: boolean = true;
// 3)
const greet = (name: string) => {
  return "Ciao " + name;
};
// 4)
const sum = (a: number, b: number): number => {
  return a + b;
};
// 5)
const calcoloIva = (n: number): number => {
  return n + (n / 100) * 22;
};
console.log(calcoloIva(10));
// 6)
const lenght = (p1: string, p2: string): number => {
  return (p1 + p2).length;
};
console.log(lenght("ciao", "ciao"));

// 7)

// 8)
let mix: number | null | undefined;
// 9)
type DayOfWeek = string;
let d1: DayOfWeek = "lunedì";
let d2: DayOfWeek = "Martedì";
let d3: DayOfWeek = "Mercoledì";
let d4: DayOfWeek = "giovedì";
let d5: DayOfWeek = "venerdì";
let d6: DayOfWeek = "sabato";
let d7: DayOfWeek = "domenica";

// 10)
const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// 11)
const array: [string, string, string, number, number] = [
  "ciao",
  "sono",
  "valentina",
  24,
  32,
];

// 12)
// le interfacce servono a costruire il modello di un oggetto, type si usa per i dati primitivi
// 13)
interface persone {
  firstname: string;
  lastname: string;
  age: number;
}
//14)
interface dati {
  mail: string;
  telefono?: number;
}

//15)
type Studente = {
  nome: string;
  voto: number;
};

const studente1: Studente[] = [
  {
    nome: "valentina",
    voto: 2,
  },
  { nome: "gerardo", voto: 3 },
  {
    nome: "astrubale",
    voto: 10,
  },
];

// 16)

interface Veicolo {
  motore: number;
  marmitta: number;
  facile:boolean
}

interface Car extends Veicolo{
    ruote:number
}

// 17)

const car1:Car={
    motore:1,
    marmitta:1,
    facile:true,
    ruote:4
}

// 18) 
//è un paramentro passato all'interfaccia

//19)
//si

// 20)

interface api<T>{
    response:T;
    sucess:boolean;
    message?:string
}