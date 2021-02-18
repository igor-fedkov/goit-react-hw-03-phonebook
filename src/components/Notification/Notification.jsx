import PropTypes from 'prop-types';

import { NotificationEl } from './Notification.css';

const Notification = ({ text }) => {
  return <NotificationEl>{text}</NotificationEl>;
}

Notification.propTypes = {
  text: PropTypes.string.isRequired
}

export default Notification;