let sales: number = 18_278_7;
let cource: string = "sdksldksld";
let is_published: boolean = true;

let arrr: number[] = [];

let user: [number, string, boolean] = [100, 'jshdjhdjsd', true]

enum Size { Small = 's', Medium = 'm', Large = 'l' };

let MySize: Size = Size.Large


function my_func(params: boolean) {
    return params
}

type Employee = {
    readonly id: number;
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date);

    }
}


function KgToLbs(weight: number | string) {
    console.log(weight);

}


type Metric = 'cm' | 'm';

let measure: Metric = 'cm'


// optional chaining

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id == 0 ? null : { birthday: new Date() };
}


let customer = getCustomer(0);

console.log(customer?.birthday?.getFullYear());
