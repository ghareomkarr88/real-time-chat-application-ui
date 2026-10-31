// ===== DATA =====
const contacts = [
  {id:1,name:"Priya Shah",avatar:"https://ui-avatars.com/api/?name=Priya+Shah&background=0f766e&color=fff&size=100",status:"online",about:"Product designer · NexaShop",lastSeen:"online"},
  {id:2,name:"Arjun Mehta",avatar:"https://ui-avatars.com/api/?name=Arjun+Mehta&background=2563eb&color=fff&size=100",status:"online",about:"Frontend engineer · NexaShop",lastSeen:"online"},
  {id:3,name:"Neha Kapoor",avatar:"https://ui-avatars.com/api/?name=Neha+Kapoor&background=c2410c&color=fff&size=100",status:"online",about:"Store operations · NexaShop",lastSeen:"online"},
  {id:4,name:"Rohan Kulkarni",avatar:"https://ui-avatars.com/api/?name=Rohan+Kulkarni&background=7c3aed&color=fff&size=100",status:"offline",about:"Customer support · NexaShop",lastSeen:"Last seen 24 min ago"},
  {id:5,name:"Kabir Nair",avatar:"https://ui-avatars.com/api/?name=Kabir+Nair&background=0891b2&color=fff&size=100",status:"online",about:"Product photography",lastSeen:"online"},
  {id:6,name:"Aanya Desai",avatar:"https://ui-avatars.com/api/?name=Aanya+Desai&background=be123c&color=fff&size=100",status:"offline",about:"NexaShop early-access customer",lastSeen:"Last seen yesterday"},
  {id:7,name:"Ethan Brooks",avatar:"https://ui-avatars.com/api/?name=Ethan+Brooks&background=4d7c0f&color=fff&size=100",status:"online",about:"Fulfillment partner",lastSeen:"online"},
  {id:8,name:"Sana Qureshi",avatar:"https://ui-avatars.com/api/?name=Sana+Qureshi&background=a21caf&color=fff&size=100",status:"offline",about:"Email and social campaigns",lastSeen:"Last seen 3 hours ago"},
  {id:9,name:"Maya Joshi",avatar:"https://ui-avatars.com/api/?name=Maya+Joshi&background=b45309&color=fff&size=100",status:"online",about:"Accessories buyer",lastSeen:"online"},
  {id:10,name:"Kunal Rao",avatar:"https://ui-avatars.com/api/?name=Kunal+Rao&background=1d4ed8&color=fff&size=100",status:"offline",about:"Courier account manager",lastSeen:"Last seen yesterday"}
];

