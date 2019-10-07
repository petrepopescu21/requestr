<template>
  <div>
    <v-form ref="requestForm" v-model="formValid">
      <form-gen
        v-if="ready"
        :schema="schema"
        :model="dataObject"
        :options="{debug: false, disableAll: false, autoFoldObjects: false, foldable: true, accordionMode: 'normal'}"
      ></form-gen>
    </v-form>
    <!-- <pre v-if="outData.globalParams">{{ JSON.stringify(outData, null, 2) }}</pre> -->
    <pre>{{ JSON.stringify(dataObject, null, 2)}} </pre>
  </div>
</template>

<script>
import FormGen from "../formGenerator";
import axios from "axios";
export default {
  components: { FormGen },
  data() {
    return {
      dataObject: {},
      ready: false,
      formValid: false
    };
  },
  asyncComputed: {
    async schema() {
      try {
        let schemaResponse = await axios.get(
            //need a better place to host the schema
          "https://raw.githack.com/petrepopescu21/itec.schema/master/main.json"
        );
        //   console.log(schemaResponse)
        this.ready = true;
        return schemaResponse.data
      } catch (e) {
        //handle error
      }
    }
  }
};
</script>

<style>
</style>