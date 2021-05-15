import { ChangeEvent, useState } from 'react';

type UserForm = {
  readonly email: string;
  readonly name: string;
};

const Form = () => {
  const [form, setForm] = useState<UserForm>({ email: '', name: '' });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [name]: value });
  };
  console.log(form);

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
          value={form.email}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name:
        </label>
        <input
          autoComplete='off'
          type='text'
          className='form-control'
          name='name'
          id='name'
          onChange={handleChange}
          value={form.name}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

export default Form;
