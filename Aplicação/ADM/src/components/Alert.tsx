// import { WarningCircle, X } from "phosphor-react";

// interface IModal {
//   onChangeModal: (result: boolean) => void;
//   value: string;
//   isOpen: boolean;
// }

// export function Alert({ isOpen, onChangeModal, value }: IModal) {
//   return (
//     <div className={`w-screen h-screen flex items-center justify-center bg-black bg-opacity-20 absolute drop-shadow-2xl z-20 ${isOpen ? '' : 'hidden'}`}>
//       <div className="p-4 bg-white relative flex flex-col rounded-lg justify-center items-center">
//         <div className="absolute right-2 top-2">
//           <X size={26} weight="bold" onClick={() => onChangeModal(false)} />
//         </div>
//         <WarningCircle size={80} color="#9bc8a8" weight="bold" />
//         <p>
//           Realmente deseja continuar com a exclusão desse vetor?
//         </p>
//         <div className="flex gap-2 mt-2">
//           <button onClick={() => onChangeModal(false)} className="px-2 py-1 bg-red-600 text-white rounded-md drop-shadow-lg">
//             Cancelar
//           </button>
//           <button onClick={() => onChangeModal(true)} className="px-2 py-1 bg-sky-600 text-white rounded-md drop-shadow-lg">
//             Continuar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }