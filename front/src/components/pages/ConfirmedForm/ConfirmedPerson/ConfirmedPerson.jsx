import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateDonor } from "../../../../redux/ac/confirmedAC";
export default function ConfirmedPerson({ confirmed }) {
  const [liters, setLiters] = useState("0");

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setLiters(e.target.value);

    const mL = +e.target.value;
    dispatch(updateDonor(confirmed.id, mL));
  };
  return (
    <li className="list-group-item">
      {confirmed.name}
      <input
        type="number"
        min="0"
        step=".100"
        max="1"
        placeholder="количество в L"
        value={liters}
        onChange={handleOnChange}
      />
    </li>
  );
}
