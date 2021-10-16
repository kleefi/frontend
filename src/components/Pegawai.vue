<template>
  <div class="table-container">
    <table class="table is-fullwidth">
      <thead>
        <th>Nama</th>
        <th>Umur</th>
        <th>Jabatan</th>
      </thead>
      <tr v-for="pgws in pegawais" :key="pgws.id">
        <td>{{ pgws.nama_pegawai }}</td>
        <td>{{ pgws.umur_pegawai }}</td>
        <td>{{ pgws.jabatan }}</td>
        <td>
          <router-link :to="{ name: 'SingleView', params: { id: pgws.id } }"
            >Lihat</router-link
          >
          |
          <router-link :to="{ name: 'EditView', params: { id: pgws.id } }"
            >Edit</router-link
          >
          |
          <a href="" @click.prevent="deletePegawai(pgws.id)">Delete</a>
        </td>
      </tr>
    </table>
    <router-link to="Add">Add</router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      url: "http://127.0.0.1:8000/api",
      pegawais: "",
    };
  },
  created() {
    this.showPegawai();
  },
  methods: {
    async showPegawai() {
      await axios.get(this.url).then((resp) => (this.pegawais = resp.data));
    },
    async deletePegawai(id) {
      await axios.delete(`${this.url}/${id}`);
      this.showPegawai();
    },
  },
};
</script>