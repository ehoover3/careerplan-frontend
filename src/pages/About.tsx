import Card from "react-bootstrap/Card";
import ramiroPic from "../assets/ramiroPic.jpg";
import ericPic from "../assets/ericPic.jpg";
import yogiPic from "../assets/yogiPic.jpg";
import maePic from "../assets/maePic.jpg";
import maxPic from "../assets/maxPic.jpg";
import styles from "../assets/About.module.css";

export default function About() {
  const people = [
    {
      img: ramiroPic,
      name: "Ramiro",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/ramiro-pena/",
    },
    {
      img: yogiPic,
      name: "Yogi",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/yogi-zipori/",
    },
    {
      img: maxPic,
      name: "Max",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/maxwell-morrow-6a3085228/",
    },
    {
      img: ericPic,
      name: "Eric",
      position: "Software Developer",
      linkedIn: "https://www.linkedin.com/in/hoov/",
    },
  ];

  const cardsList = people.map((person) => (
    <Card style={{ width: "18rem" }} key={person.name}>
      <Card.Img variant='top' src={person.img} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>{person.position}</Card.Text>
        <Card.Link href={person.linkedIn}>LinkedIn</Card.Link>
      </Card.Body>
    </Card>
  ));

  return (
    <div className='navbar-spacer footer-spacer'>
      <h1 className={styles.aboutHeader}>About Us</h1>
      <div className={styles.aboutCardContainer}>{cardsList}</div>
    </div>
  );
}
