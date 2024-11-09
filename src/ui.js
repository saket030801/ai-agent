import ora from "ora";

export const showLoader = (text) =>{
    
    const spinner = ora({
        text,
        color:'cyan'
    }).start();

    return {
        stop: () =>spinner.stop(),
        succeed: () => spinner.succeed(text),
        fail: () => spinner.fail(text),
        update: () => (spinner.text = text)
    }
}

export const logMessage = (message) => {

    const roleColors = {
        user : '\x1b[36m', // cyan
        assistant: '\x1b32m' //green
    }

    const reset = '\x1b[0m'
    const role = message.role;
    const color = roleColors[role] || '\x1b[37m' //white

    if(role === 'tool')return

    if(role === 'user'){
        console.log(`\n${color}[USER]${reset}`)
        console.log(`${message.content}\n`)
        return
    }

    if(role === 'assistant'){

        if(message.tool_calls && Array.isArray(message.tool_calls)){
            message.tool_calls.forEach((tool) => {
                console.log(`\n${color}[ASSISTANT]${reset}`)
                console.log(`${tool.function.name}\n`)
            })
            return
        }

        if(message.content){
            console.log(`\n${color}[ASSISTANT]${reset}\n`)
            console.log(`\n${message.content}\n`)
        }
    }

}