<template>
    <v-container>
        <h1 class="mb-5">Contact Us</h1>
        <v-form
            align="center"
            justify="center"
            class="form-width"
        >
            <v-container>
            <v-row >
                <v-col
                cols="12"
                md="6"
                >
                <v-text-field
                    label="First name"
                    required
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="6"
                >
                <v-text-field
                    label="Last name"
                    required
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="12"
                >
                <v-text-field
                    label="E-mail"
                    required
                ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                <v-textarea
                name="input-7-1"
                label="Your Message"
                ></v-textarea>
                </v-col>
                <v-btn block color="secondary" dark>Send</v-btn>
            </v-row>
            </v-container>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>