const sampleMessages = {
  1:[
    {id:1,text:"I uploaded the revised product images. The warmer background works better on mobile.",sent:false,time:"09:08 AM",status:"read",date:"Today"},
    {id:2,text:"Agreed. The product cards feel much clearer now.",sent:true,time:"09:14 AM",status:"read",date:"Today"},
    {id:3,text:"Could you check the alt text on the headphone and desk lamp photos before I mark this done?",sent:false,time:"09:19 AM",status:"read",date:"Today"},
    {id:4,text:"On it. I will finish the image pass before lunch.",sent:true,time:"09:23 AM",status:"delivered",date:"Today"}
  ],
  2:[
    {id:1,text:"The cart total now updates when shipping changes. I added a test for the free-shipping threshold too.",sent:true,time:"08:42 AM",status:"read",date:"Today"},
    {id:2,text:"Nice. Does the discount code still apply before shipping?",sent:false,time:"08:48 AM",status:"read",date:"Today"},
    {id:3,text:"Yes. I checked both the order summary and the confirmation screen.",sent:true,time:"08:55 AM",status:"read",date:"Today"}
  ],
  3:[
    {id:1,text:"USB-C hubs are down to 8 units. The next carton is due Friday morning.",sent:false,time:"09:02 AM",status:"read",date:"Today"},
    {id:2,text:"Thanks. Please pause the weekend promo on that item until the delivery is checked in.",sent:true,time:"09:06 AM",status:"read",date:"Today"},
    {id:3,text:"Done. I updated the stock note and told Sana to leave it out of the email.",sent:false,time:"09:11 AM",status:"read",date:"Today"}
  ],
  4:[
    {id:1,text:"A customer says the mouse arrived with a cracked scroll wheel. They sent a photo with the ticket.",sent:true,time:"Yesterday",status:"read",date:"Yesterday"},
    {id:2,text:"I have replied with the return steps and offered a replacement once the parcel is scanned.",sent:false,time:"Yesterday",status:"read",date:"Yesterday"},
    {id:3,text:"Good. Please tag the ticket so we can check whether this batch has more reports.",sent:true,time:"Yesterday",status:"delivered",date:"Yesterday"}
  ],
  5:[
    {id:1,text:"The desk lamp shots are ready. I kept one wide crop and one square crop for each finish.",sent:false,time:"04:12 PM",status:"read",date:"Yesterday"},
    {id:2,text:"Perfect. The square crop fits the collection grid without cutting off the base.",sent:true,time:"04:18 PM",status:"read",date:"Yesterday"}
  ],
  6:[
    {id:1,text:"Hi, do you have an estimate for delivery to Pune? I am ordering the headphones as a gift.",sent:false,time:"06:36 PM",status:"read",date:"Yesterday"},
    {id:2,text:"The current estimate is 3-5 business days after dispatch. We will email the tracking link as soon as it ships.",sent:true,time:"06:44 PM",status:"read",date:"Yesterday"}
  ],
  7:[
    {id:1,text:"Pickup is booked for 4:30. We have 12 parcels on today's manifest.",sent:false,time:"02:05 PM",status:"read",date:"Today"},
    {id:2,text:"Thanks. The two orders from this morning are packed and labeled.",sent:true,time:"02:12 PM",status:"read",date:"Today"}
  ],
  8:[
    {id:1,text:"The Weekend Edit is scheduled for 5:00. I removed the USB-C hub while stock is low.",sent:false,time:"01:20 PM",status:"read",date:"Today"},
    {id:2,text:"Looks good. Can you add the desk lamp bundle and check the mobile preview?",sent:true,time:"01:26 PM",status:"read",date:"Today"},
    {id:3,text:"Added. The preview is clear on a narrow screen now.",sent:false,time:"01:34 PM",status:"read",date:"Today"}
  ],
  9:[
    {id:1,text:"The graphite keyboard has been moving faster than the other colors this week.",sent:false,time:"11:10 AM",status:"read",date:"Today"},
    {id:2,text:"Would you increase the next order by 10 units or wait until Friday's stock count?",sent:true,time:"11:16 AM",status:"read",date:"Today"},
    {id:3,text:"Let's wait for the count. I will send the sell-through numbers after close.",sent:false,time:"11:22 AM",status:"read",date:"Today"}
  ],
  10:[
    {id:1,text:"We can collect returns from your west-side pickup point twice a week, Tuesday and Friday.",sent:false,time:"Yesterday",status:"read",date:"Yesterday"},
    {id:2,text:"Friday works. Please send the revised rate card and pickup cutoff time.",sent:true,time:"Yesterday",status:"read",date:"Yesterday"}
  ]
};

const unreadCounts = {1:1,2:0,3:2,4:0,5:0,6:1,7:0,8:1,9:0,10:0};

const autoReplies = [
  "That's really interesting! Tell me more 🤔",
  "Haha, I love that! 😂",
  "Sounds great! Let's do it 🙌",
  "I was just thinking about the same thing!",
  "Absolutely! Count me in 👍",
  "That's a great idea! How do we start?",
  "No way! That's incredible 🤯",
  "Let me check and get back to you soon",
  "Perfect! I'll work on it right away 💪",
  "Thanks for sharing! This is really helpful 🙏",
  "I couldn't agree more! 💯",
  "Oh wow, I didn't know that! Thanks for the info",
  "Haha nice one 😄 You always crack me up",
  "Sure thing! I'll send it over in a bit",
  "That's exactly what I needed to hear today ❤️"
];

