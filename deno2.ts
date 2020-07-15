// DEPENDENCIES

// Standard library modules: https://deno.land/std
import { serve } from "./deps.ts";

// Approved 3rd party modules: https://deno.land/x
import { catYou } from './deps.ts';

const catOptions = ['grumpy', 'approaching', 'tubby', 'confused', 'playful', 'thoughtful', 'delighted', 'nyan', 'resting'];

const server = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of server) {
    req.headers.set("Content-type", "text/plain; charset=us-ascii");
    req.respond({ body: catYou(catOptions[Math.floor(Math.random()*9)]) });
}
