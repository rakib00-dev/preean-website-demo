import DumbbellShape from './DumbbellShape';
import RoundedStar from './RoundedStar';
import SemiCircle from './SemiCircle';
import TriangleShape from './TriangleShape';

const PageHeader = ({
  pageTitle = 'Our Work',
  pagePara = 'Check out some of the latest creations we did for our customers',
  children,
}) => {
  return (
    <section className="w-full max-w-7xl overflow-hidden">
      <div className="relative py-10 bg-[#f0f3f8]">
        <div className="top-10 -right-30 absolute z-10 hidden md:block">
          <SemiCircle
            className={
              'absolute top-0 right-0 w-[18rem] opacity-95 rotate-90 SendReqSemiCircleAnima '
            }
          />
          <RoundedStar
            className={
              'absolute top-0 right-0 w-[20rem] opacity-80 SendReqRoundedStarAnima rotate-90 '
            }
            fill="#ef457e"
          />
        </div>
        <div className="grid place-items-center mx-auto gap-5">
          <p className="text-sm  text-blue-800 bg-blue-100 px-2 py-1 rounded-full">
            {pageTitle}
          </p>
          <h2
            className={`font-extrabold text-[1.55rem] text-center w-[95%] mb-4 leading-8 md:text-6xl md:text-center md:w-4/5 lg:leading-16`}
          >
            {pagePara}
          </h2>
        </div>
        <div className="top-10 -left-30 absolute hidden md:block">
          <TriangleShape
            className={
              'absolute top-0 w-[26rem] opacity-100 SendRedTriangleShapeAnima rotate-270 hidden md:block'
            }
          />
          <DumbbellShape
            className={
              'absolute top-0 w-[20rem] opacity-80 SendRedDumbbellShapeAnima hidden md:block'
            }
          />
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

// const PageHeader = ({
//   pageTitle = 'Our Work',
//   pagePara = 'Check out some of the latest creations we did for our customers',
//   children,
// }) => {
//   return (
//     <section className="mx-auto w-full max-w-7xl">
//       <div className="relative">
//         <div
//           className={`flex flex-col justify-center gap-2 items-center lg:gap-4`}
//         >
//           <h2
//             className={`font-extrabold text-[1.85rem] text-center w-full mb-4 leading-8 lg:text-center min-[450px]:w-full md:text-[3rem] lg:w-full lg:leading-13`}
//           >
//             {pageTitle}
//           </h2>
//           <p className={`text-center text-xl px-2 w-full md:px-0 md:text-2xl `}>
//             {pagePara}
//           </p>
//           {children ? (
//             children
//           ) : (
//             <div className="flex absolute px-5 top-0 items-center justify-between z-10 w-full">
//               <img
//                 src="/images/ourworkpage/yellow-squre.svg"
//                 alt="this is a yello element which is use to inchnge the design quality"
//                 loading="lazy"
//                 className="w-10 left-[10%] absolute -top-5 md:w-24"
//               />
//               <div className="absolue left-[25%] grid w-full">
//                 <img
//                   src="/images/ourworkpage/ring.svg"
//                   alt="this is a ring element which is use to inchnge the design quality"
//                   loading="lazy"
//                   className="hidden top-30 absolute  left-[20%] md:block md:top-35 md:left-[25%]"
//                 />
//                 <img
//                   src="/images/ourworkpage/blue-squre.svg"
//                   alt="this is a blue squre element which is use to inchnge the design quality"
//                   loading="lazy"
//                   className="hidden bottom-5 left-[35%] absolute md:block"
//                 />
//               </div>

//               <img
//                 src="/images/ourworkpage/tringle.svg"
//                 alt="this is a tringle element which is use to inchnge the design quality"
//                 loading="lazy"
//                 className="w-10 absolute top-5 right-[10%] md:right-[25%] md:w-8"
//               />
//               <img
//                 src="/images/ourworkpage/double-squre.svg"
//                 alt="this is a tringle element which is use to inchnge the design quality"
//                 loading="lazy"
//                 className="hidden absolute -bottom-30 right-[10%] md:block"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PageHeader;
