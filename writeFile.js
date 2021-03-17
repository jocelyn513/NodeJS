const fs = require('fs')
const yargs = require('yargs')

let filename = yargs.argv.filename
let fileArray = []

console.log(filename)

fs.readFile('filename.txt', function(err,data){
    if(err) {
        console.error(err)
    }
    else{
        fileArray = JSON.parse(data)

        if(fileArray.includes(filename))
            console.log("Filename already exists, please enter a new filename.")

        else{
            fileArray.push(filename)
            console.log(fileArray)
            fs.writeFile('filename.txt', JSON.stringify(fileArray), (err)=>{
                if(err) console.error(err)
            })

            fs.writeFile(filename, "You are awesome!", (err)=>{
                if(err) console.error(err)
            })  
        }
    }
})

// fs.readFile('filename.txt', function(err,data){
//     if(err)  console.error(err)
//     else{
        
//         fileArray = JSON.parse(data)

//         if(fileArray.includes(filename)){
//             console.log("filename already exists\n " + fileArray) }
        
//         else{
//             fileArray.push(filename)
            
//             console.log(fileArray)

//             fs.writeFile('filename.txt', JSON.stringify(fileArray), (err)=>{
//                  console.error(err)
//             })

//             //create a new file
//             fs.writeFile(filename, "You are awesome", (err)=>{
//             console.error(err)
//             })
//         }
//     }
// })