// BUILT IN FUNCTIONALITY

// Browser-compatible API outside of Deno namespace
// Deno namespace includes fs functionality, etc, similar to Node.

const response = await fetch("http://localhost:8000/");

const cat = await response.text();

console.log(cat);

console.table(Deno.metrics());
