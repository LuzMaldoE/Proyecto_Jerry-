import {useForm} from 'react-hook-form'
import { tarRequest } from '../api/tar'

export function Tarea(){
    const {register, handleSubmit} = useForm()
    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
          <form 
            onSubmit={handleSubmit(async (values) => {
                const res = await tarRequest(values)
                console.log(values)
            })} >

                <input type="text" {...register("titulo",{require:true})} 
                className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2'
                placeholder='titulo'
                />
                <input type="text" {...register("descripcion",{require:true})} 
                className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2'
                placeholder='descripcion'
                />
            <button type="submit" className='text-yellow-300 rounded-md bg-red-600 my-2'>
              Guardar
            </button>
          </form>
        </div>
      )
}