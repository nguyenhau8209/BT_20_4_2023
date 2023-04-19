const validateEmail = (email) => {
    if (typeof email != 'string') {
        console.log('ban phai nhap chuoi');
        return false;
    }
    if (!email === true) {
        console.log('ban khong duoc de trong');
        return false;
    }
    const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const beforeTest = regExEmail.test(email);
    // console.log(beforeTest);
    if (beforeTest == false) {
        console.log('email phai dung dinh dang');
        return false;
    }
    console.log(email);
    return true;
}

// validateEmail('k10app@gmail.com');


const validatePhone = (phone) => {
    if (!phone === true) {
        console.log('phone phai co gia tri');
        return false;
    }

    if (typeof phone !== 'string') {
        console.log('ban phai nhap chuoi');
        return false;
    }
    if (!/^[0-9]+$/.test(phone)) {
        console.log('so dien thoai phai la cac so tu 0-9');
        return false;
    }
    if (phone.toString().length !== 10) {
        console.log('phone phai la 10 so');
        return false;
    }

    if (!phone.toString().startsWith('0')) {
        console.log('phone phai bat dau bang so 0');
        return false;
    }
    console.log(phone);
    return true;
};

// validatePhone(123456);


const validateRender = (gender) => {
    if (!gender === true) {
        console.log('gioi tinh khong duoc de trong');
        return false;
    }
    if (typeof gender !== 'string') {
        console.log('gioi tinh phai chuoi');
        return false;
    }
    if (gender !== "MALE" && gender !== "FE_MALE") {
        console.log('gioi tinh phai la MALE or FE_MALE', gender);
        return false;
    }
    console.log(gender);

}
// let gender1 = 'FE_MALE';
// validateRender(gender1);

// if(gender1 !== 'female'){
//     console.log('false');
//     return false
// }
// console.log('true')


const validateBirth = (dateOfBirth) => {
    const timestamp = new Date(dateOfBirth).getTime();
    // console.log(timestamp, dateOfBirth);
    if (!dateOfBirth === true) {
        console.log('ngay sinh phai co gia tri');
        return false;
    }
    if (typeof timestamp !== 'number') {
        console.log('ngay sinh phai la so');
        return false;
    }

    if (isNaN(timestamp) || timestamp < 0) {
        console.log('ngay sinh khong duoc am va phai la so')
        return false;
    }
    const minimumDate = new Date('01/01/1990').getTime() / 1000;
    console.log(minimumDate);
    const maximumDate = new Date().getTime() / 1000;
    console.log(maximumDate);


    if (timestamp < minimumDate || timestamp > maximumDate) {
        console.log('ngay sinh khong duoc nho hon nam 1990 hoac lon hon thoi gian hien tai');
        return false;
    }
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' });

    console.log(timestamp, formattedDate);

    return true;
}

// validateBirth(1681829958);


function reverse(s) {
    if (!s === true) {
        console.log('ban khong duoc de trong');
        return false;
    }
    if (typeof s !== 'string') {
        console.log('ban phai nhap vao chuoi');
        return false;
    }
    var o = '';
    for (let i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}

// const str = reverse('1234');
// console.log(str);

const xoaKhoangTrang = (str) => {
    if (!str === true) {
        console.log('ban khong duoc de trong');
        return false;
    }
    if (typeof str !== 'string') {
        console.log('ban phai nhap vao chuoi');
        return false;
    }
    const s = str.trim();
    console.log(s.length, s);
    return true;
}

// const kq = xoaKhoangTrang('1234');
// console.log(kq);


const demKyTuHoa = (string) => {
    if (!string === true) {
        console.log('ban khong duoc de trong');
        return false;
    }
    if (typeof string !== 'string') {
        console.log('ban phai nhap vao chuoi');
        return false;
    }
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase() && /[A-Z]/.test(string[i])) {
            count++;
        }
    }
    console.log('so ky tu hoa la: ', count);
    return true;

}

// const dem = demKyTuHoa('123456');
// console.log(dem);


const chuoiDoiXung = (string) => {
    if (!string === true) {
        console.log('ban khong duoc de trong');
        return false;
    }
    if (typeof string !== 'string') {
        console.log('ban phai nhap vao chuoi');
        return false;
    }
    var o = '';
    for (let i = string.length - 1; i >= 0; i--)
        o += string[i];

    if (string !== o) {
        console.log(`${string} khong phai la chuoi doi xung`);
        return false;
    }
    console.log(`${string} la chuoi doi xung`);
    return true;
}

// const kq = chuoiDoiXung('heheh');
// console.log(kq);


const timKyTuCon = (string) => {
    if (!string === true) {
        console.log('ban khong duoc de trong');
        return false;
    }
    if (typeof string !== 'string') {
        console.log('ban phai nhap vao chuoi');
        return false;
    }
    const resurt = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j <= string.length; j++) {
            resurt.push(string.slice(i, j));
        }
        return resurt;
    }

}

const kq = timKyTuCon('');
console.log(kq);





