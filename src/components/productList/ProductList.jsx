import "./productList.css";
import Product from "../product/Product";
import { personalProjects } from "../../data";
import { otherProjects } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          <em>Personal Projects</em>
        </p>
      </div>
      <div className="pl-list">
        {personalProjects.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      <div className="pl-texts">
        <p className="pl-desc">
          <em>Projects that I have worked on</em>
        </p>
      </div>
      <div className="pl-list">
        {otherProjects.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
