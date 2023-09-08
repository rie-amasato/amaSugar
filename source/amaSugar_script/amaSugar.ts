import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
import { ensureFile } from "https://deno.land/std@0.201.0/fs/mod.ts"
import { compile } from "./compiler.ts"

const server=serve({port: 8888})

let cnt=0

const ERROR={
    "404": "NotFound"
}
const nocompile=[
    "CSS",
    "css",
    "JS",
    "js",
    "TS",
    "ts"
]
for await (const req of server){
    console.log("Request: ", req.url)


    const str_path=req.url.split("?")[0]

    const splitted_str_path=str_path.split(".")
    const str_extention=splitted_str_path[splitted_str_path.length-1]

    let html=""
    if (!(nocompile.includes(str_extention))){
        let path="source/index.html"
        if (str_path!=="/")path=`source${str_path}.html`
        
        try{
            html=(await Deno.readTextFile(path))
        }catch(e){
            if (e.name=="NotFound")html=(await Deno.readTextFile("source/404.html"))
            else html=(await Deno.readTextFile("source/503.html"))
        }

        const addcommonCSS='<head><link rel="stylesheet" href="amaSugar_script/CSS/amasugar_common.css"></head>'
        
        html=`${addcommonCSS}${await compile(html, "", {"inserted": [], "binded": []})}`

        console.log("compile done")

        ensureFile(`./source/compiled/${path}.as.html`)
        Deno.writeTextFile(`./source/compiled/${path}.as.html`, html)
    }
    else{
        console.log("no compile", str_path)

        try{
            html=(await Deno.readTextFile(`./source/${str_path}`))
        }catch(e){
            console.log(e)
        }
}

    req.respond({body: html});
}
