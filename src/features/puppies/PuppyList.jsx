/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */

import { useGetPuppiesQuery, useDeletePuppyMutation } from "./puppySlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query
  const { data: myData, isSuccess, isLoading } = useGetPuppiesQuery();
  const [deleteAPuppy] = useDeletePuppyMutation();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const newData = myData?.data.players;
  console.log(newData);

  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    console.log(`Is this a success ${isSuccess}`);
    if (isSuccess) {
      setPuppies(newData);
    }
  }, [newData]);

  return (
    <article>
      <h2>Roster</h2>
      <div>
        <Link to="/form">Click here to add a puppy</Link>
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
      </div>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {puppies
          .filter((item) => {
            return name.toLowerCase() == ""
              ? item
              : item.name.toLowerCase().includes(name);
          })
          .map((p) => (
            <li key={p.id}>
              <h3>
                {p.name} #{p.id}
              </h3>
              <figure>
                <img src={p.imageUrl} alt={p.name} />
              </figure>
              <button
                onClick={() => {
                  setSelectedPuppyId(p.id);
                  navigate("/details");
                }}
              >
                See details
              </button>
            </li>
          ))}
      </ul>
    </article>
  );
}
