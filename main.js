(function initSite() {
    const data = window.siteContent || { games: [], contacts: [] };

    // Header brand/title sync (optional)
    const brandEl = document.querySelector('.brand');
    if (brandEl && data.studio && data.studio.name) {
        brandEl.textContent = data.studio.name;
    }
    const footerBrandEl = document.querySelector('.footer-brand');
    if (footerBrandEl && data.studio && data.studio.name) {
        footerBrandEl.textContent = data.studio.name;
    }
    

    // Year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    // Render games
    const gamesGrid = document.getElementById('games-grid');
    if (gamesGrid && Array.isArray(data.games)) {
        gamesGrid.innerHTML = '';
        if (data.games.length > 2) {
            gamesGrid.classList.add('scrollable-x');
        } else {
            gamesGrid.classList.remove('scrollable-x');
        }
        data.games.forEach((game) => {
            const card = document.createElement('article');
            card.className = 'game-card';
            card.innerHTML = [
                `<img class="game-media" src="${escapeHtml(game.image || '')}" alt="${escapeHtml(game.title || 'Game')} cover" loading="lazy">`,
                '<div class="game-body">',
                `  <h3 class="game-title">${escapeHtml(game.title || '')}</h3>`,
                `  <p class="game-tagline">${escapeHtml(game.tagline || '')}</p>`,
                renderTags(game),
                renderMeta(game),
                renderActions(game),
                '</div>'
            ].join('\n');
            gamesGrid.appendChild(card);
        });
    }

    // Render contacts (cards section)
    const contactCards = document.getElementById('contact-cards');
    if (contactCards && Array.isArray(data.contacts)) {
        contactCards.innerHTML = '';
        data.contacts.forEach((c) => {
            const href = c.url || '#';
            const cardLink = document.createElement('a');
            cardLink.className = 'contact-card';
            cardLink.href = href;
            cardLink.target = '_blank';
            cardLink.rel = 'noopener';
            cardLink.innerHTML = [
                `<div class="contact-icon" aria-hidden="true">${iconHtmlFor(c.id)}</div>`,
                `<div class="contact-body"><div class="contact-label">${escapeHtml(c.label || '')}</div>`,
                `<div class="contact-display">${escapeHtml(c.display || href)}</div></div>`
            ].join('\n');
            contactCards.appendChild(cardLink);
        });
    }

    // Footer contacts list
    const footerList = document.getElementById('footer-contacts');
    if (footerList && Array.isArray(data.contacts)) {
        footerList.innerHTML = '';
        data.contacts.forEach((c) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = c.url || '#';
            a.target = '_blank';
            a.rel = 'noopener';
            a.textContent = c.display || c.label || c.url;
            li.appendChild(a);
            footerList.appendChild(li);
        });
    }

    function renderTags(game) {
        const parts = [];
        if (Array.isArray(game.genres) && game.genres.length) {
            parts.push(`<div class="tag-list">${game.genres.map((t) => `<span class="tag tag-genre">${escapeHtml(String(t))}</span>`).join('')}</div>`);
        }
        if (Array.isArray(game.platforms) && game.platforms.length) {
            parts.push(`<div class="tag-list">${game.platforms.map((t) => `<span class="tag tag-platform">${escapeHtml(String(t))}</span>`).join('')}</div>`);
        }
        return parts.join('');
    }

    function renderMeta(game) {
        const items = [];
        if (game.year) items.push(`${escapeHtml(String(game.year))}`);
        if (!items.length) return '';
        return `<div class="meta">${items.map((m) => `<span>${m}</span>`).join('')}</div>`;
    }

    function renderActions(game) {
        if (!Array.isArray(game.links) || !game.links.length) return '';
        const buttons = game.links.map((l) => {
            const classes = ['button'];
            if (l.variant === 'primary') classes.push('primary');
            return `<a class="${classes.join(' ')}" href="${escapeAttribute(l.url)}" target="_blank" rel="noopener">${escapeHtml(l.label || 'Open')}</a>`;
        }).join('');
        return `<div class="card-actions">${buttons}</div>`;
    }

    // Minimal escaping helpers to prevent HTML injection
    function escapeHtml(value) {
        return String(value)
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#39;');
    }
    function escapeAttribute(value) {
        return escapeHtml(value).replaceAll('"', '&quot;');
    }
    function iconFor(id) {
        switch (id) {
            case 'telegram': return 'telegram';
            case 'email': return 'email';
            default: return 'link';
        }
    }

    function iconHtmlFor(id) {
        if (id === 'telegram') {
            return `<img src="telegram.png" alt="Telegram" class="icon-img" loading="lazy">`;
        }
        switch (id) {
            case 'email': return '✉️';
            default: return '🔗';
        }
    }

    // Header hide on scroll down, show on scroll up
    let lastY = window.scrollY;
    const headerEl = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (!headerEl) return;
        if (y > lastY && y > 10) {
            headerEl.classList.add('header-hidden');
        } else {
            headerEl.classList.remove('header-hidden');
        }
        lastY = y;
    }, { passive: true });
})();


