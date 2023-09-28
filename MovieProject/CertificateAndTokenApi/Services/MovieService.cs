using CertificateAndTokenApi.DTO;
using CertificateAndTokenApi.Interfaces;

namespace CertificateAndTokenApi.Services
{
    public class MovieService : IMovieService
    {
        static List<MovieDto> movies = new List<MovieDto>();
        static int id = 6;

        public List<MovieDto> GetMovies()
        {
            if (movies.Count == 0)
            {
                movies.Add(new MovieDto
                {
                    Id = "1",
                    Title = "The Matrix",
                    ReleaseDate = "01/01/1999",
                    ImgSrc = "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
                });
                movies.Add(new MovieDto
                {
                    Id = "2",
                    Title = "The Shawshank Redemption",
                    ReleaseDate = "02/05/1996",
                    ImgSrc = "https://imusic.b-cdn.net/images/item/original/281/5051892225281.jpg?shawshank-redemption-the-dvds-2019-shawshank-redemption-dvd&class=scaled&v=1576939668"
                });
                movies.Add(new MovieDto
                {
                    Id = "3",
                    Title = "The Green Mile",
                    ReleaseDate = "08/06/1994",
                    ImgSrc = "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg"
                });
                movies.Add(new MovieDto
                {
                    Id = "4",
                    Title = "Die Hard",
                    ReleaseDate = "11/29/1986",
                    ImgSrc = "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                });
                movies.Add(new MovieDto
                {
                    Id = "5",
                    Title = "Iron Man",
                    ReleaseDate = "03/15/2004",
                    ImgSrc = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"
                });
                movies.Add(new MovieDto
                {
                    Id = "6",
                    Title = "The Lord of the Rings: The Fellowship of the Ring",
                    ReleaseDate = "12/19/2001",
                    ImgSrc = "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
                });
                movies.Add(new MovieDto
                {
                    Id = "7",
                    Title = "Legend",
                    ReleaseDate = "09/03/2015",
                    ImgSrc = "https://m.media-amazon.com/images/M/MV5BMjE0MjkyODQ3NF5BMl5BanBnXkFtZTgwNDM1OTk1NjE@._V1_.jpg"
                });
                movies.Add(new MovieDto
                {
                    Id = "8",
                    Title = "Stillwater",
                    ReleaseDate = "07/08/2021",
                    ImgSrc = "https://m.media-amazon.com/images/M/MV5BN2IzMTUyMDUtZGJmZC00YWMzLWFhMGMtZjQwMTkzMzViMjFkXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
                });
                movies.Add(new MovieDto
                {
                    Id = "9",
                    Title = "The Gentlemen",
                    ReleaseDate = "12/03/2019",
                    ImgSrc = "https://assets-p-dfi.pqcloud.eu/preview/DeyPRv63K0z85vLzs9utiK/previews/maxWidth_1200_maxHeight_1200.jpg/*/DeyPRv63K0z85vLzs9utiK_mini.jpg?authcred=R3Vlc3Q6R3Vlc3Q="
                });
                movies.Add(new MovieDto
                {
                    Id = "10",
                    Title = "John Wick: Chapter 4",
                    ReleaseDate = "03/13/2023",
                    ImgSrc = "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg"
                });
                movies.Add(new MovieDto
                {
                    Id = "11",
                    Title = "Napoleon",
                    ReleaseDate = "11/20/2023",
                    ImgSrc = "https://m.media-amazon.com/images/M/MV5BNDU2ZmFkMmYtMWQ4Mi00ZGM0LTljNzEtZGZjYzJmMzYxNTMwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
                });

            }

            return movies;
        }

        public List<MovieDto> CreateMovie(MovieDto movie)
        {
            movie.Id = id.ToString();
            movies.Add(movie);
            id++;
            return movies;
        }

        public List<MovieDto> UpdateMovie(MovieDto movie)
        {
            int idx = movies.IndexOf(movies.Where(x => x.Id == movie.Id).SingleOrDefault(movie));
            movies[idx] = movie;
            return movies;
        }

        public List<MovieDto> DeleteMovie(string id)
        {
            movies.Remove(movies.Where(x => x.Id == id).SingleOrDefault() ?? new MovieDto());
            return movies;
        }
    }
}
