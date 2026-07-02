const CustomTooltip = ({ payload, label }) => {
  return (
    <div className="bg-white dark:bg-dark-primary p-4 rounded-lg shadow-md flex gap-2 border border-gray-700 dark:border-gray-700">
        <span>درآمد {label}:</span>
        <span>{payload[0]?.value} تومان</span>
    </div>
  )
};

export default CustomTooltip;
