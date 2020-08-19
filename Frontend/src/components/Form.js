import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from '../config/axios'
import Error from './Error'
const Form = () => {

  const [error, setError] = useState(false)
  const [form, setForm] = useState({
    nombre:'',
    propietario:'',
    fecha:'',
    telefono:'',
    sintomas:'',
    hora:''
  })
    const {nombre,propietario,fecha,hora,sintomas,telefono} =  form

  //set formState when the inputs change
  const handleChange = (e)=>{
    setForm({
       ...form,
      [e.target.name]: e.target.value
    })
  }

  //when form submit
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(nombre.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' || telefono.trim() === ''){
      
      setError(true)
      return
    }
    setError(false)
    //send form state with axios
   const response = await axios.post('/pacientes',form)
     console.log(response)
     setForm({
    nombre:'',
    propietario:'',
    fecha:'',
    telefono:'',
    sintomas:'',
    hora:''
  })
   
  }
  return (
    
    <Fragment>
      <h1 className="my-5">Crea una Cita</h1>
      <div className="container  pb-5">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <Link
              to="/"
              className="btn btn-success text-uppercase font-weight-bold px-5 py-2 mb-5"
            >
              Volver
            </Link>
          </div>
          <div className="col-md-8 mx-auto">
            <form className="bg-white p-5 bordered" onSubmit={(e)=>handleSubmit(e)}>
            {error && <Error/>}
              <div className="form-group">
                <label htmlFor="nombre">Nombre de mascota</label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre de mascosta"
                  onChange={(e)=>handleChange(e)}
                  value={nombre}
                />
              </div>
              <div className="form-group">
                <label htmlFor="propietario">Nombre de propietario</label>
                <input
                  className="form-control"
                  type="text"
                  name="propietario"
                  id="propietario"
                  placeholder="Nombre de propietario"
                  onChange={(e)=>handleChange(e)}
                  value={propietario}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fecha">Fecha</label>
                <input
                  className="form-control"
                  type="date"
                  name="fecha"
                  onChange={(e)=>handleChange(e)}
                  id="fecha"
                  value={fecha}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  className="form-control"
                  type="tel"
                  name="telefono"
                  id="phone"
                  placeholder="Teléfono"
                  onChange={(e)=>handleChange(e)}
                  value={telefono}
                />
              </div>
              <div className="form-group">
                <label htmlFor="time">Hora</label>
                <input
                  className="form-control"
                  type="time"
                  name="hora"
                  id="time"
                  onChange={(e)=>handleChange(e)}
                  value={hora}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sintomas">Síntomas</label>
                <textarea
                  name="sintomas"
                  id="sintomas"
                  rows="6"
                  className="form-control"
                  placeholder="Describe los sintomas"
                  onChange={(e)=>handleChange(e)}
                  value={sintomas}
                ></textarea>
              </div>
              <button className="btn btn-info btn-block font-weight-bold text-uppercase">Crear Cita</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
