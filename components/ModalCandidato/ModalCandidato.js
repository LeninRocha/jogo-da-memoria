import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import api from '@/services/api'
function ModalCandidato(props) {
  console.log(props)
  const [show, setShow] = useState(false);
  const [deputado, setDeputado] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setShow(props.showModal)
    async function loadPerfil(){
      const response = await api.get(`/deputados/${props.deputado}`)
      setDeputado(response.data.dados);
      setLoading(false)
    }
  loadPerfil()
  }, [props.showModal, props.deputado]);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {
          loading ?  (<Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>) :
                      (<>
                      <Modal.Header closeButton>
                        <Modal.Title>{deputado?.nomeCivil}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <img src={deputado?.ultimoStatus?.urlFoto}/>
                          <ul>
                              <li>Data de Nascimento: {deputado?.dataNascimento}</li>
                              <li>Nome: {deputado?.nomeCivil}</li>
                              <li>Municipio: {deputado?.municipioNascimento}</li>
                              <li>Email: {deputado?.ultimoStatus?.email}</li>
                              <li>Partido: {deputado?.ultimoStatus?.siglaPartido}</li>
                          </ul>
                        </Modal.Body>
                      </>)
        }

      </Modal>
    </>
  );
}

export default ModalCandidato;