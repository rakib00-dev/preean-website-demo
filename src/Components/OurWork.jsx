import Button from './Button';

const OurWork = () => {
  return (
    <section className="mx-auto w-full wax-w-7xl my-20">
      <div className="mx-3 md:mx-16">
        <div
          className={`flex flex-col justify-center gap-2 items-center md:gap-4 md:items-start md:my-8`}
        >
          <h1
            className="uppercase font-extrabold text-[.85rem] md:text-[.9rem]"
            style={{ color: 'var(--colors-pink)' }}
          >
            our work
          </h1>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 lg:text-start min-[450px]:w-full md:text-[2.1rem] lg:w-full lg:text-[2.5rem] lg:leading-13`}
          >
            Your one-stop shop for all your creatives
          </h2>
        </div>

        <div className="grid grid-rows-1 md:grid-cols-3 gap-4">
          <div className="grid gap-4">
            <div className="relative">
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../images/ourwork/social-media-graphic.avif"
                  alt=""
                  loading="lazy"
                />
              </a>
              {/* <h3 className="absolute bottom-15">Social Media Graphic</h3> */}
            </div>
            <div>
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../images/ourwork/website.avif"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../images/ourwork/illustration.avif"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../images/ourwork/logos.avif"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../images/ourwork/motion-graphic.gif"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="../images/ourwork/display-adds.avif"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt=""
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          {/* <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                alt=""
                loading="lazy"
              />
            </div>
          </div> */}
        </div>
        <div className="flex justify-center items-center mx-auto my-8 w-full md:my-12">
          <a href="">
            <Button
              text={'All Our Works'}
              className={
                'transition-all border-blue-500 bg-transparent text-blue-500 border-2 hover:bg-blue-500 hover:border-black hover:text-black'
              }
              bg="transparent"
            />{' '}
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
