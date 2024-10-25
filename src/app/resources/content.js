import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Reyhan Adriana',
    lastName:  'Deris',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Fullstack Web Developer',
    avatar:    '/images/avatar.webp',
    location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Indonesian']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Contact </>,
    description: <>You can reach me by email for Fast Response</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/reyhanadr',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/reyhan-adriana-deris/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/mstfkemal_pasha',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:reyhanadr@outlook.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Fullstack Web Developer</>,
    // subline: <>I'm Reyhanadr, a Fullstack Web Developer at <InlineCode>FLY</InlineCode>, where I craft intuitive<br/> user experiences. After hours, I build my own projects.</>
    subline: <>I am a graduate bachelor from Jenderal Achmad Yani University, holding a Bachelor's degree in Informatics/Computer Science. I have a strong interest in web development and practical experience working on project-based website development. This includes overseeing the entire process from planning and implementation to testing, with a focus on delivering functional and user-centered web solutions.</>

}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am a graduate bachelor from Universitas Jenderal Achmad Yani, holding a Bachelor's degree in Informatics/Computer Science. I have a strong interest in web development and practical experience working on project-based website development. This includes overseeing the entire process from planning and implementation to testing, with a focus on delivering functional and user-centered web solutions.</>
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'University of Jenderal Achmad Yani',
                timeStudies: '2020 - 2024',
                degree: 'Bachelof of Computer',
                description: <>During my time at Jenderal Achmad Yani University, I focused on learning and applying web-based software development. I practiced these skills through various projects, developing websites and enhancing my understanding of real-world software development.</>,
            }
        ]
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Experience',
        experiences: [
            {
                company: 'PERUMDA Tirta Raharja',
                timeframe: '2023 - 2024',
                role: 'Fullstack Website Developer (Intern)',
                achievements: [
                    <>Led a Intern team in developing an IT Helpdesk website to support the company's IT operations.</>,
                    <>Utilized CodeIgniter for back-end development and Bootstrap for the front-end, creating a robust and user-friendly platform.</>,
                    // Kalimat pengantar untuk poin-poin
                    <>Developed key features including:
                        <div>
                            <span>• Employee device management.</span>
                            <br />
                            <span>• Ticket submission system for faulty devices.</span>
                            <br />
                            <span>• Message management and live chat functionalities.</span>
                            <br />
                            <span>• Notifications and profile management system.</span>
                        </div>
                    </>

                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/helpdesk-IT/helpdesk_site6.webp',
                        alt: 'Helpdesk-IT Halaman Login',
                        width: 16,
                        height: 9,
                    },
                    {
                        src: '/images/projects/helpdesk-IT/helpdesk_site.webp',
                        alt: 'Helpdesk-IT Homepage Admin',
                        width: 16,
                        height: 9,
                    },
                    {
                        src: '/images/projects/helpdesk-IT/helpdesk_site2.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Helpdesk-IT Homepage Karyawan', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/helpdesk-IT/helpdesk_site3.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Helpdesk-IT Homepage Teknisi', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/helpdesk-IT/helpdesk_site4.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Helpdesk-IT Halaman Ticketing Request', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/helpdesk-IT/helpdesk_site5.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Helpdesk-IT Halaman Kelola Unit Kerja (Admin)', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Djaman (Djamu Manunggal)',
                timeframe: '2023 - 2024',
                role: 'Fullstack Website Developer',
                achievements: [
                    <>Digitalized traditional herbal medicine (jamu) products for Paguyuban Jamu Manunggal in Cimahi as part of the PKM-PI initiative under Merdeka Belajar from KEMENDIKBUDRISTEK.</>,
                    <>Developed key features including:
                        <div>
                            <span>• Product management tools for efficient inventory control.</span>
                            <br />
                            <span>• Integration with third-party purchasing applications (WhatsApp Business) for seamless customer transactions.</span>
                            <br />
                            <span>• KNN-powered search function to enhance user experience and product discoverability.</span>
                        </div>
                    </>,
                    <>Designed a minimalist and user-friendly interface, ensuring optimal accessibility across various devices for both customers and administrators.</>,
                    <>Integrated Google Search Console, Bing Webmaster, and Google Analytics to monitor and improve SEO, increasing the website's visibility and traffic.</>,
                    <>Utilized Bootstrap for front-end development and CodeIgniter 3 for back-end development, creating a robust and responsive platform.</>,
                ],
                images: [
                    {
                        src: '/images/projects/djaman/djaman_site.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Djaman Client Homepage', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/djaman/djaman_site2.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Djaman Shop Page', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/djaman/djaman_site3.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Djaman Login Page', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/djaman/djaman_site4.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Djaman Register Page', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/djaman/djaman_site5.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Djaman Checkout Page', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/djaman/djaman_site6.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Djaman Manage Product Page', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'SIMADANG',
                timeframe: '2022 - 2023',
                role: 'Fullstack Website Developer',
                achievements: [
                    <>Developed a web-based Warehouse Management System using the MVC (Model View Controller) architecture.</>,
                    <>Followed Scrum methodology, ensuring effective collaboration with the System Analyst Team, Quality Assurance Team, and Web Development Team.</>,
                    <>Led a team of three developers within the Web Development Team, fostering a collaborative and productive environment.</>,
                    <>Utilized Object-Oriented PHP, along with HTML, CSS, and MySQL for database management, to build a robust and efficient system.</>
                ],
                images: [
                    {
                        src: '/images/projects/simadang/simadang_site.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Simadang Login Page', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/simadang/simadang_site2.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Simadang Homepage', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/simadang/simadang_site3.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Simadang Manage Product Page', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/simadang/simadang_site4.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Simadang Manage Purchase Page', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Valuble Media',
                timeframe: '2022 - 2024',
                role: 'Fullstack Website Developer',
                achievements: [
                    <>Served as Fullstack Web Developer, responsible for the creation, maintenance, and upgrade of a cryptocurrency news and education website.</>,
                    <>Led the initial development phase using the Nicepage Plugin followed by a full redevelopment using WordPress for enhanced performance.</>,
                    <>Conducted complex theme customization by thoroughly examining and modifying the theme’s source code to meet specific requirements.</>,
                    <>Integrated OpenAI into the platform, enabling:
                        <div>
                            <span>• AI-powered chatbots for addressing crypto-related queries.</span>
                            <br />
                            <span>• Assistance for content creators in generating articles.</span>
                        </div>
                    </>,
                    <>Implemented CoinGecko’s API for cryptocurrency-to-fiat conversions, providing users with real-time data.</>,
                    <>Optimized SEO performance by leveraging OpenAI’s suggestions to improve article sentence structures and enhance search visibility.</>,
                    <>Managed ongoing upgrades and issue resolution, ensuring smooth operation and performance of the website throughout the project.</>,
                ],
                images: [
                    {
                        src: '/images/projects/valuble/valuble_site.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Valuble Launch New Web', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/valuble/valuble_site2.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Valuble Article Page', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/valuble/valuble_site3.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Valuble Merchandise Page', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/valuble/valuble_site4.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Valuble in Google Search Console', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/valuble/valuble_site5.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Valuble in Google Analytics', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/valuble/valuble_site6.webp', // Ganti dengan path gambar kedua yang sesuai
                        alt: 'Valuble with AI Chatbot for Ask Question', // Deskripsi gambar kedua
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Codeigniter',
                level: <>Intermediate.</>,
            },
            {
                title: 'PHP',
                level: <>Intermediate</>,
            },
            {
                title: 'MySQL/PhpMyAdmin',
                level: <>Intermediate</>,
            },
            {
                title: 'Model View Controller (MVC)',
                level: <>Intermediate</>,
            },
            {
                title: 'Software Design',
                level: <>Intermediate</>,
            },
            {
                title: 'UML Design',
                level: <>Intermediate</>,
            },
            {
                title: 'WordPress',
                level: <>Intermediate</>,
            },
            {
                title: 'Manage Hosting',
                level: <>Intermediate</>,
            },
            {
                title: 'Next.js',
                level: <>Novice</>,
            },
            {
                title: 'AGILE Methodology',
                level: <>Basic</>,
            },
            {
                title: 'API Integration',
                level: <>Basic</>,
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };