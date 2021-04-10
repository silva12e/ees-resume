<template>
  <div class="skills">
    <div class="skills-container">
      <div class="skills-title">
        <span class="title">Skills</span>
      </div>
      <chart :items="Skills"></chart>
    </div>
    <div class="skills-container">
      <div class="skills-title">
        <span class="title">Tools</span>
      </div>
      <div class="pills">
        <pill v-for="item in productivity"
              v-bind:key="item.id"
              :text="item.text">
        </pill>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/shared/chart";
import Pill from "@/components/shared/pill";

export default {
  name: "skills",
  components: {Pill, Chart },
  data() {
    return {
      Skills: [
        { id: 0, title: 'Web development', strength: 95 },
        { id: 1, title: 'Front-End/UI', strength: 90 },
        { id: 2, title: 'Back-End/API', strength: 70 },
        { id: 3, title: 'Devops', strength: 60 },
        { id: 4, title: 'Design', strength: 70 },
      ],
      productivity: [
        { id: 0, text: 'Jenkins' },
        { id: 1, text: 'Github' },
        { id: 2, text: 'Ansible' },
        { id: 3, text: 'Angular' },
        { id: 4, text: 'Vue.js' },
        { id: 5, text: 'Node.js' },
        { id: 6, text: 'Jasmine' },
        { id: 7, text: 'Karma' },
        { id: 8, text: 'Cypress.io' },
        { id: 9, text: 'Css/SCSS' },
        { id: 10, text: 'SQL' },
        { id: 11, text: 'Java' },
        { id: 12, text: 'Php' },
        { id: 13, text: 'Azure / Azure Devops' },
        { id: 14, text: 'WebRtc' },
        { id: 15, text: 'Material Design' },
        { id: 16, text: 'Jira' },
        { id: 17, text: 'Swift' },
        { id: 18, text: 'Ionic' },
        { id: 19, text: 'SEO' },
        { id: 20, text: 'Wordpress' },
        { id: 21, text: 'Sketch' },
      ]
    }
  },
}
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
}

.skills-container {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: flex-start;
}

.title {
  color: #ffff;
  align-self: center;
}

.skills-title {
  margin-bottom: 20px;
}

.pills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
</style>
