// Define color constants
const cafeColor = "#8B4513"; // Brown color for "cafe"
const waterColor = "#ADD8E6"; // Light blue color for "water"
const emptyColor = "#eee"; // Light grey color for empty

// All code lines to be executed in order
const codeLines = [
  'function swapVar() {', // Line 1: Function declaration
  '  var a = "cafe";', // Line 2: Declare variable a and assign it the value "cafe"
  '  var b = "water";', // Line 3: Declare variable b and assign it the value "water"
  '  var c = a;', // Line 4: Declare variable c and assign it the value of a
  '  a = b;', // Line 5: Assign the value of b to a
  '  b = c;', // Line 6: Assign the value of c to b
  '}' // Line 7: End of function
];

// Explanations for each line of code
const explanations = [
  'Line 1: Declare the function swapVar.',
  'Line 2: Declare variable a and assign it the value "cafe".',
  'Line 3: Declare variable b and assign it the value "water".',
  'Line 4: Declare variable c and assign it the value of a.',
  'Line 5: Assign the value of b to a.',
  'Line 6: Assign the value of c to b.',
  'Line 7: End of function.'
];

// Get references to the HTML elements
const codeBlock = document.getElementById('codeBlock'); // The code block element
const lineNumbers = document.getElementById('lineNumbers'); // The line numbers element
const swapButton = document.getElementById('swapButton'); // The swap button element
const resetButton = document.getElementById('resetButton'); // The reset button element
const cupA = document.getElementById('cupA'); // The cup A element
const cupB = document.getElementById('cupB'); // The cup B element
const cupC = document.getElementById('cupC'); // The cup C element
const explanationContainer = document.getElementById('explanationContainer'); // The explanation container element

// Helper function to append a new line to the code block with optional highlighting.
function appendCodeLine(line, highlight = false) {
  let lines = codeBlock.textContent.split("\n").filter(l => l.trim() !== "}"); // Remove stray `}`
  lines.push(line); // Add the new line
  lines.push("}"); // Ensure closing brace is always added
  codeBlock.textContent = lines.join("\n"); // Update code block
  if (highlight) { // If highlighting is needed
    codeBlock.innerHTML = lines.map((l, i) => {
      if (i === lines.length - 2) { // Highlight the second last line
        return `<span class='highlight'>${l}</span>`;
      }
      return l;
    }).join("\n"); // Join the lines back together
  }
  updateEndOfFunctionExplanation(); // Update the end-of-function explanation
}

// Helper function to append an explanation to the explanation container.
function appendExplanation(text) {
  const explanation = document.createElement('div');
  explanation.className = 'explanation';
  explanation.textContent = text;
  explanationContainer.appendChild(explanation);
}

// Helper function to update the end-of-function explanation based on the current number of lines in the code block.
function updateEndOfFunctionExplanation() {
  const lines = codeBlock.textContent.split("\n");
  const totalLines = lines.length;
  const endOfFunction = document.getElementById('endOfFunction');
  if (endOfFunction) {
    endOfFunction.textContent = `Line ${totalLines}: End of function.`;
  }
}

// Function to reset the app state
function resetApp() {
  // Reset the code block
  codeBlock.textContent = 'function swapVar() {\n  var a = "cafe";\n  var b = "water";\n}'; // Include the closing brace
  lineNumbers.innerHTML = '1<br>2<br>3<br>4<br>5<br>6<br>7'; // Reset the line numbers

  // Reset the cups
  cupA.textContent = "A: cafe";
  cupA.style.backgroundColor = cafeColor;
  cupB.textContent = "B: water";
  cupB.style.backgroundColor = waterColor;
  cupC.textContent = "C:";
  cupC.style.backgroundColor = emptyColor;
  cupC.style.display = 'none';

  // Reset the explanations
  explanationContainer.innerHTML = `
    <div class="explanation">Line 1: Declare the function swapVar.</div>
    <div class="explanation">Line 2: Declare variable a and assign it the value "cafe".</div>
    <div class="explanation">Line 3: Declare variable b and assign it the value "water".</div>
    <div class="explanation" id="endOfFunction">Line 4: End of function.</div>
  `;

  // Enable the swap button and hide the reset button
  swapButton.disabled = false;
  resetButton.style.display = 'none';
}

// Add an event listener to the swap button
swapButton.addEventListener('click', () => {
  swapButton.disabled = true; // Prevent multiple clicks

  // --- Step 1: Execute: var c = a; ---
  setTimeout(() => {
    appendCodeLine(codeLines[3], true); // Append "var c = a;" and highlight it.
    appendExplanation(explanations[3]); // Append explanation for line 4
    // Move the "End of function" explanation down
    const endOfFunction = document.getElementById('endOfFunction');
    explanationContainer.removeChild(endOfFunction);
    explanationContainer.appendChild(endOfFunction);
    // Make cupC visible.
    cupC.style.display = 'flex';
    // Copy value and color from A to C and empty cupA.
    setTimeout(() => {
      cupC.textContent = "C: cafe";
      cupC.style.backgroundColor = cafeColor;
      cupA.textContent = "A:";
      cupA.style.backgroundColor = emptyColor;
    }, 3000); // Update the cups after 3 seconds
  }, 2000); // Start this step after 2 seconds

  // --- Step 2: Execute: a = b; ---
  setTimeout(() => {
    appendCodeLine(codeLines[4], true); // Append "a = b;" and highlight it.
    appendExplanation(explanations[4]); // Append explanation for line 5
    // Move the "End of function" explanation down
    const endOfFunction = document.getElementById('endOfFunction');
    explanationContainer.removeChild(endOfFunction);
    explanationContainer.appendChild(endOfFunction);
    // Copy value and color from B to A and empty cupB.
    setTimeout(() => {
      cupA.textContent = "A: water";
      cupA.style.backgroundColor = waterColor;
      cupB.textContent = "B:";
      cupB.style.backgroundColor = emptyColor;
    }, 3000); // Update the cups after 3 seconds
  }, 8000); // Start this step after 8 seconds

  // --- Step 3: Execute: b = c; ---
  setTimeout(() => {
    appendCodeLine(codeLines[5], true); // Append "b = c;" and highlight it.
    appendExplanation(explanations[5]); // Append explanation for line 6
    // Move the "End of function" explanation down
    const endOfFunction = document.getElementById('endOfFunction');
    explanationContainer.removeChild(endOfFunction);
    explanationContainer.appendChild(endOfFunction);
    // Copy value and color from C to B and empty cupC.
    setTimeout(() => {
      cupB.textContent = "B: cafe";
      cupB.style.backgroundColor = cafeColor;
      cupC.textContent = "C:";
      cupC.style.backgroundColor = emptyColor;
    }, 3000); // Update the cups after 3 seconds

    // --- Step 4: End of function ---
    setTimeout(() => {
      // Remove the initial closing brace
      const lines = codeBlock.textContent.split("\n");
      if (lines[lines.length - 1].trim() === "}") {
        lines.pop(); // Only remove if the last line is exactly "}"
      }
      codeBlock.textContent = lines.join("\n"); // Join the lines back together

      appendCodeLine(codeLines[6], true); // Append "}" and highlight it.
      appendExplanation(explanations[6]); // Append explanation for line 7

      // Show the reset button
      resetButton.style.display = 'inline-block';
    }, 3000); // Update the code and explanation after 3 seconds
  }, 14000); // Start this step after 14 seconds
});

// Add an event listener to the reset button
resetButton.addEventListener('click', resetApp);

