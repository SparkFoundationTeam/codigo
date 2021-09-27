import Bhavesh from '../../../resources/bhaveshIcon.jpg';
import Atharva from '../../../resources/atharvaIcon.jpg';
import Adika from '../../../resources/adikaIcon.jpg';
import Vaishnavi from '../../../resources/vaishIcon.jpg';

export const Owners = [
  {
    OwnerName: 'Bhavesh Mhadse',
    OwnerImage: Bhavesh,
    OwnerSkills: ['Third Year Engineering Student', 'Full Stack Developer', 'Backend/Infrastructure Manager', 'Database Admin'],
    githubUrl: 'url de ikde athya',
    instaUrl: 'https://www.instagram.com/bhaaaavesh__',
    linkedurl: 'https://www.linkedin.com/in/bhavesh-mhadse-053442216/',
    mailUrl: 'mailto:bhaveshmhadse9@gmail.com?subject=I have a query for you&body=Hey Bhavesh !!',
  },
  {
    OwnerName: 'Atharva Bhagat',
    OwnerImage: Atharva,
    OwnerSkills: ['Third Year Engineering Student', 'Full Stack Developer', 'UI/UX Designer', 'System Manager'],
    githubUrl: 'url de ikde athya',
    instaUrl: 'https://instagram.com/ath.ar.va',
    linkedurl: 'https://linkedin.com/in/atharva-bhagat-2108',
    mailUrl: 'mailto:atharvabhagat@ieee.org?subject=I have a query for you&body=Hey Atharva !!',
  },
  {
    OwnerName: 'Adika Karnataki',
    OwnerImage: Adika,
    OwnerSkills: ['Third Year Engineering Student', 'Full Stack Developer', 'Product Manager', 'Application Manager'],
    githubUrl: 'url de ikde athya',
    instaUrl: 'https://instagram.com/adikakarnataki',
    linkedurl: 'https://linkedin.com/in/adika-karnataki',
    mailUrl: 'mailto:adikakarnataki@gmail.com?subject=I have a query for you&body=Hey Adika !!',
  },
  {
    OwnerName: 'Vaishnavi Korgaonkar',
    OwnerImage: Vaishnavi,
    OwnerSkills: ['Third Year Engineering Student', 'Full Stack Developer', 'Marketing Head', 'Product Manager'],
    githubUrl: 'url de ikde athya',
    instaUrl: 'https://instagram.com/vaishnavi2512',
    linkedurl: 'https://www.linkedin.com/in/vaishnavi-korgaonkar-2a37b4216/',
    mailUrl: 'mailto:vaishnavi2512@gmail.com?subject=I have a query for you&body=Hey Vaishnavi !!',
  },
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
