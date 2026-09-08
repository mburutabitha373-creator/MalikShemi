import './style.css'

const savedMoments = Number(localStorage.getItem('malik-shemi-moments') || 7)
const savedNotes = JSON.parse(localStorage.getItem('malik-shemi-notes') || '[]')
const relationshipStart = new Date('2025-04-26T00:00:00')
const loveMessages = ['You are my favourite person in every room. ❤️', 'Malik + Shemi: still my best idea. 💖', 'I love the little life we are making. 🥰', 'One look at you and my heart says yes again. 🫶🏽']
const reasons = ['your laugh makes ordinary days sparkle ✨', 'you make everything feel a little more like home 🏡', 'you choose softness, even on hard days 🥹', 'you are my favourite person to do nothing with 💕', 'you make my heart feel safe and silly at once 😘']
const randomNotes = ['Missing you is my least favourite hobby. 💌', 'You are my today, my favourite tomorrow, and every sweet little in-between. 🌙', 'Thank you for being my calm, my chaos, and my person. 🫶🏽', 'A tiny reminder: you are loved more than you know. ❤️']

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="wordmark" href="#top" aria-label="Malik and Shemi home"><span>M</span><span class="heart">&</span><span>S</span></a>
    <nav aria-label="Main navigation">
      <a href="#story">Our story</a>
      <a href="#notes">Little notes</a>
    </nav>
    <div class="top-actions"><button class="icon-button" id="theme-toggle" type="button" aria-label="Toggle dark mode">☾</button><button class="icon-button" id="surprise-button" type="button" aria-label="Show a surprise">✦</button></div>
  </header>

  <main id="top">
    <section class="hero-section">
      <div class="hero-copy">
        <p class="eyebrow">❤️ Our little corner of the internet ✦</p>
        <h1>Malik <em>&</em><br />Shemi</h1>
        <p class="hero-intro">Two favourite people, one shared little universe. From a Snap hello to real-life hand-holding, this is where our soft, silly, sunshine kind of love gets to stay. ✨</p>
        <div class="hero-actions">
          <a class="primary-button" href="#notes">Leave a little note <span>→</span></a>
          <button class="text-button" id="moment-button" type="button">Add a moment <span>＋</span></button>
        </div>
        <div class="hero-tools"><button class="love-button" id="love-button" type="button">❤️ Send love</button><button class="text-button" id="message-button" type="button">💌 Open my message</button></div>
        <p class="hidden-message" id="hidden-message" aria-live="polite">You are my favourite chapter, my sweetest surprise, and the person I want beside me for all the ordinary magic. 💖</p>
        <div class="sweet-chips" aria-label="Little things about us"><span>best friends-ish 🤭</span><span>forever team 🫶🏽</span><span>made of memories 📸</span></div>
      </div>
      <div class="hero-photo-wrap">
        <img class="hero-photo" src="/photos/blue-moment.jpeg" alt="Malik and Shemi holding hands when they first met" />
        <div class="photo-label"><span>April 26, 2025<br />our first good day</span><strong>♡</strong></div>
      </div>
    </section>

    <section class="stats-strip" aria-label="Our little stats">
      <div><strong id="moment-count">${savedMoments}</strong><span>little moments<br />saved</span></div>
      <div><strong>∞</strong><span>reasons to<br />smile ☀️</span></div>
      <div><strong>1</strong><span>very good<br />team 💛</span></div>
    </section>

    <section class="love-tools" aria-labelledby="love-tools-title">
      <div class="section-label">little love tools ✨</div>
      <div class="tools-heading"><h2 id="love-tools-title">💕 Just you<br /><em>& me.</em></h2><p>Press a button whenever your heart needs a tiny bit of extra sweetness.</p></div>
      <div class="tool-grid">
        <article class="tool-card reason-card"><span class="tool-icon">🥰</span><h3>Reasons I love you</h3><p id="reason-output">Tap for a little reminder.</p><button class="soft-button" id="reason-button" type="button">Tell me one <span>↗</span></button></article>
        <article class="tool-card note-generator"><span class="tool-icon">💖</span><h3>Random love note</h3><p id="random-note-output">A sweet message is waiting.</p><button class="soft-button" id="random-note-button" type="button">Surprise me <span>✦</span></button></article>
        <article class="tool-card counter-card"><span class="tool-icon">⏳</span><h3>Our time together</h3><strong id="relationship-days">0</strong><p>days of choosing each other<br /><span>since April 26, 2025</span></p></article>
        <article class="tool-card music-card"><span class="tool-icon">🎵</span><h3>Our little soundtrack</h3><p id="music-label">Choose a favourite song to play here. It will never autoplay.</p><input id="music-input" type="file" accept="audio/*" aria-label="Choose a favourite song" /><audio id="music-player" controls></audio></article>
      </div>
    </section>

    <section class="story-section" id="story">
      <div class="section-label">01 / our little story 💌</div>
      <div class="story-content"><h2>🌹 Our love<br /><em>story.</em></h2><p>Two favourite people, one soft place to land. Our kind of magic is in the little things: shared laughs, warm hugs, and choosing each other every day. 🫶🏽</p><div class="love-list" aria-label="Reasons why I love you"><span>your laugh 💖</span><span>your soft heart 🥹</span><span>our silly jokes 😘</span></div><div class="signature">Malik <span>♡</span> Shemi</div></div>
      <article class="meet-card"><img src="/photos/recent-whatsapp-memory.jpeg" alt="Malik and Shemi holding hands in their newest photo" /><div class="meet-card-copy"><span class="meet-date">April 26, 2025</span><h3>From Snap to real life 💛</h3><p>We first met on Snapchat, then met physically for the first time and held hands. The beginning of our favourite hello. 📸🤝🏾</p><span class="quote-author">our first in-person memory</span></div></article>
    </section>

    <section class="gallery-section" aria-labelledby="gallery-title">
      <div class="section-label">02 / memories we keep 📸</div>
      <div class="gallery-heading"><h2 id="gallery-title">📸 Our beautiful<br /><em>memories.</em></h2><p>The tiny moments are the ones we keep coming back to. Every photo says, “I would choose you again.” 💕</p></div>
      <div class="photo-grid">
        <figure><img src="/photos/outdoor-selfie.jpeg" alt="Malik and Shemi outdoors" /><figcaption>Fresh air, soft smiles 🌿</figcaption></figure>
        <figure><img src="/photos/holding-hands.jpeg" alt="Malik and Shemi holding hands" /><figcaption>Always holding on 🤍</figcaption></figure>
        <figure><img src="/photos/blue-moment.jpeg" alt="A quiet moment together" /><figcaption>Our little kind of peace 💕</figcaption></figure>
        <figure><img src="/photos/hand-in-hand.jpeg" alt="Malik and Shemi's hands together" /><figcaption>Hand in hand, heart to heart 🫶🏾</figcaption></figure>
        <figure><img src="/photos/pool-day.jpeg" alt="A pool day together" /><figcaption>Pool days and happy hearts 💦</figcaption></figure>
        <figure><img src="/photos/playful-black-and-white.jpeg" alt="A playful black and white moment" /><figcaption>Love looks silly too 😄</figcaption></figure>
        <figure><img src="/photos/mirror-moment.jpeg" alt="A playful mirror moment together" /><figcaption>Just our favourite duo ✨</figcaption></figure>
      </div>
      <div class="new-media" aria-label="New memories">
        <figure><img src="/photos/latest-sunshine-memory.jpeg" alt="Malik enjoying a sunny day outside" /><figcaption>Sunshine looks good on you, Malik ☀️💛</figcaption></figure>
        <figure><img src="/photos/latest-sweet-memory.jpeg" alt="A cozy everyday moment together" /><figcaption>Little touches, big love 🥰🫶🏽</figcaption></figure>
        <figure><img src="/photos/shemi-portrait.jpeg" alt="Shemi smiling for a portrait" /><figcaption>Shemi, looking lovely 💕✨</figcaption></figure>
        <figure><img src="/photos/latest-couple-memory.jpeg" alt="Malik kissing Shemi's cheek in the garden" /><figcaption>My favourite kind of hello 💋🌹</figcaption></figure>
      </div>
    </section>

    <section class="notes-section" id="notes">
      <div class="section-label">03 / leave something sweet 💌</div>
      <div class="notes-heading"><h2>✨ Little things<br /><em>that make me love you more.</em></h2><p>Write a little love note for each other. It stays right here like a tiny time capsule, ready for a rainy day or a random “I miss you.” 💕</p></div>
      <form id="note-form" class="note-form"><label for="note-input">A note from the heart</label><div class="input-row"><input id="note-input" maxlength="100" placeholder="You make ordinary days feel special..." required /><button class="primary-button" type="submit">Pin it <span>↗</span></button></div></form>
      <div class="notes-list" id="notes-list">${renderNotes(savedNotes)}</div>
    </section>
  </main>
  <footer><span>💖 Forever & always, Malik & Shemi</span><span>you + me = my favourite story 🫶🏽</span></footer>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <div class="lightbox" id="lightbox" aria-hidden="true"><button class="lightbox-close" id="lightbox-close" type="button" aria-label="Close photo">×</button><img id="lightbox-image" alt="" /><p id="lightbox-caption"></p></div>
