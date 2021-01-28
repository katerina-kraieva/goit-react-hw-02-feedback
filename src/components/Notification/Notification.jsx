import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message }) {
  return (
    <>
      <p className={s.message}>{message}</p>
    </>
  );
}

Notification.defaultProps = {
  message: ' ',
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;