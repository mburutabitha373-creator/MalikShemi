import './style.css'

const savedMoments = Number(localStorage.getItem('malik-shemi-moments') || 7)
const savedNotes = JSON.parse(localStorage.getItem('malik-shemi-notes') || '[]')

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="wordmark" href="#top" aria-label="Malik and Shemi home"><span>M</span><span class="heart">&</span><span>S</span></a>
    <nav aria-label="Main navigation">
      <a href="#story">Our story</a>
      <a href="#notes">Little notes</a>
    </nav>
    <button class="icon-button" id="surprise-button" type="button" aria-label="Show a surprise">✦</button>
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

    <section class="story-section" id="story">
      <div class="section-label">01 / our little story 💌</div>
      <div class="story-content"><h2>🌹 Our love<br /><em>story.</em></h2><p>Two favourite people, one soft place to land. Our kind of magic is in the little things: shared laughs, warm hugs, and choosing each other every day. 🫶🏽</p><div class="love-list" aria-label="Reasons why I love you"><span>your laugh 💖</span><span>your soft heart 🥹</span><span>our silly jokes 😘</span></div><div class="signature">Malik <span>♡</span> Shemi</div></div>
      <article class="meet-card"><img src="/photos/snap-to-real-life.jpeg" alt="A memory from Malik and Shemi's first meeting" /><div class="meet-card-copy"><span class="meet-date">April 26, 2025</span><h3>From Snap to real life 💛</h3><p>We first met on Snapchat, then met physically for the first time and held hands. The beginning of our favourite hello. 📸🤝🏾</p><span class="quote-author">our first in-person memory</span></div></article>
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
        <figure><img src="/photos/new-day-out.jpeg" alt="Mark enjoying a sunny day outside" /><figcaption>Sunshine looks good on you, Malik ☀️💛</figcaption></figure>
        <figure class="video-card"><video src="/photos/new-memory.mp4" controls muted loop playsinline preload="metadata" aria-label="A new memory video"></video><figcaption>A little moment worth replaying 🎞️💕</figcaption></figure>
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
