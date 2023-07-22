<script>
  import axios from "axios";
  // import dotenv from "dotenv";
  // dotenv.config();
  export default {
    data() {
      return {
        VUE_APP_BASE_URL: process.env.API_url,

        satellites: [],
        filteredSatellites: [],
        displayedSatellites: [],
        loading: true,
        expandedIndex: null,
        filters: {
          countryCode: "",
          orbitCode: "",
          objectType: "",
        },
        searchQuery: "",
        currentPage: 1,
        satellitesPerPage: 10,
      };
    },
    mounted() {
      console.log("mounted", this.VUE_APP_BASE_URL), this.getdata();

      // setTimeout(() => {
      //   this.filteredSatellites = [...this.satellites];
      //   this.loading = false;
      //   this.applyFilters();
      // }, 1000);
    },
    computed: {
      totalPages() {
        return Math.ceil(
          this.filteredSatellites.length / this.satellitesPerPage
        );
      },
    },
    methods: {
      getdata() {
        axios
          .get(this.VUE_APP_BASE_URL)
          .then((response) => {
            this.satellites = response.data;
            this.filteredSatellites = [...this.satellites];
            this.loading = false;
            this.applyFilters();
          })
          .catch((error) => {
            console.error("Error fetching satellite data:", error);
            this.loading = false;
          });
      },
      toggleAccordion(index) {
        this.expandedIndex = this.expandedIndex === index ? null : index;
      },

      applyFilters() {
        let result = [...this.satellites];

        // Apply filters
        if (this.filters.countryCode) {
          result = result.filter(
            (satellite) =>
              (satellite.countryCode &&
                satellite.countryCode
                  .toLowerCase()
                  .includes(this.filters.countryCode)) ||
              (satellite.countryCode &&
                satellite.countryCode.includes(this.filters.countryCode))
          );
        }
        if (this.filters.orbitCode) {
          result = result.filter(
            (satellite) => satellite.orbitCode === this.filters.orbitCode
          );
        }
        if (this.filters.objectType) {
          result = result.filter(
            (satellite) => satellite.objectType === this.filters.objectType
          );
        }

        // Apply search query
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          result = result.filter(
            (satellite) =>
              (satellite.noradCatId &&
                satellite.noradCatId.toLowerCase().includes(query)) ||
              (satellite.name && satellite.name.toLowerCase().includes(query))
          );
        }

        this.filteredSatellites = result;
        this.currentPage = 1;
        this.updateDisplayedSatellites();
      },
      updateDisplayedSatellites() {
        const startIndex = (this.currentPage - 1) * this.satellitesPerPage;
        const endIndex = startIndex + this.satellitesPerPage;
        this.displayedSatellites = this.filteredSatellites.slice(
          startIndex,
          endIndex
        );
      },
      previousPage() {
        this.currentPage -= 1;
        this.updateDisplayedSatellites();
      },
      nextPage() {
        this.currentPage += 1;
        this.updateDisplayedSatellites();
      },
      resetFilters() {
        // Reset all filters and search query
        this.filters.countryCode = "";
        this.filters.orbitCode = "";
        this.filters.objectType = "";
        this.searchQuery = "";

        // Reset filteredSatellites to the original array
        this.filteredSatellites = [...this.satellites];

        // Update the displayed satellites based on the reset filters
        this.updateDisplayedSatellites();
      },
    },
  };
