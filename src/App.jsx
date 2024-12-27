import { useState } from "react";

import { Provider } from "react-redux";
import store from "./store/store";

import PuppyDetails from "./features/puppies/PuppyDetails";
import PuppyList from "./features/puppies/PuppyList";
import PuppyForm from "./features/puppies/PuppyForm";

import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./features/puppies/Search";

/**
 * @component
 * This app shows a list of puppy bowl players from the API.
 * Users can view players in the roster, add a player to the roster,
 * see more details about a specific player, and remove a player from the roster.
 */
export default function App() {
  const [selectedPuppyId, setSelectedPuppyId] = useState();

  return (
    <Provider store={store}>
      <h1>Puppy Bowl</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<PuppyForm />} />
          {/* <main> */}
          <Route
            path="/"
            element={<PuppyList setSelectedPuppyId={setSelectedPuppyId} />}
          />
          <Route
            path="/details"
            element={
              <PuppyDetails
                selectedPuppyId={selectedPuppyId}
                setSelectedPuppyId={setSelectedPuppyId}
              />
            }
          />
          <Route path="/search" element={<Search />}></Route>
          {/* </main> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

//make a navbar
