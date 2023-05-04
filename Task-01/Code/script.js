const members = [
    {
        name: "S.Yougesh Kumar",
        title: "ML Developer",
        des: "I am a Machine Learning Developer...",
        image: "./Yogi.jpg"
    },
    {
        name: "B.Vijaya Vardhana",
        title: "Web Developer",
        des: "I am a Web Developer...",
        image: "./V.jpeg"
    },
    {
        name: "K.Anand Dileep",
        title: "Blockchain Developer",
        des: "I am a Blockchain Developer...",
        image: "./file2.jpg"
    },
    {
        name: "P.Gautham Prasad",
        title: "AI Developer",
        des: "I am a AI Developer...",
        image: "./file.jpg"
    }
];

let currentIndex = 0;

// Update the card with the current member's details
function updateCard() {
    const currentMember = members[currentIndex];
    let nameEl = currentMember.name;
    let titleEl = currentMember.title;
    let desEl = currentMember.des;
    const img = currentMember.image;
    document.getElementById("na").innerHTML = nameEl;
    document.getElementById("ti").innerHTML = titleEl;
    document.getElementById("de").innerHTML = desEl;
    document.getElementById("avatar-image").src=img;
}

// Update the current index and the card when the "next" button is clicked
function prev()
{
    currentIndex = (currentIndex - 1 + members.length) % members.length;
    updateCard();
}
function next()
{
    currentIndex = (currentIndex + 1) % members.length;
    updateCard();
}