`

const toast = document.querySelector('#toast')
const showToast = (message) => { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2400) }
const releaseHearts = (event) => {
  const bounds = event.currentTarget.getBoundingClientRect()
  const hearts = ['❤️', '💕', '✨', '💖', '🥰']
  for (let index = 0; index < 5; index += 1) {
    const heart = document.createElement('span')
    heart.className = 'floating-heart'
    heart.textContent = hearts[index % hearts.length]
    heart.style.left = `${event.clientX - bounds.left + (index - 2) * 12}px`
    heart.style.top = `${event.clientY - bounds.top}px`
    heart.style.setProperty('--drift', `${(index - 2) * 18}px`)
    event.currentTarget.appendChild(heart)
    setTimeout(() => heart.remove(), 1300)
  }
}

const updateRelationshipDays = () => {
  const days = Math.max(0, Math.floor((new Date() - relationshipStart) / 86400000))
  document.querySelector('#relationship-days').textContent = days.toLocaleString()
}

const showRandom = (selector, values) => {
  const output = document.querySelector(selector)
  output.classList.remove('revealed')
  void output.offsetWidth
  output.textContent = values[Math.floor(Math.random() * values.length)]
  output.classList.add('revealed')
}

updateRelationshipDays()
setInterval(updateRelationshipDays, 3600000)

document.querySelector('#moment-button').addEventListener('click', (event) => {
  const count = Number(document.querySelector('#moment-count').textContent) + 1
  document.querySelector('#moment-count').textContent = count
  localStorage.setItem('malik-shemi-moments', count)
  showToast('Moment saved. That one counts.')
  releaseHearts(event)
})

document.querySelector('#surprise-button').addEventListener('click', (event) => {
  showToast(['You are each other’s favourite notification. 💌', 'Malik + Shemi = excellent idea. 💖', 'A little joy, delivered. ✨'][Math.floor(Math.random() * 3)])
  releaseHearts(event)
})

document.querySelector('#love-button').addEventListener('click', (event) => {
  showToast(loveMessages[Math.floor(Math.random() * loveMessages.length)])
  releaseHearts(event)
})

document.querySelector('#message-button').addEventListener('click', (event) => {
  const message = document.querySelector('#hidden-message')
  message.classList.toggle('visible')
  event.currentTarget.textContent = message.classList.contains('visible') ? '💌 Hide my message' : '💌 Open my message'
  releaseHearts(event)
})

document.querySelector('#reason-button').addEventListener('click', (event) => { showRandom('#reason-output', reasons); releaseHearts(event) })
document.querySelector('#random-note-button').addEventListener('click', (event) => { showRandom('#random-note-output', randomNotes); releaseHearts(event) })

document.querySelector('#theme-toggle').addEventListener('click', (event) => {
  document.body.classList.toggle('dark')
  const dark = document.body.classList.contains('dark')
  localStorage.setItem('malik-shemi-theme', dark ? 'dark' : 'light')
  event.currentTarget.textContent = dark ? '☀' : '☾'
  event.currentTarget.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Toggle dark mode')
  releaseHearts(event)
})

if (localStorage.getItem('malik-shemi-theme') === 'dark') { document.body.classList.add('dark'); document.querySelector('#theme-toggle').textContent = '☀'; document.querySelector('#theme-toggle').setAttribute('aria-label', 'Switch to light mode') }

const savedSongName = localStorage.getItem('malik-shemi-song-name')
if (savedSongName) document.querySelector('#music-label').textContent = `${savedSongName} is ready when you are. 🎶 Choose it again to play after a refresh.`

document.querySelector('#music-input').addEventListener('change', (event) => {
  const file = event.target.files[0]
  if (!file) return
  document.querySelector('#music-player').src = URL.createObjectURL(file)
  document.querySelector('#music-label').textContent = `${file.name} is ready when you are. 🎶`
  localStorage.setItem('malik-shemi-song-name', file.name)
  showToast('Your song is ready. Press play when you feel like it. 🎵')
})

document.querySelectorAll('.photo-grid img, .new-media img').forEach((image) => {
  image.addEventListener('click', () => {
    const lightbox = document.querySelector('#lightbox')
    document.querySelector('#lightbox-image').src = image.src
    document.querySelector('#lightbox-image').alt = image.alt
    document.querySelector('#lightbox-caption').textContent = image.closest('figure')?.querySelector('figcaption')?.textContent || image.alt
    lightbox.classList.add('open')
    lightbox.setAttribute('aria-hidden', 'false')
  })
})

const closeLightbox = () => { const lightbox = document.querySelector('#lightbox'); lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true') }
document.querySelector('#lightbox-close').addEventListener('click', closeLightbox)
document.querySelector('#lightbox').addEventListener('click', (event) => { if (event.target.id === 'lightbox') closeLightbox() })
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeLightbox() })

document.querySelector('#note-form').addEventListener('submit', (event) => {
  event.preventDefault()
  const input = document.querySelector('#note-input')
  savedNotes.unshift({ text: input.value, date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) })
  localStorage.setItem('malik-shemi-notes', JSON.stringify(savedNotes))
  document.querySelector('#notes-list').innerHTML = renderNotes(savedNotes)
  input.value = ''
  showToast('Your note is tucked away safely.')
  releaseHearts(event)
})

function renderNotes(notes) {
  if (!notes.length) return '<p class="empty-notes">Your first note is waiting here.</p>'
  return notes.slice(0, 3).map((note) => `<article class="note-card"><span class="note-pin">♡</span><p>${escapeHtml(note.text)}</p><time>${note.date}</time></article>`).join('')
}

function escapeHtml(text) {
  const element = document.createElement('div')
  element.textContent = text
  return element.innerHTML
}
