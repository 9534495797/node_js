// function examplefunction(){
//     if(true){
//         var functionscopedvar="i am function-scoped.";
//     }
//     console.log(functionscopedvar);//i am function scoped
// }
// examplefunction();
// console.log(functionscopedvar);//error functionscopedvar is not defined
//let variable is only blocked scope while var variable is function level scoped


//it will give full error beacuse let make a local variable
// function examplefunction(){
//     if(true){
//         let functionscopedvar="i am block-scoped.";
//         console.log(functionscopedvar);//i am block scoped
//     }
    
// }
// examplefunction();
// console.log(functionscopedvar);//error blockscopedvar is not defined


//variiable declared with const keyword behave same like let keyword variable if it is declared inside the block\
// variable which is declared with var can redeclare in the program
// program for all type of  ariables

function examplefunction(){
    if(true){

    
    var functionscopedvar ="i am function scoped.";
    let blockscopedlet ="i am block-scoped.";
    const blockscopedconst="i am constant and block scoped.";

}
console.log(functionscopedvar);// i am function scoped
console.log(blockscopedlet);//error
console.log(blockscopedconst);//error
}
examplefunction();
