interface IProps {
  country: {
    country: string;
    emoji: string;
  };
}
function CountryItem({ country }: IProps) {
  return (
    <li className='flex flex-col items-center gap-1 bg-base-100 shadow-md hover:scale-[0.99] transition-all duration-300 hover:shadow-sm rounded-lg py-4 px-8 border-l-4 border-primary cursor-pointer  '>
      <span className='text-5xl'>{country.emoji}</span>
      <span className='font-bold'>{country.country}</span>
    </li>
  );
}

export { CountryItem };
