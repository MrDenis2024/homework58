import React, {MouseEventHandler} from 'react';
import {Buttons} from '../../types';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  buttons?: Buttons[];
  onClose: MouseEventHandler;
}

const Modal: React.FC<Props> = ({show, title, buttons, children,   onClose}) => {
  let btn = null;

  if(buttons !== undefined) {
    btn = (
      <>
        <div className="modal-footer">
          {buttons.map((btn, index) => (
            <button key={index} className={'btn btn-' + btn.type} onClick={btn.onClick}>{btn.label}</button>
          ))}
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="modal-backdrop show" style={{display: show ? 'block' : 'none'}}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
        <div className='modal-dialog' onClick={(event) => event.stopPropagation()}>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5'>{title}</h1>
              <button className='btn-close' onClick={onClose}></button>
            </div>
            <div className='modal-body'>
              {children}
            </div>
            {btn}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;