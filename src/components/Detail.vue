<template>
      {{movie}}
    <div v-if="movie" id="detail">
        <movie-item v-bind:movie="movie">
            <div class="movie-details">
                <p class="movie-genre">{{ movie.Genre }}</p>
                <p class="movie-plot">{{ movie.Plot }}</p>
                <table>
                    <tr><td>Released date: </td><td>{{ movie.Released }}</td></tr>
                    <tr><td>Running time: </td><td>{{ movie.Runtime }}</td></tr>
                    <tr><td>Director: </td><td>{{ movie.Director }}</td></tr>
                    <tr><td>Cast: </td><td>{{ movie.Actors }}</td></tr>
                    <tr><td>Country</td><td>{{movie.Country}}</td></tr>
                    <tr v-if="movie.imdbRating"><td>IMDb</td><td >{{movie.imdbRating}}</td></tr>
                </table>
            </div>
        </movie-item>
      <div class = "week-list" >
         <div class="week-list-item"
              v-for ="item in weekList"
              :key="item.id"
              v-on:click="selectedDay(movie.Sessions, item.text)"
         >
           {{formatSessionDate(item.text)}}
         </div>
      </div>

      <SeatsGrid />

      <div class="movie-sessions" v-if="sessions.length">
         <div
            v-for="session in sessions"
            class="session-time-wrapper tooltip-wrapper"
            v-tooltip="{ seats: session.seats }"
            v-bind:key="session.id"
         >
          <div class="session-time">{{ formatSessionTime(session.time) }}</div>
         </div>
      </div>
        <div class = "movie-trailer">
          <iframe width="100%" height="630" :src=movie.Trailer title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="home">
            <router-link v-bind:to="{ name: 'home' }">Back to results</router-link>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import MovieItem from './MovieItem.vue';
    import SeatsGrid from "./SeatsGrid.vue";

    export default {
        components: {
            MovieItem,
            SeatsGrid
        },
        data: () => ({
          movie: {},
          weekList: [
            {id:0, text: '2017-04-04T00:45:00.000Z'},
            {id:1, text: '2017-04-05T00:45:00.000Z'},
            {id:2, text: '2017-04-06T00:45:00.000Z'},
            {id:3, text: '2017-04-07T00:45:00.000Z'},
            {id:4, text: '2017-04-08T00:45:00.000Z'},
            {id:5, text: '2017-04-09T00:45:00.000Z'},
            {id:6, text: '2017-04-10T00:45:00.000Z'}
          ],
          sessions: []
        }),
        mounted() {
          axios
              .get(`http://localhost:4000/film/byID/${this.$route.params.id}`)
              .then(response => {
                return this.movie = response.data
              });
        },
        methods: {
          selectedDay(list, date) {
            this.sessions = list.filter((item) => {
              const formatDate = date.split('T')[0]
              const formatItemDate = item.time.split('T')[0]

              if (formatDate === formatItemDate) {
                return true
              }
              return false
            })
          },
          formatSessionTime(raw) {
            return this.$moment(raw).format('ddd h:mm A');
          },
          formatSessionDate(raw) {
            return this.$moment(raw).format('dddd D/M');
          }
      },
    }
</script>
