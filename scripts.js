/* eslint-disable linebreak-style */
const speakers = [{
  name: 'Bill Gates',
  photo: 'images-icons/images/speaker1.jpeg',
  job: 'Co-founder of Microsoft',
  info: 'William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
},
{
  name: 'Mark Zuckerberg',
  photo: 'images-icons/images/speaker2.jpeg',
  job: '',
  info: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Meta Platforms, Inc. and serves as its chairman, chief executive officer, and controlling shareholder',
},
{
  name: 'Alan Turing',
  photo: 'images-icons/images/speaker3.jpg',
  job: 'English mathematician',
  info: 'Alan Mathison Turing OBE FRS was an English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist.',
},
{
  name: 'Jeff Bezos',
  photo: 'images-icons/images/speaker4.jpg',
  job: 'Co-founder of Amazon',
  info: 'Jeffrey Preston Bezos is an American entrepreneur, media proprietor, investor, and computer engineer. He is the founder and executive chairman of Amazon, where he previously served as the president and CEO.',
},
{
  name: 'elon musk',
  photo: 'images-icons/images/speaker5.jpg',
  job: 'CEO and Chief Engineer at SpaceX',
  info: 'Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder, CEO and Chief Engineer at SpaceX; early-stage investor, CEO and Product Architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink and OpenAI.',
},
{
  name: 'Dan Schulman',
  photo: 'images-icons/images/speaker6.jpg',
  job: 'CEO of PayPal',
  info: 'American business executive. He is president and CEO of PayPal, formerly serving as group president of enterprise growth at American Express',
}
];

const h2 = document.createElement('h2');
h2.classList.add('text-center');
h2.innerHTML = 'Featured Speakers';

const hr1 = document.createElement('hr');
hr1.id = 'hr-featured-speakers';
hr1.classList.add('mx-auto');
hr1.classList.add('mb-5');

const div = document.createElement('div');
div.classList.add('row');
div.classList.add('d-flex');
div.classList.add('justify-content-center');
div.classList.add('px-2');
div.classList.add('px-md-0');
div.classList.add('speakers');

for (let i = 0; i < speakers.length; i += 1) {
  const div2 = document.createElement('div');
  div2.classList.add('col-md-5');
  div2.classList.add('col-12');
  div2.classList.add('d-flex');
  div2.classList.add('felx-column');
  div2.classList.add('flex-md-row');
  div2.classList.add('me-1');
  div2.classList.add('speaker1');

  const image = document.createElement('img');
  image.classList.add('nav-icon');
  image.classList.add('me-3');
  image.classList.add('image-speaker');
  image.setAttribute('src', speakers[i].photo);
  image.setAttribute('alt', speakers[i].name);

  const div3 = document.createElement('div');
  div3.classList.add('row');
  div3.classList.add('d-flex');
  div3.classList.add('felx-column');
  div3.classList.add('mt-0');

  const h3 = document.createElement('h3');
  h3.innerHTML = speakers[i].name;

  const p = document.createElement('p');
  p.classList.add('fw-bolder');
  p.classList.add('speaker-p');
  p.innerHTML = speakers[i].job;

  const hr2 = document.createElement('hr');
  hr2.classList.add('hr-speaker');

  const p2 = document.createElement('p');
  p2.classList.add('fw-bolder');
  p2.classList.add('speaker-p2');
  p2.innerHTML = speakers[i].info;

  div3.appendChild(h3);
  div3.appendChild(p);
  div3.appendChild(hr2);
  div3.appendChild(p2);

  div2.appendChild(image);
  div2.appendChild(div3);

  div.appendChild(div2);

  document.getElementById('featured-speakers').appendChild(h2);
  document.getElementById('featured-speakers').appendChild(hr1);
  document.getElementById('featured-speakers').appendChild(div);
}
