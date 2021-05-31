const Contador = () =>{
   const [contador, setContador]= React.useState(0);
   
    const aumentar = ()=>{
        return setContador(contador + 1);
    }

    const disminuir = ()=>{
        if(contador>0){
            
            return setContador(contador - 1);
        }else console.log('El número es menor a 0');
    }

    return (
        <div>
            <h1 className={contador < 0 ? "rojo" : "verde"}>Contador: {contador}</h1>
             <hr/>
             <button onClick= {()=> aumentar()}>Aumentar</button>
             <button onClick = {()=>disminuir()}>Disminuir</button>
        </div>
    );
}