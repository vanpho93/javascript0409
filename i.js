/*

    *
   **
  ***
 ****
*****

*/

// for(let s = '    *', i = 0; ++i <= 5; s = (s += '*').substr(1, 5)) console.log(s);


for(let i = 0; i < 5; i++) {
    let str = '';
    for(let j = 0; j < 5; j++) {
        str += (j >= 4 - i) ? '*' : ' ';
    }
    console.log(str);
}

// for(let s = ''; s.length < 6; console.log(s += '*'));
