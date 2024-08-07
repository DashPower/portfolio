import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

function Cards(props) {
  const [t] = useTranslation("global");

  const tech = props.tech.split(",");

  return (
    <Card className="cardBots">
      <div className="card_div_img">
        <Card.Img variant="top" src={props.img} className="cardImg" />
        <a href={props.address}>
          <div className="card_img_overlay--blur card_img_overlay ">
            <h2>Visítanos</h2>
          </div>
        </a>
      </div>

      <Card.Body>
        <div>
          <Card.Title className="cardTittle">{props.Title}</Card.Title>
          <Card.Text className="cardText">{props.Text}</Card.Text>
        </div>
        <div>
  
          {props.github &&<div className="visit">
            
            <a href={props.github}>
              <i className="bi bi-github"></i>
            </a>
          </div> }
          <h5 className="techText">{t("project.t1")}:</h5>
          <ul className="tools">
            <li className="toolsbg">HTML</li>
            <li className="toolsbg">CSS</li>
            {tech.map((e) => {
              return (
                <li className="toolsbg" key={tech.indexOf(e)}>
                  {e}
                </li>
              );
            })}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
