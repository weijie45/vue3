<template>
    <svg :class="svgClass" aria-hidden="true" :width="width" :height="height">
        <use :xlink:href="iconName" :fill="color"  />
    </svg>
</template>
   
<script>
import { computed, defineComponent } from 'vue'
export default defineComponent({
    props: {
        name: {
            type: String,
            Boolean,
            required: true
        },
        className: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#889aa4'
        },
        width:{
            type: Number,
            default: '20'
        },
        height:{
            type: Number,
            default: '20'
        }
    },
    setup(props) {
        return {
            iconName: computed(() => `#icon-${props.name}`),
            svgClass: computed(() => {               
                if (props.className) {
                    return `svg-icon ${props.className}`
                }
                return 'svg-icon'
            }),
            
        }
    }
})
</script>
   
<style scoped>
.svg-icon {
    fill: currentColor;
    vertical-align: middle;
    color: inherit;
    outline: none;
}
</style>