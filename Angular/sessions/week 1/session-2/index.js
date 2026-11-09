(function () {
    var x = "Khaled";
    // tuble
    var test = ["khaled mohamed", [4, 6]];
    var test1 = ["khaled", [2, 4, 6], null];
    // union  
    var id = "khaled";
    var y = ["khaled", "mohamed", "Hamouda"];
    var z = 14;
    var H = null;
    var M = "100 Million dollar $$";
    function raze(userName, age) {
        return age = Number(age);
    }
    raze("khaled", 21);
    console.log(raze);
    raze("khaled", "21");
    console.log(raze);
})();
// any & unknown
var x;
x = 40;
// any (unknown)بتقبل اي حاجة وكدا هتبقي عاملة زي جافا زي لوزلي تايب بس بتستخدم في حالة عدم معرفة اللي فاليو اللي راجعة من الباك اند بس الافضل منها any
var y;
y = [2, 5, 6]; /*array*/
y = function year() {
    console.log('hi'); /*function*/
};
y = {}; /*object */
;
;
var users = [
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
    },
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
    },
    {
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
];
// implementaition يعني الكلاس بيعمل تنفيذ للانترفيس او مش هيشتغل الا لما يكتب البروبيرتيز بتاعت الانترفيس
var place = /** @class */ (function () {
    function place() {
        this.name = "abas el3qaad";
        this.place = "dkos street";
        this.country = "egypt";
        this.area = 1000000;
    }
    return place;
}());
// بعد كده نعمل اوبجكت لاننا ورثنا البيرسون من الهيومان
var person1 = {
    name: "khaled",
    age: 21,
    sallary: 30000,
    id: 2,
    after20: true
};
;
