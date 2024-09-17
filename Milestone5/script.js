var form = document.getElementById('resume');
var myresume = document.getElementById('myresume');
var share = document.getElementById('shareable link');
var mylink = document.getElementById('mylink');
var downloadresume = document.getElementById('download');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var myuser = document.getElementById('username').value;
    var myname = document.getElementById('name').value;
    var myemail = document.getElementById('email').value;
    var mycontact = document.getElementById('contact number').value;
    var myeducation = document.getElementById('Education').value;
    var mywork = document.getElementById('work experience').value;
    var skills = document.getElementById('skills and expertise').value;
    var myinfo = {
        myname: myname,
        myemail: myemail,
        mycontact: mycontact,
        myeducation: myeducation,
        mywork: mywork,
        skills: skills
    };
    localStorage.setItem(myuser, JSON.stringify(myinfo));
    var generateResume = "\n<h2><b>Editable Resume</b><h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable = \"true\"> ".concat(myname, "</span></p>\n<p><b>Email:</b><span contenteditable = \"true\"> ").concat(myemail, "</span></p>\n<p><b>Contact#</b><span contenteditable = \"true\"> ").concat(mycontact, "</span></p>\n\n<h3>Academic Information</h3>\n<p><b>Education:</b> <span contenteditable = \"true\">").concat(myeducation, "</span></p>\n\n<h3>Work Experience:</h3>\n<p><b>Work Experience:</b><span contenteditable = \"true\"> ").concat(mywork, "</span></p>\n\n<h3>Skills and Expertise</h3>\n<p><b>Skills and Expertise:<b/><span contenteditable = \"true\"> ").concat(skills, "</span></p>\n\n\n");
    if (myresume) {
        myresume.innerHTML = generateResume;
    }
    else {
        console.log("please enter the required field");
    }
    var shareableURL = "".concat(window.location.origin, "?myuser=").concat(encodeURIComponent(myuser));
    share.style.display = 'block';
    mylink.href = shareableURL;
    mylink.textContent = shareableURL;
});
downloadresume.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlparams = new URLSearchParams(window.location.search);
    var username = urlparams.get('username');
    if (username) {
        var resumeInfo = localStorage.getItem(username);
        if (resumeInfo) {
            var myinfo = JSON.parse(resumeInfo);
            document.getElementById('username').value = username;
            document.getElementById('name').value = myinfo.myname;
            document.getElementById('email').value = myinfo.myemail;
            document.getElementById('contact number').value = myinfo.mycontact;
            document.getElementById('Education').value = myinfo.myeducation;
            document.getElementById('work experience').value = myinfo.mywork;
            document.getElementById('skills and expertise').value = myinfo.skills;
        }
    }
});
