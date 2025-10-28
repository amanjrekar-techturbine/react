
function Button({ title="Black", color="black", setColor = () => {} }) {
  return (
    <>
      <button onClick={() => setColor(color)} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor: color}} >{title}</button>
    </>
  );
}

export default Button;
