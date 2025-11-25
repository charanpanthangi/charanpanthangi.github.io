(function () {
  if (typeof SITE_CONFIG === 'undefined') {
    return;
  }

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  const createLink = (href, text) => {
    if (!href) return null;
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    a.target = '_blank';
    a.rel = 'noreferrer';
    return a;
  };

  const renderIntro = () => {
    const introBody = document.getElementById('intro-body');
    const profileImg = document.getElementById('profile-image');
    const meta = document.getElementById('profile-meta');

    if (!introBody) return;

    SITE_CONFIG.intro.paragraphs.forEach((text) => {
      const p = document.createElement('p');
      p.textContent = text;
      introBody.appendChild(p);
    });

    if (profileImg) {
      profileImg.src = SITE_CONFIG.profile.profileImage;
    }

    if (meta) {
      meta.innerHTML = '';
      const location = document.createElement('div');
      location.textContent = SITE_CONFIG.profile.location;
      const emailLink = createLink(`mailto:${SITE_CONFIG.profile.email}`, SITE_CONFIG.profile.email);
      meta.appendChild(location);
      if (emailLink) meta.appendChild(emailLink);
    }
  };

  const renderExperience = () => {
    const container = document.getElementById('experience-body');
    if (!container) return;

    SITE_CONFIG.experience.items.forEach((item) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'experience-item';

      const title = document.createElement('div');
      title.className = 'experience-title';
      title.textContent = item.title;

      const period = document.createElement('div');
      period.className = 'experience-period';
      period.textContent = item.period;

      const desc = document.createElement('p');
      desc.className = 'experience-description';
      desc.textContent = item.description;

      wrapper.append(title, period, desc);
      container.appendChild(wrapper);
    });
  };

  const renderProjects = () => {
    const container = document.getElementById('projects-body');
    if (!container) return;

    SITE_CONFIG.projects.items.forEach((project) => {
      const card = document.createElement('div');
      card.className = 'project-card';

      const title = document.createElement('div');
      title.className = 'project-title';
      title.textContent = project.name;

      const meta = document.createElement('div');
      meta.className = 'project-meta';
      meta.textContent = project.meta;

      const desc = document.createElement('p');
      desc.className = 'project-description';
      desc.textContent = project.description;

      card.append(title, meta, desc);

      if (project.link) {
        const link = createLink(project.link, 'View project');
        if (link) card.appendChild(link);
      }

      container.appendChild(card);
    });
  };

  const renderList = (items, containerId, includeLinkLabel = 'Link') => {
    const container = document.getElementById(containerId);
    if (!container) return;

    items.forEach((item) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'list-item';

      const title = document.createElement('div');
      title.className = 'list-title';
      title.textContent = item.title || item.name;

      const summary = document.createElement('p');
      summary.className = 'list-summary';
      summary.textContent = item.summary || item.context || item.description || '';

      wrapper.append(title, summary);

      if (item.link) {
        const link = createLink(item.link, includeLinkLabel);
        if (link) wrapper.appendChild(link);
      }

      container.appendChild(wrapper);
    });
  };

  const renderContact = () => {
    const container = document.getElementById('contact-body');
    if (!container) return;

    const text = document.createElement('p');
    text.className = 'contact-text';
    text.textContent = SITE_CONFIG.contact.text;
    container.appendChild(text);

    const emailLabel = document.createElement('div');
    emailLabel.className = 'list-title';
    emailLabel.textContent = SITE_CONFIG.contact.emailLabel;
    const emailLink = createLink(`mailto:${SITE_CONFIG.profile.email}`, SITE_CONFIG.profile.email);

    if (emailLink) {
      const emailWrapper = document.createElement('div');
      emailWrapper.className = 'list-item';
      emailWrapper.append(emailLabel, emailLink);
      container.appendChild(emailWrapper);
    }

    const linksLabel = document.createElement('div');
    linksLabel.className = 'list-title';
    linksLabel.textContent = SITE_CONFIG.contact.linksLabel;

    const linksRow = document.createElement('div');
    linksRow.className = 'contact-links';

    Object.entries(SITE_CONFIG.links).forEach(([key, value]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      const link = createLink(value, label);
      if (link) linksRow.appendChild(link);
    });

    const linksWrapper = document.createElement('div');
    linksWrapper.className = 'list-item';
    linksWrapper.append(linksLabel, linksRow);
    container.appendChild(linksWrapper);
  };

  const renderHeader = () => {
    setText('site-name', SITE_CONFIG.profile.name);
    setText('site-role', SITE_CONFIG.profile.role);
  };

  const render = () => {
    renderHeader();
    renderIntro();
    renderExperience();
    renderProjects();
    renderList(SITE_CONFIG.writing.items, 'writing-body', 'Link');
    renderList(SITE_CONFIG.talks.items, 'talks-body', 'Details');
    renderContact();
  };

  document.addEventListener('DOMContentLoaded', render);
})();
