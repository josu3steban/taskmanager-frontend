import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';


export const ForgotPassword = () => {

  const newLoginSchema = yup.object().shape({
    email     : yup.string().email('Email no valido').required('El email es obligatorio')
  });

  const handleSubmit = ( values, resetForm ) => {
    console.log(values);
  };
  
  return (
    <div className="-mt-20">

      <header className='text-my-color-one mb-10 mt-10'>
        <h2 className='uppercase text-5xl text-my-color-three font-black leading-tight mb-3'>¿no recuerdas cuál es tu contraseña? 😬</h2>
        <p className='text-3xl font-normal'>Tranquilo, envíanos tu email y te enviaremos un correo para que la puedas cambiar 😋</p>
      </header>
      
      <div className="">
        <>
          <Formik
            initialValues = {{
              email   : ''
            }}

            validationSchema = { newLoginSchema }

            enableReinitialize = { true }

            onSubmit = {(values, {resetForm}) => {
              handleSubmit( values, resetForm );
            }}
          >

            {({ errors, touched }) => {
              return(
                <Form className='px-6 py-10 bg-my-color-two rounded-md'>
                  
                  <div className="">
                    <label className='block text-3xl font-bold text-my-color-four mb-2 uppercase' htmlFor="email">Email</label>
                    <Field
                      className='w-full text-xl p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-my-color-four transition-colors'
                      id='email'
                      name='email'
                      type='text'
                      placeholder='correo@correo.com'
                    />
                    {
                      (errors.email && touched.email )
                      ? <span className="uppercase block text-sm text-right font-semibold text-red-700">{ errors.email }</span>
                      : <span className="uppercase block text-sm text-transparent">null</span>
                    }
                  </div>

                  {/* 98c1d9 */}
                  <div className="">
                    <input
                      className='uppercase px-3 py-3 mt-5 w-full bg-[#3d5a80] text-my-color-one rounded-lg cursor-pointer font-black text-3xl hover:bg-[#98c1d9] hover:text-my-color-four transition-colors'
                      type="submit"
                      value="enviar"
                    />
                  </div>
                </Form>
              );
            }}

          </Formik>

          <nav className='text-gray-400 flex flex-col items-end mt-3'>
            <Link
              className='mb-3 uppercase hover:text-white w-fit'
              to='/login'
            >
              iniciar sesión
            </Link>
          </nav>
        </>
      </div>
    </div>
  )
}
