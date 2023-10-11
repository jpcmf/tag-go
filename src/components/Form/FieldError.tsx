import { useFormContext } from 'react-hook-form';

interface FieldErrorProps {
  name?: string;
}

export function FieldError({ name }: FieldErrorProps) {
  console.log(name);

  const {
    formState: { errors },
  } = useFormContext<{ [x: string]: string }>();

  if (!name) return null;

  const error = errors[name];

  if (!error) return null;

  return (
    <span className="mt-2 block animate-slideInFromLeft text-xs text-tag-error-base">
      {error.message}
    </span>
  );
}
