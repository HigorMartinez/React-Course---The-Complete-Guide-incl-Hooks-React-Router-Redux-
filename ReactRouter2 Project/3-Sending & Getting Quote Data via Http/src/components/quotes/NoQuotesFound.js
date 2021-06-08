import { Link } from 'react-router-dom';

import classes from './NoQuotesFound.module.css';

const NoQuotesFound = (props) => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className='btn' to='/new-quote'>
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;