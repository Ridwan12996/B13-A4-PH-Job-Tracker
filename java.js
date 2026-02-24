var jobData = [
  { id: 1, firm: "Mobile First Corp",    post: "React Native Developer",        city: "Remote",           kind: "Full-time", wage: "$130,000 – $175,000", detail: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",        tag: "pending" },
  { id: 2, firm: "WebFlow Agency",       post: "Web Designer & Developer",      city: "Los Angeles, CA",  kind: "Part-time", wage: "$80,000 – $120,000",  detail: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",  tag: "pending" },
  { id: 3, firm: "DataViz Solutions",    post: "Data Visualization Specialist", city: "Boston, MA",       kind: "Full-time", wage: "$125,000 – $165,000", detail: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",        tag: "pending" },
  { id: 4, firm: "CloudFirst Inc",       post: "Backend Developer",             city: "Seattle, WA",      kind: "Full-time", wage: "$140,000 – $190,000", detail: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices.",                        tag: "pending" },
  { id: 5, firm: "Innovation Labs",      post: "UI/UX Engineer",                city: "Austin, TX",       kind: "Full-time", wage: "$110,000 – $150,000", detail: "Create beautiful and functional user interfaces for our suite of products. Strong design skills required.",                    tag: "pending" },
  { id: 6, firm: "MegaCorp Solutions",   post: "JavaScript Developer",          city: "New York, NY",     kind: "Full-time", wage: "$130,000 – $175,000", detail: "Build enterprise applications with JavaScript and modern frameworks. Competitive compensation and health insurance.",           tag: "pending" },
  { id: 7, firm: "StartupXYZ",          post: "Full Stack Engineer",           city: "Remote",           kind: "Full-time", wage: "$120,000 – $160,000", detail: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required.",                    tag: "pending" },
  { id: 8, firm: "TechCorp Industries",  post: "Senior Frontend Developer",     city: "San Francisco, CA",kind: "Full-time", wage: "$130,000 – $175,000", detail: "Build scalable web applications using React and TypeScript. Work with a talented team on cutting-edge projects.",              tag: "pending" }
];

var currentFilter = "all";

var areaEl         = document.getElementById("cards-area");
var totalEl        = document.getElementById("total-count");
var interviewEl    = document.getElementById("interview-count");
var rejectedEl     = document.getElementById("rejected-count");
var listingCountEl = document.getElementById("listing-count");
var tabBtns        = document.querySelectorAll(".tab-btn");
