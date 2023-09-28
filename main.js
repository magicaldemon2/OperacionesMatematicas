function sumarNumeros() {
    var num1 = prompt("Ingrese el primer número:");
  
    var num2 = prompt("Ingrese el segundo número:");

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    var suma = num1 + num2;
  
    alert("La suma de los números es: " + suma);
  }
    sumarNumeros();



    function determinarParImpar() {
        var numero = parseInt(prompt("Ingresa un número:"));
      
        if (isNaN(numero)) {
          alert("No has ingresado un número válido. Por favor, intenta nuevamente.");
        } else {
          if (numero % 2 === 0) {
            alert("El número " + numero + " es par.");
          } else {
            alert("El número " + numero + " es impar.");
          }
        }
      }
      
      determinarParImpar();
      


      function calcularFactorial() {
        var numero = parseInt(prompt("Ingresa un número:"));
      
        if (isNaN(numero)) {
          alert("No has ingresado un número válido. Por favor, intenta nuevamente.");
        } else if (numero < 0) {
          alert("El número debe ser mayor o igual a cero.");
        } else {
          var factorial = 1;
      
          for (var i = 1; i <= numero; i++) {
            factorial *= i;
          }
      
          alert("El factorial de " + numero + " es " + factorial + ".");
        }
      }
      
      calcularFactorial();
      


      function generarSerieFibonacci() {
        var numero = parseInt(prompt("Ingresa un número:"));
      
        if (isNaN(numero)) {
          alert("No has ingresado un número válido. Por favor, intenta nuevamente.");
        } else if (numero < 1) {
          alert("El número debe ser mayor o igual a 1.");
        } else {
          var serie = [];
          serie[0] = 0;
          serie[1] = 1;
      
          for (var i = 2; i <= numero; i++) {
            serie[i] = serie[i - 1] + serie[i - 2];
          }
      
          alert("La serie de Fibonacci hasta " + numero + " es: " + serie.join(", "));
        }
      }
      
      generarSerieFibonacci();
      

      function calcularAreaTriangulo() {
        var base = parseFloat(prompt("Ingresa la longitud de la base del triángulo:"));
        var altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
      
        if (isNaN(base) || isNaN(altura)) {
          alert("No has ingresado valores válidos. Por favor, intenta nuevamente.");
        } else if (base <= 0 || altura <= 0) {
          alert("La base y la altura deben ser números positivos.");
        } else {
          var area = (base * altura) / 2;
          alert("El área del triángulo es: " + area);
        }
      }
      
      calcularAreaTriangulo();





      function contarDigitos() {
        var numero = parseInt(prompt("Ingresa un número:"));
      
        if (isNaN(numero)) {
          alert("No has ingresado un número válido. Por favor, intenta nuevamente.");
        } else {
          var cantidadDigitos = numero.toString().length;
          alert("El número " + numero + " tiene " + cantidadDigitos + " dígitos.");
        }
      }
      
      contarDigitos();

      function contarPalabras() {
        var texto = prompt("Ingresa una frase o texto:");
      
        if (texto.trim().length === 0) {
          alert("No has ingresado un texto válido. Por favor, intenta nuevamente.");
        } else {
          var palabras = texto.trim().split(" ");
          var cantidadPalabras = palabras.length;
          alert("El texto ingresado tiene " + cantidadPalabras + " palabra(s).");
        }
      }
      
      contarPalabras();

      function verificarDivisibilidad() {
        var numero = parseInt(prompt("Ingrese un número:"));
        var resultados = [];
      
        if (numero % 2 === 0) {
          resultados.push("Es divisible por 2");
        }
      
        if (numero % 3 === 0) {
          resultados.push("Es divisible por 3");
        }
      
        if (numero % 4 === 0) {
          resultados.push("Es divisible por 4");
        }
      
        if (numero % 5 === 0) {
          resultados.push("Es divisible por 5");
        }
      
        if (resultados.length === 0) {
          resultados.push("No es divisible por 2, 3, 4 ni 5");
        }
      
        alert(resultados.join("\n"));
      }
      






      function contarVocales() {
        var frase = prompt("Ingrese una frase:").toLowerCase();
        var contadorA = 0;
        var contadorE = 0;
        var contadorI = 0;
        var contadorO = 0;
        var contadorU = 0;
      
        for (var i = 0; i < frase.length; i++) {
          var letra = frase.charAt(i);
          if (letra === 'a') {
            contadorA++;
          } else if (letra === 'e') {
            contadorE++;
          } else if (letra === 'i') {
            contadorI++;
          } else if (letra === 'o') {
            contadorO++;
          } else if (letra === 'u') {
            contadorU++;
          }
        }
      
        var resultado = "A: " + contadorA + "\n" +
          "E: " + contadorE + "\n" +
          "I: " + contadorI + "\n" +
          "O: " + contadorO + "\n" +
          "U: " + contadorU;
      
        alert(resultado);
      }
      




      function ordenarNumeros() {
        var numeros = [];
        for (var i = 1; i <= 5; i++) {
            var numero = parseInt(prompt("Ingrese el número " + i));
            numeros.push(numero);
        }
    
        // Ordenar los números de mayor a menor
        numeros.sort(function(a, b) {
            return b - a;
        });
    
        // Mostrar los números ordenados
        var resultado = "Números ordenados: ";
        for (var i = 0; i < numeros.length; i++) {
            resultado += numeros[i] + " ";
        }
    
        alert(resultado);
    }
    





      













