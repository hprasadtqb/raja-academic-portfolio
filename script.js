// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Modal Elements
const modal = document.querySelector('#detail-modal');
const modalTitle = document.querySelector('#modal-title');
const modalBody = document.querySelector('#modal-body');
const closeBtn = document.querySelector('.close-btn');

// Detailed Content Data
const detailsData = {
    research: {
        title: 'Research Focus & Projects',
        content: `
            <p><strong>Primary Specialization:</strong> Cardiovascular Biology, Lipid Metabolism, and Experimental Hypertension.</p>
            <p><strong>Key Areas:</strong> Investigating cardiac remodeling, oxidative stress pathways, and evaluating bioactive natural compounds for therapeutic interventions.</p>
            <p><strong>Ongoing Initiatives:</strong> Translational approaches aiming at early disease detection and dietary phytochemical therapies.</p>
        `
    },
    teaching: {
        title: 'Teaching & Academic Pedagogy',
        content: `
            <p><strong>Courses Taught:</strong> M.Sc. Biochemistry, M.Sc. Biotechnology, and Ph.D. coursework modules.</p>
            <p><strong>Pedagogical Approach:</strong> Research-driven learning, practical laboratory instruction, and interdisciplinary problem-solving.</p>
            <p><strong>Mentorship:</strong> Over two decades of guiding postgraduate dissertations and doctoral research scholars.</p>
        `
    },
    publications: {
        title: 'Complete Selected Publications',
        content: `
            <ul style="list-style: none; padding: 0; line-height: 1.8;">
                <li style="margin-bottom: 10px;"><strong>1. Raja B et al. (2022).</strong> Effects of caffeic acid nanoparticles in hypertension. <em>Int J Nutr Pharmacol Neurol Dis.</em></li>
                <li style="margin-bottom: 10px;"><strong>2. Nagarajan M et al. (2011).</strong> Bisphenol A and oxidative stress in hypertension. <em>Hum Exp Toxicol.</em></li>
                <li style="margin-bottom: 10px;"><strong>3. Raja B et al. (2019).</strong> Troxerutin in lipid metabolism. <em>Front Biosci.</em></li>
                <li style="margin-bottom: 10px;"><strong>4. Silambarasan T et al. (2016).</strong> Sinapic acid in cardiac protection. <em>Eur J Pharmacol.</em></li>
            </ul>
        `
    }
};

// Open Modal Function
function openModal(type) {
    if (detailsData[type]) {
        modalTitle.textContent = detailsData[type].title;
        modalBody.innerHTML = detailsData[type].content;
        modal.style.display = 'flex';
    }
}

// Event Listeners for Buttons
document.querySelector('#btn-research')?.addEventListener('click', () => openModal('research'));
document.querySelector('#btn-teaching')?.addEventListener('click', () => openModal('teaching'));
document.querySelector('#btn-publications')?.addEventListener('click', () => openModal('publications'));

// Close Modal Events
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});