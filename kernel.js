const term = document.getElementById("terminal")
const input = document.getElementById("input")

let user = "user"

function print(text){
  term.innerHTML += "\n" + text
}

function runCommand(cmd){

cmd = cmd.trim()

if(cmd === "") return

if(cmd === "help"){
print("Commands:")
print("help echo clear date whoami uname version neofetch fastfetch ls cd")
}

else if(cmd.startsWith("echo ")){
print(cmd.slice(5))
}

else if(cmd === "clear"){
term.innerHTML = ""
}

else if(cmd === "date"){
print(new Date().toString())
}

else if(cmd === "whoami"){
print(user)
}

else if(cmd === "uname"){
print("GNUX")
}

else if(cmd === "version"){
print("GNUX 0.1")
}

else if(cmd === "ls"){
print("home bin etc readme.txt cheese.txt")
}

else if(cmd === "cd"){
print("filesystem not implemented yet")
}

else if(cmd === "neofetch" || cmd === "fastfetch"){

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

else{
print("command not found")
}

}

input.addEventListener("keydown", function(e){

if(e.key === "Enter"){

const cmd = input.value

print("> " + cmd)

runCommand(cmd)

input.value = ""

}

})

document.addEventListener("click", () => input.focus())

input.focus()
