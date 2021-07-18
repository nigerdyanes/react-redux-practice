import React from "react";
import { connect } from "react-redux";
import Card from "../components/Card";

const Home = ({ users, favorites, setFavorite }) => {

  return (
    <>
      <div className="container">
        <h1 className="text-center">List users</h1>
        <div className="row">
          {users.map((user) => (
            <div className="col-3 mt-2" key={user.id}>
              <Card user={user} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h1 className="text-center">Selected</h1>
        <div className="row">
          {favorites.map((user) => (
            <div className="col-3 mt-2" key={user.id}>
              <Card user={user} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  favorites: state.favorites,
});


export default connect(mapStateToProps, null)(Home);
