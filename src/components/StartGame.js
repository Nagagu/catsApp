import React from "react";
import { useDispatch } from "react-redux";
import { startGame } from "../actions/cambiarEstadoRespuesta";
import { getCats } from "../helpers/getData";

export const StartGame = () => {
  const dispatch = useDispatch();
  const handleStartGame = () => {
    //precarga??
    // const url = "https://api.thecatapi.com/v1/breeds";
    // debugger;
    // fetch(url)
    //   .then((resp) => resp.json())
    //   .then((data) => data.filter((o) => o?.image?.url != null))
    //   .then((newCatList) => {
    //     debugger;
    //     const myHeaders = new Headers();
    //     myHeaders.append("Access-Control-Allow-Origin", "*");
    //     newCatList.forEach((element) => {
    //       fetch(element?.image?.url, {
    //         headers: myHeaders,
    //       }).then(console.log);
    //     });
    //   });

    getCats().then(dispatch(startGame()));
  };

  return (
    <div className="startGame-btn">
      <button onClick={handleStartGame}>START</button>
    </div>
  );
};
