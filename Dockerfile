FROM hayd/deno:alpine-1.1.1

WORKDIR /

COPY . .

USER deno

CMD ["run", "--allow-net", "deno2.ts"]

EXPOSE 8000
