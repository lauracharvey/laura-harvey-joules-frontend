import {FaArrowCircleUp} from 'react-icons/fa';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
            <li>Pages</li>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} href='!#' className='page-link'>
                    {number}
                </a>
                </li>
            ))}
            <li>
            <FaArrowCircleUp 
                className="scrollTop" 
                onClick={scrollTop} 
            />
            </li>
        </ul>
      </nav>
    );
  };
  
  export default Pagination;