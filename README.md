# What is this ?

Get random values from anything you want...

# installation:

//you must have nodejs downloaded

1- make npm account
2- open cmd
3- login to your account in cmd

4- type: mkdir {fileName} && cd {fileName}
5- type the code:
`npm i randomjsnew- --save`
6- type: "code ." without ""

7- create your index.html
8- create your index.js
9- add <script src="./index.js"></script>

then...

import { getRandom } from `randomjsnew-`;

10- open vscode terminal
then write;
npm i parcel -g
wait couple of secs
then npm parcel index.html

if you got an error (scripts not allowed on your system...)

then open windows powershell and type: set-ExecutionPolicy -ExecutionPolicy Unrestricted
then answer by Y then repeat 10

11- enjoy

-getRandom Functions are = [number, element, key, id, pass, randomizeArray];

# getRandom.number(min, max);

define a range to get a random number from this range

min, max can have negative value;

defaults:
min = 0, max = 1000

-conditions:

1- min < max

# getRandom.element([array], minIndex, maxIndex);

get a random element from an array, you can also define a range (related to min, max conditions) in the array to get random elements from the custom range in the array;

defaults:
min = 0, max = (array.length - 1);

conditions;
1- The min, max number must be >= 0
2- The min, max number must be <= array.length
3- The min number must be <= max number
4- The max number must be >= min number
5- min, max are only integer

# getRandom.key( targetedObject );

returns a random key from the object ( returns a random element from Object.key(tragetedObject) );

# getRandom.id( length );

returns a string including xyz- \* length
x is a small letter
y is a number
z is a capital letter

- is the symbol between every xyz
  note: last xyz doesn't add (-) to it;

# getRandom.pass( length, strongOrNot );

returns a (-@password-@-) with the desired length

conditions:
length => 8;

if strongOrNot === true:
adds symbols, and capital letters to the password
else if strongOrNot === false:
returns a password including only small letter and numbers

# getRandom.randomizeArray( arrayToRandomize );

returns a randomizd Set version of the Array //will be fixed later;

# That's it!!

enjoy, and I will be so happy and grateful if you send me a feedback and suggestions to my email (developerHassanJS@gmail.com);

# wait for upcoming features as I improve my self ):

