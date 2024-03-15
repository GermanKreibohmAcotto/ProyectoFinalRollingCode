import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <>
            <div className='text-center mx-3'>
                <img src="https://res.cloudinary.com/dqnqflduy/image/upload/v1707272730/7ea90453-3d88-4246-a0dd-a898969385f7_ojfxie.png" alt='Imagen de error 404 not found' className='my-5 w-50' />
            </div>
            <div className='d-flex justify-content-center'>
                <Link to={"/"} className='btn btn-primary d-flex justify-content-end align-items-center mb-5'> <svg xmlns="http://www.w3.org/2000/svg" width="2em" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                </svg>Volver a la pagina principal</Link>
            </div>
        </>
    )
}

export default ErrorPage