
function main () : void {
     // CAS01
    let myVar; // ici myVar aura le type any ,on pas specifé de type a la declaration
    myVar = 132;
    myVar = "txt" // en peut donc lui affecter n'importe quelle type sans error

    // CAS02
    let age =32
    age = 33
    //  age= "xtxtx" // en ne peut pas affecter un autre type que du numbre ,specifier implicitement a la declaration !! 
    let sex: string;

     // les structure de donnes 

     let data: (number | string) [] = [] // declar un array qui peut contenir soit un number soit un string .. 


}