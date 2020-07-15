
import { desc, task, sh, run } from "https://deno.land/x/drake@v1.2.3/mod.ts";

desc("Run API via denon for development");
task("denon", [], async function () {
    await sh(
        "denon run --allow-net deno2.ts",
    );
});

desc("Cache and lock dependencies");
task("cache", [], async function () {
    await sh(
        "deno cache --lock=lock.json --lock-write deps.ts",
    );
});

desc("Install denon for development");
task("denon-install", [], async function () {
    await sh("deno install -Af --unstable https://deno.land/x/denon/denon.ts");
});

run();
