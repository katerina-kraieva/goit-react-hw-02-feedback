import propTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({title, children}) {
  return (
    <div className={s.container}>
      <h2 className={s.title}> {title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
};