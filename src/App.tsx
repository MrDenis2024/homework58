import {useState} from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import {Buttons} from './types';
import Alert from './components/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const [buttons] = useState<Buttons[]>([
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => setShowModal(false)},
  ]);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="row">
        <div className='col-6 text-center'>
          <button className="w-25 btn btn-primary" onClick={() => setShowModal(true)}>Show modal</button>
        </div>
        <div className='col-6'>
          {showAlert && <Alert type='warning' onDismiss={() => closeAlert()}>This is a warning type alert</Alert>}
          <Alert type='success'>This is a success type alert</Alert>
        </div>
      </div>
      <Modal
        show={showModal}
        title="Some kinda modal title"
        onClose={() => setShowModal(false)}
        buttons={buttons}
      >
        <p className='text-start'>This is modal content</p>
      </Modal>
    </>
  );
};

export default App;
