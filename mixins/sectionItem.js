import {bus} from "../src/main";

export default {
    data () {
        return {
            isHovered: false,
            active:false
        }
    },
    methods:{
        sectionIsClicked (index) {
            this.active = index
            this.index = index
            bus.$emit('sectionIsClicked',index)
        }
    }
}