<template>
    <v-container>
        <h1 class="mb-5">Register</h1>
        
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
        <ValidationObserver>
            <ValidationProvider v-slot="{ errors }" name="Password" rules="required|min:6">
                <v-text-field type="password"
                v-model="password"
                :error-messages="errors"
                label="Password"
                ></v-text-field>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="repeatPassword" rules="required|password:@Password">
                <v-text-field type="password"
                v-model="repeatPassword"
                :error-messages="errors"
                label="Repeat Password"
                ></v-text-field>
            </ValidationProvider>
        </ValidationObserver>
        <div class="mt-5">
            <v-btn class="mr-4" type="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
        </div>
        </form>
        </ValidationObserver>
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

    extend('min', {
    ...min,
    message: 'Password may not be less than {length} characters',
    })

    extend('email', {
    ...email,
    message: 'Email must be valid',
    })

    extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target;
    },
    message: 'Password confirmation does not match'
    });

    export default {
        data: () => ({
            email: '',
            password: '',
            repeatPassword: '',
        }),
        components: {
            ValidationProvider,
            ValidationObserver,
        },
        methods: {
        onSubmit () {
            alert('Form has been submitted!');
        },
        clear () {
            this.email = ''
            this.password = ''
            this.repeatPassword = ''
            this.$refs.observer.reset()
        },
        },
    }
</script>


<style scoped>

</style>