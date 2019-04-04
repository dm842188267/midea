<template>
  <div id="app">
  	<router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
	.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
	}
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		outline: none;
	}
	body{
		font-family: Helvetica,sans-serif;
		line-height: 1.5;
		background: #f4f4f4;
	}
	a{
		text-decoration: none;
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		-webkit-user-select: none;
		-moz-user-focus: none;
		-moz-user-select: none;
	}
	.router-link-active{
		color: #0092d8;
	}
</style>
