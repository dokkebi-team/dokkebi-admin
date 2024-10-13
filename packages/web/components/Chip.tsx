export interface ChipProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Chip = ({ children, ...rest }: ChipProps) => {
  return (
    <button
      className="canhover:bg-[#005212] canhover:text-white inline-flex h-[2rem] items-center justify-center rounded-[4.25rem] border-2 border-[#005212] bg-white px-5 text-[0.765rem] text-[#005212] shadow-[0_2px_0_0_rgba(8,214,115,0.7)] transition-colors active:bg-[#005212] active:text-white md:h-[2.5rem] md:px-6 md:text-[1rem]"
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Chip;
