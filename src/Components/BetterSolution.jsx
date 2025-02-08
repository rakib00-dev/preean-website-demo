import FirstTypeSection from './FirstTypeSection';

const BetterSolution = () => {
  return (
    <>
      <FirstTypeSection
        smallTitle={'what if there was a solution?'}
        bigTitle={'Meet your virtual design team'}
        para={
          'ManyPixels provides you with vetted designers for a flat monthly fee. No hiring, no contracts, no stress.'
        }
        imgSrc={'./images/FirstTypeImg/better-solution.avif'}
        contentClass={'lg:flex-row-reverse'}
      />
    </>
  );
};

export default BetterSolution;
