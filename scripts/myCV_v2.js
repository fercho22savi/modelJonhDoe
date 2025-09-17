document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo
    const cvData = {
        image: "https://placehold.co/96x96/1a202c/e2e8f0?text=Foto",
        personalDetails: {
            name: "John Doe",
            jobTitle: "Ingeniero de Software y Analista de Ciberseguridad",
            email: "john.doe@email.com",
            phone: "+1 234 567 8900",
            address: "Bogotá, Colombia",
            github: "github.com/johndoe",
            linkedin: "linkedin.com/in/johndoe",
            discord: "johndoe#1234",
            summary: "Ingeniero de Software con 5 años de experiencia..."
        },
        workHistory: [
            {
                jobTitle: "Desarrollador Senior",
                company: "Tech Solutions Inc.",
                duration: "Enero 2021 - Febrero 2025",
                responsibilities: [
                    "Diseño y desarrollo de APIs RESTful.",
                    "Gestión de bases de datos.",
                    "Implementación de DevSecOps."
                ]
            }
        ],
        projects: [
            {
                name: "Plataforma de E-commerce Segura",
                description: "Desarrollé una plataforma con microservicios...",
                technologies: "Node.js, MongoDB, JWT, AES"
            }
        ],
        education: [
            { degree: "Ingeniería de Software", institution: "Uniminuto", duration: "2018 - 2020" }
        ],
        technicalSkills: [
            { name: "Java", level: "Avanzado", icon: "fa-brands fa-java" },
            { name: "Python", level: "Intermedio", icon: "fa-brands fa-python" },
            { name: "Spring Boot", level: "Avanzado", icon: "fa-solid fa-leaf" },
            { name: "Docker", level: "Intermedio", icon: "fa-brands fa-docker" }
        ],
        languages: ["Español (Nativo)", "Inglés (Avanzado)"],
        certifications: ["AWS Certified Solutions Architect", "Certified Ethical Hacker"],
        courses: ["Curso de Ciberseguridad Avanzada", "Desarrollo de Aplicaciones Seguras"],
        interests: ["Ciberseguridad", "Desarrollo de Software", "Tecnologías Emergentes"],
        references: ["Disponible a solicitud"]
    };

    // Renderizar CV
    function renderCV(data) {
        document.getElementById('cv-name').innerText = data.personalDetails.name;
        document.getElementById('cv-job-title').innerText = data.personalDetails.jobTitle;
        document.getElementById('cv-email').innerText = data.personalDetails.email;
        document.getElementById('cv-phone').innerText = data.personalDetails.phone;
        document.getElementById('cv-address').innerText = data.personalDetails.address;
        document.getElementById('cv-github').innerText = data.personalDetails.github;
        document.getElementById('cv-github').href = /^https?:\/\//.test(data.personalDetails.github)
            ? data.personalDetails.github
            : "https://" + data.personalDetails.github;
        document.getElementById('cv-linkedin').innerText = data.personalDetails.linkedin;
        document.getElementById('cv-linkedin').href = "https://" + data.personalDetails.linkedin;
        document.getElementById('cv-discord').innerText = data.personalDetails.discord;
        document.getElementById('cv-summary').innerText = data.personalDetails.summary;
        document.getElementById('cv-image').src = data.image;
        document.getElementById('cv-image').alt = `Foto de ${data.personalDetails.name}`;

        // Rellenar experiencia laboral
        const workHistoryContainer = document.getElementById('cv-work-history');
        workHistoryContainer.innerHTML = '';
        data.workHistory.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.className = 'border-l-2 border-gray-400 pl-4';
            jobDiv.innerHTML = `
        <div class="flex justify-between items-center">
          <h3 class="font-semibold text-base text-gray-900">${job.jobTitle} - ${job.company}</h3>
          <p class="text-sm text-gray-500">${job.duration}</p>
        </div>
        <ul class="list-disc list-inside text-gray-700 mt-2 space-y-1">
          ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
      `;
            workHistoryContainer.appendChild(jobDiv);
        });
        // Rellenar proyectos
        const projectsContainer = document.getElementById('cv-projects');
        projectsContainer.innerHTML = '';
        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            projectDiv.className = 'border-l-2 border-gray-400 pl-4';
            projectDiv.innerHTML = `
        <h3 class="font-semibold text-base text-gray-900">${project.name}</h3>
        <p class="text-sm text-gray-700 mt-1">${project.description}</p>
        <p class="text-xs text-gray-500 mt-1">Tecnologías: ${project.technologies}</p>
      `;
            projectsContainer.appendChild(projectDiv);
        });
        // Rellenar educación
        const educationContainer = document.getElementById('cv-education');
        educationContainer.innerHTML = '';
        data.education.forEach(edu => {
            const eduDiv = document.createElement('div');
            eduDiv.className = 'border-l-2 border-gray-400 pl-4';
            eduDiv.innerHTML = `
        <h3 class="font-semibold text-base text-gray-900">${edu.degree}</h3>
        <p class="text-sm text-gray-500">${edu.institution}</p>
        <p class="text-xs text-gray-500 mt-1">${edu.duration}</p>
      `;
            educationContainer.appendChild(eduDiv);
        });
        // Rellenar certificaciones
        const certificationsContainer = document.getElementById('cv-certifications');
        certificationsContainer.innerHTML = '';
        data.certifications.forEach(cert => {
            const certItem = document.createElement('li');
            certItem.className = 'text-gray-900 text-sm';
            certItem.innerText = cert;
            certificationsContainer.appendChild(certItem);
        });
        // Rellenar cursos
        const coursesContainer = document.getElementById('cv-courses');
        coursesContainer.innerHTML = '';
        data.courses.forEach(course => {
            const courseItem = document.createElement('li');
            courseItem.className = 'text-gray-900 text-sm';
            courseItem.innerText = course;
            coursesContainer.appendChild(courseItem);
        });
        // Rellenar referencias
        const referencesContainer = document.getElementById('cv-references');
        referencesContainer.innerHTML = '';
        data.references.forEach(ref => {
            const refItem = document.createElement('li');
            refItem.className = 'text-gray-900 text-sm';
            // Permite referencias como string simple o como objeto con más detalles
            if (typeof ref === 'string') {
                refItem.innerText = ref;
            } else {
                // Ejemplo: { name, contact, relation }
                refItem.innerHTML = `<strong>${ref.name}</strong>${ref.relation ? ' (' + ref.relation + ')' : ''}${ref.contact ? ' - ' + ref.contact : ''}`;
            }
            referencesContainer.appendChild(refItem);
        });
        // Rellenar habilidades técnicas y lenguajes
        const technicalSkillsContainer = document.getElementById('cv-technical-skills');
        technicalSkillsContainer.innerHTML = '';
        const skillsFragment = document.createDocumentFragment();

        data.technicalSkills.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.className = 'flex items-center justify-between text-gray-800 text-sm py-1 border-b border-gray-200';

            skillItem.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="${skill.icon} text-gray-700"></i>
            <span class="font-medium">${skill.name}</span>
        </div>
        <span class="text-xs text-gray-500">${skill.level}</span>
    `;

            skillsFragment.appendChild(skillItem);
        });

        technicalSkillsContainer.appendChild(skillsFragment);

        // ------------------
        // Rellenar lenguajes
        // ------------------
        const languagesContainer = document.getElementById('cv-languages');
        languagesContainer.innerHTML = '';

        data.languages.forEach(lang => {
            const langItem = document.createElement('li');
            langItem.className = 'text-gray-700 text-sm flex items-center gap-2';

            langItem.innerHTML = `
        <i class="fa-solid fa-language text-gray-600"></i>
        <span>${lang}</span>
    `;

            languagesContainer.appendChild(langItem);
        });

    }
    // Llamar a la función para renderizar el CV con los datos de ejemplo
    renderCV(cvData);

    // Subir foto
    const fileInput = document.getElementById('file-input');
    const cvImage = document.getElementById('cv-image');
    fileInput.addEventListener('change', e => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = ev => { cvImage.src = ev.target.result; };
            reader.readAsDataURL(file);
        }
    });
});

