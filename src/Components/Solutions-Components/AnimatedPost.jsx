import { Link } from 'react-router-dom';
import SecondTypeSection from '../SecondTypeSection';
import Button from '../Button';

const AnimatedPost = () => {
  return (
    <section className="my-26">
      <SecondTypeSection
        smallTitle="CREATE ANIMATED POSTS"
        bigTitle="Animate your social media designs"
        paraChildren={
          <p className="mx-auto text-xl text-center mb-5 md:w-[80%]">
            Looking for something a bit more dynamic? We offer Motion Graphics
            and Video Editing Services as part of our Business and Designated
            Designer plans.
          </p>
        }
        btnChild={
          <Link to="/pricing" className="my-5">
            <Button
              text={'Pick A Plan'}
              className={
                'transition-all text-lg text-blue-400 border-blue-300 border-2 hover:text-blue-300 hover:border-gray-200'
              }
              bg="transparent"
            />
          </Link>
        }
      >
        <div className=" justify-center items-center w-11/12 mx-auto md:flex gap-5">
          <div className=" flex justify-center gap-5 items-center w-full flex-col  text-center mb-5 rounded-lg">
            <img
              src="../images/solutionPage/social-media/animated-post-img/first_animated_social_media_gif.gif"
              alt=""
              loading="lazy"
            />
          </div>
          <div className=" flex justify-center gap-5 items-center w-full flex-col  text-center mb-5 rounded-lg">
            <img
              src="../images/solutionPage/social-media/animated-post-img/second_animated_social_media_gif.gif"
              alt=""
              loading="lazy"
            />
          </div>
          <div className=" flex justify-center gap-5 items-center w-full flex-col  text-center mb-5 rounded-lg">
            <img
              src="../images/solutionPage/social-media/animated-post-img/third_animated_social_media_gif.gif"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </SecondTypeSection>
    </section>
  );
};

export default AnimatedPost;