const emojis = {
  smileys:["😀","😃","😄","😁","😅","😂","🤣","😊","😇","🙂","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😜","🤪","😝","🤑","🤗","🤭","🤫","🤔","🤐","🤨","😐","😑","😶","😏","😒","🙄","😬","🤥","😌","😔","😪","🤤","😴","😷","🤒","🤕","🤢","🤮","🥵","🥶","🥴","😵","🤯","🤠","🥳","🥸","😎","🤓","🧐"],
  people:["👋","🤚","🖐","✋","🖖","👌","🤌","🤏","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","👇","☝️","👍","👎","✊","👊","🤛","🤜","👏","🙌","👐","🤲","🤝","🙏","💪","🦾","🦿","🦵","🦶","👂","🦻","👃","🧠","🫀","🫁","🦷","🦴","👀","👁","👅","👄"],
  animals:["🐱","🐶","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🐔","🐧","🐦","🐤","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐞","🐜","🦟","🦗","🕷","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦞","🦀","🐡","🐠","🐟","🐬","🐳","🐋","🦈"],
  food:["🍕","🍔","🍟","🌭","🍿","🧂","🥓","🥚","🍳","🧇","🥞","🧈","🍞","🥐","🥖","🫓","🥨","🥯","🥝","🍇","🍈","🍉","🍊","🍋","🍌","🍍","🥭","🍎","🍏","🍐","🍑","🍒","🍓","🫐","☕","🍵","🧃","🥤","🍶","🍺","🍻","🥂","🍷","🍸","🍹","🍾","🧊"],
  travel:["✈️","🚀","🛸","🚁","🛶","⛵","🚤","🛥","🛳","🚂","🚆","🚇","🚊","🚉","🏎","🚗","🚕","🚙","🚌","🚎","🏍","🛵","🚲","🛴","🗽","🗼","🏰","🏯","🏟","🎡","🎢","🎠","⛲","⛱","🏖","🏝","🏜","🌋","⛰","🏔","🗻","🧳","🌍","🌎","🌏","🌐","🗺"],
  objects:["💡","🔦","🕯","💰","💵","💴","💶","💷","💎","⚖️","🔧","🔨","⚒","🛠","⛏","🔩","⚙️","🔗","⛓","📎","🖇","📌","📍","📏","📐","✂️","📱","📲","💻","⌨️","🖥","🖨","🖱","🖲","💾","💿","📀","🎥","📷","📸","📹","📼","🔍","🔎","🔬","🔭","📡"],
  symbols:["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","🆔","⚛️","🉐","🈶","🈚","🈸","🈺"]
};

// ===== STATE =====
let currentContact = null;
let allMessages = {};
let isDark = localStorage.getItem('chatapp-theme') === 'dark';

// ===== INIT =====
function init() {
  if(isDark) { document.documentElement.setAttribute('data-theme','dark'); updateThemeIcon(); }
  loadMessages();
  renderContacts();
  setupEventListeners();
  renderEmojis('smileys');
}

function loadMessages() {
  const saved = localStorage.getItem('chatapp-messages');
  allMessages = JSON.parse(JSON.stringify(sampleMessages));
  if (!saved) return;

  const savedMessages = JSON.parse(saved);
  Object.entries(savedMessages).forEach(([contactId, messages]) => {
    const userMessages = messages.filter(message => Number(message.id) > 1000000);
    if (userMessages.length) {
      allMessages[contactId] = [...(allMessages[contactId] || []), ...userMessages];
    }
  });
  saveMessages();
}

function saveMessages() {
  localStorage.setItem('chatapp-messages', JSON.stringify(allMessages));
}

// ===== RENDER =====
function renderContacts(filter='') {
  const list = document.getElementById('contactList');
  const f = filter.toLowerCase();
  list.innerHTML = '';

  contacts.filter(c => c.name.toLowerCase().includes(f)).forEach(contact => {
    const msgs = allMessages[contact.id] || [];
    const lastMsg = msgs[msgs.length-1];
    const preview = lastMsg ? (lastMsg.text.startsWith('image:') ? '📷 Photo' : lastMsg.text) : 'Start a conversation';
    const time = lastMsg ? lastMsg.time : '';
    const unread = unreadCounts[contact.id] || 0;

    const tickHtml = lastMsg && lastMsg.sent ? getTickSVG(lastMsg.status) : '';

    const el = document.createElement('div');
    el.className = `contact-item${currentContact && currentContact.id === contact.id ? ' active' : ''}`;
    el.onclick = () => openChat(contact);
    el.innerHTML = `
      <div class="contact-avatar">
        <img src="${contact.avatar}" alt="${contact.name}" loading="lazy">
        <div class="status-dot ${contact.status}"></div>
      </div>
      <div class="contact-info">
        <div class="contact-top">
          <div class="contact-name">${contact.name}</div>
          <div class="contact-time">${time}</div>
        </div>
        <div class="contact-bottom">
          <div class="contact-preview">${tickHtml}${preview.length > 40 ? preview.substring(0,40)+'...' : preview}</div>
          ${unread > 0 ? `<div class="unread-badge">${unread}</div>` : ''}
        </div>
      </div>
    `;
    list.appendChild(el);
  });
}

