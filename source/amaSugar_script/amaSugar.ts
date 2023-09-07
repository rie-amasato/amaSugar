import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import { compile } from "./compiler.ts"

const server=serve({port: 8888})

let cnt=0

const ERROR={
    "404": "NotFound"
}
for await (const req of server){
    console.log("Request: ", req.url)


    const str_path=req.url.split("?")[0]

    let path="source/index.html"
    if (str_path!=="/")path=`source${str_path}.html`
    
    let html=""
    try{
        html=(await Deno.readTextFile(path))
    }catch(e){
        if (e.name=="NotFound")html=(await Deno.readTextFile("source/404.html"))
        else html=(await Deno.readTextFile("source/503.html"))
    }

    html=await compile(html, "")
    console.log("compile done")

    Deno.writeTextFile(`./source/compiled/${path}.as.html`, html)
    req.respond({body: html});
}
