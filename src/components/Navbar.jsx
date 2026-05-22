function Navbar({ openModal }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 flex justify-between items-center">

      <h2 className="text-3xl font-bold text-gray-800">
        Dashboard
      </h2>

      <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl font-medium"
      >
        Connect Shopify
      </button>

    </div>
  );
}

export default Navbar;