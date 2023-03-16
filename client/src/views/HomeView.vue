<script setup lang="ts">
// Here we add the imports 
</script>

<template>
  <div class="columns">

    <div class="column">
      <div class="wrapper">
        <div class="title">Welcome!</div>
        <div class="text">
          On this application you will be able to count your calories, for a healthier life.
        </div>

        <br /><br />

        <p class="explanation">
          Counting calories can help people reach and maintain their weight and fitness goals,
          as it involves tracking how much energy is going into the body each day.
          Several apps and online tools can estimate how many daily calories a person needs
          to reach their goals and help track them day by day.
        </p>

        <br /><br />

        <p class="explanation">
          Max calories per day: 3,000 calories
          <progress class="progress is-warning" value="100" max="100">75%</progress>
          Daily calories for men: 2,500 calories
          <progress class="progress is-warning" value="75" max="100">75%</progress>
          Daily calories for women: 2,000 calories
          <progress class="progress is-warning" value="60" max="100">75%</progress>
        </p>

      </div>
    </div>

    <div class="column">
      <img class="burger" src="@/assets/Burger_Final.png" alt="burger" width="500" height="500">
      <img src="@/assets/Burger_Final.png" alt="eating" width="150" height="150">
    </div>

  </div>

  <br/><br/>

</template>

<style scoped>
.burger {
  background-color: antiquewhite;
  border-style: solid;
  border-width: 1rem;
  border-color: darkorange;
  border-radius: 20rem;
  margin: 2rem;
  padding: 2.5rem;
}

.title {
  color: white;
  font-size: 4rem;
  font-weight: bold;
  display: inline-block;
  margin: 1rem;
}

.text {
  color: sienna;
  font-size: x-large;
  font-weight: bold;
  display: inline-block;
  margin-left: 1rem;
}

.explanation {
  color: darkslategray;
  display: inline-block;
  margin-left: 1rem;
}

.calories {
  color: sienna;
  font-style: italic;
  font-weight: bold;
}

.eating {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
