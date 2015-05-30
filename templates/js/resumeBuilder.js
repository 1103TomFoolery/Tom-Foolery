

/* 
var formattedName = HTMLheaderName.replace("%data%", "Thomas Allen")
var role = [" Web Developer", " Engineering Director", " Program Manager", " Agile Change Agent"]

$("#header").prepend(role[1])
$("#header").prepend(formattedName);
*/

var bio = {
	"name": "Thomas Allen  ",
	"role": "Agile Change Agent",
	"contacts" : {
		"mobile" : "(408) 829-5342",
		"email" : "tjallen1103@gmail.com",
		"github" : "tja01",
		"twitter" : "@tallen1103",
		"location" : "San Diego"
	},
	"agileSkills" : ["Organizational Change Management", "Process Definition & Implementation", "Coaching & Best Practices"],
	"webDevSkills" : ["HTML5,", "JavaScript,", "CSS,", "Responsive Design"],
	"directorPDSkills" : ["Organizational Leadership", "New Product Development", "Design Thinking", "Continuous Integration", "Entrepreneurial Marketing"],

	"bioPic" : "images/bioPic.jpg",
	"welcomeMessage" : "Welcome to my resume page!"
};


 var work = {
 	"jobs" : [
 	{ "company" : "Emotient, Inc.",
 	  "position" : "Senior Director - Engineering & Program Management",
 	  "location" : "San Diego, CA, USA",
 	  "tenure" : "August 2014 - present",
 	  "description" : "Founded product development group.  Implemented strategic and tactical level agile processes."
 	},
 	{ "company" : "Websense, Inc.",
 	  "position" : "Director - Engineering Program Management",
 	  "location" : "San Diego, CA, USA",
 	  "tenure" : "February 2013 - August 2014",
 	  "description" : "Successfully designed and led global adoption of SCRUM and agile practices."
 	},
 	{ "company" : "E*TRADE Securities, Inc.",
 	  "position" : "Senior Engineering Program Manager",
 	  "location" : "Menlo Park, CA, USA",
 	  "tenure": "July 2006 - Feburary 2013",
 	  "description" : "Successfully managed many complex strategic projects and programs. Member of 30-member strategic innovation task force."
 	},
 	{ "company" : "Charles Schwab, Inc.",
 	  "position" : "Engineering Program Manager",
 	  "location" : "San Francisco, CA, USA",
 	  "tenure" : "August 2005 - July 2006",
 	  "description" : "Consultant - successfully managed backend integration of newly acquired firms' IT infrastructure."
 	},
 /*	{
 		"company" : "Real Time Systems, Inc.",
 		"position" : "Vice President - Industrial Automation",
 		"location" : "Sunnyvale, CA, USA",
 		"tenure" : "2001 -2005",
 		"description" : "Start-up.  Led successful development and eventual sale of IP to Emerson Electric of a multi-loop, multi-variable control platform"
 	},
 	{
 		"company" : "Xoriant Corporation",
 		"position" : "Consultant",
 		"location" : "Santa Clara, CA, USA",
 		"tenure" : "2000 - 2001",
 		"description" : "IT consultant at i2 Technologies, Western Union, SubmitOrder.com and others."
 	},
 	{
 		"company" : "Univisions Communications, Inc.",
 		"position" : "Director Engineering",
 		"location" : "Syracuse, NY, USA",
 		"tenure" : "1998-2000",
 		"description" : "Designed and installed distance learning rooms in over 100 high schools and universities around the state."
 	},*/
 	{
 		"company" : "Independent Contractor",
 		"position" : "Control Systems Engineer",
 		"location" : "Kuching, Sarawak, Malaysia",
 		"tenure" : "1996 - 1998",
 		"description" : "Expatriate engineer living off his wits."
 	},
 	{
 		"company" : "Johnson Controls, Inc.",
 		"position" : "Project Engineer",
 		"location" : "Riyadh, Saudi Arabia",
 		"tenure" : "1987 - 1996",
 		"description" : "Developed and implemented SCADA system."
 	}
 /*	{
 		"company" : "Others",
 		"position" : "Progressive Engineering Career",
 		"location" : ["San Jose, CA, USA", "Sunnyvale, CA, USA", "Syracuse, NY, USA", "Riyadh, Saudi Arabia", "Jacksonville, FL, USA", "Jeddah, Saudi Arabia", "San Francisco, CA, USA"],
 		"tenure" : "1987 - 2005",
 		"description" : "Progressive career in software development at large companies and start ups. Significant international experience."
 	}*/
 
 	]
};

