function fetchAndUpdateJobs() {
    fetch('data.json')
      .then(response => response.json())
      .then(jobs => {
        const jobListings = document.getElementById('body');
        jobListings.innerHTML = '';
  
        jobs.forEach(job => {
          const jobElement = document.createElement('div');
          jobElement.classList.add('job');

          let languageSpans = '';
          if(job.languages) {
            job.languages.forEach(language => {   
                languageSpans += `<span>${language}</span>`

            })
          }

          let newOrFeatured = ''
          if(job.new) {
            newOrFeatured = `<span>New</span>`
          }
          if(job.featured) {
            newOrFeatured = `<span>New</span>`
          }
          if(job.new && job.featured) {
            newOrFeatured = `<span>New</span><span>Featured</span>`
          }
          else {
            newOrFeatured = ''
          }
  
          const jobContent = `
          
          <div class="left">
              <div><img src="${job.logo}" alt="${job.conpany} logo"></div>
              <div>
                  <p>${job.company} ${newOrFeatured}</p>
                  <h3>${job.position}</h3>
                  <span><span>${job.postedAt}</span> . <span>${job.contract}</span> . <span>${job.location}</span></span>
              </div>
          </div>
          <div class="right">
           <span>${job.role}</span> <span>${job.level}</span> ${languageSpans}
          </div>
          `;
  
          jobElement.innerHTML = jobContent;
          jobListings.appendChild(jobElement);
        });
      })
      .catch(error => console.error('Error fetching jobs:', error));
  }
  
  document.addEventListener('DOMContentLoaded', fetchAndUpdateJobs);
  