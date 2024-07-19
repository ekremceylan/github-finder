export class Github {
  constructor() {
    this.client_id = "Ov23limu5ukKcTbRGyW3";
    this.client_secret = "f35ec5ed8e1ba781ff94f713dca6415f49c426ee";
    this.per_page = 10;
  }

    // api'den kullanici bilgilerini alma --> apiden bilgi alma islemi gecikmeli olabilecek bir islem oldugu icin fonksiyonu async yaptik
    async fetchUserData(username) {
      // parametre olarak gelen kullanici adina gore istek attik. istegin gelisini await ile beklettik 
      const profileRes = await fetch(
        `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
      );
  
      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`,
      );
      // apiden aldigimiz cevabi json yapisina cevirdik. json yapisina cevirme islemi de uzun surebilecegi icin await ile beklettik once cevabi almayi bekledi yani
      const data = await profileRes.json();
      const repos = await repoRes.json();
      
      // fonksiyonun cagirildigi yere bilgileri gonderme
      return {data,repos};
    }
  }