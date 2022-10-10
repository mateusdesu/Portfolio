async function fetchProfileData(){
    const URL = "https://raw.githubusercontent.com/mateusdesu/portifolio/main/data/profile.json";
    const fetchProfileData = await fetch(URL) 
    return await fetchProfileData.json();
}
