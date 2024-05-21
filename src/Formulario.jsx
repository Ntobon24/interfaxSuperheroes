import './Formulario.css';
import { useForm } from "react-hook-form";


function Formulario() {
    const { register , handleSubmit , formState: {errors}} = useForm()

    const onSubmit = handleSubmit((data)=> {
        console.log(data)})

    console.log("formulario");
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>
          <h1>Name:</h1>
          <input className= "controls" type="text" name="name" 
          {...register("name" , {
              required: {
                  value:true,
                  message: "Name es requerido"},
              minLength:{
                  value:2,
                  message: "Name  debe ser mayor a 2 caracteres"},
              maxLength: {
                  value:20,
                  message: "Name no debe ser mayor a 20 caracteres"},
          })}/>
          {errors.name && <p className='errores'>{errors.name.message}</p>}



        </label>

        <label>
          <h1 className='text'>Nickname:</h1>
          <input  className= "controls"type="text" name="nickname"
          {...register("nickname" , {
              required: {
                  value:true,
                  message: "Nickname es requerido"},
              minLength:{
                  value:2,
                  message: "Nickname  debe ser mayor a 2 caracteres"},
              maxLength: {
                  value:20,
                  message: "Nickname no debe ser mayor a 20 caracteres"},
          })}/>
          {errors.nickname && <p className='errores'>{errors.nickname.message}</p>}


        </label>
        <label>
          <h1>Age:</h1>
          <input className= "controls" type="number" name="age" 
          {...register("age",
              {required: true,
                  pattern: {
                      value: /^[0-9]+$/,
                      message: "Por favor, introduce un número entero válido."
                    }
              }
          )}/>
          {errors.age && errors.age.type === "required" && <p className='errores'>Age es requerido</p>}

          {errors.age && <p className='errores'>{errors.age.message}</p>}

        </label>
        <label>
          <h1>Color Suit:</h1>
          <input className= "controls" type="text" name="colorSuit" 
          {...register("colorSuit",
              {required: {
                  value:true,
                  message: "ColorSuit es requerido"},
              minLength:{
                  value:2,
                  message: "ColorSuit  debe ser mayor a 2 caracteres"},
              maxLength: {
                  value:20,
                  message: "ColorSuit no debe ser mayor a 20 caracteres"},
          })}/>
          {errors.colorSuit && <p className='errores'>{errors.colorSuit.message}</p>}

        </label>
        
        <label>
          <h1>Description:</h1>
          <input className= "controls"  type="text" name="description" 
          {...register("description",
              {required: {
                  value:true,
                  message: "Description es requerido"},
              minLength:{
                  value:2,
                  message: "Description  debe ser mayor a 2 caracteres"},
              maxLength: {
                  value:20,
                  message: "Description no debe ser mayor a 20 caracteres"},
          })}/>
          {errors.description && <p className='errores'>{errors.description.message}</p>}

        </label>
        

        <label htmlFor='file'>
          <h1>Foto del superheroe:</h1>
          <input  type='file'  
          {...register("file")}/>
        </label>

        <input className= "boton" type="submit" value="Submit" />
      </form>
    </>

  );
}

export default Formulario;
