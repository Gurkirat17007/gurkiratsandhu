const profile = {
  'name' : 'Prof. Xavier',
  'twitter' : '@profx',
  'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0004.gif',
  
  'name1' : 'Spiderman',
  'twitter1' : '@spidey',
  'pic1' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0008.gif',
  
  'name2' : 'Wolverine',
  'twitter2' : '@logan',
  'pic2' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0011.gif'
};
const img = document.querySelector('img');
img.src= profile.pic;

const name = document.querySelector('#name');
name.textContent = profile.name;

const codename = document.querySelector('#user');
//codename.textContent = '@${profile.login}';
codename.innerHTML = `<a href="${profile.url}">${profile.twitter}</a>`;

const button=document.getElementById('submit_button');
  
button.addEventListener('click',function(event){
  event.preventDefault();
if(this.textContent === '+ Follow'){
   this.textContent='- Following';
  console.info('Following User');
  console.table(profile);
   }
  else{
   this.textContent='+ Follow';
  console.info('Unfollowing User');
    
  }
});


const img1 = document.querySelector('#img1');
img1.src= profile.pic1;

const name1 = document.querySelector('#name1');
name1.textContent = profile.name1;

const codename1 = document.querySelector('#user1');
//codename.textContent = '@${profile.login}';
codename1.innerHTML = `<a href="${profile.url}">${profile.twitter1}</a>`;

const button1=document.getElementById('submit_button1');
  
button1.addEventListener('click',function(event){
  event.preventDefault();
if(this.textContent === '+ Follow'){
   this.textContent='- Following';
  console.info('Following User');
  console.table(profile);
   }
  else{
   this.textContent='+ Follow';
  console.info('Unfollowing User');
    
  }
});

const img2 = document.querySelector('#img2');
img2.src= profile.pic2;

const name2 = document.querySelector('#name2');
name2.textContent = profile.name2;

const codename2 = document.querySelector('#user2');
//codename.textContent = '@${profile.login}';
codename2.innerHTML = `<a href="${profile.url}">${profile.twitter2}</a>`;

const button2=document.getElementById('submit_button2');
  
button1.addEventListener('click',function(event){
  event.preventDefault();
if(this.textContent === '+ Follow'){
   this.textContent='- Following';
  console.info('Following User');
  console.table(profile);
   }
  else{
   this.textContent='+ Follow';
  console.info('Unfollowing User');
    
  }
});