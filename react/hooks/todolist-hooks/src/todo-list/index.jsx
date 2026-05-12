import { useState } from "react";

export default function TodoList() {
    const[resultado, setResultado] = useState('');
    const[altura, setAltura] = useState('');
    const[peso, setPeso] = useState('');

    function calcularImc() {
        const imc = peso / (altura * altura);

        if(peso === null || altura === null) {
            alert("Os dados são obrigatórios");
            return;
        }

        if(imc < 18.5) {
            return setResultado('baixo peso');
        }
        if(imc >=18.5 && imc <=24.9) {
            return setResultado('peso adequado');
        }
        if(imc >= 25 && imc <= 29.9) {
            return setResultado('sobrepeso');
        }
        else {
            return setResultado('obesidade');
        }

    }

    return(
        <div>
            <h1>Calculadora IMC - HOOKS</h1>
            <input type="text" 
                placeholder="peso"
                onChange={(e)=> setPeso(e.target.value)}
            />
            <input type="text" 
                placeholder="altura"
                onChange={(e)=> setAltura(e.target.value)}
            />

            <button onClick={calcularImc} >Calcular IMC</button>
            <p>{resultado}</p>
        </div>
    )
}