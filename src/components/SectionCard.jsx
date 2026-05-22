function SectionCard({ title, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mt-8 p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {title}
      </h2>

      {children}

    </div>
  );
}

export default SectionCard;