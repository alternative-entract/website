import { Toast } from 'react-bootstrap';
import './toast.css';

function ToastMessage({ message, onClose }) {
  return (
    <Toast className='toast-position' show={true} onClose={onClose}>
      <Toast.Header>
        <strong className="me-auto">Notification</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default ToastMessage;
