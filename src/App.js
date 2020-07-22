import React from "react";
import axios from "axios";
import Movies from "./movies";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading"
          : movies.map((movie) => (
              <Movies
                key={movie.id}
                title={movie.title}
                id={movie.id}
                year={movie.year}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                summary={movie.summary}
              />
            ))}
      </div>
    );
  }
}

export default App;
