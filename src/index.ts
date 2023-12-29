/// <reference lib="webworker" />
import "urlpattern-polyfill";

declare global {
  // For some reason Wasmer's WinterJS uses a weird getter.
  interface Request {
    getMethod(): string;
  }

  // Fixes '.addEventListener("fetch")' stuff.
  function addEventListener(
    type: "fetch",
    listener: (event: FetchEvent) => any
  ): void;
}

async function serve(request: Request) {
  console.log(`${request.getMethod()} ${request.url}`);
  let match: ReturnType<URLPattern["exec"]>;
  if ((match = new URLPattern({ pathname: "/" }).exec(request.url))) {
    if (request.getMethod() === "HEAD" || request.getMethod() === "GET") {
      return new Response("Hello GET or HEAD!");
    } else if (request.getMethod() === "POST") {
      const json = await request.json().catch(() => {});
      return new Response(`You sent me a ${typeof json} JSON object`);
    } else {
      return new Response(null, {
        status: 405,
        headers: {
          Allow: "HEAD, GET, POST",
        },
      });
    }
  } else if (
    (match = new URLPattern({ pathname: "/say-hi/:name" }).exec(request.url))
  ) {
    if (request.getMethod() === "HEAD" || request.getMethod() === "GET") {
      return new Response(`Hello ${match.pathname.groups.name}!`);
    } else {
      return new Response(null, {
        status: 405,
        headers: {
          Allow: "HEAD, GET",
        },
      });
    }
  } else {
    return new Response(null, { status: 404 });
  }
}

globalThis.addEventListener("fetch", (event) => {
  event.respondWith(serve(event.request));
});
