

const codigo = ` pragma solidity ^0.8.10;

contract math{

    uint public resultado;
    uint num1;
    uint num2;

    constructor() {
    num1 = 2;
    num2 = 3; 
    }

    function multiplicar() public {
        resultado = num1 * num2;
    }  
    
    
  }`;

module.exports = {
 codigo
}