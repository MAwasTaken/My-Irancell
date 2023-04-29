const recommendPacketsTable = document.querySelector(".recommend-packets-table");
const recommendPacketsTableBody = recommendPacketsTable.querySelector("tbody");

let mainApiUrl = "http://localhost:3000/api";

window.addEventListener("load", () => {
	let userToken = localStorage.getItem("user-token");

	fetch(`${mainApiUrl}/recommend-packs`, {
		headers: {
			authorization: userToken,
		},
	})
		.then((res) => res.json())
		.then((packets) => {
			packets.forEach((pack) => {
				recommendPacketsTableBody.insertAdjacentHTML(
					"beforeend",
					`
          <tr>
            <td>${pack.max_date}</td>
            <td>${pack.title}</td>
            <td>${pack.off}%</td>
            <td>${pack.price}</td>
            <td>
              <button class="buy-packet-btn lalezar-font">خرید</button>
            </td>
          </tr>
        `
				);
			});
		});
});