function getTickSVG(status) {
  if(status==='sent') return '<svg style="width:16px;height:11px;margin-right:3px;color:var(--text-secondary);vertical-align:middle;flex-shrink:0" viewBox="0 0 16 11" fill="currentColor"><path d="M11.07.66L4.88 6.85 2.72 4.69 1.3 6.1l3.58 3.58 7.6-7.6z"/></svg>';
  if(status==='delivered') return '<svg style="width:16px;height:11px;margin-right:3px;color:var(--text-secondary);vertical-align:middle;flex-shrink:0" viewBox="0 0 16 11" fill="currentColor"><path d="M11.07.66L4.88 6.85 2.72 4.69 1.3 6.1l3.58 3.58 7.6-7.6z"/><path d="M15.07.66L8.88 6.85 7.47 5.44 6.06 6.85l2.82 2.83 7.6-7.6z"/></svg>';
  if(status==='read') return '<svg style="width:16px;height:11px;margin-right:3px;color:var(--tick-color);vertical-align:middle;flex-shrink:0" viewBox="0 0 16 11" fill="currentColor"><path d="M11.07.66L4.88 6.85 2.72 4.69 1.3 6.1l3.58 3.58 7.6-7.6z"/><path d="M15.07.66L8.88 6.85 7.47 5.44 6.06 6.85l2.82 2.83 7.6-7.6z"/></svg>';
  return '';
}

function openChat(contact) {
  currentContact = contact;
  unreadCounts[contact.id] = 0;

  document.getElementById('welcomeScreen').style.display = 'none';
  const ac = document.getElementById('activeChat');
  ac.style.display = 'flex';

  document.getElementById('chatAvatarImg').src = contact.avatar;
  document.getElementById('chatName').textContent = contact.name;
  document.getElementById('chatStatus').textContent = contact.status === 'online' ? 'online' : contact.lastSeen;

  renderMessages();
  renderContacts(document.getElementById('searchInput').value);

  // Mobile: hide sidebar
  if(window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.add('hidden');
  }
}

function renderMessages() {
  const container = document.getElementById('messagesContainer');
  container.innerHTML = '';
  const msgs = allMessages[currentContact.id] || [];
  let lastDate = '';

  msgs.forEach(msg => {
    if(msg.date && msg.date !== lastDate) {
      lastDate = msg.date;
      const sep = document.createElement('div');
      sep.className = 'date-separator';
      sep.innerHTML = `<span>${msg.date}</span>`;
      container.appendChild(sep);
    }

    const div = document.createElement('div');
    div.className = `message ${msg.sent ? 'sent' : 'received'}`;
    div.dataset.id = msg.id;

    let content = '';
    if(msg.text.startsWith('image:')) {
      const imgUrl = msg.text.replace('image:','');
      content = `<div class="message-image" onclick="openImageViewer('${imgUrl}')"><img src="${imgUrl}" alt="Shared image" loading="lazy"></div>`;
    } else {
      content = `<div class="message-text">${linkify(msg.text)}</div>`;
    }

    const ticksHtml = msg.sent ? `<span class="message-ticks${msg.status==='read'?' read':''}">${getTickOnlySVG(msg.status)}</span>` : '';

    div.innerHTML = `<div class="message-bubble">${content}<div class="message-footer"><span class="message-time">${msg.time}</span>${ticksHtml}</div></div>`;

    div.oncontextmenu = (e) => { e.preventDefault(); showContextMenu(e, msg); };

    container.appendChild(div);
  });

  requestAnimationFrame(() => { container.scrollTop = container.scrollHeight; });
}

function getTickOnlySVG(status) {
  if(status==='sent') return '<svg viewBox="0 0 16 11" fill="currentColor"><path d="M11.07.66L4.88 6.85 2.72 4.69 1.3 6.1l3.58 3.58 7.6-7.6z"/></svg>';
  if(status==='delivered') return '<svg viewBox="0 0 16 11" fill="currentColor"><path d="M11.07.66L4.88 6.85 2.72 4.69 1.3 6.1l3.58 3.58 7.6-7.6z"/><path d="M15.07.66L8.88 6.85 7.47 5.44 6.06 6.85l2.82 2.83 7.6-7.6z"/></svg>';
  if(status==='read') return '<svg viewBox="0 0 16 11" fill="currentColor"><path d="M11.07.66L4.88 6.85 2.72 4.69 1.3 6.1l3.58 3.58 7.6-7.6z"/><path d="M15.07.66L8.88 6.85 7.47 5.44 6.06 6.85l2.82 2.83 7.6-7.6z"/></svg>';
  return '';
}

