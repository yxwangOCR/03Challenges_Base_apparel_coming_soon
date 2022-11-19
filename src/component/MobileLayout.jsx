import Head from "./Head";
import Image from "./Image";
import Main from "./Main";
const MobileLayout = () => {
  return (
    <>
      <Head />
      <div className='content'>
        <Image />
        <Main />
      </div>
    </>
  );
};

export default MobileLayout;
