<template>
  <div id="seatMap" />
</template>

<script>
export default {
  name: "SeatsGrid",
  methods: {
    createGrid() {
    }
  },
  mounted() {
    this.createGrid();
  }
}
</script>

<style scoped>
div.seatCharts-container {
  /*min-width: 700px;*/
}
div.seatCharts-cell {
  height: 36px;
  width: 36px;
  margin: 3px;
  float: left;
  text-align: center;
  outline: none;
  font-size: 13px;
  line-height:36px;
  color: white;
}
div.seatCharts-seat {
  background-color: white;
  color: white;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  cursor: default;
  border: 1px solid grey;
}
div.seatCharts-seat:focus {

}
/*
.seatCharts-seat:focus {
	outline: none;
}
*/

div.seatCharts-space {
  background-color: white;
}
div.seatCharts-row {
  height: 50px;
}

div.seatCharts-row:after {
  clear: both;
}

div.seatCharts-seat.selected {
  background-color: aqua;
}

div.seatCharts-seat.focused {
  background-color: black;
  position: relative;
}

div.seatCharts-seat.focused:after {

}

div.seatCharts-seat.available {
  background-color: white;
  color: black;
}

div.seatCharts-seat.unavailable {
  background-color: red;
  cursor: not-allowed;
}

ul.seatCharts-legendList {
  list-style: none;
}
li.seatCharts-legendItem {
  margin-top: 10px;
  line-height: 2;
}
</style>