/*

*
**
***
****
*****

*/

for(let i = 0; i < 5; i++) {
    let str = '';
    for(let j = 0; j <= i; j++) {
        str += '*';
    }
    console.log(str);
}

for(let s = ''; s.length < 6; console.log(s += '*'));
