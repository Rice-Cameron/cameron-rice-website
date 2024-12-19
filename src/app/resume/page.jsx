export default function Resume() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 className="home-title">Cameron Rice - Resume</h1>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <a 
                    href="/CameronRiceRESUME.pdf" 
                    download 
                    style={{ fontWeight: 'bold', fontSize: '18px' }} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Download My Resume
                </a>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '800px', alignItems: 'stretch' }}>
                <div style={{ flex: 1, margin: '0 10px', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                    <h2 style={{ fontWeight: 'bold' }}>Experience</h2>
                    <ul>
                        <li>
                            <strong>Software Engineering Intern</strong> at Zeek Interactive Inc. (Jun 2024 - Sept 2024)
                            <ul>
                                <li>Developed applications using Laravel and FilamentPHP.</li>
                                <li>Collaborated with teams to create high-quality software solutions.</li>
                                <li>Enhanced workplace communication and teamwork skills.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>QA Support Intern</strong> at Zeek Interactive Inc. (Jun 2023 - Sept 2023)
                            <ul>
                                <li>Created API endpoints.</li>
                                <li>Verified pages for cross-browser compatibility.</li>
                                <li>Ensured the quality of new features.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div style={{ flex: 1, margin: '0 10px', backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                    <h2 style={{ fontWeight: 'bold' }}>Education</h2>
                    <ul>
                        <li>
                            <strong>B.S. Computer Science</strong> 
                            <br />Oregon State University (2021 - Present)
                            <ul>
                                <li>GPA: 3.88</li>
                                <li>Concentration: Web and Mobile Application Development</li>
                            </ul>
                        </li>
                    </ul>
                    <br />
                    <h3 style={{ fontWeight: 'bold' }}>Relevant Courses</h3>
                    <ul>
                        <li>Web Development</li>
                        <li>Mobile App Development</li>
                        <li>Software Engineering I/II</li>
                        <li>Database Management Systems</li>
                        <li>Data Structures & Algorithms</li>
                        <li>Usability Engineering</li>
                    </ul>
                </div>
            </div>

            <div style={{ flex: 1, margin: '20px 10px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '100%', maxWidth: '800px' }}>
                <h2 style={{ fontWeight: 'bold' }}>Skills</h2>
                <ul>
                    <li><strong>Languages:</strong> PHP, JavaScript, Python, C/C++</li>
                    <li><strong>Tools & Frameworks:</strong> Laravel, React & NextJS, Git & GitHub, MySQL</li>
                    <li><strong>Soft Skills:</strong> Communication, Problem-Solving, Time Management</li>
                </ul>
            </div>
        </div>
    );
} 