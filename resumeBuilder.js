var myApp = angular.module('myApp',[]);



 //$("#main").append("Simi Tresa Antony");
 var name       = "Simi Tresa Antony";
 var role       = "Web developer";
 var cell       = "4084318555";
 var contacts   ={
    "cell"      : "4084318555",
    "email"     : "simi.tresa.antony@gmail.com",
    "github"    : " https://github.com/simita84",
    "location"  : "Sunnyvale,CA",
    "linkedIn"  : "https://www.linkedin.com/pub/simi-t-antony/55/75a/45a",
    "twitter"   :"https://twitter.com/tresa_aug",
    "website"   :"myonlineresume.s3-website-us-west-1.amazonaws.com"
 }

  var skills ={
    "Front End technologies/frameworks"         : "HTML, CSS, JavaScript, JQuery, JQuery  UI, Twitter Bootstrap, Angular JS",
    "Programming Languages  "                   : "Java, Ruby, PHP, C",
    "MVC frameworks used"                       : "Ruby On Rails, PHP CodeIgniter, YII",
    "SCM tools"                                 : "Git/Github , SVN",
    "Cloud Services used"                       : "Heroku, AWS S3, Salesforce , Google Drive",
    "Testing tools"                             : "Selenium Webdriver, JUnit",
    "OS"                                        : "Mac OSX , Win XP, Win 8"
  } 
 
  

 var education = {
    "schools": [
        {
            "Institution"           : "California State University,Fullerton USA",
            "Degree"                : "Masters",
            "Major"                 : "Computer Software Engineering",
            "Year"                  :"August 2012 to May 2014",
            "GPA"                   :"3.8", 
            "Course_Highlights "    :"Research, Case studies and projects to master Scrum/XP engineering practices, MVC frameworks (YII), Cloud computing, Agile testing/metrics. Requirement analysis, design  ,software maintenance ,measurement ,professional ethics , Software Engineering Standards & models",
        },
        {
            "Institution"           : "Mahathma Gandhi University,India",
            "Degree"                : "Bachelors",
            "Major"                 : "Electronics Engineering",
            "Year"                  :" June 2002 to May 2006",
            "GPA"                   :"3.99", 
            "Course_Highlights "    :"C/C++, Java"
        } 
    ]
}
 
var work = {
    "experience" :[
    {
        "Employer"   :"VayuGroup LLC",
        "Role"       :"Software Developer/Admin",
        "Technology" :"Salesforce Org,  Apex/VF Coding , AWS S3,/EC2 ",
        "Dates"      :"June 2015 to August 2015"
    },
    {
        "Employer"   :"Coding Dojo, San Jose ",
        "Role"       :"Developer In training/Resident",
        "Technology" :"PHP/Code Igniter/LAMP stack, Javascript, JQuery, JQuery UI, Twitter Bootstrap, Angular JS, Node  JS/MEAN stack,  Git/Github ,HTML, CSS",
        "Dates"      :"January 2015 to May 2015"
    },
    {
        "Employer"    :"Sustainable Silicon Valley, Santa Clara    ",
        "Role"        :"Web developer",
        "Technology"  :"PHP/Code Igniter, MySql/LAMP stack, Javascript, HTML, CSS, Twitter Bootstrap, ,  Git/Github",
        "Dates"       :" October 2015 to May 2015"
    },
    {
        "Employer"    :"UST Global – Infopark, India ",
        "Role"        :"Web developer/tester",
        "Technology"  :"Java/J2EE, HTML, CSS, Selenium Webdriver, Oracle/MySql, SVN",
        "Dates"       :"September 2006 to December 2008"
    }
  ]
}
  
var projects = {
        "projects" :
            [
                {
                    "name"   :"WeatherApp using pure JavaScript",
                    "url"    :"www.weather-app.com.s3-website-us-west-1.amazonaws.com",
                    "github" :"https://github.com/simita84/WeatherApp"
                } ,{
                    "name"   :"A Dynamic bar chart based on D3.JS",
                    "url"    :"www.dynamic-bar-chart.com.s3-website-us-west-1.amazonaws.com",
                    "github" :"https://github.com/simita84/DynamicBarChart"

                },{
                    "name"   :"A simple quiz App using pure JS",
                    "url"    :"js-sample-quiz.s3-website-us-west-1.amazonaws.com/",
                    "github" :""
                },
                {
                    "name"   :"An online music store with HTML5 video and audio",
                    "url"    :"music-dandelion.s3-website-us-west-1.amazonaws.com/",
                    "github" :""
                   
                },{
                     "name"   :"Reaction Tester : A pure JS game to test reaction time",
                     "url"    :"reaction-tester.s3-website-us-west-1.amazonaws.com/",
                     "github" :""
                },{
                    "name"     :"Ruby on Rails based Content Management system for a social community" ,
                    "url"      :"https://murmuring-garden-1315.herokuapp.com/",
                    "github"   :"https://github.com/simita84/CMS-with-Rails-"
                },{
                    "name"     :"PokesHistory,PHP Codeigniter App to count number of pokes",
                    "github"   :"https://github.com/simita84/PokesHistory" 
                },
                {
                    "name"     :"FriendsApp,PHP Codeigniter App to add/remove friends to friendslist",
                    "github"   :"https://github.com/simita84/FriendsApp" 
                },{
                    "name"    :"My online resume built using Javascript/JQuery/Angular JS",
                    "url"     :"http://myonlineresume.s3-website-us-west-1.amazonaws.com/"
                }

            ]
}
if($("#projects").text === null){
   $("#projects").hide(); 
}
     
myApp.controller("mainController",['$scope',function($scope){
  
 $scope.name = name;
 $scope.role = role;
 $scope.contacts   = contacts;
 $scope.education = education;
 $scope.work = work;
 $scope.projects = projects;

 $scope.skills   = skills;

}]); 
  
 

