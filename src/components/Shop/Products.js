import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 'p1',
    price: 6,  
    title: 'My first Book',
    description: 'Amazing Book',
  },
  {
    id: 'p2',
    price: 3,  
    title: 'My Second Book',
    description: 'Fantastic Book',
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(product => (
             <ProductItem
             key = {product.id}
             title={product.title}
             price={product.price}
             description= {product.description}
             id = {product.id}
           />
        ))}
       
      </ul>
    </section>
  );
};

export default Products;
