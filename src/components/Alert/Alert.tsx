import React, {MouseEventHandler} from 'react';

interface Props extends React.PropsWithChildren {
  type: string;
  onDismiss?: MouseEventHandler;
  clickDismissable?: MouseEventHandler;
}

const Alert: React.FC<Props> = ({type, children, onDismiss, clickDismissable}) => {

  return (
    <>
      {clickDismissable !== undefined ?
        <div className={'alert alert-' + type + ' alert-dismissible fade show'} onClick={clickDismissable}>
          {children}
        </div>
        :
        <div className={'alert alert-' + type + ' alert-dismissible fade show'}>
          {children}
          {onDismiss !== undefined && <button className="btn-close" onClick={onDismiss}></button>}
        </div>
      }
    </>
  );
};

export default Alert;