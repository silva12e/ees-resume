<template>
  <div class="experience">
    <div class="experience__header">
      <Header
          @onComplete="onComplete()"
          :text="headerText">
      </Header>
    </div>

    <div class="timeline">
      <ul class="timeline__list">
        <li class="timeline__list__item"
            v-for="(info, index) in timeline_data" v-bind:key="index">
          <span></span>
          <div class="timeline__list__item-organization">{{ info.organization }}</div>
          <div class="timeline__list__item-summary">{{ info.summary }}</div>
          <div class="timeline__list__item-summary">{{ info.link }}</div>
          <div class="timeline__list__item-summary"><img src="src/assets/medeo-logo.svg" alt=""></div>
          <div class="timeline__list__item-year">
            <span>{{ info.end_at }}</span>
            <span>{{ info.start_at }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/shared/header";
  export default {
    name: 'Experience',
    components: { Header },
    data: function() {
      return {
        headerText: 'Experience',
        timeline_data: [
          {
            "organization":"QHR Technologies",
            "summary":"Front end software development",
            "link": 'project-link',
            "start_at":"2018",
            "end_at":"Now"
          },
          {
            "organization":"Mazu Technologies",
            "summary":"Front end software development",
            "link": 'project-link',
            "start_at":"2017",
            "end_at":"2018"
          },
          {
            "organization":"Aquanode Interactive",
            "summary":"Front end software development",
            "link": 'project-link',
            "start_at":"2016",
            "end_at":"2017"
          }
        ]
      }
    },
    methods: {
      onComplete() {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .experience {
    background: linear-gradient(-45deg, #23d5ab, #23a6d5);
    display: flex;
    width: 100vw;
    flex-direction: column;

    &__header {
      color: black !important;
      width: 100%;
      padding: 20px;
    }
  }

  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  $font-stack: 'Montserrat', sans-serif;
  $font-color: #fff;
  $bg-color: #fff;
  $dark-blue: #fff;
  $light-blue: #4e9bfa;

  @mixin clearfix {
    content: '';
    position: absolute;
    top: 0; left: 0;
  }
  @mixin set-border($thickness, $color, $radius) {
    border: $thickness solid $color;
    border-radius: $radius;
  }

  .timeline {
    padding: 5px 45px;
    display: flex;
    justify-content: center;

    &__list {
      position: relative;
      margin-left: 20px;
      align-self: center;

      &::before {
        @include clearfix();
        height: 100%;
      }

      &__item {
        position: relative;
        margin: 60px 35px;
        width: 100%;
        list-style: none;
        line-height: 25px;

        & > span {
          @include clearfix();
          left: -25px;
          height: 110%;
          @include set-border(4px, $font-color, none);
        }

        & > span::before, & > span::after {
          @include clearfix();
          width: 14px;
          height: 14px;
          @include set-border(3px, $font-color, 50%);
          left: -7px;
          background: $light-blue;
        }

        & > span::before {
          top: -15px;
        }

        & > span::after {
          top: 100%;
        }

        div {
          &:nth-child(2) {
            font-size: 1.2em;
          }

          &:nth-child(3),
          &:nth-child(4) {
            font-size: 1em;
            color: $font-color;
          }
        }

        &-year span {
          position: absolute;
          font-size: 1em;
          left: -85px;
          width: 40px;
          text-align: right;

          &:first-child {
            top: -20px;
          }

          &:last-child {
            top: 100%;
          }
        }
      }
    }
  }
</style>
