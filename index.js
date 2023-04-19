//viet mot function validate input 
//input la text
//input phai co gia tri
// do dai trong pham vi tu 6-30 ky tu


function validate(input) {
    if (typeof input != "string") {
        console.log('ban phai nhap vao chuoi');
    }
    else if (!input=== true) {
        console.log('ban phai nhap gia tri')
    }
    else if (input.length < 6 || input.length > 30) {
        console.log("do dai cua chuoi phai >6 va <30");
    } else {
        console.log(input);
    }
}
// validate(null);

function validate1(input) {
    if (typeof input === "string") {
        console.log('pass kieu du lieu');
    }
    if (!input=== false) {
        console.log('pass co gia tri')
    }
    if (input.length >= 6 && input.length <= 30) {
        console.log("pass chuoi");
    } 

    console.log(input);
    
}
// validate1('1234567');



function sum(a, b){

    return a + b;

}

const sum1 = function(a,b){

}

const sum2 = () =>{

}

console.log(sum(1,2));



const age = 18;

let str = 'toi ' + age + ' tuoi';


str = str.replace('toi', 'toi2');
console.log(str);
console.log(str[0]);
console.log(str.indexOf('18'));


// const van = `toi ${age} tuoi`;
// console.log(van);




