import Link from 'next/link';

export default function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Cameron Rice - Web Developer</h1>
            <p className="home-intro">Welcome to my portfolio! Here are some of my projects:</p>
            <ul className="project-list">
                <li>
                    <Link href="/projects/project1" legacyBehavior>
                        <a className="project-link">Project 1: Description</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/project2" legacyBehavior>
                        <a className="project-link">Project 2: Description</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/project3" legacyBehavior>
                        <a className="project-link">Project 3: Description</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}