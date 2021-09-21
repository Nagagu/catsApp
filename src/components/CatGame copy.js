// import React, { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   cambiarEstadoRespuesta,
//   comprobarRespuesta,
//   pasarAlSiguiente,
//   resetRespuestas,
//   reset,
//   resetRespuestasAcertadas,
// } from "../actions/cambiarEstadoRespuesta";
// import { obtenerResultadosFiltrados } from "../actions/cambiarEstadoRespuesta";
// import { PantallaResultados } from "./PantallaResultados";
// import Swal from "sweetalert2";
// import { getCats } from "../helpers/getData";
// import { getDefaultNormalizer } from "@testing-library/react";

// export const CatGame = () => {
//   const numeroTotalPreguntas = 2;
//   const ref = useRef();
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state);
//   const { respuestasAcertadas } = useSelector((state) => state.game);
//   const { idRespuestaCorrecta } = useSelector((state) => state.game);
//   const { idRespuestaMarcada } = useSelector((state) => state.game);
//   const { contador } = useSelector((state) => state.game);
//   const [catList, setCatList] = useState([]);
//   const [listaPosiblesRespuestas, setListaPosiblesRespuestas] = useState([]);
//   const [gatoImagen, setGatoImagen] = useState(null);

//   const getCats = async () => {
//     const url = "https://api.thecatapi.com/v1/breeds";
//     const resp = await fetch(url);
//     const data = await resp.json();
//     var newCatList = data.filter((o) => o?.image?.url != null);
//     setCatList(newCatList);
//     return newCatList;
//   };

//   useEffect(() => {
//     getCats().then(inicializar);
//     const kkk = getCats();
//     console.log(kkk);
//   }, []);

//   const customTitle = () => {
//     if (respuestasAcertadas <= 4) {
//       return "You know nothing";
//     } else if (respuestasAcertadas <= 7) {
//       return "Must improve";
//     } else {
//       return "You are a Meowster!";
//     }
//   };

//   const iniciarFuncionalidad = () => {
//     setTimeout(function () {
//       inicializar(catList);
//       dispatch(pasarAlSiguiente(contador, numeroTotalPreguntas));
//       dispatch(resetRespuestas());
//     }, 1000);
//   };

//   useEffect(async () => {
//     if (contador === numeroTotalPreguntas) {
//       const image =
//         "https://cataas.com/cat/says/" + customTitle() + "?t=" + Date.now();
//       Swal.fire({
//         imageUrl: image,
//         imageAlt: "Custom image",
//         text: "Score: " + respuestasAcertadas + "/" + numeroTotalPreguntas,
//         width: 600,
//         padding: "3em",
//         background: "#fff url(/images/trees.png)",
//         backdrop: `
//             rgba(0,0,123,0.4)
//             left top
//             no-repeat
//           `,
//         confirmButtonColor: "#3085d6",
//         confirmButtonText: "Jugar otra vez",
//         allowOutsideClick: false,
//       }).then((result) => {
//         if (result.isConfirmed) {
//           iniciarFuncionalidad();
//         }
//       });
//       //);
//     }
//   }, [contador]);

//   function getElementosAleatorios(lista, numElementos) {
//     return [...lista]
//       .sort(() => (Math.random() > 0.5 ? 1 : -1))
//       .slice(0, numElementos);
//   }

//   const inicializar = (data) => {
//     const resultadosFiltrados = getElementosAleatorios(data, 3);
//     setListaPosiblesRespuestas(resultadosFiltrados);
//     const selectedCat = getElementosAleatorios(resultadosFiltrados, 1)[0];
//     setGatoImagen(selectedCat);
//   };

//   const handleRespuestaOnClick = (event) => {
//     dispatch(
//       comprobarRespuesta(
//         listaPosiblesRespuestas,
//         event.target.id,
//         gatoImagen.id
//       )
//     );

//     if (contador !== numeroTotalPreguntas) {
//       iniciarFuncionalidad();
//     }
//   };

//   return (
//     <div className="animate__animated animate__fadeIn">
//       {/* {respuestasAcertadas === 2 && <PantallaResultados />} */}

//       {contador}

//       <div className="container">
//         <div className="numeroPregunta">
//           {" "}
//           <h1>{contador + 1}.</h1>
//         </div>

//         <div className="imagen">
//           <img
//             src={
//               gatoImagen != null && gatoImagen.image.url != null
//                 ? gatoImagen.image.url
//                 : ""
//             }
//             width="200px"
//           ></img>
//         </div>
//         <div className="form-container">
//           <form>
//             {listaPosiblesRespuestas.map((o) => (
//               <button
//                 className={
//                   "optionName " +
//                   ((idRespuestaMarcada !== null &&
//                     o.id === idRespuestaCorrecta &&
//                     "correcto") ||
//                     (idRespuestaMarcada !== null &&
//                       o.id !== idRespuestaCorrecta &&
//                       "incorrecto"))
//                 }
//                 key={o.id}
//                 onClick={handleRespuestaOnClick}
//               >
//                 {" "}
//                 {o.name}
//               </button>
//               // <label className="option-label form-options" key={o.id}>
//               //   <input
//               //     type="radio"
//               //     class="option-input radio"
//               //     name="example"
//               //     id={o.id}
//               //     onClick={handleRespuestaOnClick}
//               //   />
//               // {/*
//               // <span
//               //   className={
//               //     "optionName " +
//               //     (ref.current?.id == o.id && getOptionClassName())
//               //   }
//               // >

//               // </span> */}
//               //   <span
//               //     className={
//               //       "optionName " +
//               //       ((idRespuestaMarcada !== null &&
//               //         o.id === idRespuestaCorrecta &&
//               //         "correcto") ||
//               //         (idRespuestaMarcada !== null &&
//               //           o.id !== idRespuestaCorrecta &&
//               //           "incorrecto"))
//               //     }
//               //   >
//               //     {o.name}
//               //   </span>
//               // </label>
//             ))}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
