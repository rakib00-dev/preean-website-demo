import FirstTypeSection from './FirstTypeSection';

const BetterSolution = () => {
  return (
    <section className="mt-[7rem]">
      <FirstTypeSection
        smallTitle={'what if there was a solution?'}
        bigTitle={'Meet your virtual design team'}
        para={
          'ManyPixels provides you with vetted designers for a flat monthly fee. No hiring, no contracts, no stress.'
        }
        imgSrc={'./images/FirstTypeImg/better-solution.avif'}
        textContentAlign="end"
        style={{ right: '-13px', position: 'relative' }}
        contentClass={'lg:flex-row-reverse'}
      />
    </section>
  );
};

export default BetterSolution;
