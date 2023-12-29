<p align=center>
  <b>You're probably looking for <a href="https://jcbhmr-hello-world-javascript-wasmer-app.wasmer.app/">jcbhmr-hello-world-javascript-wasmer-app.wasmer.app</a></b>
</p>

# "Hello world!" JavaScript Wasmer app

🟨 JavaScript HTTP server compiled to WASM and running on Wasmer!

<p align=center>
  <img src="https://github.com/jcbhmr/hello-world-javascript-wasmer-app/assets/61068799/de93ab30-7442-49c3-9028-667ea76ccaad">
</p>

❄️ Uses the [WinterJS] WASM-based JavaScript runtime \
🟪 Uses the Wasmer app platform \
👷‍♂️ Lets you write service worker JavaScript code for the server \
👩‍⚖️ [0BSD licensed] template

## Development

![JavaScript](https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label=)
![WebAssembly](https://img.shields.io/static/v1?style=for-the-badge&message=WebAssembly&color=654FF0&logo=WebAssembly&logoColor=FFFFFF&label=)
![Wasmer](https://img.shields.io/static/v1?style=for-the-badge&message=Wasmer&color=4946DD&logo=Wasmer&logoColor=FFFFFF&label=)

There's still some rough edges of the WinterJS runtime. 🤷‍♀️ If something doesn't
work, make sure it's not just the runtime being silly. To do development you can
use something like this to test the server locally:

```sh
wasmer run . --net
```

<!-- prettier-ignore-start -->
[0bsd licensed]: https://github.com/jcbhmr/hello-world-javascript-wasmer-app/blob/main/LICENSE
[winterjs]: https://github.com/wasmerio/winterjs
<!-- prettier-ignore-end -->
