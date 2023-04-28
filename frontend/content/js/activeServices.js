const servicesTitle = $.querySelector(".service-title");

window.addEventListener("load", () => {
	fetch(`${mainUrlApi}/services/1`)
		.then((res) => res.json())
		.then((services) => {
      console.log(services)
      services.forEach(service => {
        servicesTitle.insertAdjacentHTML('afterend', `
          <div class="active-service-box flex align-items-center vazir-fb">
            <span class="active-service-icon flex align-items-center justify-content-center">
              <img class='active-service-icon' src='content${service.icon}'></img>
            </span>
            <div class="active-service-box-desc">
              <h4>${service.title}</h4>
              <h6>${service.max_date}</h6>
            </div>
          </div>
        `)
      })
    });
});
