// Ques 1 : Truncate the text
// Input: str = "Subscribe to RoadsideCoder" , maxlength=9
// Output: "Subscribe…"

function truncate(str, maxlength) {
  if (str.length > maxlength) return str.slice(0, maxlength) + "...";
  else return str;
}

console.log(truncate("Subscribe to RoadsideCoder", 9));
