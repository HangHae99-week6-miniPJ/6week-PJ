import { useState } from "react";

const Category = () => {
  const [searchCat, setSearchCat] = useState("");

  return (
    <input
      type="text"
      placeholder="검색하기"
      style={{ marginTop: 10, marginBottom: 10, width: "70%" }}
      onChange={(e) => {
        setSearchCat(e.target.value);
      }}
    />
  );
};

export default Category;
