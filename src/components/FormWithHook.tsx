import { useForm } from '../hooks/useForm';

interface FormData {
  nombre: string;
  email: string;
  edad: number;
}

const FormWithHook = () => {
  const { state, handleChange } = useForm<FormData>({
    nombre: '',
    email: '',
    edad: 0,
  });

  const { nombre, edad, email } = state;

  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email:
        </label>
        <input
          autoComplete='off'
          type='email'
          className='form-control'
          name='email'
          id='email'
          onChange={handleChange}
          value={email}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='nombre' className='form-label'>
          Name:
        </label>
        <input
          autoComplete='off'
          type='text'
          className='form-control'
          name='nombre'
          id='nombre'
          onChange={handleChange}
          value={nombre}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='edad' className='form-label'>
          Edad:
        </label>
        <input
          autoComplete='off'
          type='number'
          className='form-control'
          name='edad'
          id='edad'
          onChange={handleChange}
          value={edad}
        />
      </div>
      <pre>{JSON.stringify(state)}</pre>
    </form>
  );
};

export default FormWithHook;
