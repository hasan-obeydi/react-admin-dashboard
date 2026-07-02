import { generateSummaries } from "../../utils/home";
import SummayCard from "./components/SummayCard";

const Summaries = ({ productsLength, usersLength }) => {
  const summaries = generateSummaries({
    productsLength,
    usersLength,
    ordersLength: 10,
    ticketLength: 12,
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {summaries.map((summary) => (
        <SummayCard key={summary.id} {...summary} />
      ))}
    </div>
  );
};

export default Summaries;
