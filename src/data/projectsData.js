import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'AAC Communication',
        projectDesc: 'This is a personalized conversational AI system built for Alternative and Augmentative Communication (AAC) users',
        tags: ['Flan T5', 'FAISS', 'Mistral LLM', 'Flask', 'React'],
        code: 'https://github.com/MNikhilBharath/AAC-Communication',
        // demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: one
    },
    {
        id: 2,
        projectName: 'NoteWiz',
        projectDesc: 'An AI-Powered Study Assistant that generates summaries, flashcard and quizzes based on any uploaded document. ',
        tags: ['Streamlit', 'Mistral LLM', 'Few-shot prompting'],
        code: 'https://github.com/MNikhilBharath/AI4good-notewiz',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: two
    },
    {
        id: 3,
        projectName: 'Toxic Audio Detection',
        projectDesc: 'A real-time voice chat moderation system for children’s online games using multimodal LLMs.',
        tags: ['PyTorch', 'GPT-4o', 'CoT Prompting', 'FastAPI'],
        code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
        image: three
    },
    {
        id: 4,
        projectName: 'Housing Rental App',
        projectDesc: 'A simple full-stack web application for posting and browsing rental housing listings.',
        tags: ['React', 'Node.js', 'Express', 'SQLite'],
        code: 'https://github.com/nikhilmurali32/Housing-App',
        demo: 'https://github.com/nikhilmurali32/Housing-App',
        image: four
    },
    {
        id: 5,
        projectName: 'RGB-D Salient Object Detection',
        projectDesc: 'Detecting and segmenting the salient from natural scenes by simulating the human visual perception system through BBS-Net strategy.',
        tags: ['Pytorch', 'CNN', 'Matplotlib'],
        code: 'https://github.com/nikhilmurali32/RGB-D-SalientObjectDetection',
        demo: 'https://github.com/nikhilmurali32/RGB-D-SalientObjectDetection',
        image: five
    },
    {
        id: 6,
        projectName: 'Audio Augmentation using GAN',
        projectDesc: 'Built Deep Convolutional GAN in the PyTorch framework to generate new spectrograms to solve data imbalances in speech emotion datasets.',
        tags: ['Pytorch', 'GAN', 'CNN'],
        code: 'https://github.com/nikhilmurali32/Audio_Augmentation-using-GANs',
        demo: 'https://github.com/nikhilmurali32/Audio_Augmentation-using-GANs',
        image: six
    },
    {
        id: 7,
        projectName: 'Wikimedia Data Processing',
        projectDesc: 'Wikimedia Data Processing using Kafka in a Java Spring Application.',
        tags: ['Java', 'Spring', 'Kafka'],
        code: 'https://github.com/nikhilmurali32/Wikimedia-Data-Processing',
        demo: 'https://github.com/nikhilmurali32/Wikimedia-Data-Processing',
        image: seven
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/