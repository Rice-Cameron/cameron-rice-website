export function parseResumeText(rawText) {
  const lines = rawText
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('-- ') && !l.endsWith(' --'));

  const data = {
    name: 'Cameron Rice',
    title: 'Software Engineer',
    currentRole: 'Software Engineer at Open Dental Software',
    summary:
      'Software engineer specializing in Windows desktop application development (.NET/C#), client/server systems, and relational databases. Experienced in building responsive web applications and scalable backend APIs.',
    contact: {
      location: 'Salem, OR',
      phone: '503-277-9403',
      email: 'cameron5237@gmail.com',
      github: 'https://github.com/Rice-Cameron',
      linkedin: 'https://www.linkedin.com/in/rice-cameron/',
      portfolio: 'https://www.cameronrice.net'
    },
    experience: [],
    projects: [],
    education: [],
    skills: {
      languages: [],
      frameworksAndTools: [],
      softSkills: []
    },
    lastUpdated: new Date().toISOString()
  };

  let currentSection = 'HEADER';
  let currentExperience = null;
  let currentProject = null;
  let currentEducation = null;
  let currentSkillCategory = '';

  const getSection = (line) => {
    const upper = line.toUpperCase();
    if (upper === 'WORK EXPERIENCE' || upper === 'EXPERIENCE') return 'EXPERIENCE';
    if (upper === 'PROJECTS') return 'PROJECTS';
    if (upper === 'EDUCATION') return 'EDUCATION';
    if (upper === 'TECHNICAL SKILLS' || upper === 'SKILLS') return 'SKILLS';
    return null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const newSec = getSection(line);
    if (newSec) {
      currentSection = newSec;
      continue;
    }

    if (currentSection === 'HEADER') {
      if (i === 0 && !line.includes('|')) {
        data.name = line;
        continue;
      }
      if (line.includes('|')) {
        const parts = line.split('|').map((s) => s.trim());
        for (const p of parts) {
          if (p.toLowerCase().includes('phone:')) {
            data.contact.phone = p.replace(/phone:\s*/i, '').trim();
          } else if (p.toLowerCase().includes('email:')) {
            data.contact.email = p.replace(/email:\s*/i, '').trim();
          } else if (p.toLowerCase().includes('github:')) {
            data.contact.github =
              'https://' +
              p.replace(/github:\s*/i, '').replace(/^https?:\/\//, '').trim();
          } else if (p.toLowerCase().includes('linkedin:')) {
            data.contact.linkedin =
              'https://' +
              p.replace(/linkedin:\s*/i, '').replace(/^https?:\/\//, '').trim();
          } else if (p.toLowerCase().includes('portfolio:')) {
            data.contact.portfolio =
              'https://' +
              p.replace(/portfolio:\s*/i, '').replace(/^https?:\/\//, '').trim();
          } else if (p.includes('OR') || p.includes('Salem') || p.match(/\b\d{5}\b/)) {
            data.contact.location = p.replace(/\s*\b\d{5}(-\d{4})?\b/, '').trim();
          }
        }
      }
      continue;
    }

    if (currentSection === 'EXPERIENCE') {
      if (
        line.includes(' - ') &&
        !line.match(
          /^(January|February|March|April|May|June|July|August|September|October|November|December|\d{4})\b/i
        )
      ) {
        const parts = line.split(' - ').map((s) => s.trim());
        currentExperience = {
          role: parts[0] || '',
          company: parts[1] || '',
          location: parts.slice(2).join(' - ') || '',
          period: '',
          bullets: []
        };
        data.experience.push(currentExperience);
        continue;
      }

      if (
        currentExperience &&
        !currentExperience.period &&
        (line.includes('Present') ||
          line.match(
            /^(January|February|March|April|May|June|July|August|September|October|November|December|\d{4})\b/i
          ))
      ) {
        currentExperience.period = line;
        continue;
      }

      if (currentExperience) {
        if (
          currentExperience.bullets.length > 0 &&
          !currentItemEndsWithSentence(
            currentExperience.bullets[currentExperience.bullets.length - 1]
          )
        ) {
          currentExperience.bullets[currentExperience.bullets.length - 1] +=
            ' ' + line;
        } else {
          currentExperience.bullets.push(line);
        }
      }
    } else if (currentSection === 'PROJECTS') {
      if (line.includes(' - ')) {
        const [title, ...rest] = line.split(' - ').map((s) => s.trim());
        currentProject = {
          title,
          subtitle: rest.join(' - '),
          bullets: []
        };
        data.projects.push(currentProject);
        continue;
      }

      if (currentProject) {
        if (
          currentProject.bullets.length > 0 &&
          !currentItemEndsWithSentence(
            currentProject.bullets[currentProject.bullets.length - 1]
          )
        ) {
          currentProject.bullets[currentProject.bullets.length - 1] +=
            ' ' + line;
        } else {
          currentProject.bullets.push(line);
        }
      }
    } else if (currentSection === 'EDUCATION') {
      if (
        line.includes('Oregon State University') ||
        line.includes('University') ||
        line.includes('College') ||
        line.includes('Institute')
      ) {
        const parts = line.split(' - ').map((s) => s.trim());
        currentEducation = {
          institution: parts[0],
          period: parts[1] || '',
          gpa: parts[2] ? parts[2].replace(/GPA:\s*/i, '').trim() : '',
          degree: '',
          bullets: []
        };
        data.education.push(currentEducation);
        continue;
      }
      if (currentEducation && !currentEducation.degree) {
        currentEducation.degree = line;
      } else if (currentEducation) {
        currentEducation.bullets.push(line);
      }
    } else if (currentSection === 'SKILLS') {
      if (line.endsWith(':')) {
        currentSkillCategory = line.replace(':', '').toLowerCase().trim();
      } else {
        const skillsArray = line.split(',').map((s) => s.trim()).filter(Boolean);
        if (currentSkillCategory.includes('language')) {
          data.skills.languages.push(...skillsArray);
        } else if (
          currentSkillCategory.includes('tool') ||
          currentSkillCategory.includes('framework')
        ) {
          data.skills.frameworksAndTools.push(...skillsArray);
        } else if (
          currentSkillCategory.includes('soft') ||
          currentSkillCategory.includes('skill')
        ) {
          data.skills.softSkills.push(...skillsArray);
        }
      }
    }
  }

  // Ensure current .NET skills are accurately reflected if not yet explicitly listed in older PDF
  if (
    !data.skills.languages.includes('C#') &&
    data.experience.some(
      (e) => e.company?.includes('Open Dental') || e.role?.includes('Software Engineer')
    )
  ) {
    if (!data.skills.languages.includes('C#')) {
      data.skills.languages.unshift('C#');
    }
    if (!data.skills.frameworksAndTools.includes('.NET')) {
      data.skills.frameworksAndTools.unshift('.NET (Windows Desktop)');
    }
  }

  return data;
}

function currentItemEndsWithSentence(text) {
  if (!text) return false;
  return text.endsWith('.') || text.endsWith('!') || text.endsWith('?');
}
