(function () {

    var x: string = "Khaled"
    // tuble
    var test: [string, number[]] = ["khaled mohamed", [4, 6]]

    var test1: [string, number[], null] = ["khaled", [2, 4, 6], null]

    // union  
    var id: number | string = "khaled";

    type x = number | string[] | null | number | string

    var y: x = ["khaled", "mohamed", "Hamouda"]

    var z: x = 14

    var H: x = null

    var M: x = "100 Million dollar $$"


    function raze(userName: string, age: string | number) /*return type*/: number | string {


        return age = Number(age)
    }
    raze("khaled", 21)
    console.log(raze);
    raze("khaled", "21")
    console.log(raze);
})()

// any & unknown

var x: unknown

x = 40

// any (unknown)بتقبل اي حاجة وكدا هتبقي عاملة زي جافا زي لوزلي تايب بس بتستخدم في حالة عدم معرفة اللي فاليو اللي راجعة من الباك اند بس الافضل منها any
var y: any

y = [2, 5, 6] /*array*/

y = function year() {
    console.log('hi');  /*function*/
}
y = {} /*object */


// interface
interface Address {
    city: string,
    street: string,
    mohafza: string,
};

interface User {
    name: string,
    id: string,
    sallary: number,
    age: number,
    job: string,
    address?: Address,
};
var users: User[] = [
    {
        name: "khaled",
        id: "20",
        sallary: 20000,
        age: 21,
        job: "software Architect",
        address: {
            city: "menof",
            street: "Kihsk",
            mohafza: "shiben elkom"
        }
    }
    ,
    {
        name: "Youssef",
        id: "26",
        sallary: 25000,
        age: 26,
        job: "Mechanical Engineer",
        address: {
            city: "menof",
            street: "Kihsk",
            mohafza: "shiben elkom"
        }
    },
    {
        name: "Omar",
        id: "20",
        sallary: 22323,
        age: 24,
        job: "Network security Engineer",
        address: {
            city: "menof",
            street: "Kihsk",
            mohafza: "shiben elkom"
        }
    }
    , {
        name: "Mohamed elrefe",
        id: "28",
        sallary: 32132,
        age: 28,
        job: "Bank Supervisor",
        address: {
            city: "menof",
            street: "Kihsk",
            mohafza: "shiben elkom"
        }
    }

]

// interface vs class 
interface placeDetails {
    name: string;
    place: string;
    country: string;
    area: number;
}
// implementaition يعني الكلاس بيعمل تنفيذ للانترفيس او مش هيشتغل الا لما يكتب البروبيرتيز بتاعت الانترفيس
class place implements placeDetails {
    name = "abas el3qaad";
    place = "dkos street";
    country = "egypt";
    area = 1000000;
}

// وراثة extend
interface Human {
    name: string,
    age: number,
    sallary: number,
    id: number;
}
interface person extends Human {
    after20: boolean;
}
// بعد كده نعمل اوبجكت لاننا ورثنا البيرسون من الهيومان
const person1: person = {
    name: "khaled",
    age: 21,
    sallary: 30000,
    id: 2,
    after20: true
}

// طريقة توريث تانية 
interface dodo {
    name: string,
    istrue: boolean,
    sallary: number,
    // wage:string
};
interface dodo {
    wage: string; //XXXXXX
}

// اوبجكت مرة مش هيرضي لو كررناه هيضرب ايرور فا لازم نعمل تايب جديد ونقولة الجديد بيساوي القديم زائد البروبيرتيز بتاعت الجديد type x   لو عملنا 
type x = {
    name: string;
    sallary: number;
    wage: string;
    job: string;
}

type y = x & {
    istrue: boolean
}
// genric function هي فانكشن بتبعتلها نوع الباريميتر وقت التنفيذ 
function print<a, b, c>(x: a[], y: b, z: c[]) {
    console.log(x, y, z);
    return x
}
print([2, 5, 6], 8, [1, 3, 5])

// genric function 2
function print2<x, z>(first: x[], second: x[], third: z[]) {
    console.log(first, second, third);
    return first
}
print2(["khaled", "mohamed", "hamouda"], ["omar", "mohy", "elsharkawy"], [1, 4, 5])
