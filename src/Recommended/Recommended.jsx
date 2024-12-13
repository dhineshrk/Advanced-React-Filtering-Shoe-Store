import './Recommended.css'
import Button from '../components/Button'
const Recommended = ({handleClick}) => {
  return (
    <>
      <div className='recommended-title'>Recommended</div>
      <div className="recommended-flex">
      <Button 
        onClickHandler={handleClick} value="" title="All Products"
        />
        <Button 
        onClickHandler={handleClick} value="Nike" title="Nike"
        />
        <Button 
        onClickHandler={handleClick} value="Adidas" title="Adidas"
        />
        <Button 
        onClickHandler={handleClick} value="Puma" title="Puma"
        />
        <Button 
        onClickHandler={handleClick} value="Vans" title="Vans"
        />
      </div>

    </>
  )
}

export default Recommended