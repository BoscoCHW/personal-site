import "./product.css";
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Product = ({project}) => {

  const [linkWrapperStyle, setLinkWrapperStyle] = useState({display: 'none'});
  const [imageStyle, setImageStyle] = useState({})
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div className="p-picture-wrapper"
            onMouseEnter={e=> {setImageStyle({filter: "opacity(40%)"}); setLinkWrapperStyle({display: 'flex'})}} 
            onMouseLeave={e => {setImageStyle({}); setLinkWrapperStyle({display: 'none'})}} >
        <div className="p-links-wrapper" style={linkWrapperStyle}>
          {project.links.map(link => {
            switch(link.name) {
              case "github":
                return (link.url && <a key={link.name} href={project.links[0].url} target="_blank" rel="noreferrer"><i className="devicon-github-original link-icon"></i></a>);
              case "TS":
                return (link.url && <a key={link.name} href={project.links[0].url} target="_blank" rel="noreferrer"><i className="devicon-typescript-plain link-icon"></i></a>);
              case "JS":
                return (link.url && <a key={link.name} href={project.links[0].url} target="_blank" rel="noreferrer"><i className="devicon-javascript-plain link-icon"></i></a>);
              default:
                return (link.url && <a key={link.name} href={project.links[0].url} target="_blank" rel="noreferrer"><div><FontAwesomeIcon className="link-icon" icon="fa-solid fa-eye" /></div></a>)
            }
          }
          )}
        </div>
        <img style={imageStyle} src={project.img} alt="" className="p-img" />
      </div>
      <div className="p-title"> 
        {project.title}
      </div>
      <p className="p-description"> {project.description} </p>
    </div>
  );
};

export default Product;
