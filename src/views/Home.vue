<template>
  <v-layout fill-height>
    <v-main class="container">
      <v-row align="center">
        <v-col>

          <div>
            <h1> Welcome </h1>
          </div>

          <div class="my-2" align="center">
            <v-btn color="#43A047" dark x-large class="btn1" href="/registo">
              Login
            </v-btn>
            <v-btn color="#43A047" dark x-large class="ml-10 btn2" href="/registar">
              Signup
            </v-btn>
          </div>

          <div class="my-3 pl-50 " align="center">
            <a href="/produto">Continue as Guest</a>
          </div>

        </v-col>
      </v-row>
    
    </v-main>
  </v-layout>
</template>





<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* height: 100vh; */
  
}
h1{
  font-size: 100px;
}

.bt1.btn2{
  
}

</style>
