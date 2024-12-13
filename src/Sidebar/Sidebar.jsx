import './Sidebar.css'
import { IoCartSharp } from "react-icons/io5";
import Category from './Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';


const Sidebar = ({handleChange}) => {
  return (
    <>
        <section className='sidebar'>
            <div className="logo-container">
                <h1><IoCartSharp /></h1>
            </div>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>
        </section>

    </>
  )
}

export default Sidebar