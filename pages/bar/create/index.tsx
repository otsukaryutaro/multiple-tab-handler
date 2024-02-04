import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { formInputState } from '../../../atoms/form-input';
import { useRouter } from 'next/router';
import { useSingleTab } from '../../../hooks/use-single-tab';

export type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function BarCreate() {
  useSingleTab();
  const router = useRouter();
  const setFormInputState = useSetRecoilState(formInputState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setFormInputState(data);
    router.push('/bar/create/confirm');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Bar create page!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('example', { required: true })} />
        <input {...register('exampleRequired', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
      <Link href="/bar">Bar page</Link>
    </div>
  );
}
