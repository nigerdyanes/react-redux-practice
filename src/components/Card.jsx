import React from "react";
import { connect } from "react-redux";
import { addFavorite } from "../actions";

const Card = ({ user, addFavorite }) => {
  const handleFavorite = (user) => {
    addFavorite(user);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{user.fullName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
          <p className="card-text">{user.description}</p>
          <div className="container">
            <div className="row">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => handleFavorite(user)}
              >
                Add Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  addFavorite,
};

export default connect(null, mapDispatchToProps)(Card);
