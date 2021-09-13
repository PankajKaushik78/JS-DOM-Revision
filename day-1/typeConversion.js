//converting one data type to another 
//there are 2 conversion - implicit and explicit 
//implicit - apne aap convert hota hai 
//explicit - khud type cast krke convert krna 

// typeof _ always returns a string
// String conversion is given preference over integer conversion
// i.e "10" + 5 = "105" instead of 15
// "10" - 5 = 5 , in this case integer conversion takes place beacause '-' doesn't make any sense for a string
// "abc" - 2 = NaN
// Number("5") = 5
// Number("   5   ") = 5 , trims the spaces on its own
// Number(undefined) = NaN
// Number(null) = 0
// Number(true) = 1
// Number("true") = NaN , because it is string inside which cannot be converted to number directly 


// Truthy - true, All numbers except 0, [], {}, [...], {...}, +-Infinity, "non-empty-string", Date
// Falsy - false, 0, empty strings ("", '', ``), null, undefined, NaN  

// Truthy values - https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// Falsy values - https://developer.mozilla.org/en-US/docs/Glossary/Falsy


(function () {
    if ((-100 && 100 && "0") || [] === true || 0) {

      console.log(1);  //#

      if ([] || (0 && false)) {

        console.log(2);  //#
      }
  
      if (Infinity && NaN && "false") {
        console.log(3);
        if ("") {
          console.log(4);
        }
      } else {
        console.log(5);  //#
        if (({} || false === "") && !(null && undefined)) {
          console.log(6);  //#
        }
      }
    } 
  })();
  // Output = 1,2,5,6