function linkify(text) {
  return text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener" style="color:var(--accent);text-decoration:underline">$1</a>');
}

// ===== SEND MESSAGE =====
function sendMessage() {
  const input = document.getElementById('messageInput');
  const text = input.value.trim();
  if(!text || !currentContact) return;

  const now = new Date();
  const timeStr = formatTime(now);

  if(!allMessages[currentContact.id]) allMessages[currentContact.id] = [];
  const newId = Date.now();
  allMessages[currentContact.id].push({
    id: newId,
    text: text,
    sent: true,
    time: timeStr,
    status: 'sent',
    date: 'Today'
  });

  input.value = '';
  input.style.height = 'auto';
  saveMessages();
  renderMessages();
  renderContacts(document.getElementById('searchInput').value);

  // Simulate status updates
  setTimeout(() => {
    const msg = allMessages[currentContact.id].find(m => m.id === newId);
    if(msg) { msg.status = 'delivered'; saveMessages(); renderMessages(); }
  }, 1000);

  setTimeout(() => {
    const msg = allMessages[currentContact.id].find(m => m.id === newId);
    if(msg) { msg.status = 'read'; saveMessages(); renderMessages(); }
  }, 2000);

  // Auto reply
  if(currentContact.status === 'online') {
    showTyping();
    const delay = 2000 + Math.random() * 3000;
    setTimeout(() => {
      hideTyping();
      const reply = autoReplies[Math.floor(Math.random()*autoReplies.length)];
      allMessages[currentContact.id].push({
        id: Date.now(),
        text: reply,
        sent: false,
        time: formatTime(new Date()),
        status: 'read',
        date: 'Today'
      });
      saveMessages();
      renderMessages();
      renderContacts(document.getElementById('searchInput').value);
    }, delay);
  }
}

function formatTime(date) {
  let h = date.getHours();
  let m = date.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12; if(h===0) h=12;
  return `${h}:${m<10?'0'+m:m} ${ampm}`;
}

function showTyping() {
  document.getElementById('typingIndicator').style.display = 'flex';
  document.getElementById('chatStatus').textContent = 'typing...';
  const container = document.getElementById('messagesContainer');
  container.scrollTop = container.scrollHeight;
}

function hideTyping() {
  document.getElementById('typingIndicator').style.display = 'none';
  if(currentContact) {
    document.getElementById('chatStatus').textContent = currentContact.status === 'online' ? 'online' : currentContact.lastSeen;
  }
}

// ===== EMOJI =====
function renderEmojis(category) {
  const grid = document.getElementById('emojiGrid');
  const list = emojis[category] || [];
  grid.innerHTML = list.map(e => `<div class="emoji-item" data-emoji="${e}">${e}</div>`).join('');

  document.querySelectorAll('.emoji-cat-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === category);
  });
}

function toggleEmojiPicker() {
  const picker = document.getElementById('emojiPicker');
  picker.classList.toggle('show');
}

// ===== FILE =====
function handleFileSelect(e) {
  const file = e.target.files[0];
  if(!file || !currentContact) return;

  if(file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(ev) {
      if(!allMessages[currentContact.id]) allMessages[currentContact.id] = [];
      allMessages[currentContact.id].push({
        id: Date.now(),
        text: 'image:' + ev.target.result,
        sent: true,
        time: formatTime(new Date()),
        status: 'sent',
        date: 'Today'
      });
      saveMessages();
      renderMessages();
      renderContacts(document.getElementById('searchInput').value);
      showToast('Image Sent', 'Your image has been sent successfully');
    };
    reader.readAsDataURL(file);
  } else {
    document.getElementById('fileName').textContent = file.name;
    document.getElementById('fileSize').textContent = formatFileSize(file.size);
    document.getElementById('filePreview').classList.add('show');
  }
  e.target.value = '';
}

function formatFileSize(bytes) {
  if(bytes<1024) return bytes+' B';
  if(bytes<1048576) return (bytes/1024).toFixed(1)+' KB';
  return (bytes/1048576).toFixed(1)+' MB';
}

function closeFilePreview() {
  document.getElementById('filePreview').classList.remove('show');
}

