// Story auto-scroll
setInterval(() => {
    const container = document.getElementById('storyScroll');
    container.scrollBy({ left: 80, behavior: 'smooth' });
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
    }
}, 3000);

// Like button functionality
const likeBtns = document.querySelectorAll('.like-btn');
likeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('far');
        btn.classList.toggle('fas');
        btn.classList.toggle('text-danger');
    });
});

// Stories modal functionality
const stories = {
    you: ["https://truth.bahamut.com.tw/s01/202103/f86a9cd8e5ed7bc270fb97693d7a3b03.JPG", "https://truth.bahamut.com.tw/s01/202103/f86a9cd8e5ed7bc270fb97693d7a3b03.JPG"],
    story1: ["https://via.placeholder.com/400x600.png?text=Y0_0.na+1"],
    story2: ["https://via.placeholder.com/400x600.png?text=Ok0111223+1"],
    story3: ["https://via.placeholder.com/400x600.png?text=Au___00010920+1", "https://via.placeholder.com/400x600.png?text=Au___00010920+2"],
    story4: ["https://via.placeholder.com/400x600.png?text=Cpo10_0012+1", "https://via.placeholder.com/400x600.png?text=Cpo10_0012+2"],
    story5: ["https://via.placeholder.com/400x600.png?text=Ryan0101+1", "https://via.placeholder.com/400x600.png?text=Ryan0101+2"],
    story6: ["https://via.placeholder.com/400x600.png?text=Kingkong+1", "https://via.placeholder.com/400x600.png?text=Kingkong+2"],
    story7: ["https://via.placeholder.com/400x600.png?text=Jinkfl01___+1", "https://via.placeholder.com/400x600.png?text=Jinkfl01___+2"],
    story8: ["https://via.placeholder.com/400x600.png?text=Bbbb+1", "https://via.placeholder.com/400x600.png?text=Bbbb+2"],
    story9: ["https://via.placeholder.com/400x600.png?text=Ok0111223+1", "https://via.placeholder.com/400x600.png?text=Ok0111223+2"],
    story10: ["https://via.placeholder.com/400x600.png?text=Au___00010920+1", "https://via.placeholder.com/400x600.png?text=Au___00010920+2"],
    story11: ["https://via.placeholder.com/400x600.png?text=Cpo10_0012+1", "https://via.placeholder.com/400x600.png?text=Cpo10_0012+2"],
    story12: ["https://via.placeholder.com/400x600.png?text=Ryan0101+1", "https://via.placeholder.com/400x600.png?text=Ryan0101+2"],
    story13: ["https://via.placeholder.com/400x600.png?text=Kingkong+1", "https://via.placeholder.com/400x600.png?text=Kingkong+2"],
    story14: ["https://via.placeholder.com/400x600.png?text=Jinkfl01___+1", "https://via.placeholder.com/400x600.png?text=Jinkfl01___+2"]
};

const storyAvatars = document.querySelectorAll('.story-avatar');
const storyMedia = document.getElementById('storyMedia');
const progressContainer = document.getElementById('progressBars');
const storyModal = new bootstrap.Modal(document.getElementById('storyModal'));

storyAvatars.forEach(avatar => {
    avatar.addEventListener('click', () => {
        const user = avatar.getAttribute('data-user');
        if (stories[user]) {
            playStories(stories[user]);
        }
    });
});

function playStories(items) {
    let index = 0;
    progressContainer.innerHTML = '';
    items.forEach(() => {
        const bar = document.createElement('div');
        bar.className = 'progress-bar';
        const fill = document.createElement('div');
        fill.className = 'progress-bar-fill';
        bar.appendChild(fill);
        progressContainer.appendChild(bar);
    });
    storyModal.show();
    const fills = document.querySelectorAll('.progress-bar-fill');

    const showNext = () => {
        if (index >= items.length) {
            storyModal.hide();
            return;
        }
        storyMedia.src = items[index];
        fills[index].style.animation = 'fillBar 3s linear forwards';
        setTimeout(() => {
            index++;
            showNext();
        }, 3000);
    };
    showNext();
}