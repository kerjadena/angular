// 1. PRIMITIVE TYPES & VARIABLES
var greeting    = 'Hello, world!';      // String
let age         = 25;                   // Number
const isStudent = true;                 // Boolean

let address     = null;                 // Null
let phone;                              // Undefined

const uniqueId  = Symbol('id');         // Symbol
const bigNumber = 9007199254740991n;    // BigInt

console.log({ greeting, age, isStudent, address, phone, uniqueId, bigNumber });

// 2. REFERENCE TYPES (Object & Array)
const user = {
  name: greeting,
  age: age,
  id: uniqueId,
  active: isStudent
};

const hobbies = ['tidur', 'baca komik', 'baking', 'nonton drakor'];

console.log('User:', user);
console.log('Hobbies:', hobbies);

// 3. MUTABILITY & REASSIGNMENT
age = 26;                    // bisa di-reassign
hobbies.push('main game');   // isi array bisa diubah walau variabel const
console.log('Hobbies:', hobbies);
// 4. VAR VS LET/CONST: SCOPE & HOISTING
function testScope() {
  console.log(foo); // undefined (hoisted var)
  // console.log(bar); // ReferenceError (temporal dead zone)
  
  var foo = 'foo';
  let bar = 'bar';
}
testScope();

let a = true
let b = 'true'

console.log(a==b)

let umur = 7
console.log(umur >=18 ? 'Dewasa' : 'Anak-anak'); // Ternary operator

let age = 99
console.log(age >= 60 && age <= 80 ? 
    'Tua'
    : age > 100
)
