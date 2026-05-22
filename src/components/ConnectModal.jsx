import { useState } from "react";

function ConnectModal({ isOpen, onClose, showToast }) {

  const [storeUrl, setStoreUrl] = useState("");
  const [connected, setConnected] = useState(false);

  if (!isOpen) return null;

  const handleConnect = () => {

    if (storeUrl.trim() === "") return;

    setConnected(true);

    setTimeout(() => {

      showToast("Shopify Store Connected Successfully!");

      setTimeout(() => {
        showToast("");
      }, 3000);

      onClose();
      setConnected(false);
      setStoreUrl("");

    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Connect Shopify Store
        </h2>

        {!connected ? (
          <>
            <input
              type="text"
              placeholder="Enter Shopify Store URL"
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-end gap-3">

              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={handleConnect}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl"
              >
                Connect
              </button>

            </div>
          </>
        ) : (
          <div className="text-center">

            <div className="text-green-600 text-5xl mb-4">
              ✓
            </div>

            <h3 className="text-2xl font-bold text-gray-800">
              Store Connected!
            </h3>

          </div>
        )}

      </div>

    </div>
  );
}

export default ConnectModal;