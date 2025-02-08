import Button from './Button';

const SendReqSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="w-full">
        <div className="w-full flex-col gap-10 mx-10 bg-yellow-400 h-40 justify-center items-center md:flex">
          <h1 className="text-2xl">
            Send your request today. <br />
            Get your design tomorrow.
          </h1>
          <div className="flex gap-5">
            <a href="">
              <Button text={'Get Started'} />
            </a>
            <a href="">
              <Button
                text={'Book A Call'}
                className={'border-gray-700 border-2'}
                bg="transparent"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendReqSection;
