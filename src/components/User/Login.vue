<template>
    <v-container>
        <div>
            <h1 class="mb-5">Login</h1>
        
            <ValidationObserver ref="observer" v-slot="{ handleSubmit, reset }">
            <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">
                <v-text-field
                v-model="email"
                :error-messages="errors"
                label="Email"
                required
                ></v-text-field>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
                <v-text-field type="password"
                v-model="password"
                :error-messages="errors"
                label="Password"
                ></v-text-field>
            </ValidationProvider>
            <v-btn class="mr-4 mt-5" type="submit">submit</v-btn>
            </form>
            </ValidationObserver>
        </div>
    </v-container>
</template>

<script>
import { required, email, min, password } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

    setInteractionMode('eager')

    extend('required', {
    ...required,
    message: '{_field_} can not be empty',
    })

    extend('email', {
    ...email,
    message: 'Email must be valid',
    })

    export default {
        data: () => ({
            email: '',
            password: '',
        }),
        components: {
            ValidationProvider,
            ValidationObserver,
        },
        methods: {
            onSubmit() {
                alert('You have logged succesfully')
            }
        }
    }
</script>

<style scoped>

</style>