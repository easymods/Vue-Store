<template>
    <v-container
    class="fill-height"
    >
    <v-row
        align="center"
        justify="center"
    >
        <v-col
        cols="12"
        sm="8"
        md="10"
        >
            <v-card class="elevation-12">
                <v-toolbar
                color="green darken-1"
                dark
                flat
                >
                <v-toolbar-title>Login Form</v-toolbar-title>
                <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                <v-form>
                    <v-text-field
                    color="green darken-1"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                    ></v-text-field>

                    <v-text-field
                    color="green darken-1"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    ></v-text-field>

                </v-form>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" dark>Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>