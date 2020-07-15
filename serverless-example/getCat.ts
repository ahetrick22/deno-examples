import {
    APIGatewayProxyEvent,
    Context
} from "https://deno.land/x/lambda/mod.ts";

import { catYou } from 'https://deno.land/x/cat_you/mod.ts';

export async function handler(event: APIGatewayProxyEvent, context: Context) {
    try {
        const catOptions = ['grumpy', 'approaching', 'tubby', 'confused', 'playful', 'thoughtful', 'delighted', 'nyan', 'resting'];
        return ok(catYou(catOptions[Math.floor(Math.random()*9)]))
    } catch (e) {
        return error(`Error: ${e}`);
    }
}

function ok(body: any, statusCode: number = 200) {
    return {
        headers: {
            "Content-type": "text/plain; charset=us-ascii",
        },
        statusCode,
        body: body,
    };
}

function error(message: string, statusCode: number = 500) {
    return ok({ message: message }, statusCode);
}
