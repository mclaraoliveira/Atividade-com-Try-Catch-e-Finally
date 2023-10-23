try {
    const numero = parseFloat(prompt("Digite um número para calcular a raiz quadrada:"));
  
    if (isNaN(numero) || numero < 0) {
      throw new Error("Digite um número positivo válido."); 
    }
  
    const raizQuadrada = Math.sqrt(numero);
  
    if (isNaN(raizQuadrada)) {
      throw new Error("Não é possível calcular a raiz quadrada desse número.");
    }
  
    console.log(`A raiz quadrada de ${numero} é: ${raizQuadrada}`);
  } catch (error) {
    console.error("Ocorreu um erro:", error.message);
  } finally {
    console.log("Fim da operação.");
  }