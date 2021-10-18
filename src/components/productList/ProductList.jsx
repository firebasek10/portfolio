import './productList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Graphic Designs</h1>
        <p className="pl-desc">
          These are the Graphics designs, Please Go through portfolio which i
          had been designing from inside of heart.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;
