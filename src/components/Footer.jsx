import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className='footer text-dark'>
            <div className='container'>
                <footer className='py-5'>
                    <div className='row'>
                        <div className='col-3'>
                            <h4> Magios Shop </h4>
                        </div>
                        <div className='col-2'>
                            <h5> Secciones </h5>
                            <ul className='nav flex-column'>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-primary'> Home </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-primary'> Productos </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-primary'> Nosotros </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-primary'> Contacto </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                    <NavLink to='#' className='nav-link p-0 text-primary'>  </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className='col-2'>
                            <h5> Información </h5>
                            <ul className='nav flex-column'>
              
                                <li className='nav-item mb-2'>
                                <NavLink to='#' className='nav-link p-0 text-primary'>
                                Centro de Ayuda                            
                                </NavLink>
                                </li>
                                <li className='nav-item mb-2'>
                                <NavLink to='#' className='nav-link p-0 text-bg-primary'>
                                Preguntas Frecuentes                            
                                </NavLink>
                                </li>
                 				<li className='nav-item mb-2'>
                                 <NavLink to='#' className='nav-link p-0 text-primary'>
                                Terminos y Condiciones
                                </NavLink>
                                </li>
                            </ul>
                        </div>
                        
                        <div className='col-4 offset-1'>
                            <form>
                                <h5> Suscribete para mas noticias </h5>
                                <p> Resive las noticias y novedades .</p>
                                <div className='d-flex w-100 grap-2'>
                                    <label htmlFrom='newletter1' className='visually-hidden'> Email </label>
                                    <imput
                                        id='newletter1'
                                        type='text'
                                        className='form-control'
                                        placeholder='Email address'
                                    />
                                    <button className='btn btn-primary rounded-pill mx-2 px-4' type='button'> Suscribite </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between pt-4 mt-4 border-top'>
                        <p> Copyright &copy; 2022 Los Magios all rigths reserved. </p>
                        <ul className='list-unstyled d-flex'>
                            <li className='ms-3'>
                                <NavLink className='link-primary' to='https://www.instagram.com/'><i className='fa fa-instagram fa-2x'/></NavLink>
                            </li>
                            <li className='ms-3'>
                                <NavLink className='link-primary' to='https://www.facebook.com/'><i className='fa fa-facebook fa-2x'/></NavLink>
                            </li>
                            <li className='ms-3'>
                                <NavLink className='link-primary' to='https://www.linkedin.com/'><i className='fa fa-linkedin fa-2x'/></NavLink>
                            </li>
                            <li className='ms-3'>
                                <NavLink className='link-primary' to='/'><i className='fa fa-whatsapp fa-2x'/></NavLink>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </footer>
    </div>
  )
}

export default Footer;

















