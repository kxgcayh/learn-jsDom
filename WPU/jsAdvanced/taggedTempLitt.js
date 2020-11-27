// Tagged Templates
const name = "Kautsar Al Bana";
const age = 20;
const place = "Bogor";

// Get String and Expressions(...values)
function highlight(strings, ...values) {
  // Looping Way
  /* let result = "";
  strings.forEach((str, i) => {
    result += `${str}${values[i] || ""}`;
  });
  return result; */

  // Reduce Way
  return strings.reduce(
    (result, str, i) => `${result}${str}
      <span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Hello, my name is ${name}, and I\'m ${age} years old. I was born in ${place}`;
// console.log(str);
document.body.innerHTML = str;
