var app = new Vue({
  el: '#app',
  data: {
    url: '',
    hdurl: '',
    title: '',
    description: '',
  },
  mounted() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => res.json())
      .then(({ url, hdurl, title, explanation }) => {
        this.url = url
        this.hdurl = hdurl
        this.title = title
        this.description = explanation
      })
      .catch((err) => console.log(err))
  },
})
