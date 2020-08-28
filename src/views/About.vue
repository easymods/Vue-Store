<template>
  <v-container>
    <v-layout row>
      <h1 class="mb-5">About Us</h1>
    <div class="ut-padding">
      <v-sheet color="grey lighten-3 pa-4">
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
        a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
        and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 
        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
        very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" 
        by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      </v-sheet>
    </div>
      <v-flex sm12>
        <v-row>
          <v-col
          cols="12"
          md="6"
          sm="6"
          xs="1"
          v-for="(card, i) in cards" :key="i"
          >
            <v-card
              class="mx-auto"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-avatar
                  left
                  tile
                  size="80"
                ><v-icon class='about-card-icon'>{{ card.icon }}</v-icon></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-subtitle class="mb-1 sub-headline">{{ card.subheader }}</v-list-item-subtitle>
                  <v-list-item-title class="headline">{{ card.header }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { icon: 'supervised_user_circle', subheader: 'Total Guests', header: "250.000+" },
        { icon: 'store', subheader: 'Cities', header: "15.000+" },
        { icon: 'redeem', subheader: 'Products', header: "5000+" },
        { icon: 'language', subheader: 'Countries', header: "17+" },
      ]
    })
  }
</script>

<style scoped>
p {
  line-height: 26px;
  text-align: justify;
}

.about-card-icon {
  color: rgb(28, 185, 7);
  font-size: 75px;
}

.ut-padding {
  padding: 20px 0;
}

.headline {
  font-size: 25px !important;
}

.sub-headline {
  font-size: 15px !important;
  text-transform: uppercase;
}
</style>
