export default function useBookingManager() {
  const handleConfirm = (id) => {
    console.log("confirmed!", id)
  }
  const handleReject = (id) => {
    console.log("rejected!", id)
  }
  const handleCancel = (id) => {
    console.log("cancelled!", id)
  }
  const handleDelete = (id) => {
    console.log("deleted!", id)
  }

  return {
    handleConfirm,
    handleReject,
    handleCancel,
    handleDelete
  }
}

