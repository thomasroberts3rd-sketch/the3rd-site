(function () {
  const content = window.siteContent;

  document.title = content.seo.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', content.seo.description);

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText('hero-eyebrow', content.hero.eyebrow);
  setText('hero-headline', content.hero.headline);
  setText('hero-body', content.hero.body);
  setText('hero-primary', content.hero.primaryCta);
  setText('hero-secondary', content.hero.secondaryCta);

  setText('positioning-eyebrow', content.positioning.eyebrow);
  setText('positioning-headline', content.positioning.headline);
  setText('positioning-body', content.positioning.body);

  setText('expertise-eyebrow', content.expertise.eyebrow);
  setText('expertise-headline', content.expertise.headline);

  setText('diff-eyebrow', content.differentiators.eyebrow);
  setText('diff-headline', content.differentiators.headline);

  setText('clients-eyebrow', content.clients.eyebrow);
  setText('clients-headline', content.clients.headline);
  setText('clients-intro', content.clients.intro);

  setText('projects-eyebrow', content.projects.eyebrow);
  setText('projects-headline', content.projects.headline);
  setText('projects-intro', content.projects.intro);

  setText('closing-eyebrow', content.closing.eyebrow);
  setText('closing-headline', content.closing.headline);
  setText('closing-body', content.closing.body);

  const emailLink = document.getElementById('contact-email-link');
  emailLink.textContent = content.contact.email;
  emailLink.href = `mailto:${content.contact.email}`;

  const instagramLink = document.getElementById('contact-instagram-link');
  instagramLink.textContent = content.contact.instagram;
  instagramLink.href = content.contact.instagramUrl;

  setText('footer-copyright', content.footer.copyright);
  setText('footer-line', content.footer.line);

  const expertiseGrid = document.getElementById('expertise-grid');
  content.expertise.items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'service-card';
    card.innerHTML = `
      <h3 class="service-title">${item.title}</h3>
      <p class="service-description">${item.description}</p>
    `;
    expertiseGrid.appendChild(card);
  });

  const differenceGrid = document.getElementById('difference-grid');
  content.differentiators.items.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'difference-card';
    card.innerHTML = `
      <h3 class="difference-title">${item.title}</h3>
      <p class="difference-description">${item.description}</p>
    `;
    differenceGrid.appendChild(card);
  });

  const clientList = document.getElementById('client-list');
  content.clients.items.forEach((item) => {
    const chip = document.createElement('div');
    chip.className = 'client-chip';
    chip.textContent = item;
    clientList.appendChild(chip);
  });

const projectsGrid = document.getElementById('projects-grid');
content.projects.items.forEach((item) => {
  const card = document.createElement('article');
  card.className = 'project-card';

  card.innerHTML = `
    ${item.image ? `
      <div class="project-image-wrap">
        <img class="project-image" src="${item.image}" alt="${item.title}">
      </div>
    ` : ""}
    <p class="project-category">${item.category}</p>
    <h3 class="project-title">${item.title}</h3>
    <p class="project-description">${item.description}</p>
  `;

  projectsGrid.appendChild(card);
});
})();
