<!-- @format -->

<template>
	<div class="about">
		<h1 v-for="(persona, indexSercicio) in consulta" :key="indexSercicio"
    :prueba="persona.nombre">
			{{ prueba }}
		</h1>
		<p>
			{{ prueba }}
		</p>
	</div>
</template>

<script lang="ts">
//import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      prueba: 'hola'
    }
  },
	computed: {
		...mapGetters(['consulta']),
	},
};
</script>
