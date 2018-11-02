<template>
  <div class="col-12">
    <div class="suggestions">
      <div class="sd-title">
        <h3>Suggestions</h3>
        <i class="la la-ellipsis-v"/>
      </div>

      <div class="suggestions-list">
        <div class="suggestion-usd">
          <img src="http://via.placeholder.com/35x35" alt=""/>
          <div class="sgt-text">
            <h4>Jessica William</h4>
            <span>Graphic Designer</span>
          </div>
          <span><i class="la la-plus"/></span>
        </div>
        <div class="suggestion-usd">
          <img src="http://via.placeholder.com/35x35" alt=""/>
          <div class="sgt-text">
            <h4>John Doe</h4>
            <span>PHP Developer</span>
          </div>
          <span><i class="la la-plus"></i></span>
        </div>
        <div class="suggestion-usd">
          <img src="http://via.placeholder.com/35x35" alt=""/>
          <div class="sgt-text">
            <h4>Poonam</h4>
            <span>Wordpress Developer</span>
          </div>
          <span><i class="la la-plus"></i></span>
        </div>
        <div class="suggestion-usd">
          <img src="http://via.placeholder.com/35x35" alt=""/>
          <div class="sgt-text">
            <h4>Bill Gates</h4>
            <span>C & C++ Developer</span>
          </div>
          <span><i class="la la-plus"></i></span>
        </div>
        <div class="suggestion-usd">
          <img src="http://via.placeholder.com/35x35" alt=""/>
          <div class="sgt-text">
            <h4>Jessica William</h4>
            <span>Graphic Designer</span>
          </div>
          <span><i class="la la-plus"></i></span>
        </div>
        <div class="suggestion-usd">
          <img src="http://via.placeholder.com/35x35" alt=""/>
          <div class="sgt-text">
            <h4>John Doe</h4>
            <span>PHP Developer</span>
          </div>
          <span><i class="la la-plus"></i></span>
        </div>
        <div class="view-more">
          <a href="#" title="">View More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuggestionList'
}
</script>

<style lang="sass" scoped>
  .suggestions
    background-color: #fff
    margin-bottom: 20px
    border-left: 1px solid #e5e5e5
    border-right: 1px solid #e5e5e5
    border-bottom: 1px solid #e5e5e5

  .sd-title
    width: 100%
    padding: 20px
    border-bottom: 1px solid #e5e5e5
    position: relative

  .sd-title h3
    color: #000000
    font-size: 18px
    font-weight: 600

  .sd-title i
    color: #b7b7b7
    font-size: 30px
    position: absolute
    right: 5px
    top: 15px

  .suggestions-list
    width: 100%
    padding: 13px 0 30px 0

  .suggestion-usd
    width: 100%
    padding: 15px 20px

  .suggestion-usd img
    -webkit-border-radius: 100px
    -moz-border-radius: 100px
    -ms-border-radius: 100px
    -o-border-radius: 100px
    border-radius: 100px

  .sgt-text
    padding-left: 10px

  .sgt-text h4
    color: #000000
    font-size: 14px
    font-weight: 700
    margin-bottom: 4px

  .sgt-text span
    color: #686868
    font-size: 14px

  .suggestion-usd > span
    margin-top: 4px
    position: relative

  .suggestion-usd > span i
    color: #b2b2b2
    width: 30px
    height: 30px
    border: 1px solid #e5e5e5
    text-align: center
    line-height: 30px
    font-weight: 700
    cursor: pointer

  .suggestion-usd > span i:hover
    background-color: #e44d3a
    color: #fff

  .view-more
    width: 100%
    text-align: center
    padding-top: 10px

  .view-more > a
    color: #e44d3a
    font-size: 14px
    font-weight: 700

  .view-more > a:hover
    color: #e44d3a

</style>
