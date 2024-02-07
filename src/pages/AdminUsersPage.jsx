import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import clienteAxios, { config } from '../helpers/clientAxios';

const AdminUsersPage = () => {

  const [users, setUsers] = useState([])
  const [show, setShow] = useState(false);
  const [userState, setUserState] = useState({})

  const handleClose = () => setShow(false);

  const handleShow = (userData) => {
    setShow(true)
    setUserState(userData)
  }

  const getAllUsers = async () => {
    try {
      const getUsers = await clienteAxios.get('/users')
      setUsers(getUsers.data.getAllUsers)
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "Surgio algun error en la obtencion de los usuarios",
        icon: "error",
        confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
  </svg>`
      });
    }
  }

  const handleChange = (ev) => {
    setUserState({ ...userState, [ev.target.name]: ev.target.value })
  }

  const handleClick = async (ev) => {
    
    try {
      
      ev.preventDefault()
      const updateUser = await clienteAxios.put(`/users/${userState._id}`, userState, config)
      if (updateUser) {
        handleClose()
        Swal.fire({
          title: "Actualizado con exito",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "Surgio algun error en la actualizacion del usuario",
        icon: "error",
        confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
  </svg>`
      });
    }
  }

  useEffect(() => {
    getAllUsers()

  }, [])


  const deleteUser = (idUser) => {
    try {
      Swal.fire({
        title: "Seguro que quieres eliminarlo?",
        text: "La eliminacion sera definitiva!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar!",
        cancelButtonText: "Conservar usuario!"
      }).then(async (result) => {
        if (result.isConfirmed) {

          const deleteUser = await clienteAxios.delete(`/users/${idUser}`, config)

          if (deleteUser.status === 200) {
            Swal.fire({
              title: "Eliminado!",
              text: "El usuario fue eliminado definitivamente",
              icon: "success"
            })
          }
        }
      });
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        text: "Surgio algun error en la eliminacion del usuario",
        icon: "error",
        confirmButtonText: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-arrow-return-left mx-5" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
      </svg>`
      });
    }
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className='text-center'>
            <th>ID</th>
            <th>Correo</th>
            <th>Role</th>
            <th >Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) =>
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.correo}</td>
                <td>{user.role}</td>

                <td className='text-center'>
                  <Button variant="danger" className={user.role === 'admin' && 'd-none'} onClick={() => deleteUser(user._id)}>Eliminar</Button>
                  <Button className='btn btn-warning m-1' onClick={() => handleShow(user)}>
                    Editar
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Editar usuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Mail</Form.Label>
                          <Form.Control type="email" value={userState.correo} onChange={handleChange} name='correo' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Role</Form.Label>
                          <Form.Select onChange={handleChange} value={userState.role} name='role'>
                            <option value='user'>Usuario</option>
                            <option value='admin'>Administrador</option>
                          </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={handleClick}>
                          Guardar Cambios
                        </Button>

                      </Form>
                    </Modal.Body>
                  </Modal>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table >
    </>
  )
}

export default AdminUsersPage