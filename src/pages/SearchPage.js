import React from 'react'
import './SearchPage.css';
import { useStateValue } from '../components/StateProvider';
import useGoogleSearch from '../components/useGoogleSearch';
import Response from '../response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  
  // Live API Call
  // const { data } = useGoogleSearch(term);

  // Local Data
  const data = Response;

  console.log(data);

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img className='searchPage__logo' src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png' alt='Google Logo' />
        </Link>
        <div className='searchPage__headerBody'>
          <Search hideButtons />
        </div>
      </div>
      <div className='searchPage__results'>

      </div>
    </div>
  )
}

export default SearchPage;
