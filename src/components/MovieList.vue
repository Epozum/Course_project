<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <movie-item v-for="movie in filteredMovies" v-bind:movie="movie">
            </movie-item>
        </div>
        <div v-else-if="movies.length" class="no-results">
            {{ noResults }}
        </div>
        <div v-else class="no-results">
            Loading...
        </div>
    </div>
</template>
<script>
    import genres from '../util/genres';
    import times from '../util/times';
    import MovieItem from './MovieItem.vue';
    import axios from "axios";

    export default {
        props: [ 'genre', 'time', 'day' ],
        data: () => {
            return {
                movies: [],
            }
        },
        mounted() {
          axios
              .get(`http://localhost:4000/film/list`)
              .then(response => {
                return this.movies = response.data
              });
        },
        methods: {
            formatSessionTime(raw) {
                return this.$moment(raw).format('h:mm A');
            },
            filteredSessions(sessions) {
                return sessions.filter(this.sessionPassesTimeFilter);
            },
            moviePassesGenreFilter(movie) {
                if (!this.genre.length) {
                    return true;
                } else {
                    let movieGenres = movie.Genre.split(", ");
                    let matched = true;
                    this.genre.forEach(genre => {
                        if (movieGenres.indexOf(genre) === -1) {
                            matched = false;
                        }
                    });
                    return matched;
                }
            },
            sessionPassesTimeFilter(session) {
              console.log(this.$moment(session.time))
                if (!this.day.isSame(this.$moment(session.time), 'day')) {
                    return false;
                } else if (this.time.length === 0 || this.time.length === 2) {
                    return true;
                } else if (this.time[0] === times.AFTER_6PM) {
                    return this.$moment(session.time).hour() >= 18;
                } else {
                    return this.$moment(session.time).hour() < 18;
                }
            }
        },
        computed: {
            filteredMovies() {
                return this.movies
                        .filter(this.moviePassesGenreFilter)
                        .filter(movie => movie.Sessions.find(this.sessionPassesTimeFilter));
                ;
            },
            noResults() {
                let times = this.time.join(', ');
                let genres = this.genre.join(', ');
                return `No results for ${times}${ times.length && genres.length ? ', ' : '' }${genres}.`;
            }
        },
        components: {
            MovieItem
        }
    }
</script>
