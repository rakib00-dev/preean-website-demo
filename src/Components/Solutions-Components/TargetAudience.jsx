import FirstTypeSection from '../FirstTypeSection';

const TargetAudience = () => {
  return (
    <section className="mt-[7rem]">
      <FirstTypeSection
        smallTitle={'REACH YOUR TaRGET AUDIENCE'}
        bigTitle={'Maximize your social media channels'}
        para={
          'Attract, engage, and convert potential clients with a professionally designed graphics and videos for all your social media platforms.'
        }
        imgSrc={'./images/solutionPage/social-media/reach-your-target.webp'}
        textContentAlign="end"
        style={{ position: 'relative' }}
        contentClass={'lg:flex-row-reverse'}
      />
    </section>
  );
};

export default TargetAudience;
