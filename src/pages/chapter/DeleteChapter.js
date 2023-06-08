
// import image3 from "../../images/3.svg";
// import { Link, useParams } from "react-router-dom";
// import swal from "sweetalert";
// import { useState } from "react";
// import axios from "axios";

// const DeleteChapter = () => {
//   const { id } = useParams();
//   const [reason, setReason] = useState("");

//   function deleteChapter(e) {
//     e.preventDefault();
//     swal({
//       title: "Confirm",
//       text: "Are you absolutely sure you want to delete this Chapter?",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     }).then((willDelete) => {
//       if (willDelete) {
//         axios
//           .put(`http://localhost:1337/chapters/${id}`, {
//             status: "notactive",
//           })
//           .then((res) => {
//             if (res.data.status === true) {
//               swal(res.data.message, {
//                 icon: "success",
//               });

//             } else {
//               swal(res.data.message, {
//                 icon: "success",
//               });
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       } else {
//         swal("Your Chapter is safe!", {
//           icon: "success",
//         });
//       }
//     });
//   }

//   return (
//     <div className="container">
//       <div className="form-control mt-3 bg-dark text-white">Delete Chapter</div>
//       <div className="columns mt-5">
//         <form name="myForm" onSubmit={deleteChapter}>
//           <div className="field">
//             <div className="form-group">
//               <label htmlFor="reasonfield">Reason</label>
//               <textarea
//                 className="form-control"
//                 id="exampleFormControlTextarea3"
//                 placeholder="Enter valid reason"
//                 rows="4"
//                 required
//                 value={reason}
//                 onChange={(e) => {
//                   setReason(e.target.value);
//                 }}
//               ></textarea>
//             </div>
//           </div>
//           <br></br>
//           <div className="control">
//             <button
//               type="submit"
//               className="btn btn-danger mr-1 column is-half text-white"
//             >
//               Delete
//             </button>
//           </div>

//           <div>
//             <img src={image3} className="picside" draggable={false} alt="this is image" />
//           </div>
//           <div className="field"></div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DeleteChapter;

