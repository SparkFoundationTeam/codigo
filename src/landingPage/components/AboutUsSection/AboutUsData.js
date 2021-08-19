import Bhavesh from '../../../resources/bhavesh.jpg';

export const Owners = [
    {
        OwnerName: 'Bhavesh Mhadse',
        OwnerImage: Bhavesh,
        OwnerSkills: ['Third Year Engineering Student', 'Full Stack Developer', 'Backend Manager'],
        githubUrl: 'url de ikde athya',
        instaUrl: 'https://instagram.com/',
        linkedurl: 'https://linkedin.com/in/',
        mailUrl: 'mailto:bhaveshmhadse9@gmail.com?subject=I have a query for you&body=Hey Bhavesh !!'
    },
    {
        OwnerName: 'Atharva Bhagat',
        OwnerImage: Bhavesh,
        OwnerSkills: ['Third Year Engineering Student', 'Full Stack Developer', 'Product Manager'],
        githubUrl: 'url de ikde athya',
        instaUrl: 'https://instagram.com/ath.ar.va',
        linkedurl: 'https://linkedin.com/in/atharva-bhagat-2108',
        mailUrl: 'mailto:atharvabhagat@ieee.org?subject=I have a query for you&body=Hey Atharva !!'
    },
    {
        OwnerName: 'Adika Karnataki',
        OwnerImage: Bhavesh,
        OwnerSkills: ['Third Year Engineering Student', 'Full Stack Developer', 'Product Manager'],
        githubUrl: 'url de ikde athya',
        instaUrl: 'https://instagram.com/adikakarnataki',
        linkedurl: 'https://linkedin.com/in/adika-karnataki',
        mailUrl: 'mailto:adikakarnataki@gmail.com?subject=I have a query for you&body=Hey Adika !!'
    },
    {
        OwnerName: 'Vaishnavi Korgaonkar',
        OwnerImage: Bhavesh,
        OwnerSkills: ['Third Year Engineering Student', 'Full Stack Developer', 'Marketing Head'],
        githubUrl: 'url de ikde athya',
        instaUrl: 'https://instagram.com/vaishnavi2512',
        linkedurl: 'https://linkedin.com/in/',
        mailUrl: 'mailto:vaishnavi2512@gmail.com?subject=I have a query for you&body=Hey Vaishnavi !!'
    }
];

export const randomizeArray = array => {
    let newArray = [...array];

    console.log('newArray Before : ', newArray);

    let currentIndex, randomizingIndex;

    for (currentIndex = newArray.length - 1; currentIndex > 0; currentIndex--) {
        randomizingIndex = Math.floor(Math.random() * (currentIndex + 1));
        [newArray[randomizingIndex], newArray[currentIndex]] = [newArray[currentIndex], newArray[randomizingIndex]];
    }

    console.log('newArray After : ', newArray);

    return newArray;
};
