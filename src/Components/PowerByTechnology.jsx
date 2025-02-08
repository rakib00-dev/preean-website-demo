import FirstTypeSection from './FirstTypeSection';

const PowerByTechnology = () => {
  return (
    <section className="mt-[7rem]">
      <FirstTypeSection
        smallTitle={'what if there was a solution?'}
        bigTitle={'Meet your virtual design team'}
        para={
          'ManyPixels provides you with vetted designers for a flat monthly fee. No hiring, no contracts, no stress.'
        }
        imgSrc={'./images/FirstTypeImg/powered-by.png'}
        textContentAlign="end"
        style={{ position: 'relative' }}
        contentClass={'lg:flex-row-reverse'}
      />
    </section>
  );
};

export default PowerByTechnology;
