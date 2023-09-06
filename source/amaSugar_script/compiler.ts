async function readComponent(str_html, target){

    const target_replaced=target.replace(/{| |}/g, "")
    const path=`source/${target_replaced}.html`
    
    let inserted_html=""
    try{
        await Deno.readTextFile(path).then(insert=>{
            inserted_html=(str_html.replace(target, insert))
        })
    }catch(e){
        inserted_html=(str_html.replace(target, "Module not found"))
    }

    return inserted_html
}

let binded=[]
async function addBind(str_html, target){
    const target_replaced=target.split("[")[0].replace(/{|\:| |}/g, "")
    const target_replaced_array=target.replace(/{|\:| |}/g, "")
    
    let appepend_script=""
    if (!(binded.includes(target_replaced))){
        console.log(binded)
    appepend_script=`
    <script>
        let BIND_${target_replaced}=BIND.${target_replaced}

        Object.defineProperty(BIND, "${target_replaced}", {
            get: ()=>BIND_${target_replaced},
            set: newvalue=>{
                BIND_${target_replaced}=newvalue
                console.log("CHANGED", newvalue)
                Array.from(document.getElementsByTagName("${target_replaced_array}")).forEach((tag)=>{
                    console.log(tag)
                    tag.innerHTML=BIND_${target_replaced_array}
                })
            }
        })
        BIND.${target_replaced}=BIND_${target_replaced}
    </script>`
    }
    let replaced_html=str_html.replaceAll(target, `<${target_replaced_array}>binded</${target_replaced_array}>`)
    
    return `${replaced_html}${appepend_script}`
}


export async function compile(str_html){
    console.log("compiling...")
    let binded=[]

    if(str_html.match(/.*\{.*\}.*/)){
        const targets=(str_html.match(/\{.*\}/g))

        for (const target of targets) {
            if (target.match(/\{ *\:.*\}/)){
                const target_rep=target.replace(/{|:| |}/g, "")

                console.log(binded)
                if (!(binded.includes(target_rep))){
                    console.log("バインド処理", target)

                    binded.push(target_rep)
                    console.log(binded)
                    str_html=await addBind(str_html, target)
                }
            }
            else{
                console.log("コンポーネント処理", target)
                str_html=await readComponent(str_html, target)
            }
        }
    }

    console.log(str_html)
    return str_html
}
