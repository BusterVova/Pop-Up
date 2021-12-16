import "../../App.css";
import React, { useState } from "react";
import './StartScreen.scss'
import TaxDeduction from './components/TaxDeduction/TaxDeduction'
import Modal from '../../components/Modal/Modal';
import Button from "../../components/Button/Button"

function App() {
  const [modalOpened, setModalOpened] = useState(false);

  const openModal = () => {
    setModalOpened(true)
  }

  const closeModal = () => {
    setModalOpened(false)
  }

  return (
    <div className="start-screen">
      {modalOpened ?  (
        <Modal onClose={closeModal}>
          <TaxDeduction
            onCloseModal={closeModal}
          />
        </Modal>
      ) : null}
      <Button
        color="secondary"
        variant="contained"
        size="big"
        onClick={openModal}>
        Налоговый вычет
      </Button>
    </div>
  )
}

export default App;
