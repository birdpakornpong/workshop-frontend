<template>
  <section class="column">
    <div class="form-layout">
        <header class="card-header">
            <p class="card-header-title has-text-grey test">
            {{ title }}
            </p>
        </header>
        <section class="section-form">
            <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)">
                    <!-- <ValidationProvider v-slot="{ errors }" rules="required|password" tag="div" class="my-2">
                        <b-field 
                        label="Password" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-input v-model="form.passwordValue" type="password"></b-input>
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider> -->

                    <ValidationProvider v-slot="{ errors }" rules="required|min|max" tag="div" class="my-2">
                        <b-field 
                        label="Name" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-input v-model="form.name"></b-input>
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider>

                    <ValidationProvider v-slot="{ errors }" rules="required" tag="div" class="my-2">
                        <b-field 
                        label="Sku" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-input v-model="form.sku"></b-input>
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider>

                    <!-- <ValidationProvider v-slot="{ errors }" rules="required" tag="div" class="my-2">
                        <b-field 
                        label="Status" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-input v-model="form.status"></b-input>
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider> -->

                    <ValidationProvider v-slot="{ errors }" rules="required|numeric" tag="div" class="my-2">
                        <b-field 
                        label="value" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-input v-model="form.product_price.value"></b-input>
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider>

                    <ValidationProvider v-slot="{ errors }" tag="div" class="my-2">
                        <b-field 
                        label="condition" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-input v-model="form.product_price.condition"></b-input>
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider>

                    <b-field label="Description"
                        :label-position="labelPosition">
                        <b-input v-model="form.description" maxlength="200" type="textarea"></b-input>
                    </b-field>

                    <!-- <ValidationProvider v-slot="{ errors }" rules="required|email|max" tag="div" class="my-2">
                        <b-field label="Email"
                            :label-position="labelPosition"
                            :type="{ 'is-danger': errors[0] }"
                            >
                            <b-input v-model="form.email"></b-input>
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider>

                    <ValidationProvider v-slot="{ errors }" rules="required|numeric|l10" tag="div" class="my-2">
                        <b-field 
                        label="PhoneNo" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-input v-model="form.phoneNo"></b-input>
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider>

                    <ValidationProvider v-slot="{ errors }" rules="required" tag="div" class="my-2">
                        <b-field 
                        label="DateTime" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-datetimepicker
                                v-model="form.dateTime"
                                rounded
                                placeholder="Click to select..."
                                icon="calendar-today"
                                horizontal-time-picker>
                            </b-datetimepicker>
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider>

                    <ValidationProvider v-slot="{ errors }" rules="required" tag="div" class="my-2">
                        <b-field 
                        label="Date" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-datepicker
                                v-model="form.date"
                                placeholder="Click to select..."
                                icon="calendar-today"
                                trap-focus>
                            </b-datepicker>                        
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider> -->

                    <!-- text Area -->
                    <!-- <b-field label="Message"
                        :label-position="labelPosition">
                        <b-input maxlength="200" type="textarea"></b-input>
                    </b-field>

                    <ValidationProvider v-slot="{ errors }" rules="required" tag="div" class="my-2">
                        <b-field 
                        label="Select" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-select  v-model="form.select" placeholder="Select a subject">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </b-select>                    
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider> -->
                    <ValidationProvider v-slot="{ errors }" rules="required" tag="div" class="my-2">
                        <b-field 
                        label="Status" 
                        :label-position="labelPosition"
                        :type="{ 'is-danger': errors[0] }"
                        >                
                            <b-select  v-model="form.status" placeholder="Select a subject">
                                <option value="1">Active</option>
                                <option value="2">Inactive</option>
                            </b-select>                    
                            <span v-if="errors[0]" class="warnning">{{ errors[0] }}</span>
                        </b-field>
                    </ValidationProvider>
                </form>
            </ValidationObserver>
        </section>

        <!-- <footer class="card-footer">
            <div class="card-footer-item">
                <b-button :disabled="isAbleToSubmit !== true" type="is-primary">Primary</b-button>
                <b-button disabled type="is-primary is-light">Primary Light</b-button>
            </div>
        </footer> -->
    </div>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email, numeric } from 'vee-validate/dist/rules'

export default {
    name: "Form",
    components: {
      ValidationObserver,
      ValidationProvider,
    },
    props: {
        title: {
        type: String,
        required: true
        },
        form: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            labelPosition: 'on-border',
            isDisabled: true,
            // form: {
            //     name: "",
            //     email: "",
            //     phoneNo: "",
            //     passwordValue: "",
            //     dateTime: null,
            //     date: null,
            //     select: null,
            // },  
        }
    },
    computed: {
        isAbleToSubmit() {
            const { ...data } = this.form;

            return Object.values(data || {}).reduce((isValid, value) => isValid && !!value, true);
        },
    },
    mounted() {
        this.rulesOptions()
    },
    methods: {
        // onSubmit() {
        //     this.$emit('onSubmit')
        //     console.log('1',)
        // },
        rulesOptions() {
            extend('numeric', {
                ...numeric,
                message: 'phoneNo is number'
            });
            extend('l10', {
                validate(value) {
                    return value.length === 10
                },
                message: 'phoneNo must have 10 characters'
            });
            extend('email', {
                ...email,
                message: 'Invalid format email'
            });
            extend('required', {
                ...required,
                message: "The field is request"
            })
            extend('min', {
                validate(value) {
                    return value.length > 8
                },
                message: 'The field must have at least 8 characters'
            })
            extend('max', {
                validate(value) {
                    return value.length < 20
                },
                message: 'The field must have at most 20 characters'
            })  
            extend('password', {
                validate(value) {
                    const tester = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/g
                    const isMatch = !tester.test(String(value))
                    return !isMatch
                },
                message: 'Password format'
            })     
        },  
    },
}
</script>
<style lang="scss" scoped>
.form-layout {
    width: 400px;
}
.section-form {
    padding: 1em;
}
.warnning {
    color: red;
}
</style>
