const Button = ({
  px = '20',
  py = '10',
  border = 'md',
  fontSize,
  text,
  bg = 'var(--blue-primary)',
  className,
  children,
}) => {
  return (
    // <a
    //             href="/#"
    //             className="rounded-md bg-blue-500 px-7 py-3 text-base font-medium text-white hover:bg-blue-500/90"
    //           >
    //             Book A Call
    //           </a>
    <span
      className={` w-fit rounded-${border} font-bold text-${fontSize} bg-${bg} transition-all ${className}`}
      style={{
        background: `${bg}`,
        padding: `${py}px ${px}px`,
      }}
    >
      {children}
      {text}
    </span>
  );
};

export default Button;
