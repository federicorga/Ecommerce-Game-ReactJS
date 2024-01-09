import {useState} from 'react'; //permite guardar informacion a lo largo del renderizado usar los estados
//los estados se utilizan a travez de hooks o ganchos que permiten mantener la funcion activa
//un estado es un objeto que almacena informacion importante para nuestro componente
//useState es un hook que me permite crear un estado es una funcion.
//me retorna un array con 2 elementos. el primer elemento es su estado actual y el segundo una funcion que me permite modificar el valor del estado


//Me muestra cuantos productos quiere comprar el usuario
const ItemCount = ({inicial, stock, onAdd}) => {
    const [contador, setContador] = useState(inicial); //esto es desestructurar el array por eso se ve asi extraigo de useState el estado actual y la funcion que me permite setear o modificar el valor del estado
//para trabajarlo se desestructura y los nombres se los ponemos nosotros
    //le envio por parametro en el useState el valor inicial con el que quiero que arranque el contador

    //3) creamos dos funciones para incrementar y decrementar el contador
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    const agregarAlCarrito= ()=>{
        onAdd(contador)}
 //para meter las funciones en los botones hago un evento OnClick y los eventos se hacen en la etiqueta
    return (
        <div> 
            <button className='btn btn-dark btn-increment' onClick={() => sumar()}>+</button> 
                {contador} 
            <button className='btn btn-dark btn-increment' onClick={() => restar()}>-</button>
            <button className='btn btn-light' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
}

//si pongo los parentes en la funcion suma y resta se ejecutaran al momento de renderizar el componente y solo queremos que se ejecute cuando el 
//visitante haga clic en los botones

export default ItemCount;
