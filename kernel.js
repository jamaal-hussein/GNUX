const term = document.getElementById("terminal")
const input = document.getElementById("input")

let user = "user"
let cwd = "/"

const fs = {
"/": {
"type":"dir",
"home":{"type":"dir"},
"bin":{"type":"dir"},
"etc":{"type":"dir"},
"readme.txt":{
"type":"file",
"content":"Welcome to GNUX."
},
"cheese.txt":{
"type":"file",
"content":"Cheese is essential for system stability."
}
}
}

function print(t){
term.innerHTML += "\n" + t
}

function listDir(){
const dir = fs["/"]
return Object.keys(dir).filter(x=>x!=="type").join(" ")
}

function runCommand(cmd){

cmd = cmd.trim()
if(cmd==="") return

if(cmd==="help"){
print("Commands:")
print("help echo clear date whoami uname version neofetch fastfetch")
print("ls cd pwd cat nano pkg sudo doas desktop")
}

else if(cmd.startsWith("echo ")){
print(cmd.slice(5))
}

else if(cmd==="clear"){
term.innerHTML=""
}

else if(cmd==="date"){
print(new Date().toString())
}

else if(cmd==="whoami"){
print(user)
}

else if(cmd==="uname"){
print("GNUX")
}

else if(cmd==="version"){
print("GNUX 0.2")
}

else if(cmd==="ls"){
print(listDir())
}

else if(cmd==="pwd"){
print(cwd)
}

else if(cmd.startsWith("cd")){
print("filesystem navigation coming soon")
}

else if(cmd.startsWith("cat ")){
const name = cmd.split(" ")[1]
const f = fs["/"][name]
if(f && f.type==="file"){
print(f.content)
}else{
print("file not found")
}
}

else if(cmd.startsWith("nano ")){

const name = cmd.split(" ")[1]

let text = prompt("Enter file content:")

fs["/"][name] = {
type:"file",
content:text
}

print(name+" saved.")
}

else if(cmd==="neofetch" || cmd==="fastfetch"){
print(`
       _____
      / ____|
  ___| |  __ _ __  _   ___  __
 / _ \\ | |_ | '_ \\| | | \\ \\/ /
|  __/ |__| | | | | |_| |>  <
 \\___|\\_____|_| |_|\\__,_/_/\\_\\

OS: GNUX
Kernel: gnux.js
Shell: gnux-sh
Host: Browser
Terminal: HTMLTTY
User: ${user}
Packages: 8
`)
}

else if(cmd.startsWith("pkg install")){
const name = cmd.split(" ")[2]
print("Package "+name+" not found in repository")
}

else if(cmd.startsWith("sudo ") || cmd.startsWith("doas ")){
runCommand(cmd.split(" ").slice(1).join(" "))
}

else if(cmd==="desktop"){
window.location.href="desktop.html"
}

else{
print("command not found")
}

}

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

const cmd=input.value

print("> "+cmd)

runCommand(cmd)

input.value=""

}

})

document.addEventListener("click",()=>input.focus())

input.focus()
