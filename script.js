let str = prompt("enter input string");

let ans = {};

function check(str) {
  for (let i = 0; i < str.length; i++) {
    let arr = [i];
    let key = str.charAt(i);

    if (key in ans) {
      ans[key].push(i);
      
    } else {
      ans[key] = arr;
    
    }
  }
  return ans;
}
console.log(check(str));
