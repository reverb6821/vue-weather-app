<template>
    <span class="text-weight-bold">
        {{ Math.round(props.value) }}°
    </span>
</template>

<script lang="ts" setup>
const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
});
</script>