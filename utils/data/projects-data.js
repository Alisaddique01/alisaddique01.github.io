import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Pak Hunar - On-Demand Handyman Service Platform',
        description: "I developed and launched an on-demand handyman service platform. The application connects service providers with clients through a user-friendly interface. Features include location-based service search, real-time notifications, secure payments, and detailed provider profiles.",
        tools: ['Flutter', 'Laravel', 'MySQL', 'Google Maps API', 'Firebase'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'www.pakhunar.com',
        image: ayla,
    },
    {
        id: 2,
        name: 'Automatic Machine Fault Detection & Recognition',
        description: "Designed and implemented a computer vision solution to identify mechanical faults in machines using audio signals. Utilized convolutional neural networks (CNNs) for audio classification and detection of anomalies.",
        tools: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'NumPy'],
        role: 'Machine Learning Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 3,
        name: 'Comprehensive Adverse Media Detection System',
        description: "Built a scalable adverse media detection system using BERT NLP models to analyze news articles for sentiment and relevance. The application supports real-time analysis and visualization of data trends.",
        tools: ['Python', 'BERT Models', 'Pandas', 'Matplotlib', 'Scikit-learn'],
        role: 'NLP Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 4,
        name: 'Driveaway.pk - Female Driving School in Azad Kashmir Region',
        description: "Developed a responsive website for a female-only driving school run by women for women in the Azad Kashmir region. The platform provides details about courses, schedules, and allows for online registrations.",
        tools: ['HTML', 'CSS', 'JavaScript'],
        role: 'Frontend Developer',
        code: '',
        demo: 'www.driveaway.pk',
        image: travel,
    }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
