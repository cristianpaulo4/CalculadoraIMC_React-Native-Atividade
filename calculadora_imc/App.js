import React, {useState} from 'react'
import styled from 'styled-components/native';



const Pagina = styled.SafeAreaView`
  flex:1;
  align-items: center;
  
`;

const Texto = styled.Text `
  margin-top: 10px;
  font-size: ${(props)=>props.size};    
  color: ${(props)=>props.color};   
  font-weight: bold;
`;

const Input = styled.TextInput `
  width: 90%;
  height: 50px;
  font-size: 20px;
  background-color: #eeeeee;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
`;



const Calcular = styled.Button `
  margin-top: 10px;
  
`;


const Size = styled.View `
  height:  ${(props)=>props.size};  
  width: 20%;
`;





const Top = styled.View`
  height: 250px;
  width: 100%;
  margin-top: 30px;  
  background-color: ${(props)=>props.cor};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;


const AreaResultado = styled.View `
  width: 100%;
  margin-top: 30px;
  background-color: #eeeeee;
  padding: 20px;
  justify-content: center;
  align-items: center;

`;


const Tituloresultado = styled.Text `
  font-size: 20px;
  font-weight: bold;  
`;

const TituloResultado = styled.Text `
  font-size: 16px;
  margin-bottom: 10px;
`;

//verde
// #54E013




export default () => {    
 const [pesoValue, peso] = useState('');
 const [alturaValue, altura] = useState('');
 const [mudarCor, cor] = useState('#BBBBBB');
 const [mudarTexto, texto] = useState('Calculadora IMC');
 const [mudarTextoIMC, textoIMC] = useState('0.0');


 const calcularIMC = () =>{
   //IMC = Peso / Altura x Altura
    let imc = pesoValue / (alturaValue*alturaValue);
  
    if(imc<=18.5){
      // magreza
      texto("MAGREZA");
      textoIMC(imc);
      cor("#FAFF18");

    }else if(imc>=18.5 && imc<=24.9){
      // normal
      texto("NORMAL");
      textoIMC(imc);
      cor("#54E013");
    }else if(imc>=25.0 && imc<=29.9){
      // sobrepeso 
      texto("SOBREPESO");
      textoIMC(imc);
      cor("#13A2E0");
    }else if(imc>=30.0 && imc<=39.9){
      // obesidade
      texto("OBESIDADE");
      textoIMC(imc);
      cor("#FF9900");

    }else if(imc>=40.0){
      // obesidade grave
      texto("OBESIDADE GRAVE");    
      textoIMC(imc);  
      cor("#DB1717");

    } 
    // limpando campos
    peso('');
    altura('');
 

   


 };
 



  return (
    <Pagina> 

      <Top cor= {mudarCor}>
        <Texto size = "30px" color = "#000000">{mudarTexto}</Texto>
        <Texto size = "15px" color = "#000000">SEU IMC: {parseFloat(mudarTextoIMC).toFixed(2)} </Texto>
      </Top>
      <Size size = "30px"></Size>
      <Texto size = "15px" color = "#8B8B8B"> Insira as informações</Texto>

      <Size size = "20px"></Size>
      <Input 
        placeholder = "Digite o seu Peso" 
        keyboardType = "numeric"
        value = {pesoValue}
        onChangeText = {(valor)=>peso(valor)}
      ></Input>
      <Size size = "25px"></Size>

      <Input 
        placeholder = "Digite sua Altura" 
        keyboardType = "numeric"
        value = {alturaValue}
        onChangeText = {(valor)=>altura(valor)}
      ></Input>

      <Size size = "20px"></Size>

      <Calcular title = "Calcular IMC" onPress={calcularIMC} ></Calcular>





      
      

      


    </Pagina>

  )


}