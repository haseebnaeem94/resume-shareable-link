const form = document.getElementById('resume') as HTMLFormElement
const myresume = document.getElementById('myresume') as HTMLDivElement
const share = document.getElementById('shareable link') as HTMLDivElement
const mylink = document.getElementById('mylink') as HTMLAnchorElement
const downloadresume = document.getElementById('download') as HTMLButtonElement

form.addEventListener('submit' , (event:Event) => {
    event.preventDefault();

const myuser = (document.getElementById('username') as HTMLInputElement).value
const myname = (document.getElementById('name')as HTMLInputElement).value
const myemail = (document.getElementById('email')as HTMLInputElement).value
const mycontact = (document.getElementById('contact number')as HTMLInputElement).value
const myeducation = (document.getElementById('Education')as HTMLTextAreaElement).value
const mywork = (document.getElementById('work experience')as HTMLTextAreaElement).value
const skills = (document.getElementById('skills and expertise')as HTMLTextAreaElement).value

const myinfo = {
       myname,
       myemail,
       mycontact,
       myeducation,
       mywork,
       skills
};
localStorage.setItem(myuser, JSON.stringify(myinfo));

const generateResume = `
<h2><b>Editable Resume</b><h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable = "true"> ${myname}</span></p>
<p><b>Email:</b><span contenteditable = "true"> ${myemail}</span></p>
<p><b>Contact#</b><span contenteditable = "true"> ${mycontact}</span></p>

<h3>Academic Information</h3>
<p><b>Education:</b> <span contenteditable = "true">${myeducation}</span></p>

<h3>Work Experience:</h3>
<p><b>Work Experience:</b><span contenteditable = "true"> ${mywork}</span></p>

<h3>Skills and Expertise</h3>
<p><b>Skills and Expertise:<b/><span contenteditable = "true"> ${skills}</span></p>


`;
if(myresume) {
    myresume.innerHTML = generateResume
}else{
    console.log("please enter the required field")
}

const shareableURL = 
`${window.location.origin}?myuser=${encodeURIComponent(myuser)}`;


share.style.display = 'block';
mylink.href = shareableURL;
mylink.textContent = shareableURL;


});

downloadresume.addEventListener('click' , () => {
    window.print();
});

window.addEventListener('DOMContentLoaded', () => {
    const urlparams = new URLSearchParams(window.location.search);
    const username = urlparams.get('username');

    if(username) {
        const resumeInfo = localStorage.getItem(username);

        if(resumeInfo) {
            const myinfo = JSON.parse(resumeInfo);
            (document.getElementById('username') as HTMLInputElement). value = username;
            (document.getElementById('name') as HTMLInputElement). value = myinfo.myname;
            (document.getElementById('email') as HTMLInputElement). value = myinfo.myemail;
            (document.getElementById('contact number') as HTMLInputElement). value= myinfo.mycontact;
            (document.getElementById('Education') as HTMLTextAreaElement). value= myinfo.myeducation;
            (document.getElementById('work experience')as HTMLTextAreaElement). value= myinfo.mywork;
            (document.getElementById('skills and expertise')as HTMLTextAreaElement). value= myinfo.skills;
        }
    }
});
