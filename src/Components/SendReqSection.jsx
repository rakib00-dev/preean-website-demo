import { Link } from 'react-router-dom';
import Button from './Button';

const SendReqSection = ({ title, button }) => {
  return (
    <section className="mx-auto my-15 w-full max-w-7xl">
      <div className="mx-5">
        <div className="w-full relative text-center py-6 rounded-md flex-col gap-10 leading-10 bg-yellow-400 h-auto justify-center items-center md:flex md:rounded-xl xl:rounded-2xl">
          {title ? (
            title
          ) : (
            <h1 className="text-xl px-8 mt-15 mb-4 font-extrabold md:text-4xl xl:text-6xl">
              Send your request today. <br />
              Get your design tomorrow.
            </h1>
          )}
          {button ? (
            button
          ) : (
            <div className="flex flex-col mb-15 gap-5 md:mb-0 md:flex-row">
              <a href="">
                <Button
                  text={'Get Started'}
                  className={'text-white hover:bg-white hover:text-black'}
                />
              </a>
              <Link to="/book-a-call">
                <Button
                  text={'Book A Call'}
                  className={
                    'border-gray-700 border-2 hover:border-blue-500 hover:text-blue-500'
                  }
                  bg="transparent"
                />
              </Link>
            </div>
          )}
          <div className="bg-pink-500 rounded-bl-lg rounded-br-lg w-15 h-10 absolute inset-[0%_6.375rem_auto_auto] right-5 z-12 md:w-20 md:h-16 md:right-10"></div>
          <div className="bg-[#0a32c3] rounded-tl-lg rounded-tr-lg w-15 h-10 absolute bottom-0 left-5 z-12 md:w-20 md:h-16 md:left-10"></div>
        </div>
      </div>
    </section>
  );
};

export default SendReqSection;
