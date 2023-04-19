
const MesMessage = ({message}) => {

  if (message?.attachments?.length > 0) {
    return(
      <img src={message.attachments[0].file} alt="img-message" className="message-image" style={{float: "right"}} />
    )
  };

  return (
    <div className="message" style={{float: "right", marginRight: "18px", color: 'white', backgroundColor: "#10cd8e" }}>
      {message.text}
    </div>
  )
}

export default MesMessage