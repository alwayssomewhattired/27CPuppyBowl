import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetPuppiesQuery } from "./puppySlice";

export default function Search() {
  //   const [name, setName] = useState("");
  const { data: myData, isSuccess, isLoading } = useGetPuppiesQuery();

  const newData1 = myData?.data.players;
  console.log(newData1);

  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    console.log(`Is this a success ${isSuccess}`);
    if (isSuccess) {
      setPuppies(newData1);
    }
  }, [newData1]);

  //   function puppyFinder() {
  // if (newData != undefined) {
  //   const thing = newData.find((pup) => pup === name);
  //   console.log(thing);
  //   return console.log(thing);
  // }
  //   }

  //   const searchPuppy = async (e) => {
  // e.preventDefault();
  // try {
  //   //   newData.filter((item) => {
  //   //     if (item == newData) {
  //   //       console.log(item);
  //   //     }
  //   //   });
  //   puppyFinder();
  // } catch (error) {
  //   console.error(error);
  // }
  //   };

  //   let content;
  //   if (isLoading) {
  //     content = <p>loading...</p>;
  //   } else if (isSuccess) {
  //     content = newData;
  //   } else if (isError) {
  //     content = <p>{error}</p>;
  //   }

  //   return (
  //     // <>
  //     //   {/* <main>
  //     //   <div>
  //     //     <Link to="/">Click here to go home</Link>
  //     //   </div>
  //     //   <form onSubmit={searchPuppy}>
  //     //     <label>
  //     //       name
  //     //       <input
  //     //         name="puppyName"
  //     //         value={name}
  //     //         onChange={(e) => setName(e.target.value)}
  //     //       />
  //     //     </label>
  //     //     <button>Search</button>
  //     //   </form>
  //     //   {content}
  //     //   </main> */}
  //     </>
  //   );
}
