let str = "India is My Country"
let str1 = str.toLowerCase()
console.log(str1);
let count = 0;
for (let i = 0; i < str1.length; i++) {
    const element = str1[i];
    switch (element) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':{
            count++
        }
    }

}
console.log(count);