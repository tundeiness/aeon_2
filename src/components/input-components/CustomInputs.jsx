/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { useField } from 'formik';

export const CustomInput = ({ labelName, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={labelName}>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
// export default CustomInput;
