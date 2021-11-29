import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { collectDonors } from "../../../../redux/ac/confirmedAC";
import ConfirmedPerson from "../ConfirmedPerson/ConfirmedPerson";

export default function ConfirmedList({ confirmedList }) {
  const dispatch = useDispatch();

  const { id } = useParams();

  const handleCollect = () => {
    dispatch(collectDonors(id));
  };

  return (
    <div className="container">
      <h3>Confirm Donors:</h3>
      <ul className="list-group">
        {confirmedList?.map(
          (confirmed) =>
            !confirmed?.status && (
              <ConfirmedPerson key={confirmed?.id} confirmed={confirmed} />
            )
        )}
        {confirmedList?.length > 0 ? (
          <button type="button" className="btn btn-success my-2" onClick={handleCollect}>
            Collect
          </button>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
