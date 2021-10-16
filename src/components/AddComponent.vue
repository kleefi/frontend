<template>
  <div>
    <form @submit.prevent="saveProduct">
      <div class="field">
        <label class="label">Nama</label>
        <div class="control">
          <input type="text" v-model="nama" class="input" placeholder="nama" />
        </div>
      </div>
      <div class="field">
        <label class="label">Umur</label>
        <div class="control">
          <input type="text" v-model="umur" class="input" placeholder="umur" />
        </div>
      </div>
      <div class="field">
        <label class="label">Jabatan</label>
        <div class="control">
          <input
            type="text"
            v-model="jabatan"
            class="input"
            placeholder="jabatan"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary">Save</button>
        </div>
      </div>
    </form>
    <a href="/">Home</a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: "http://127.0.0.1:8000/api/",
      nama: "",
      umur: "",
      jabatan: "",
    };
  },

  methods: {
    async saveProduct() {
      try {
        await axios.post(this.url, {
          nama_pegawai: this.nama,
          umur_pegawai: this.umur,
          jabatan: this.jabatan,
        });

        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>