</script>
<template>
  <div class="mainDiv">
    <div v-if="loading">Loading...</div>

    <div class="parrent" v-else>
      <div class="searchFilter">
        <div class="search">
          <input v-model="searchQuery" @input="applyFilters" />
          <!-- <button>&#128269</button> -->
          <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="filter">
          <div>
            <select
              name="countryCode"
              v-model="filters.countryCode"
              @change="applyFilters"
              id=""
            >
              <option disabled value="">Select Country Code</option>
              <option value="US">US</option>
              <option value="PRC">PRC</option>
              <option value="INDO">INDO</option>
              <option value="TBD">TBD</option>
              <option value="null">null</option>
              <option value="CIS">CIS</option>
              <option value="CA">CA</option>
              <option value="GER">GER</option>
              <option value="IND">IND</option>
              <option value="JPN">JPN</option>
              <option value="ITSO">ITSO</option>
              <option value="FR">FR</option>
              <option value="IT">IT</option>
              <option value="GLOB">GLOB</option>
              <option value="ESA">ESA</option>
              <option value="NICO">NICO</option>
              <option value="O3B">O3B</option>
              <option value="SES">SES</option>
              <option value="SPN">SPN</option>
              <option value="EUME">EUME</option>
              <option value="EUTE">EUTE</option>
              <option value="IM">IM</option>
              <option value="ALG">ALG</option>
              <option value="SWTZ">SWTZ</option>
              <option value="FIN">FIN</option>
              <option value="NZ">NZ</option>
              <option value="SVN">SVN</option>
              <option value="UK">UK</option>
              <option value="EGYP">EGYP</option>
              <option value="DEN">DEN</option>
              <option value="HUN">HUN</option>
              <option value="AUS">AUS</option>
              <option value="NATO">NATO</option>
              <option value="FGER">FGER</option>
              <option value="ARGN">ARGN</option>
              <option value="AB">AB</option>
              <option value="BRAZ">BRAZ</option>
              <option value="MEX">MEX</option>
              <option value="SWED">SWED</option>
              <option value="RP">RP</option>
              <option value="NETH">NETH</option>
              <option value="CZCH">CZCH</option>
              <option value="AC">AC</option>
              <option value="NOR">NOR</option>
              <option value="SKOR">SKOR</option>
              <option value="GREC">GREC</option>
              <option value="POR">POR</option>
              <option value="THAI">THAI</option>
              <option value="TURK">TURK</option>
              <option value="ORB">ORB</option>
              <option value="CZE">CZE</option>
              <option value="UKR">UKR</option>
              <option value="KAZ">KAZ</option>
              <option value="ISRA">ISRA</option>
              <option value="MALA">MALA</option>
              <option value="PAKI">PAKI</option>
              <option value="CHLE">CHLE</option>
              <option value="STCT">STCT</option>
              <option value="ISS">ISS</option>
              <option value="SAFR">SAFR</option>
              <option value="SEAL">SEAL</option>
              <option value="ABS">ABS</option>
              <option value="CHBZ">CHBZ</option>
              <option value="SAUD">SAUD</option>
              <option value="UAE">UAE</option>
              <option value="NIG">NIG</option>
              <option value="USBZ">USBZ</option>
              <option value="TWN">TWN</option>
              <option value="IRAN">IRAN</option>
              <option value="COL">COL</option>
              <option value="RASC">RASC</option>
              <option value="VTNM">VTNM</option>
              <option value="VENZ">VENZ</option>
              <option value="SING">SING</option>
              <option value="LUXE">LUXE</option>
              <option value="BELA">BELA</option>
              <option value="NKOR">NKOR</option>
              <option value="AZER">AZER</option>
              <option value="ASRA">ASRA</option>
              <option value="ECU">ECU</option>
              <option value="EST">EST</option>
              <option value="QAT">QAT</option>
              <option value="POL">POL</option>
              <option value="PER">PER</option>
              <option value="BOL">BOL</option>
              <option value="FRIT">FRIT</option>
              <option value="BEL">BEL</option>
              <option value="URY">URY</option>
              <option value="IRAQ">IRAQ</option>
              <option value="TMMC">TMMC</option>
              <option value="LAOS">LAOS</option>
              <option value="SVK">SVK</option>
              <option value="BGR">BGR</option>
              <option value="MA">MA</option>
              <option value="AGO">AGO</option>
              <option value="BGD">BGD</option>
              <option value="JOR">JOR</option>
              <option value="LTU">LTU</option>
              <option value="SDN">SDN</option>
              <option value="TUN">TUN</option>
              <option value="KWT">KWT</option>
              <option value="RWA">RWA</option>
            </select>
            <!-- <input
              placeholder="Country Code"
              v-model="filters.countryCode"
              @input="applyFilters"
            /> -->
          </div>
          <div>
            <!-- <input
              placeholder="Orbit Regime"
              v-model="filters.orbitCode"
              @input="applyFilters"
            /> -->
            <select
              v-model="filters.orbitCode"
              @change="applyFilters"
              name="orbitCode"
              id=""
            >
              <option disabled value="">Select Orbit Regime</option>
              <option value="LEO">LEO</option>
              <option value="GEO">GEO</option>
              <option value="HEO">HEO</option>
              <option value="MEO">MEO</option>
              <option value="">other</option>
            </select>
          </div>
          <div>
            <!-- <input
              placeholder="Object Type"
             
            /> -->

            <select
              v-model="filters.objectType"
              @change="applyFilters"
              name="objectType"
              id=""
            >
              <option disabled value="">Select Object Type</option>
              <option value="PAYLOAD">PAYLOAD</option>
              <option value="ROCKET BODY">ROCKET BODY</option>
              <option value="UNKNOWN">UNKNOWN</option>
              <option value="DEBRIS">DEBRIS</option>
              <option value="">null</option>
            </select>
          </div>
          <div>
            <button @click="resetFilters">
              <i class="fa-solid fa-repeat"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="list">
        <div
          class="element"
          v-for="(satellite, index) in displayedSatellites"
          :key="satellite.noradCatId"
        >
          <div @click="toggleAccordion(index)" class="accordion-header">
            <div class="head">
              <!-- <div class="sIndex">{{ index + 1 + "." }} </div> -->
              <div class="sName">
                <p><strong>Name :</strong> {{ satellite.name || "N/A" }}</p>
              </div>
              <p>
                <strong>NoradCat Id :</strong>
                {{ satellite.noradCatId || "N/A" }}
              </p>
            </div>
            <div>
              <span v-if="expandedIndex === index">&#x25B2;</span>
              <span v-else>&#x25BC;</span>
            </div>
          </div>
          <div v-if="expandedIndex === index" class="accordion-content">
            <div class="satDetail">
              <div class="imgParr">
                <img
                  height="70"
                  width="110"
                  src="https://www.geospatialworld.net/wp-content/uploads/2023/05/catagory_satellite_banner.jpg"
                  alt=""
                />
              </div>
              <div class="satText">
                <div>
                  <p>
                    <strong>Country Code :</strong>
                    {{ satellite.countryCode || "N/A" }}
                  </p>
                  <p>
                    <strong>Object type:</strong>
                    {{ satellite.objectType || "N/A" }}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Orbit Code :</strong>
                    {{ satellite.orbitCode || "N/A" }}
                  </p>
                  <p>
                    <strong>Launch Date:</strong>
                    {{ satellite.launchDate || "N/A" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <button :disabled="currentPage === 1" @click="previousPage">
          <i class="fa-solid fa-circle-left"></i>
        </button>
        <span>{{ currentPage }}</span>
        <button :disabled="currentPage === totalPages" @click="nextPage">
          <i class="fa-solid fa-circle-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .parrent {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 10px;
  }

  .mainDiv {
    width: 50%;
    padding: 0;

    margin: auto;
  }

  .accordion-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1em;
    width: 100%;
    padding: 10px 20px 10px 20px;
  }

  .accordion-header .head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2em;
  }

  .list {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .element {
    border-radius: 10px;
    border: 1px solid #000;
  }

  .satDetail {
    display: flex;
    gap: 2em;
    margin: 10px 20px;
  }

  .satDetail .satText {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background-color: #e7e7e7;
  }

  .satDetail .satText div {
    display: flex;
    gap: 0.3em;
  }

  .satDetail .satText div p {
    width: 50%;
  }

  .satDetail .imgParr {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .satDetail img {
    border-radius: 10px;
    height: 70px;
    width: 110px;
  }

  .searchFilter {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .search {
    width: 100%;
    display: flex;
    gap: 1rem;
    height: 35px;
  }

  .search input {
    font-size: 1em;
    width: 100%;
    padding: 0 10px;
    border: none;
    border-radius: 30px;
    height: 100%;
    border: 0.5px solid gray;
    background-color: #f8f8f8;
  }

  .search button {
    border-radius: 30px;
    height: 100%;
    border: 0.5px solid gray;
    background-color: #f8f8f8;
    padding: 0 10px;
    font-size: 20px;
  }

  .filter {
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px solid #000;
    gap: 7px;
    padding: 5px 7px;
  }

  .filter div {
    width: 100%;
    height: 35px;
  }
  .filter div:last-child {
    width: auto;
    height: 35px;
  }
  .filter select {
    height: 100%;
    width: 100%;
    border-radius: 10px;
  }
  .filter button {
    height: 100%;
    /* width: 1em; */
    border: 0.5px solid;
    border-radius: 10px;
    background-color: transparent;
    font-size: 1.2em;
    padding: 0 10px;
  }

  .pagination {
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .pagination button {
    border: none;
    border-radius: 50%;
    background-color: transparent;
    font-size: 3em;
    padding: 0;
  }

  @media all and (max-width: 640px) {
    .mainDiv {
      width: 100%;
      padding: 10px;
      font-size: 0.7em;
    }

    .filter {
      flex-direction: column;
    }
    .filter div:last-child {
      display: flex;
      justify-content: flex-end;
    }
    .satDetail {
      flex-direction: column;
    }

    .satDetail .satText div {
      flex-direction: column;
    }

    .satDetail img {
      height: 100px;
      width: 150px;
    }
  }
</style>
