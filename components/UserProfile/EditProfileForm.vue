<template>
  <card>
    <h5 slot="header" class="title">Team Details</h5>
    <form>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Name"
            :disabled="true"
            placeholder="Anshul Mishra"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Name"
            :disabled="true"
            placeholder="Aman Negi"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Roll Number"
            :disabled="true"
            placeholder="41220902717"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Roll Number"
            :disabled="true"
            placeholder="41520902717"
          >
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Year"
            :disabled="true"
            placeholder="CSE VII Sem"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="text"
            label="Year"
            :disabled="true"
            placeholder="CSE VII Sem"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input label="About Project">
          
          <h5><small>This project focuses on creating a Covid-19 pandemic database with live analytics being stored
               and projected on the website. The purpose of this project was to create a source of to-the-point information 
               regarding the current scenario in India with meaningful statistical insights on the same data. 
               The website has tried to personalize information for every viewer by providing live data for individual states of the country.
                In this way, any interested viewer can get an outlook on the situation in their own states. The project has a lot of future
                 scope in the areas of statistical analysis and a more defined information presentation on the website with
                  new information coming every day like the assignment of zones according to the severity of the situation in any
                   particular geographic area.
                   </small></h5>
          </base-input>
        </div>
      </div>
    </form>
  </card>
</template>

<script>
export default {
  methods: {},
};
</script>

<style></style>
