<template>
  <div>
    Nama : {{ nama }} | Umur : {{ umur }} | Jabatan : {{ jabatan }}<br />
    <a href="/">Back</a>
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
  },
};
</script>