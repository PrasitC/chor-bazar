import './productlist.scss';
import { useStateValue } from './StateProvider';
import Card from './Card';
const Productlist = () => {
  const { initialState } = useStateValue();
  return(
    <div className="productList">
      {
        initialState.productList.map((item, index)=><Card {...item} key={index}/>)
      }
    </div>
  )
}

export default Productlist;