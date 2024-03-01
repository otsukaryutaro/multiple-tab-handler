import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { formInputState } from '../../../atoms/form-input';
import { useRouter } from 'next/router';
import { useSingleTabCreateEasy } from '../../../hooks/use-single-tab-create-easy';
import { useId } from 'react';

export type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function BarBarCreate() {
  useSingleTabCreateEasy();
  const router = useRouter();
  const setFormInputState = useSetRecoilState(formInputState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormInputState(data);
    router.push('/barbar/create/confirm');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>BarBar create page!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('example', { required: true })} />
        <input {...register('exampleRequired', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <Link href="/barbar">BarBar page</Link>
    </div>
  );
}
