import { useState } from "react";

/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */

import { useAddPuppyMutation } from "./puppySlice";
import { Link } from "react-router-dom";

export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  const [createPostMutation, isLoading, error] = useAddPuppyMutation();

  // TODO: Use the `addPuppy` mutation to add a puppy when the form is submitted

  const postPuppy = async (e) => {
    e.preventDefault();
    try {
      const response = await createPostMutation({ name, breed }).unwrap();
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    // Placeholder image w/ random photos of dogs
    const imageUrl = "https://loremflickr.com/200/300/dog";
  };

  return (
    <>
      <h2>Add a Puppy</h2>
      <div>
        <Link to="/">Click here to go home</Link>
      </div>
      <form onSubmit={postPuppy}>
        <label>
          Name
          <input
            name="puppyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <button>Add to Roster</button>
        {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </>
  );
}
