<!-- @format -->

<template>
	<div class="about">
		<h1 v-for="(persona, id) in consulta" :key="id">
			{{ persona.id }}
			{{ persona.nombre }}
			{{ persona.apellido }}
		</h1>
		<input type="text" placeholder="nombre" v-model="variable" />
    <input type="text" placeholder="nombre" v-model="variable1" />
		<button v-on:click="consulta1(variable, variable1)">enviar</button>
	</div>
</template>

<script lang="ts">
//import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapMutations } from 'vuex';

export default {
	data() {
		return {
			variable: '',
		};
	},
	computed: {
		...mapGetters(['consulta']),
	},
	methods: {
		...mapMutations(['consulta1']),
		agregar() {
			console.log('hola');
		},
	},
};
</script>
