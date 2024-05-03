"use client";
export default function SortControl({ options, currentOption }) {
  const onChange = (event) => {
    const value = event.target.value;
    console.log(value);
  };

  const listItems = options.map((item) => (
    <option key={item} data-testid="select-option">
      {item}
    </option>
  ));
  return (
    <>
      <label htmlFor="sortList" className="">
        SORT BY
      </label>
      <select
        id="sortList"
        data-testid="select"
        value={currentOption}
        className="select ml-3"
        onChange={onChange}
      >
        {listItems}
      </select>
    </>
  );
}
