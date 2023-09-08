async function readComponent(str_html, target){

    const target_reps=target.replace(/{| |}/g, "").split(":")
    const target_replaced=target_reps[0]
    const path=`source/${target_replaced}.html`
    
    let inserted_html=""
    try{
        let insert=await Deno.readTextFile(path.replaceAll("___", "/"))
        
        insert=await compile(insert, target_replaced)

        if (1<target_reps.length){
            let i=0
            for(let t of target_reps.slice(1)){
                insert=insert.replaceAll(`$$in_${i}`,`BIND.${t.replace(":","")}` )
                insert=insert.replaceAll(`$in_${i}`,t.replace(":","") )
                i+=1
            }
        }
        
        inserted_html=(str_html.replace(target.replaceAll("___", "/"), insert))
        
    }catch(e){
        inserted_html=(str_html.replace(target, "Module not found"))
    }

    return inserted_html
}

let binded=[]
async function addBind(str_html, target, cname){
    if (target.includes("$in_")) return str_html

    const target_replaced=target.split("[")[0].replace(/{|\:| |}/g, "")
    const target_replaced_array=target.replace(/{|\:| |}/g, "")
    
    let appepend_script=""
    if (!(binded.includes(target_replaced))){
    
        appepend_script=`
        <script>
            let BIND_${target_replaced}=BIND.${target_replaced}

            Object.defineProperty(BIND, "${target_replaced}", {
                get: ()=>BIND_${target_replaced},
                set: newvalue=>{
                    BIND_${target_replaced}=newvalue
                    console.log("CHANGED", newvalue)
                    Array.from(document.getElementsByTagName("${cname}${target_replaced_array}")).forEach((tag)=>{
                        console.log(tag)
                        tag.innerHTML=BIND_${target_replaced_array}
                    })
                }
            })
        </script>
        <script>
            BIND.${target_replaced}=BIND_${target_replaced}
        </script>`
    }
    let replaced_html=str_html.replaceAll(target, `<${cname}${target_replaced_array}>binded</${cname}${target_replaced_array}>`)
    
    return `${replaced_html}${appepend_script}`
}


export async function compile(str_html, cname){
    console.log("compiling...", cname)
    let binded=[]

    if(str_html.match(/.*\{.*\}.*/)){
        let targets=(str_html.match(/[^\$]\{.*\}/g)).map((t)=>{
            const s_t=t.split("{")
            return `{${s_t[1]}`
        })

        for (const target of targets) {
            if (target.match(/\{ *\:.*\}/)){
                const target_rep=target.replace(/{|:| |}/g, "")

                if (!(binded.includes(target_rep))){
                    console.log("binding...", target)

                    binded.push(target_rep)
                    str_html=await addBind(str_html, target.replaceAll("/", "___"), cname)
                }
            }
            else{
                console.log("inserting component...", target)
                str_html=await readComponent(str_html, target.replaceAll("/", "___"))
            }
        }
    }

    str_html= str_html.replaceAll("BIND",`BIND${cname}`)
    return str_html
}
