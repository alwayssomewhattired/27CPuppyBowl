/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */

import { useGetPuppiesQuery, useDeletePuppyMutation } from "./puppySlice";
import { useState, useEffect } from "react";

export default function PuppyList({ setSelectedPuppyId }) {
  // TODO: Get data from getPuppies query
  const { data: myData, isSuccess, isLoading } = useGetPuppiesQuery();
  const [deleteAPuppy] = useDeletePuppyMutation();

  const newData = myData?.data.players;

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
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {puppies.map((p) => (
          <li key={p.id}>
            <h3>
              {p.name} #{p.id}
            </h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <button onClick={() => setSelectedPuppyId(p.id)}>
              See details
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
