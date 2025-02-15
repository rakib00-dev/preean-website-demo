const Button = ({
  px = '20',
  py = '10',
  border = 'md',
  fontSize,
  text,
  bg = 'var(--blue-primary)',
  className,
  children,
  style = {
    background: `${bg}`,
    padding: `${py}px ${px}px`,
  },
}) => {
  return (
    <span
      className={` w-fit rounded-${border} font-bold text-${fontSize} bg-${bg} transition-all ${className}`}
      style={style}
    >
      {children}
      {text}
    </span>
  );
};

export default Button;
