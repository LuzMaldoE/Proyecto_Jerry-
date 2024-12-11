import {useForm} from 'react-hook-form'

function PagRegistro(){
    const {register, handleSubmit} = useForm()
  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      <form 
        onSubmit={handleSubmit((values)=>{
            console.log(values)
        })}
        >
            <input type="text" {...register("nombre",{require:true})} 
            className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2'
            placeholder='Nombre'
            />
            <input type="email" {...register("email",{require:true})} 
            className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2'

            placeholder='Email'
            />
            <input type="pasword" {...register("password",{require:true})} 
            className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2'
            placeholder='Password'
        />
        <button type="submit" className='text-yellow-300 rounded-md bg-red-600 my-2'>
          Registrar
        </button>
      </form>
    </div>
  )
}

export default PagRegistro
