import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  age: z
    .number({ invalid_type_error: 'Idade é obrigatória' })
    .min(1, 'Idade mínima é 1')
    .max(120, 'Idade máxima é 120'),
});

function Form({ onAddItem }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    onAddItem(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome</label>
        <input
          type="text"
          {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Idade</label>
        <input
          type="number"
          {...register('age', { valueAsNumber: true })}
        />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button
        type="submit"
      >
        Cadastrar
      </button>
    </form>
  );
}

export default Form;