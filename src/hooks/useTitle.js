import { useEffect } from "react";

const useTitle = (titlePage) => {
  useEffect(() => {
    document.title = titlePage;
  }, [titlePage]);
};

export default useTitle;
