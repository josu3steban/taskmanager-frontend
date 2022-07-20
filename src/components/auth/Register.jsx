import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';


export const Register = () => {

  const newLoginSchema = yup.object().shape({
    name      : yup.string().required('El nombre es obligatorio'),
    username  : yup.string().required('El nombre de usuario es obligatorio'),
    password  : yup.string().required('Se requiere la contraseña').min(6, 'La contraseña debe tener al menos 6 caracteres'),
    email     : yup.string().email('Email no valido').required('El email es obligatorio')
  });

  const handleSubmit = ( values, resetForm ) => {
    console.log(values);
  };
  
  return (
    <div className="">

      <header className='text-my-color-one mb-20'>
        <h2 className='uppercase text-5xl text-my-color-one font-black leading-tight mb-3'>¡Registrate y empieza a crear y <span className='text-my-color-three'>administrar proyectos!</span></h2>
        <span className='uppercase text-6xl font-black'>¿qué esperas? 🤑🤑</span>
      </header>
      
      <Formik
        initialValues = {{
          name    : '',
          username: '',
          password: '',
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
            <>
              <Form className='px-6 py-10 bg-my-color-two rounded-md'>
                <div className="flex gap-8">
                  <div className="w-1/2">
                    <div className="">
                      <label className='block text-3xl font-bold text-my-color-four mb-2 uppercase' htmlFor="email">nombre de usuario</label>
                      <Field
                        className='w-full text-xl p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-my-color-four transition-colors'
                        id='username'
                        name='username'
                        type='text'
                        placeholder='nombredeusuario'
                      />
                      {
                        (errors.username && touched.username )
                        ? <span className="uppercase block text-sm text-right font-semibold text-red-700">{ errors.username }</span>
                        : <span className="uppercase block text-sm text-transparent">null</span>
                      }
                    </div>

                    <div className="">
                      <label className='block text-3xl font-bold text-my-color-four mb-2 uppercase' htmlFor="email">Nombre</label>
                      <Field
                        className='w-full text-xl p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-my-color-four transition-colors'
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Juanito Garcias'
                      />
                      {
                        (errors.name && touched.name )
                        ? <span className="uppercase block text-sm text-right font-semibold text-red-700">{ errors.name }</span>
                        : <span className="uppercase block text-sm text-transparent">null</span>
                      }
                    </div>
                  </div>
                  
                  <div className="w-1/2">
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

                    <div className="">
                      <label className='block text-3xl font-bold text-my-color-four mb-2 uppercase' htmlFor="email">Contraseña</label>
                      <Field
                        className='w-full text-xl p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-my-color-four transition-colors'
                        id='password'
                        name='password'
                        type='text'
                        placeholder='******'
                      />
                      {
                        (errors.password && touched.password )
                        ? <span className="uppercase block text-sm text-right font-semibold text-red-700">{ errors.password }</span>
                        : <span className="uppercase block text-sm text-transparent">null</span>
                      }
                    </div>
                  </div>
                </div>

                <div className="">
                  <input
                    className='uppercase px-3 py-3 mt-5 w-full bg-[#3d5a80] text-my-color-one rounded-lg cursor-pointer font-black text-3xl hover:bg-[#98c1d9] hover:text-my-color-four transition-colors'
                    type="submit"
                    value="registrarme"
                  />
                </div>
              </Form>
              
              <nav className='text-gray-400 flex flex-col items-end mt-3'>
                <Link
                  className='mb-3 hover:text-white w-fit'
                  to='/login'
                >
                  Ya tengo una cuenta
                </Link>
              </nav>
            </>
          );
        }}

      </Formik>
    </div>
  )
}
