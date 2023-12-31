const Paciente = ({paciente, setPaciente, eliminarPaciente }) => {

  const{nombre, propietario, email, fecha, sintomas, id } = paciente 

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }
  
  return (
    <div className="m-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
 
        <p className="font-bold text-gray-700 uppercase mb-3">Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
        </p>
        
        <p className="font-bold text-gray-700 uppercase mb-3">Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
        </p>
 
        <p className="font-bold text-gray-700 uppercase mb-3">Email: {""}
        <span className="font-normal normal-case">{email}</span>
        </p>
 
        <p className="font-bold text-gray-700 uppercase mb-3">Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
        </p>
 
        <p className="font-bold text-gray-700 uppercase mb-3">Síntomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
        </p>
 

        <div className="flex justify-evenly mt-10">
          <button type="button" className=" py-2 px-4 bg-indigo-600 hover:bg-indigo-700 font-bold text-white uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
          >Editar</button>

          <button type="button" className="py-2 px-3 bg-red-600 hover:bg-red-700 font-bold text-white uppercase rounded-lg"
          onClick={handleEliminar}
          >Eliminar</button>
        </div>

    </div>
  )
}

export default Paciente

