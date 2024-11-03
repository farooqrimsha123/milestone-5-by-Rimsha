var _a;
// listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var usernameElement = document.getElementById('userName');
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Check if all form elements are present
    if (usernameElement && profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //  picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        ////create resume output
        var resumeOutput = "\n<h2>Resume</h2>\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n<p><strong>Name:</strong>").concat(name_1, "</p>\n<p><strong>Email:</strong>").concat(email, "</p>\n<p><strong>Phone Number:</strong>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset-utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024 Resume';
        // Display the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error('one or more output elements are missing');
    }
});
// function makeEditable(){
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element =>{
//         element.addEventListener('click', function(){
//             const currentElement = element as HTMLElement;
//             const currentvalue = currentElement.textContent ||"" ;
//             // replace content
//             if(currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
//                 const input = document.createElement('input')
//                 input.type = 'text'
//                 input.value = currentvalue
//                 input.classList.add('editing.input')
//                 input.addEventListener('blur' , function(){
//                     currentElement.textContent = input.value;
//                     currentElement.style.display = 'inline'
//                     input.remove()
//                 })
//                 currentElement.style.display = 'none'
//                 currentElement.parentNode?.insertBefore(input,currentElement)
//                 input.focus()
//             }
//         })
//     })
// }
