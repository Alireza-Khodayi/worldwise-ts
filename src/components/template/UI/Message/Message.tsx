interface IProps {
  message: string;
}
function Message({ message }: IProps) {
  return (
    <p className='text-center text-xl font-semibold mx-auto my-8 w-[80%]'>
      <span role='img'>📌</span>
      {message}
    </p>
  );
}

export { Message };
