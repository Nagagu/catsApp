import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../actions/cambiarEstadoRespuesta";

export const PantallaResultados = () => {
  const { correctAnswersCount, totalQuestions } = useSelector(
    (state) => state.game
  );

  const customTitle = () => {
    if (correctAnswersCount <= 4) {
      return "You know nothing";
    } else if (correctAnswersCount <= 7) {
      return "Must improve";
    } else {
      return "You are a Meowster!";
    }
  };

  const dispatch = useDispatch();
  const image =
    "https://cataas.com/cat/says/" + customTitle() + "?t=" + Date.now();
  useEffect(() => {
    Swal.fire({
      imageUrl: image,
      imageAlt: "Custom image",
      customClass: "swal-style",
      text: "Score: " + correctAnswersCount + "/" + totalQuestions,
      width: 600,
      padding: "3em",
      background: "#fff url(/images/trees.png)",
      backdrop: `
              rgba(0,0,123,0.4)
              left top
              no-repeat
            `,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Try again",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(reset());
      }
    });
  }, [correctAnswersCount]);

  //);

  // Swal.fire({
  //   title: "Custom width, padding, background.",
  //   width: 600,
  //   padding: "3em",
  //   background: "#fff url(/images/trees.png)",
  //   backdrop: `
  //       rgba(0,0,123,0.4)
  //       url("/images/nyan-cat.gif")
  //       left top
  //       no-repeat
  //     `,
  // });

  return <div></div>;
};
