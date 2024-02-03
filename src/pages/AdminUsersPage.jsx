import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AdminUsersPage = () => {


 

  return (
    <>
    </>
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Nombre</th>
//           <th>Role</th>
//           <th>Acciones</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           usersLS.filter((user) => user.id !== userLS.id).map((user) =>

//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.nombreUsuario}</td>
//               <td>{user.role}</td>
//               <td>
//                 <button className='btn btn-outline-danger' onClick={() => deletedUserLS(user.id)}>Eliminar</button>
//                 <Button variant="warning" onClick={() => handleShow(user)}>
//                   Editar
//                 </Button>

//                 <Modal show={show} onHide={handleClose}>
//                   <Modal.Header closeButton>
//                     <Modal.Title>Modificar usuario</Modal.Title>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <Form>
//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Usuario</Form.Label>
//                         <Form.Control type="email" placeholder="Por ej: usuario2023" value={userModal?.nombreUsuario} onChange={handleChange} name='nombreUsuario'/>
//                       </Form.Group>

//                       <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Role</Form.Label>
//                         <Form.Control type="text" placeholder="Por ej: admin/user" name='role' value={userModal?.role} onChange={handleChange}/>
//                       </Form.Group>  
//                       <Button variant="primary" type="submit" onChange={(ev) => handleClick(ev, user.id)}>
//                         Guardar Cambios
//                       </Button>
//                     </Form>
//                   </Modal.Body>
//                 </Modal>
//               </td>
//             </tr>
//           )
//         }
//       </tbody>
//     </Table>
//   )
)}

export default AdminUsersPage