import {Link} from "react-router-dom";
import UserPageTemplate from "templates/UserPageTemplate"; 
import Header from "components/atoms/Header/Header";
import Paragraph from "components/atoms/Paragraph/Paragraph"; 

const DetailsPageTemplate = () => (
  <UserPageTemplate>
    <Header>Jakiś nagłówe</Header>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates fugit minima veritatis dolore, atque illo sequi excepturi fugiat deleniti! Autem doloribus quia delectus aspernatur amet quasi, assumenda cumque hic culpa.
    </Paragraph>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsPageTemplate;