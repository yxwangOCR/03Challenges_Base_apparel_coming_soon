import Head from "./Head";
import Image from "./Image";
import Main from "./Main";

const DesktopLayout = () => {
  return (
    <>
      <div className='content'>
        <Head />
        <Main />
      </div>
      <Image />
    </>
  );
};

export default DesktopLayout;
