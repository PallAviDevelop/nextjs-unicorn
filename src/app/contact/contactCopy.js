import { useState } from "react";

const ContactCopy = () => {
  const [userdata, setUserdata] = useState({
    username: "",
    phone:""
  });
  const onchangeGet=(e)=>{
    const name= e.target.name;
    const value=e.target.value;
    setUserdata((prevData)=>({...prevData,[name]:value
    }))
  }
  function handleSubmit(e){
    e.preventDefault();
  }
  return (
    <div>
      ContactCopy
      <form onSubmit={handleSubmit}>
        <div className="contact-group">
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          value={userdata.name}
          onChange={onchangeGet}
          plcaholder="enter username"
          required
          autoComplete="off"
        />
        </div>
        <div className="contact-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          value={userdata.phone}
          onChange={onchangeGet}
          plcaholder="enter phone"
          required
          autoComplete="off"
        />
        </div>
        <div className="contact-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={userdata.email}
          onChange={onchangeGet}
          plcaholder="enter email"
          required
          autoComplete="off"
        />
        </div>
        <div className="btn">
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactCopy;
