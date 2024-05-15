import { defineComponent } from "vue";
export default defineComponent({
    name: "AtButton",
    props: {},
    setup() {
        return () => {
            return <div>button</div>;
        };
    },
});
