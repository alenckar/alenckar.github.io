//1
function calcular() {
    let weight = document.getElementById("peso").value;
    let nome = document.querySelector("#nome").value;
    let height = document.getElementById("altura").value;
    let resultado = document.querySelector("#resultado");
  
    weight = parseFloat(weight.replace(",", ".")); 
    height = parseFloat(height.replace(",", "."));

    let imc = weight / (height * height);//1
    function calcular() {
        let weight = document.getElementById("peso").value;
        let nome = document.querySelector("#nome").value;
        let height = document.getElementById("altura").value;
        let resultado = document.querySelector("#resultado");
      
        weight = parseFloat(weight.replace(",", ".")); 
        height = parseFloat(height.replace(",", "."));
    
        let imc = weight / (height * height);
      
        console.log(
          "A altura é " + height + ", o peso é " + weight + " e o IMC é de " + imc
        );
      
        imc >= 40
          ? (resultado.innerHTML =
              "Seu IMC é de " + imc.toFixed(2) + ", configurando obesidade grau III")
          : imc < 40 && imc >= 35
          ? (resultado.innerHTML =
              "Seu IMC é de " + imc.toFixed(2) + ", configurando obesidade grau II")
          : imc < 35 && imc >= 30
          ? (resultado.innerHTML =
              "Seu IMC é de " + imc.toFixed(2) + ", configurando obesidade grau I")
          : imc < 30 && imc >= 25
          ? (resultado.innerHTML = 
            "Seu IMC é de " + imc.toFixed(2) + ", configurando sobrepeso")
          : imc < 25 && imc >= 18.5
          ? (resultado.innerHTML =
              "Seu IMC é de " +imc.toFixed(2) +", configurando adequado")
          : imc < 18.5 && imc >= 17
          ? (resultado.innerHTML =
              "Seu IMC é de " + imc.toFixed(2) + ", configurando magreza nível I")
          : imc < 17 && imc >= 16
          ? (resultado.innerHTML =
              "Seu IMC é de " + imc.toFixed(2) + ", configurando magreza nível II")
          : (resultado.innerHTML =
              "Seu IMC é de " + imc.toFixed(2) + ", configurando magreza nível III");
      }
  
    console.log(
      "A altura é " + height + ", o peso é " + weight + " e o IMC é de " + imc
    );
  
    imc >= 40
      ? (resultado.innerHTML =
          "Seu IMC é de " + imc.toFixed(2) + ", configurando obesidade grau III")
      : imc < 40 && imc >= 35
      ? (resultado.innerHTML =
          "Seu IMC é de " + imc.toFixed(2) + ", configurando obesidade grau II")
      : imc < 35 && imc >= 30
      ? (resultado.innerHTML =
          "Seu IMC é de " + imc.toFixed(2) + ", configurando obesidade grau I")
      : imc < 30 && imc >= 25
      ? (resultado.innerHTML = 
        "Seu IMC é de " + imc.toFixed(2) + ", configurando sobrepeso")
      : imc < 25 && imc >= 18.5
      ? (resultado.innerHTML =
          "Seu IMC é de " +imc.toFixed(2) +", configurando adequado")
      : imc < 18.5 && imc >= 17
      ? (resultado.innerHTML =
          "Seu IMC é de " + imc.toFixed(2) + ", configurando magreza nível I")
      : imc < 17 && imc >= 16
      ? (resultado.innerHTML =
          "Seu IMC é de " + imc.toFixed(2) + ", configurando magreza nível II")
      : (resultado.innerHTML =
          "Seu IMC é de " + imc.toFixed(2) + ", configurando magreza nível III");
  }