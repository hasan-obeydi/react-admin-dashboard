const SectionTitle = ({ title, buttons }) => {
  return (
    <div className="flex items-center justify-between mt-2">
      <h2 className="text-2xl font-bold">{title}</h2>
      {buttons && <div className="flex items-center gap-2">{buttons}</div>}
    </div>
  );
};

export default SectionTitle;
