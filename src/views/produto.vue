<template >
    <v-container >
      <input type="text" v-model="pesquisa" v-on:keyup.enter="procura(pesquisa)" placeholder="Search for Restaurant">
          <v-btn color="#29B6F6" @click="procura(pesquisa)"  >Search</v-btn>
         
          <hr/>
        <div class="row">
         
        <!-- Lista favoritos -->
        <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

            <div class="colunaFav">

                <div v-if="favoritos.length >0">
                  <h3>Favoritos </h3>
                  <div v-for="(fav, index) in favoritos" :key="index">
                      {{fav.nome}}{{info.Title}} <v-icon x-small @click="removeFav(index)">mdi-close-circle-outline</v-icon>
                  </div>
                </div>

          </div>
<!-- Lista Produtos -->
    
      <div class="colunaProduct">
        <v-card min-width="450" max-width="550" min-height="600" max-height="800"
            class="mx-auto my-2  " v-for="(item, index) in info" :key="index">
            <v-card-text max-width="450" min-height="670" class="poster">
                    <v-img  v-if="item.Poster != 'N/A'" width="510" height="350" :src="item.imagem"></v-img>
                    <v-img v-else width="450" height="400" :src="not_found" ></v-img>
              </v-card-text>
                <v-card-title class="name">
                    {{item.nome}}  <br>
                </v-card-title>
                <v-card-title class="film" >
                  <v-icon>mdi-clock</v-icon> <v-card-title>{{item.horario}} </v-card-title>
                  
                </v-card-title>
                <v-card-title  class="film">
                    <v-icon >mdi-phone</v-icon> <v-card-title min-height="100">{{item.contacto}} </v-card-title>
                </v-card-title>
                <v-card-title  class="film">
                    <v-icon class="cursor" v-on:click.native='btnClick2(item.map)' target="_blank">mdi-map-marker</v-icon> <v-card-title min-height="100">{{item.localizacao}} </v-card-title>
                </v-card-title>
                <v-card-title  class="film" v-if="item.lotacao <= 15">
                    <v-icon color="#43A047">mdi-account </v-icon> <v-card-title min-height="100">{{item.lotacao}} </v-card-title>|
                    <v-card-title min-height="100">{{20-item.lotacao}} Seats available </v-card-title>
                </v-card-title>
                <v-card-title  class="film" v-if="item.lotacao >= 16 && item.lotacao < 20">
                    <v-icon color="#EF6C00">mdi-account </v-icon> <v-card-title min-height="100">{{item.lotacao}} </v-card-title>| 
                    <v-card-title min-height="100">{{20-item.lotacao}} Seats available </v-card-title>
                </v-card-title>
                <v-card-title  class="film" v-if="item.lotacao == 20 ">
                    <v-icon color="#D32F2F">mdi-account </v-icon><v-card-title min-height="100">{{item.lotacao}} </v-card-title>|
                    <v-card-title min-height="100">{{20-item.lotacao}} Seats available </v-card-title>
                </v-card-title>
                
                <v-card-actions >
                <v-btn elevation="15" outlined color="#29B6F6" text @click="favorito(item)">
                  Save as Favorite
                </v-btn>
                <v-card-text >
                 <v-btn elevation="15"  color="#66BB6A" id="link" href="#" style="text-transform: capitalize;" v-on:click.native='btnClick(item.trip)' target="_blank"> tripAdvisor </v-btn>
                </v-card-text>
                
              </v-card-actions>
          </v-card >
      </div>
  </div>
   </v-container>
</template>

<style>


.name{
  justify-content: center;
  font-weight: bold;
}
.admin{
    background-color: lightgrey;
}
.Filmes{
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  background-color: lightgrey;
}
.poster{
  display: flex;
  justify-content: center;
}
.row {
  display: block;
  margin: auto;
}
.colunaProduct {
  flex: 80%;
  padding: 10px;
  display: grid;
  gap: 4px;
  align-items: center;
  justify-items: center;
  grid-template-columns: auto auto auto;
  grid-row-gap: 25px;
}
.film {
  text-transform: capitalize;
  display: table;
  table-layout: fixed;
  width: 100%;
  word-break: break-word;
  flex-grow: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  justify-content: left;
  min-height: 10px;
  max-height: 60px;
}
.colunaFav {
  flex: 40%;
  padding: 10px;
}
.v-btn:hover {
  text-decoration: underline;
  
}
.cursor{
  cursor: pointer;
}

</style>



<script>
import axios from "axios";
export default {
  data() {
    return {
      not_found: "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png" , 
      info: null,
      favoritos: [],
      vertical: true,
      multiLine: true,
      snackbar: false,
      text: `Already on Favorites`,
      
    };
  },
  mounted() {
    var that = this;
    axios
      .get("https://projetoihc-f0990-default-rtdb.firebaseio.com/.json")
      .then(response => (this.info = response.data));
    console.log(that.info);
  },
  methods: {
    favorito(item) {
      if (this.favoritos.indexOf(item ) === -1){
        this.favoritos.push(item);
        
      }else {
        this.snackbar = true;
      }
      console.log(this.favoritos);
    },
    removeFav(item){
      this.favoritos.splice(item, 1)
    },
    procura(pesquisa) {
      axios.get("http://www.omdbapi.com/?s="+ encodeURIComponent(pesquisa) + "&apikey=47a567fc&" )
      .then(response => (this.info = response.data.Search));
    },
   
    btnClick(link) {
      window.open(link);
    },

    btnClick2(link2){
      window.open(link2)
    }
  },
  beforeCreate: function(){
    document.body.className = 'Filmes'
  }
};
</script>