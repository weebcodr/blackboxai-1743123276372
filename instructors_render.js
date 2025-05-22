const instructors = [
    {
        name: "Michael Mourer - President - Chief Pilot",
        credentials: "CFI, CFII, MEI, ATP",
        photo: "Content/InstPics/cache/Michael.jpg",
        bio: `I started New Vision Aviation with the idea that a group of likeminded instructors would work together to maintain a high level of training in a cooperative environment to benefit the student.  My colleagues and I ensure this happens by continuing to expand our education and knowledge in the industry. I also promote and support a custom tailored training program to meet the needs of the individual student.

Flight training should be an exciting adventure mixed with lots of hard work. As an independent instructor I work hard to keep things flexible to allow for a more enriched training experience. 
Contact me for an intro flight today!

I currently train all levels of pilots in the following training aircraft:
- Cessna 172 & RG
- Cessna 182 RG/Turbo/G1000
- Diamond Star DA40
- Beechcraft Duchess 76
- Cessna 205
- Beech BE-33G Debonair 
- Piper PA-28/Piper Arrow
- G1000 training available - Call today (619) 786-7534
[Click here to schedule a lesson](https://newvisionaviation.youcanbook.me/)`
    },
    {
        name: "Josh Friedman - Flight Instructor",
        credentials: "CFI, CFII",
        photo: "Content/InstPics/cache/Josh Friedman2.jpg",
        bio: `Let's go flying! Since I was a kid I dreamed of becoming a pilot. Unfortunately at the time I didn't know any and it seemed impossible. All of that has changed! I'm now a part of the aviation community. So whether you're interested in a new hobby and sailing seems a bit too slow, or you're pursuing a career path such as myself, we'll work together to make you a safe and competent pilot. There's no field like it, and the industry is growing fast. Now is the time!

Training Private, Single Engine Commercial in the following training aircraft:
- Cessna 172
- Diamond Star DA40

[Click here to schedule a lesson](https://joshua-friedman.youcanbook.me/)`
    },
    {
        name: "Cameron Oakley - Flight Instructor",
        credentials: "CFI, CFII",
        photo: "Content/InstPics/cache/Cameron Oakley.jpg",
        bio: `Ever since I was a kid, I've always been a tinkerer whose fascinated with machines (flying or otherwise) but never considered aviation as a career path until graduating from college. After getting my mechanical engineering degree and working in the field, I realized that a desk job was not my calling and decided to go all in on aviation. I did all of my training here at Plus One and want to help the next generation of pilots reach their goals! 

Training Private, Instrument and Single Engine Commercial in the following training aircraft:
- Cessna 172

[Click here to schedule a lesson](https://cameronoakley.youcanbook.me/)`
    },
    {
        name: "Oliver Emde - Flight Instructor",
        credentials: "CFI",
        photo: "Content/InstPics/cache/Oliver Emde.jpg",
        bio: `Coming from a family of pilots I've always known what I wanted to do with my life. I grew up in Maui, Hawaii, where I embarked on my aviation journey at the age of 17. Flying in Maui with some of the strongest crosswinds in the world I perfected my craft. Since then, I have relocated to California to further pursue my dream. Whether you're pursuing a career or learning for fun, I am eager to share my knowledge to help you become a safe and knowledgeable pilot!

Training Private and Single Engine Commercial in the following training aircraft:
- Cessna 172

[Click here to schedule a lesson](https://oliveremde11.youcanbook.me/)`
    },
    {
        name: "Jesse Balasek - Flight Instructor",
        credentials: "CFI, CFII",
        photo: "Content/InstPics/cache/Jesse Balasek.jpg",
        bio: `If you love what you do, you'll never work a day in your life. Flying has been my true passion for as long as I can remember. Both of my fathers were Professional Pilots, and I've always dreamed of being as great as they were one day. Ive learned that being a great pilot starts with having a great instructor and learning that safety is the most important thing. I want to be there to help guide my students to be the safest and best version of themselves as Pilots. Giddy Up 

Training Private, Instrument and Single Engine Commercial in the following training aircraft:
- Cessna 172

[Click here to schedule a lesson](https://jessebalasek.youcanbook.me/)`
    },
    {
        name: "Daniel Durrand - Flight Instructor",
        credentials: "CFI, CFII",
        photo: "Content/InstPics/cache/Daniel Durrand.jpg",
        bio: `Let's get you flying!  When I started flight training, I was a weekend warrior with an insurance day job, but what started as a fun and challenging hobby became an exciting passion and rewarding career.  Regardless of your goals, flying offers you the opportunity to tackle new challenges, embrace adventure, and (literally) see the world from a new perspective.  Whether you're looking to get in the plane just for fun, or to eventually fly professionally, I will help you become a safe and capable pilot.  I look forward to sharing the cockpit with you!

Training Private, Instrument and Single Engine Commercial in the following training aircraft:
- Cessna 172

[Click here to schedule a lesson](https://cfidurrand.youcanbook.me/)`
    },
    {
        name: "Mason Liu - Flight Instructor",
        credentials: "CFI, CFII",
        photo: "Content/InstPics/cache/Mason Liu1.jpg",
        bio: `Flying has always felt like an impossible dream to me. Yet, after earning my PhD in physics and pursuing a career in finance, I decided to start flight training. I discovered where my true passion lies. My academic background and professional experience allow me to connect with both younger learners and those with rich life experience. I would be thrilled to help you achieve your goals and become a safe, capable pilot. Let's take to the skies!

Training Private, Instrument and Single Engine Commercial in the following training aircraft:
- Cessna 172

[Click here to schedule a lesson](https://masonliu.youcanbook.me/)`
    }
];

function renderInstructors() {
    const container = document.getElementById('instructors-container');
    if (!container) return;

    container.innerHTML = '';

    instructors.forEach(inst => {
        const instDiv = document.createElement('div');
        instDiv.className = 'instructor mb-8 p-4 border border-gray-300 rounded-lg shadow-md flex flex-col md:flex-row items-center';

        const img = document.createElement('img');
        img.src = inst.photo;
        img.alt = `A picture of ${inst.name}`;
        img.className = 'w-48 h-auto rounded-md mr-6 mb-4 md:mb-0 object-cover';

        const infoDiv = document.createElement('div');
        infoDiv.className = 'flex-1';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'name font-bold text-lg block mb-1';
        nameSpan.textContent = inst.name;

        const titleSpan = document.createElement('span');
        titleSpan.className = 'title text-sm text-gray-600 block mb-3';
        titleSpan.textContent = inst.credentials;

        const bioP = document.createElement('p');
        bioP.className = 'bio whitespace-pre-line text-gray-800';
        bioP.innerHTML = inst.bio.replace(/\n/g, '<br>');

        infoDiv.appendChild(nameSpan);
        infoDiv.appendChild(titleSpan);
        infoDiv.appendChild(bioP);

        instDiv.appendChild(img);
        instDiv.appendChild(infoDiv);

        container.appendChild(instDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderInstructors);