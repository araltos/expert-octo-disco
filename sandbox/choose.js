import choices from "./choices.mjs";


console.log(choices);

function storyTemplate(story){
    return `<h2>${story.title}</h2>
    `;
    
}
function stepTemplate(step){
    return `<section class="story">
            <p>${step.text}</p>
            <button id="${step.choices[0].go_to}">${step.choices[0]}</button>
            <button id="c2">Choice 2</button>
            <button id="c3">Choice 3</button>
        </section>`;
}

function setupStory(story) {
    const mainEl = document.querySelector("main");
    mainEl.innerHTML = storyTemplate(story);
    mainEl.innerHTML = stepTemplate(story.start)
}

setupStory(choices);