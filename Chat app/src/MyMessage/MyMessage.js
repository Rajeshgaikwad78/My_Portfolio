import './MyMessage.css'

const MyMessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0) {
      return (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
         
        />
      );
    }
  
    return (
      <div className="message" >
        {message.text}
      </div>
    );
  };
  
  export default MyMessage;