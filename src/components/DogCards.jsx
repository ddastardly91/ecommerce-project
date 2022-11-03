import Card from "../ui/Card";
import { GenderMale, GenderFemale } from "react-bootstrap-icons";
import dogData from "../data.js";

const DogCards = ({ handleAddBasket }) => {
   return (
      <div className="container">
         {dogData.map((dog) => {
            return (
               <Card key={dog.id}>
                  <img src={dog.url} alt={dog.name} />
                  <div className="card-content">
                     <div className="card-title">
                        <div className="card-name">
                           <h3>{dog.name}</h3>
                           {dog.gender === "male" ? (
                              <GenderMale className="card-gender" />
                           ) : (
                              <GenderFemale className="card-gender" />
                           )}
                        </div>
                        <span>{dog.breed}</span>
                     </div>
                     <div className="card-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur, a quaerat natus aliquam excepturi.
                     </div>
                     <div className="btn-container">
                        <button onClick={() => handleAddBasket(dog)}>
                           Adopt me
                        </button>
                     </div>
                  </div>
                  <div className="price">${dog.price}</div>
               </Card>
            );
         })}
      </div>
   );
};

export default DogCards;
