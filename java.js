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
function stageChipClass(tag) {
  if (tag === "interview") return "stage-interview";
  if (tag === "rejected")  return "stage-rejected";
  return "stage-pending";
}

function stageLabel(tag) {
  if (tag === "interview") return "Interview";
  if (tag === "rejected")  return "Rejected";
  return "Not Applied";
}
empty state SVG (document icon)
function emptyHTML() {
  return `
    <div class="empty-box">
      <svg class="empty-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="4" width="40" height="52" rx="4" fill="#93c5fd"/>
        <rect x="8" y="4" width="40" height="52" rx="4" fill="#bfdbfe" fill-opacity="0.6"/>
        <path d="M16 20h24M16 28h24M16 36h16" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
        <rect x="36" y="38" width="20" height="20" rx="10" fill="#3b5bdb"/>
        <path d="M42 48h8M46 44v8" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
      <p class="empty-title">No positions here</p>
      <p class="empty-sub">Nothing to show for this filter yet.</p>
    </div>
  `;
}
function makeCard(job) {
  var div = document.createElement("div");
  div.className = "job-card";
  div.dataset.jobId = job.id;

  div.innerHTML = `
    <div class="card-body">
      <div class="card-company">${job.firm}</div>
      <div class="card-role">${job.post}</div>
      <div class="card-meta">
        <span>${job.city}</span>
        <span>·</span>
        <span>${job.kind}</span>
        <span>·</span>
        <span>${job.wage}</span>
      </div>
      <span class="card-stage ${stageChipClass(job.tag)}">${stageLabel(job.tag)}</span>
      <p class="card-about">${job.detail}</p>
      <div class="card-actions">
        <button class="action-btn interview-btn ${job.tag === 'interview' ? 'picked' : ''}" onclick="setTag(${job.id}, 'interview')">Interview</button>
        <button class="action-btn reject-btn   ${job.tag === 'rejected'  ? 'picked' : ''}" onclick="setTag(${job.id}, 'rejected')">Rejected</button>
      </div>
    </div>
    <div class="card-side">
      <button class="remove-btn" title="Remove" onclick="dropJob(${job.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
      </button>
    </div>
  `;
  return div;
}