// ===== CONTEXT MENU =====
function showContextMenu(e, msg) {
  const menu = document.getElementById('contextMenu');
  menu.style.display = 'block';
  menu.style.left = Math.min(e.clientX, window.innerWidth - 200) + 'px';
  menu.style.top = Math.min(e.clientY, window.innerHeight - 250) + 'px';
  menu.dataset.msgId = msg.id;
  menu.dataset.msgText = msg.text;
}

function hideContextMenu() {
  document.getElementById('contextMenu').style.display = 'none';
}

// ===== IMAGE VIEWER =====
function openImageViewer(src) {
  document.getElementById('viewerImage').src = src;
  document.getElementById('imageViewer').classList.add('show');
}

function closeImageViewer() {
  document.getElementById('imageViewer').classList.remove('show');
}

// ===== THEME =====
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('chatapp-theme', isDark ? 'dark' : 'light');
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  if(isDark) {
    icon.innerHTML = '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>';
  } else {
    icon.innerHTML = '<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>';
  }
}

// ===== TOAST =====
function showToast(title, text) {
  const toast = document.getElementById('toast');
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastText').textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== PROFILE =====
function openProfile() {
  document.getElementById('profilePanel').classList.add('show');
}

function closeProfile() {
  document.getElementById('profilePanel').classList.remove('show');
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  // Send
  document.getElementById('sendBtn').addEventListener('click', sendMessage);
  document.getElementById('messageInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  // Auto-resize textarea
  document.getElementById('messageInput').addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 100) + 'px';
  });

  // Search
  document.getElementById('searchInput').addEventListener('input', function() {
    renderContacts(this.value);
  });

  // Emoji
  document.getElementById('emojiBtn').addEventListener('click', toggleEmojiPicker);
  document.getElementById('emojiGrid').addEventListener('click', (e) => {
    if(e.target.classList.contains('emoji-item')) {
      const input = document.getElementById('messageInput');
      input.value += e.target.dataset.emoji;
      input.focus();
    }
  });
  document.querySelectorAll('.emoji-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => renderEmojis(btn.dataset.cat));
  });
  document.getElementById('emojiSearch').addEventListener('input', function() {
    const q = this.value.toLowerCase();
    document.querySelectorAll('.emoji-item').forEach(item => {
      item.style.display = '';
    });
    if(!q) return;
    // Simple filter - show all for now (emoji names not indexed)
  });

  // Attach
  document.getElementById('attachBtn').addEventListener('click', () => {
    document.getElementById('fileInput').click();
  });
  document.getElementById('fileInput').addEventListener('change', handleFileSelect);

  // Theme
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Back button (mobile)
  document.getElementById('backBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('hidden');
    if(window.innerWidth <= 768) {
      document.getElementById('activeChat').style.display = 'none';
      document.getElementById('welcomeScreen').style.display = 'flex';
      currentContact = null;
      renderContacts();
    }
  });

  // Context menu
  document.addEventListener('click', (e) => {
    hideContextMenu();
    if(!e.target.closest('.emoji-picker') && !e.target.closest('#emojiBtn')) {
      document.getElementById('emojiPicker').classList.remove('show');
    }
  });

  document.querySelectorAll('.context-item').forEach(item => {
    item.addEventListener('click', () => {
      const action = item.dataset.action;
      const menu = document.getElementById('contextMenu');
      const msgText = menu.dataset.msgText;
      const msgId = parseInt(menu.dataset.msgId);

      if(action === 'copy' && msgText) {
        navigator.clipboard.writeText(msgText).then(() => showToast('Copied', 'Message copied to clipboard'));
      } else if(action === 'delete' && currentContact) {
        allMessages[currentContact.id] = (allMessages[currentContact.id]||[]).filter(m => m.id !== msgId);
        saveMessages();
        renderMessages();
        renderContacts(document.getElementById('searchInput').value);
        showToast('Deleted', 'Message has been deleted');
      } else if(action === 'reply') {
        const input = document.getElementById('messageInput');
        input.focus();
        showToast('Reply', 'Type your reply message');
      } else if(action === 'forward') {
        showToast('Forward', 'Select a contact to forward');
      } else if(action === 'star') {
        showToast('Starred', 'Message has been starred ⭐');
      }
      hideContextMenu();
    });
  });

  // Image viewer
  document.getElementById('imageViewer').addEventListener('click', (e) => {
    if(e.target === document.getElementById('imageViewer')) closeImageViewer();
  });

  // Keyboard shortcut
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      closeImageViewer();
      document.getElementById('emojiPicker').classList.remove('show');
      hideContextMenu();
    }
  });
}

// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 1500);
  init();
});
