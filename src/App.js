import React from 'react';
import updateMovies from './store/actions/updateMovies';
import { connect } from 'react-redux';

import './App.css';

class App extends React.Component {
  /*componentDidMount() {
    const {updateMovies} = this.props;
    updateMovies();
  }*/

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <p>{this.props.movies.name}</p>
        <button 
        onClick={this.props.updateMovies}>
          Cambiar peli
        </button>
      </div>
    );
  }
};

//coge de la store los datos que necesita el componente
const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

//dispatch (dispara) la acción
const mapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies)
  }
}

//connect para que el componente acceda a la store
export default connect(mapStateToProps, mapDispatchToProps) (App);
