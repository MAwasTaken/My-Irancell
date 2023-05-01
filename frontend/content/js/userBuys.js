const userBuyPacksTable = document.querySelector(".recommend-packets-table");
const userBuyPacksTableBody = userBuyPacksTable.querySelector("tbody");

window.addEventListener("load", () => {
	fetch(`${mainUrlApi}/user-buy`, {
		headers: {
			authorization: userToken,
		},
	})
		.then((res) => res.json())
		.then((packs) => {
			packs.forEach((pack) =>
				userBuyPacksTableBody.insertAdjacentHTML(
					"beforeend",
					`
          <tr>
            <td>${pack.buy_date}</td>
            <td>${pack.max_date}</td>
            <td>${pack.title}</td>
            <td>${pack.off}%</td>
            <td>${pack.price}</td>
          </tr>
        `
				)
			);
		});
});
