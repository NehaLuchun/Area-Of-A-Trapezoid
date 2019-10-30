"use strict";

// Add Event Listener
document.getElementById('calculate').addEventListener('click', calculations);

// Event Function
function calculations() {
    // Input- Get three Numbers
    let n = document.getElementById('b').value;
    let n2 = document.getElementById('b2').value;
    let n3 = document.getElementById('h').value;

    // Process
    let total = ((n + n2)*n3)/ (1/2);

    // Output
    let r = document.getElementById('result').innerHTML = total;
}