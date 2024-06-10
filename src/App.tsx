import {useState} from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import {Buttons} from './types';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const [buttons] = useState<Buttons[]>([
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => setShowModal(false)},
  ]);

  return (
    <>
      <div className="row">
        <div className='col-6'>
          <button className="w-25 btn btn-primary" onClick={() => setShowModal(true)}>Show modal</button>
        </div>
        <div className='col-6'>

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
