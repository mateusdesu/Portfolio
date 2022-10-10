

function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
    
    const name = document.getElementById('profile.name')
    name.innerText = profileData.name
}
async function GetProfileData(){
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    
}

GetProfileData()