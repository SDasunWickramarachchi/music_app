import axios from 'axios';

  export default {
    methods:{
      search(event){
        var key = event.target.value;
        axios.get("https://api.spotify.com/v1/search?q="+ key +"&type=track")
          .then(response=>{
            console.log(response.data)
          })
          .catch(e=>{
            this.error.push(e)
          })
      }
    }
  }