
function printLowercaseAlphabet() {  
    let alphabet = "";  
// Step 1: Create an empty string to store the letters

    for (let i = 97; i <= 122; i++) {  
/* Step 2: Loop from 97 to 122 (ASCII codes for 'a' to 'z')
1️) Initialization	i = 97 (computer stores i)
2️) Condition Check	i <= 122? If true, run the loop. If false, stop.
3️) Loop Body	Converts i to a letter, adds to alphabet.
4️) Increment	i++ (increase i by 1)
5️) Return to step 2 Condition Check	If still true, repeat steps 3️-4️.
6️) Stop	When i = 123, condition is false, so loop exits.
*/
        alphabet += String.fromCharCode(i);  
/* Step 3: Convert ASCII number to letter and add to alphabet string
1️ Convert i to a letter	String.fromCharCode(i)	Turns numbers 97-122 into letters 'a'-'z'
2️ Add to string	alphabet += ...	Adds the new letter to alphabet
3️ Loop repeats	i++	Moves to the next letter
*/
    }

    console.log(alphabet);  
// Step 4: Print the final alphabet string
}

printLowercaseAlphabet();  
// Step 5: Call the function to execute it


/*Let’s say we are inside the loop when i = 97:

The computer converts 97 into 'a':

String.fromCharCode(97)  →  "a"
 Then, it adds 'a' to alphabet:

alphabet = alphabet + "a";
Since alphabet was empty (""), now it becomes "a".

🔄 Next Loop Cycle (i = 98)
Now, the loop repeats:

 The computer converts 98 into 'b':

String.fromCharCode(98)  →  "b"
 It adds 'b' to alphabet:

alphabet = alphabet + "b";
Since alphabet = "a", now it becomes "ab".

🔄 Loop Continues...
i Value	String.fromCharCode(i)	alphabet Value After Addition
99	'c'	"abc"
100	'd'	"abcd"
...	...	... continued   ...
122	'z'	"abcdefghijklmnopqrstuvwxyz"
🚀 Final Loop Execution (i = 122)
At i = 122: Converts 122 to 'z':

String.fromCharCode(122)  →  "z"
Adds 'z' to alphabet:


alphabet = alphabet + "z";
Now alphabet = "abcdefghijklmnopqrstuvwxyz".

At this point, the loop stops because i > 122.

✅ Final Output
After the loop finishes, we print alphabet:

abcdefghijklmnopqrstuvwxyz
*/