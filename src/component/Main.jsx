import React from "react";

const Main = () => {
  return (
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
        <input type='email' />
        <input type='submit' value={">"} />
      </div>
      <h6>Error</h6>
    </div>
  );
};

export default Main;
