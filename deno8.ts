// LIMITATIONS

/*
    - Server performance:
        Deno: 25k requests per second with max latency of 1.3 milliseconds
        Node: 34k requests per second with max latency between 2 and 300  milliseconds
    - Bottleneck at TS compilation. Team intending to implement type checking in Rust instead of via Microsoft's compiler in future.
    - Lack of compatibility with npm modules - need to be ported over. Large migration cost for existing apps.
    - Standard modules not yet considered stable:
        "These modules will eventually be tagged in accordance with Deno releases but as of today we do not yet consider them stable and so we version the standard modules differently from the Deno runtime to reflect this."
*/
