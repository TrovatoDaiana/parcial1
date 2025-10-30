<template>
  <div class="container py-3">
    <h2>Conversor de Temperatura</h2>

    <div class="mb-3">
      <label for="celsius" class="form-label">Ingrese Temperatura °C</label>
      <input id="celsius" type="number" v-model.number="celsius" class="form-control w-25 d-inline-block" />
    </div>

    <p class="mb-2">Conv Temperatura °F:
      <span :class="colorClass">{{ displayFahrenheit }}</span>
    </p>

    <p class="mb-2">Conv Temperatura °K:
      <span :class="colorClass">{{ displayKelvin }}</span>
    </p>

  </div>
</template>

<script>
export default {
  name: 'ConversorTemperatura',
  data() {
    return {
      celsius: null,
    }
  },
  computed: {
    fahrenheit() {
      if (this.celsius === null || this.celsius === '' || Number.isNaN(Number(this.celsius))) return null
      return Number(this.celsius) * 9 / 5 + 32
    },
    kelvin() {
      if (this.celsius === null || this.celsius === '' || Number.isNaN(Number(this.celsius))) return null
      return Number(this.celsius) + 273.15
    },
    displayFahrenheit() {
      return this.fahrenheit === null ? '' : Number(this.fahrenheit.toFixed(2))
    },
    displayKelvin() {
      return this.kelvin === null ? '' : Number(this.kelvin.toFixed(2))
    },
    colorClass() {
      if (this.celsius === null || this.celsius === '' || Number.isNaN(Number(this.celsius))) return ''
      const c = Number(this.celsius)
      if (c <= 0) return 'temp-blue'
      if (c > 0 && c < 15) return 'temp-magenta'
      return 'temp-red'
    },
  },
}
</script>

<style scoped>

.temp-blue { color: blue; }
.temp-magenta { color: magenta; }
.temp-red { color: red; }

label { display: inline-block; margin-top: 8px; margin-bottom: 6px; }
input[type="number"] { margin-left: 6px; padding: 4px 6px; }
h2 { margin-bottom: 8px; }
</style>
