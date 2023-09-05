// import { useEffect, useRef } from "react"

// export default function DialogModal({ isOpen, onClose, children }) {
//   const dialogRef = useRef(null)

//   useEffect(() => {
//     const dialog = dialogRef.current
//     if (dialog == null) return

//     if (isOpen) {
//       dialog.showModal()
//     } else {
//       dialog.close()
//     }
//   }, [isOpen])

//   useEffect(() => {
//     const dialog = dialogRef.current
//     if (dialog == null) return

//     dialog.addEventListener("close", onClose)

//     return () => {
//       dialog.removeEventListener("close", onClose)
//     }
//   }, [onClose])

//   return (
//     <dialog
//       ref={dialogRef}
//       className='w-full h-80 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg shadow-xl'
//     >
//       {children}
//     </dialog>
//   )
// }
