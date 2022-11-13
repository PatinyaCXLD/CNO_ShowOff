<template>
  <div>
    <div>this is onclick dropdown</div>
    <button class="p-2 bg-slate-400" @click="dropdown=!dropdown">Menu</button>
    <div class="rounded-lg bg-red-400 animate-fadeIn" v-if="dropdown">
        Hello mother father
    </div>

    <div>this is onchange</div>
    <input class="p-2 border-2" type="text" id="text" @change="count=add(count)">
    <div>
        count is {{count}}
    </div>
    <div>this is v-model</div>
    <input v-model="name" placeholder="enter something" class="p-2 border-2">
    <p>This is what you type: {{name}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            count:0,
            dropdown:false,
            name:"",
        }
    },
    methods : {
        add(count) {
            let value = document.getElementById("text").value;
            return count + (Number(value));
        }
    }
}
</script>

<style>

</style>