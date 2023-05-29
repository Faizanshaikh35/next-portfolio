import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    sql, mysql, redis, angular, job1, job2, job3, avatar1, avatar2, avatar3, company1, company2,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Website Developer",
        icon: mobile,
    },
    {
        title: "Graphics Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Angular",
        icon: angular,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Sequelize",
        icon: sql,
    },
    {
        name: "Mysql",
        icon: mysql,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Redis",
        icon: redis,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    }
];

const experiences = [
    {
        title: "React.js and Node.js",
        company_name: "Ghanshyam Digital LLP",
        icon: company1,
        iconBg: "#383E56",
        date: "Feb 2021 - August 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React.js and Node.js",
        company_name: "3S Logics Pvt Ltd.",
        icon: company2,
        iconBg: "#E6DEDD",
        date: "August 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Eliav Menachi",
        designation: "CTO",
        company: "Fanschat",
        image: avatar1,
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Aman Tanwar",
        designation: "Manager",
        company: "War Room Holdings, Inc.",
        image: avatar2
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Aditya",
        designation: "CEO",
        company: "Sher bazaar",
        image: avatar3
    },
];

const projects = [
    {
        name: "Fan's Chat",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: job2,
        source_code_link: "https://fanschat.com/",
    },
    {
        name: "Kedet",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "postgres",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: job3,
        source_code_link: "https://www.warroominc.com/meet-kedet/",
    },
    {
        name: "Sherbazaar",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "redis",
                color: "pink-text-gradient",
            },
            {
                name: "mysql",
                color: "orange-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: job1,
        source_code_link: "https://sherbazaar.com/",
    },
];

export {services, technologies, experiences, testimonials, projects};
