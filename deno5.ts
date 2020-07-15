// PERMISSIONING & SECURITY

// -A, --allow-all
// Allow all permissions
//
// --allow-env
// Allow environment access
//
// --allow-hrtime
// Allow high resolution time measurement
//
// --allow-net=<allow-net>
//     Allow network access
//
// --allow-plugin
// Allow loading plugins
//
// --allow-read=<allow-read>
//     Allow file system read access
//
// --allow-run
// Allow running subprocesses
//
// --allow-write=<allow-write>
//     Allow file system write access

import { join } from "https://deno.land/std/path/mod.ts";
import { BufReader } from "https://deno.land/std/io/bufio.ts";
import { parse } from "https://deno.land/std/encoding/csv.ts";

async function loadPlanetsData() {
    const path = join(".", "sample_data.csv");

    const file = await Deno.open(path);
    const bufReader = new BufReader(file);
    return await parse(bufReader, {
        header: true,
        comment: "#"
    });
    Deno.close(file.rid);
}

async function printData() {
    const planets = await loadPlanetsData();
    console.log(`${planets.length} found`);
}

printData();
