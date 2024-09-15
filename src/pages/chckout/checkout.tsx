import { useForm } from 'react-hook-form';
import'./checkout.styles.scss';

const Checkout = () => {
    const {register, handleSubmit} = useForm();


const onSubmit = async (data: any) => {
    console.log(data)
}

    return <div className='checkout'>
       <h1>finaliza la compra</h1>
       <form className='checkout-form' onSubmit={handleSubmit(onSubmit)}>
        <h2>Datos de envio </h2>
        <label>Nombre completo</label>
        <input type="text" {...register("name")}/>
        <label>Calle</label>
        <input type="text" {...register("street")}/>
        <label>Codigo postal</label>
        <input type="text" {...register("pc")}/>
        <label>Colonia</label>
        <input type="text" {...register("colony")}/>
        <label>Municipio</label>
        <input type="text" {...register("town")}/>
        <label>Estado</label>
        <input type="text" {...register("state")}/>
        <label>Numero de telefono</label>
        <input type="number" {...register("photoneNumber")}/>
        <button type='submit'>comprar</button>
        
       </form>
    </div>
}
export { Checkout };
