 
 
  module.exports = function multiply(first, second) {
  var t='';
  if(first.length<second.length){
    t=first;
    first=second;
    second = t;
  }
    var str = '';
    var arr_change = new Array;
    let change = '';
    c = 0;
    var arr = new Array;
    var arr_1 = new Array;
    var q = 0;
    var s = '';
    var st = '';
    for (var i = second.length - 1; i > -1; i--) {
      for (var j = first.length - 1; j > -1; j--) {
        arr_change[c] = String(eval(second.charAt(i)) * eval(first.charAt(j)));
        c++;
      }
      for (var z = 0; z < arr_change.length; z++) {
        if ((z + 1) != arr_change.length) {
          if (eval(arr_change[z]) >= 10) {
            arr_1 = arr_change[z].split('');
            change = arr_1[1] + change;
            arr_change[z + 1] = String(eval(arr_change[z + 1]) + eval(arr_1[0]))
          }
          else {
            change = arr_change[z] + change;
          }
        }
        else {
          change = arr_change[z] + change;
        }
      }
     // console.log(change);
     // console.log(arr_change)
      arr[q] = change;
      q++;
      arr_change = [];
      c = 0;
      change = '';
    }
  for (var i = 0; i < arr.length; i++) {
       for (var z = 0; z < i; z++) {
         s = s + '0';
    }
  arr[i] = arr[i] + s;
  s = '';
  }
  //console.log(arr);
  for (var i = 0; arr.length != 1; i++){
  arr[arr.length-2] = summ(arr[arr.length-1],arr[arr.length-2]);
  arr.pop();
  }
    
    return arr[0];
  }
  
  
  function summ(str_1, str_2){
    let u='';
    var st='';
    var temp = "";
    if (str_1.length > str_2.length){
      temp = str_1;
      str_1=str_2;
      str_2=temp;
    }
    while(str_1.length!=str_2.length){
      str_1='0'+str_1;
    }
    var arr_11 = new Array;
  var numb = 0
    for (var i = str_1.length-1; i > -1; i--){
  numb = String(eval(str_1[i])+eval(str_2[i]) + u);
  u=0;
  
   if(numb >= 10){
         st = numb[1] + st;
         u = eval(numb[0]);
    }
    else st = numb + st;
    }
   return st;
  }
















// module.exports = function multiply(first, second) {

//   var str = '';
//   var arr_change = new Array;
//   let change = '';
//   c = 0;
//   var arr = new Array;
//   var arr_1 = new Array;
//   var q = 0;
//   var s = '';
//   var st = '';
//   for (var i = second.length - 1; i > -1; i--) {
//     for (var j = first.length - 1; j > -1; j--) {
//       arr_change[c] = String(eval(second.charAt(i)) * eval(first.charAt(j)));
//       c++;
//     }
//     for (var z = 0; z < arr_change.length; z++) {
//       if ((z + 1) != arr_change.length) {
//         if (eval(arr_change[z]) >= 10) {
//           arr_1 = arr_change[z].split('');
//           change = arr_1[1] + change;
//           arr_change[z + 1] = String(eval(arr_change[z + 1]) + eval(arr_1[0]))
//         }
//         else {
//           change = arr_change[z] + change;
//         }
//       }
//       else {
//         change = arr_change[z] + change;
//       }
//     }

//     arr[q] = change;
//     q++;
//     arr_change = [];
//     c = 0;
//     change = '';
//   }
//   var w = 0;
//   for (var i = 0; i < arr.length; i++) {
//     for (var t = 0; t < i; t++) {
//       s = s + '0';
//     }
//     for (var y = arr.length - 1; y > i; y--) {
//       st = st + '0';
//     }
//     arr[i] = st + arr[i] + s;
//     if (arr[i].length != arr[0].length) {
//       while (arr[i].length != arr[0].length) {
//         arr[i] = '0' + arr[i];
//       }
//     }
//     s = '';
//     st = '';
//   }
//   arr_1 = [];
//   var numb = '0';
//   var u = 0;
//   for (var i = (arr[0].length - 1); i > -1; i--) {
//     for (var j = 0; j < arr.length; j++) {
//       numb = String(eval(arr[j][i]) + eval(numb));
//     }
//     if (u != 0) {
//       numb = String(eval(numb) + u);
//       u = 0;
//     }

//     if (i != 0) {
//       if (eval(numb) >= 10) {
//         arr_1 = numb.split('');
//         str = arr_1[arr_1.length - 1] + str;

//         if (arr_1.length == 2) {
//           u = eval(arr_1[0]);
//         } else if (arr_1.length == 3) {
//           u = eval(arr_1[0]) * 10 + eval(arr_1[1]);
//         } else if (arr_1.length == 4) {
//           u = eval(arr_1[0]) * 100 + eval(arr_1[1]) * 10 + eval(arr_1[2]);
//         }
//         else if (arr_1.length == 5) {
//           u = eval(arr_1[0]) * 1000 + eval(arr_1[1]) * 100 + eval(arr_1[2]) * 10 + eval(arr_1[1]);
//         }

//         arr_1 = [];
//       }
//       else {
//         str = numb + str;
//       }
//     }
//     else {
//       str = numb + str;
//     }
//     numb = '0';
//   }

//   return str;
// }