var education = {
	"schools" : [
		{ "name" : "Stanford University",
		  "location" : "Stanford, CA, USA",
		  "major" : "Management Science & Engineering",
		  "degree" : "Graduate Certificate",
		  "graduation" : "2015"
		},
		{ "name" : "San Jose State University",
		  "location" : "San Jose, CA, USA",
		  "major" : "Computer Engineering",
	      "degree" : "Master of Science",
	      "graduation" : "2005"
	  },
	  { "name" : "Syracuse University",
	    "location" : "Syracuse, NY, USA",
	    "major" : "Electrical Engineering",
	    "degree": "Bachelor of Science",
	    "graduation" : "1987"
	  }
	  ],
	  "onlineCourses" :[
	  	{
	  		"Name" : "How to use GitHub",
	  		"onlineSchool" : "Udacity",
	  		"dates" : "March 2015",
	  		"url" : "https://www.udacity.com/course/viewer#!/c-ud775/l-3105028581"
	  	},
	  	{
	  		"Name" : "Intro to HTML and CSS",
	  		"onlineSchool" : "Udacity",
	  		"dates" : "March 2015",
	  		"url" : "https://www.udacity.com/course/viewer#!/c-ud304/l-3063988721"
	  	},
	  	{
	  		"Name" : "Responsive Web Design Fundamentals",
	  		"onlineSchool" : "Udacity",
	  		"dates" : "April 2015",
	  		"url" : "https://www.udacity.com/course/viewer#!/c-ud893/l-3581758575"
	  	},
	  	{
	  		"Name" : "JavaScript Basics",
	  		"onlineSchool" : "Udacity",
	  		"dates" : "April 2015",
	  		"url" : "https://www.udacity.com/course/viewer#!/c-ud804/l-2239648539"
	  	}

	  ]
	  /*
	  "certifications" : [
	    { "certificate" : "Advanced Project Management",
		  "issuedBy" : "Stanford University - Continuing Education",
		  "url" : "http://scpd.stanford.edu/public/category/courseCategoryCertificateProfile.do?method=load&certificateId=1060516#searchResults",
		  "completed" : "May 2013"},

		{ "certificate" : "Certified Scrum Master (CSM)",
		  "issuedBy" : "Scrum Alliance",
		  "url" : "https://www.scrumalliance.org/certifications/practitioners/certified-scrummaster-csm",
		  "completed": "October 2009"},

		{ "certificate" : "Certified Scrum Product Owner (CSPO)",
		  "issuedBy" : "Scrum Alliance",
		  "url" : "https://www.scrumalliance.org/certifications/practitioners/cspo-certification",
		  "completed" : "May 2013"},

		 { "certificate" : "Certified Scrum Professional (CSP)",
		   "issuedBy" : "Scrum Alliance",
		   "url" : "https://www.scrumalliance.org/certifications/practitioners/csp-certification",
		   "completed" : "May 2014"},

		 { "certificate" : "Project Management Professional (PMP)",
		   "issuedBY" : "Project Management Institute (PMI)",
		   "url" : "http:www.pmi.org",
		   "completed" : "December 2002"}
	  ]*/
};



var projects = {
	
	projArray : [{
		"name" : "This resume",
		"dates" : "April 10, 2015 - April 20, 2015",
		"description" : "Interactive resume using jquery and bootstrap.",
		"img" : "images/fry.jpg"
	},
	{
		"name" : "Udacity Orange Mug",
		"dates" : "March 25, 2015 - April 2, 2015",
		"description" : "Given a pdf mock up recreate the design to at least 92% accuracy.",
		"img" : "images/fry.jpg"
	},
	{
		"name" : "Portfolio",
		"dates" : "April 3, 2015 - April 9, 2015",
		"description" : "Responsive portfolio demonstration page.",
		"img" : "images/197x148.gif"
	}]
};


$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
if(bio.role === "Web Developer") {
	for(skill in bio.webDevSkills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.webDevSkills[skill]));
	};

};
if(bio.role === "Agile Change Agent") {
	for(skill in bio.agileSkills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.agileSkills[skill]));
	};
};
function displayWork() {
	for(j in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var job = HTMLworkEmployer.replace("%data%", work.jobs[j].company);
		job = job + "       " + work.jobs[j].position;
		$(".work-entry:last").append(job);
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[j].location));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[j].tenure));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[j].description));
	};
}
displayWork();

function displayEd() {
	for(j in education.schools){
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[j].name));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[j].location));			
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[j].graduation));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[j].major));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[j].degree));
	};

		$("#education").append(HTMLonlineClasses);
	for(ol in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[ol].Name));
		$(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[ol].onlineSchool));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[ol].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[ol].url));
	};
}
displayEd();

$("#")
$(document).click(function(loc) {
	var x=loc.pageX;
	var y=loc.pageY;
    //console.log("x-coordinate = ", x, " y-coordinate = ", y);
	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " +name[1];
}

$("#main").append(internationalizeButton);

projects.display = function() {
	for(p in projects.projArray) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projArray[p].name));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projArray[p].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projArray[p].description));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projArray[p].img));
	}
}
projects.display();

// Add map of places I've lived and worked
$("#mapDiv").append(googleMap);
initializeMap();
