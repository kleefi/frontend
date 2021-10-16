<template>
  <div>
    <h1 class="nama">Update Pegawai</h1>
    <form @submit.prevent="updatePegawai">
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
            placeholder="umur"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-primary">Update</button><br />
          <a href="/">Back</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: "http://127.0.0.1:8000/api",
      nama: "",
      umur: "",
      jabatan: "",
    };
  },
  created() {
    this.getPegawayById();
  },
  methods: {
    async getPegawayById() {
      try {
        const response = await axios.get(
          `${this.url}/${this.$route.params.id}`
        );
        (this.nama = response.data.nama_pegawai),
          (this.umur = response.data.umur_pegawai),
          (this.jabatan = response.data.jabatan);
      } catch (error) {
        console.log(error);
      }
    },
    async updatePegawai() {
      try {
        await axios.put(`${this.url}/${this.$route.params.id}`, {
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