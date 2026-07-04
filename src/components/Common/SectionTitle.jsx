const SectionTitle = ({ title, buttons }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-2">{title}</h2>
      {buttons && <div className="flex items-center gap-2">{buttons}</div>}
    </div>
  );
};

export default SectionTitle;
