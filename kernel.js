const term = document.getElementById("terminal");
const input = document.getElementById("input");

function print(text){
  term.innerHTML += "\n" + text;
}

input.addEventListener("keydown", function(e){

 if(e.key === "Enter"){

   const cmd = input.value;

   print("> " + cmd);

   runCommand(cmd);

   input.value = "";

 }

});

function runCommand(cmd){

 if(cmd === "help"){
   print("Commands: help echo clear");
 }

 else if(cmd.startsWith("echo ")){
   print(cmd.slice(5));
 }

 else if(cmd === "clear"){
   term.innerHTML = "";
 }

 else{
   print("command not found");
 }

}
