'use strict';

const icons={
    facebook:"./assets/images/icons/socialNetworks/facebook.png",
    twitter:"./assets/images/icons/socialNetworks/twitter.png",
    skype:"./assets/images/icons/socialNetworks/skype.png",
    google:"./assets/images/icons/socialNetworks/google-plus.png",
}

const userList = document.getElementById("usersList");

const user = [{
    name: "Andriy",
    surName: "Shevchenko",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Andriy_Shevchenko_2017.jpg/249px-Andriy_Shevchenko_2017.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos est expedita quasi. Ad animiassumenda dicta earum esse laudantium maxime odio, perspiciatis quam, quasi rerum tempora. Accusantium",
    },
    {
        name: "Andriy",
        surName: "Piatov",
        img: "https://static.ua-football.com/img/upload/17/22bad3.jpeg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos est expedita quasi. Ad animiassumenda dicta earum esse laudantium maxime odio, perspiciatis quam, quasi rerum tempora. Accusantium",
    },
    {
        name: "Ruslan",
        surName: "Malinovskyi",
        img: "http://zhzh.info/_nw/369/58309633.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos est expedita quasi. Ad animiassumenda dicta earum esse laudantium maxime odio, perspiciatis quam, quasi rerum tempora. Accusantium",
    },]

user.forEach(user =>{
    const userCardItem = document.createElement('li');
    userCardItem.append(createCardWrapperContainer(user));

    userList.append(userCardItem);
})

function createCardWrapperContainer(user){
    const userCardWrapper = document.createElement('div');
    userCardWrapper.classList.add('userCardWrapper', 'flexContainer', 'flexDirectionColumn', 'alignItemCenter');
    userCardWrapper.append(createUserPictureContainer(user));
    userCardWrapper.append(createUserName(user));
    userCardWrapper.append(createDescription(user));
    userCardWrapper.append(createUserContactsContainer());
    return userCardWrapper;
}


function createUserPictureContainer(user) {
    const userPictureContainer = document.createElement('div');
    userPictureContainer.classList.add('userPictureContainer');
    userPictureContainer.append(createUserIMG(user));
    return userPictureContainer;
}

function createUserIMG(user){
    const userIMG = document.createElement('img');
    userIMG.setAttribute('src', user.img? user.img:"./assets/images/icons/user_icon.png");
    userIMG.setAttribute('alt', 'user picture');
    return userIMG;
}

function createUserName(user) {
     const userName = document.createElement('h3');
     userName.classList.add("userFullName", "userFullNameMargin");
     userName.innerText = `${user.name} ${user.surName}`;
     return userName;
 }

function createDescription(user) {
    const description = document.createElement('p');
    description.classList.add("userDescription");
    description.innerText = user.description;

    return description;
}

function createUserContactsContainer(){
    const userContactsContainer = document.createElement('div');
    userContactsContainer.classList.add("userContactsContainer");
    userContactsContainer.append(createContacts(user,icons.facebook));
    userContactsContainer.append(createContacts(user,icons.twitter));
    userContactsContainer.append(createContacts(user,icons.skype));
    userContactsContainer.append(createContacts(user,icons.google));

    return userContactsContainer;
}

function createContacts(user,src){
    const contact = document.createElement('a');
    contact.setAttribute('href', user.src?user.src:"#");
    contact.append(createPicture(src));
    return contact;
}

function createPicture(src) {
    const contactPicture = document.createElement('img');
    contactPicture.setAttribute('src', src);
    contactPicture.setAttribute('alt', '');
    return contactPicture;

}