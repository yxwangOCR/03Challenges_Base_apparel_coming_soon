import { useState } from "react";
import ErrorIcon from "../images/icon-error.svg";

const Main = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const handleOnChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <div className='main'>
        <h1>
          <span>WE'RE</span> <br /> COMING <br /> SOON
        </h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <div className='email-input'>
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={handleOnChange}
            required
          />
          {error && <img src={ErrorIcon} />}
          <input type='submit' value={">"} onClick={handleOnSubmit} />
          {error && <h6 className='error'>Please provide a valid email!</h6>}
        </div>
      </div>
    </>
  );
};

export default Main;
