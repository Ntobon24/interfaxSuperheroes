import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import FetchPost from './FetchPost';
import './Formulario.css';

function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { sendRequest, isLoading, error } = FetchPost('https://3.145.188.163:8090/api/v1');
  const [powers, setPowers] = useState([]);
  const [, setImageFile] = useState(null);
  const { register: registerPower, handleSubmit: handleSubmitPower, formState: { errors: powerErrors }, reset: resetPower } = useForm();

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const onSubmit = handleSubmit(async (data) => {
    const dataWithPowers = {
      ...data,
      age: Number(data.age),
      powers
    };

    if (dataWithPowers.photoSuper && dataWithPowers.photoSuper.length === "") {
      dataWithPowers.photoSuper = null;
    }

    console.log("Datos enviados:", dataWithPowers);

    const responseData = await sendRequest(dataWithPowers);
    console.log(responseData);
  });

  const onAddPower = handleSubmitPower((powerData) => {
    const newPower = { ...powerData, id: new Date().getTime() }; // Genera un ID único basado en la fecha actual
    setPowers([...powers, newPower]);
    console.log("Poder agregado:", newPower);
    resetPower();
  });

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <form className="formulario-principal" onSubmit={onSubmit}>
        <label>
          <h1>Name:</h1>
          <input className="controls" type="text" name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Name es requerido"
              },
              minLength: {
                value: 2,
                message: "Name debe ser mayor a 2 caracteres"
              },
              maxLength: {
                value: 20,
                message: "Name no debe ser mayor a 20 caracteres"
              },
            })} />
          {errors.name && <p className='errores'>{errors.name.message}</p>}
        </label>

        <label>
          <h1 className='text'>Nickname:</h1>
          <input className="controls" type="text" name="nickname"
            {...register("nickName", {
              required: {
                value: true,
                message: "Nickname es requerido"
              },
              minLength: {
                value: 2,
                message: "Nickname debe ser mayor a 2 caracteres"
              },
              maxLength: {
                value: 20,
                message: "Nickname no debe ser mayor a 20 caracteres"
              },
            })} />
          {errors.nickname && <p className='errores'>{errors.nickname.message}</p>}
        </label>

        <label>
          <h1>Age:</h1>
          <input className="controls" type="number" name="age"
            {...register("age", {
              required: true,
              pattern: {
                value: /^[0-9]+$/,
                message: "Por favor, introduce un número entero válido."
              }
            })} />
          {errors.age && errors.age.type === "required" && <p className='errores'>Age es requerido</p>}
          {errors.age && <p className='errores'>{errors.age.message}</p>}
        </label>

        <label>
          <h1>Color Suit:</h1>
          <input className="controls" type="text" name="suitColor"
            {...register("suitColor", {
              required: {
                value: true,
                message: "ColorSuit es requerido"
              },
              minLength: {
                value: 2,
                message: "ColorSuit debe ser mayor a 2 caracteres"
              },
              maxLength: {
                value: 20,
                message: "ColorSuit no debe ser mayor a 20 caracteres"
              },
            })} />
          {errors.suitColor && <p className='errores'>{errors.suitColor.message}</p>}
        </label>

        <label>
          <h1>Description:</h1>
          <input className="controls" type="text" name="description"
            {...register("description", {
              required: {
                value: true,
                message: "Description es requerido"
              },
              minLength: {
                value: 2,
                message: "Description debe ser mayor a 2 caracteres"
              },
              maxLength: {
                value: 20,
                message: "Description no debe ser mayor a 20 caracteres"
              },
            })} />
          {errors.description && <p className='errores'>{errors.description.message}</p>}
        </label>

        

        <input className="boton" type="submit" value="Submit" />
      </form>

      <form onSubmit={onAddPower}>
        <label>
          <h1>Power Name:</h1>
          <input className="controls" type="text" name="name"
            {...registerPower("name", {
              required: {
                value: true,
                message: "Power name es requerido"
              },
              minLength: {
                value: 2,
                message: "Power name debe ser mayor a 2 caracteres"
              },
              maxLength: {
                value: 20,
                message: "Power name no debe ser mayor a 20 caracteres"
              },
            })} />
          {powerErrors.name && <p className='errores'>{powerErrors.name.message}</p>}
        </label>

        <label>
          <h1>Power Description:</h1>
          <input className="controls" type="text" name="description"
            {...registerPower("description", {
              required: {
                value: true,
                message: "Power description es requerido"
              },
              minLength: {
                value: 2,
                message: "Power description debe ser mayor a 2 caracteres"
              },
              maxLength: {
                value: 50,
                message: "Power description no debe ser mayor a 50 caracteres"
              },
            })} />
          {powerErrors.description && <p className='errores'>{powerErrors.description.message}</p>}
        </label>

        <input className="boton" type="submit" value="Add Power" />
      </form>

      <ul>
        {powers.map((power) => (
          <li key={power.id}>{power.name}: {power.description}</li>
        ))}
      </ul>
    </>
  );
}

export default Formulario;
