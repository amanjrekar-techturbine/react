function Card({title, btnTex="Visit Me"}) {

  return (
    <>
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 mt-5">
        <img
          className="w-full h-48 object-cover"
          src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
          alt="Card Image"
        />

        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 mt-2 text-sm">
            This is a simple Tailwind CSS card component with an image, title,
            and description.
          </p>

          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              {btnTex}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
