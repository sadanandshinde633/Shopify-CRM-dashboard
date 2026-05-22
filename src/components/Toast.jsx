function Toast({ message }) {

  if (!message) return null;

  return (
    <div className="fixed top-6 right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg z-50 animate-bounce">

      {message}

    </div>
  );
}

export default Toast;